import pdfMake from 'pdfmake'
import vfsFonts from 'pdfmake/build/vfs_fonts'

export const generatePdfInvoice = ({sender, receiver, header, transactions, id, payement}) => {
    const {vfs} = vfsFonts.pdfMake
    pdfMake.vfs = vfs

    pdfMake.createPdf({
            content: [
                { text: 'E Morpurgo', fontSize: 15, alignment: 'left' },
                { text: '098765423', fontSize: 15, alignment: 'left' },
                { text: 'eumorpurgo@gmail.com', fontSize: 15, alignment: 'left' },
                { text: '2654/A Ponte dei scudi', fontSize: 15, alignment: 'left' },
                { text: '30122 Venezia', fontSize: 15, alignment: 'left' },

                { text: 'Florent NOEL', fontSize: 15, alignment: 'right' },
                { text: '098765423', fontSize: 15, alignment: 'right' },
                { text: 'eumorpurgo@gmail.com', fontSize: 15, alignment: 'right' },
                { text: '2654/A Ponte dei scudi', fontSize: 15, alignment: 'right' },
                { text: '30122 Venezia', fontSize: 15, alignment: 'right' },

                { text: 'Invoice number 1 - 11/08/1988', fontSize: 15},

                {
                    layout: 'lightHorizontalLines', // optional
                    table: {
                        // headers are automatically repeated if the table spans over multiple pages
                        // you can declare how many rows should be treated as headers
                        headerRows: 1,
                        widths: [ '*', '*'],

                        body: [
                            [ 'Transactions', { text: 'Price', alignment: 'right' }],
                            [ 'Corso di design', { text: '786', alignment: 'right' }],
                            [ 'Corso di design', { text: '786', alignment: 'right' }],
                            [ { text: 'Total ', bold: true}, { text: '1487', alignment: 'right' }],
                            [ { text: 'Total Taxes', bold: true }, { text: '876', alignment: 'right' }],
                            [ { text: 'To Pay', bold: true }, { text: '690', alignment: 'right' }]
                        ]
                    }
                },

                { text: 'Invoice ID 098765432', fontSize: 15},

                { text: 'Caisse d Epargne', fontSize: 15, alignment: 'left' },
                { text: '098765423', fontSize: 15, alignment: 'left' },
                { text: 'eumorpurgo@gmail.com', fontSize: 15, alignment: 'left' },
                { text: '2654/A Ponte dei scudi', fontSize: 15, alignment: 'left' },
                { text: '30122 Venezia', fontSize: 15, alignment: 'left' },
            ]
        }
    )
    // .download()
    .open({}, window);
}