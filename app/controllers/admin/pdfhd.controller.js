const fs = require('fs');
const ejs = require('ejs');
const htmlPDF = require('puppeteer-html-pdf');
const readFile = require('util').promisify(fs.readFile);
const HoaDon = require("../../models/HoaDon.model");
const SanPham = require("../../models/SanPham.model");
const CTHoaDon = require("../../models/cthoadon.model");
const PhiShip = require("../../models/PhiShip.model");

const moment = require('moment');

exports.print = (req, res) => {

    res.locals.status = req.query.status;
    

    var datahoadon;
    var dtasanpham;
  

    HoaDon.findBymahd(req.params.mahd, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {


            PhiShip.findBymaps(data.maps, (err, phiship) => {
                if (err)
                    res.redirect('/500')
                else {
                    CTHoaDon.findBymahd(req.params.mahd, (err, datacthd) => {
                        if (err)
                            res.redirect('/500')
                        else {
                            const tensp = req.query.tensp;
                            SanPham.getAll( tensp, (err, sanpham) => {
                                if (err)
                                    res.redirect('/500')
                                else {
                           
                                    datahoadon = data;
                                    dtasanpham = sanpham;
            
                                    dtangaydat = moment(data.created_at).format('DD-MM-YYYY');

                                
                                    const pdfData = {
                                        datahoadon,
                                        datacthd: datacthd,
                                        phiship: phiship,
                                        dtangaydat: dtangaydat,
                                      
                                        dtasanpham,
                             
                                        baseUrl: `${req.protocol}://${req.get('host')}` // http://localhost:3000
                                    }
                                
                                
                                    const options = {
                                        format: 'A4'
                                    }
                                
                                    readFile('app/views/layout/admin/hoadon/invoicehd.ejs', 'utf8')
                                        .then((html) => {
                                            const template = ejs.compile(html);
                                            const content = template(pdfData);
                                
                                            return htmlPDF.create(content, options);
                                        })
                                        .then((buffer) => {
                                            res.attachment('hoadondathang.pdf')
                                            res.end(buffer);
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                            res.send('Something went wrong.');
                                        });
        
                                }
                            });
                        }
                    });
                }
            });

        
        }
    });
}