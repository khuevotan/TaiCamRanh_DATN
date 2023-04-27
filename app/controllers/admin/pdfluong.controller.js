const fs = require('fs');
const ejs = require('ejs');
const htmlPDF = require('puppeteer-html-pdf');
const readFile = require('util').promisify(fs.readFile);
const moment = require('moment');
const NhanVien = require('../../models/nhanvien.model');
const Nhom = require('../../models/nhom.model');

exports.print = (req, res) => {

    res.locals.status = req.query.status;

    var nhanvien;
    var nhom;
    var dtangayxuat = new Date();

    NhanVien.findByMaNV(req.params.manv, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.redirect('/404');
            } else {
                res.redirect('/500');
            }
        } else {

            Nhom.findByNhom(data.manhom, (err, datanhom) => {
                if (err)
                    res.redirect('/500')
                else {
                    const pdfData = {
                        nhanvien: data,
                        nhom: datanhom.tennhom,

                        ngayxuat: moment(dtangayxuat).format('DD-MM-YYYY'),
                        baseUrl: `${req.protocol}://${req.get('host')}` // http://localhost:3000
                    }

                    console.log(pdfData);

                    const options = {
                        format: 'A4'
                    }

                    readFile('app/views/layout/admin/nhanvien/inluong.ejs', 'utf8')
                        .then((html) => {
                            const template = ejs.compile(html);
                            const content = template(pdfData);

                            return htmlPDF.create(content, options);
                        })
                        .then((buffer) => {
                            res.attachment('luong.pdf')
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