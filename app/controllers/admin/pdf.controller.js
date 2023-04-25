const fs = require('fs');
const ejs = require('ejs');
const htmlPDF = require('puppeteer-html-pdf');
const readFile = require('util').promisify(fs.readFile);
const HoaDonRX = require("../../models/HoaDonRX.model");
const LoaiXe = require("../../models/LoaiXe.model");
const Gio = require("../../models/Gio.model");
const moment = require('moment');

exports.print = (req, res) => {

    res.locals.status = req.query.status;

    var dtahoadonrx;
    var dtaloaixe;
    var dtagio;

    HoaDonRX.findBymahdrx(req.params.mahdrx, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            LoaiXe.findBymalx(data.malx, (err, loaixe) => {
                if (err)
                    res.redirect('/500')
                else {

                    Gio.findBymagio(data.magio, (err, gio) => {
                        if (err)
                            res.redirect('/500')
                        else {
                   
                            dtahoadonrx = data;
                            dtaloaixe = loaixe;
                            dtagio = gio;

                            dtangaydat = moment(data.ngaydat).format('DD-MM-YYYY');
                            dtangayrua =moment(data.ngayrua).format('DD-MM-YYYY');

                            const pdfData = {
                                dtahoadonrx,

                                dtangaydat: dtangaydat,
                                dtangayrua: dtangayrua,
                                dtaloaixe,
                                dtagio,
                                baseUrl: `${req.protocol}://${req.get('host')}` // http://localhost:3000
                            }
                        
                            console.log(pdfData);
                        
                            const options = {
                                format: 'A4'
                            }
                        
                            readFile('app/views/layout/admin/hoadonrx/invoice.ejs', 'utf8')
                                .then((html) => {
                                    const template = ejs.compile(html);
                                    const content = template(pdfData);
                        
                                    return htmlPDF.create(content, options);
                                })
                                .then((buffer) => {
                                    res.attachment('invoice.pdf')
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

   

    // try {
    //     const html = await readFile('app/views/layout/admin/hoadonrx/invoice.ejs', 'utf8');
    //     const template = ejs.compile(html);
    //     const content = template(pdfData); 

    //     const buffer = await htmlPDF.create(content, options);
    //     res.attachment('invoice.pdf')
    //     res.end(buffer);

    // } catch (error) {
    //     console.log(error);
    //     res.send('Something went wrong.')
    // }
}