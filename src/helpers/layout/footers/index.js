const footerTemplate_Retail_Mortgage = `<p style="position: relative; left: 0; bottom: 0; width: 100%; padding: 10px; text-align: center; margin-top: 30px; padding-top: 30px;font-size: 12px; white-space: normal;">
    © ${new Date().getFullYear()} Absa Group Limited. All rights reserved. Absa Bank (Mauritius) Limited (registered number C10068913).
    <br />
    Absa Bank ( Mauritius) Limited is regulated by the Bank of Mauritius and the Financial Services Commission
</p>`;

const footerTemplate_MAU_disclosure = `
<table style="width: 100%; padding: 0 30px; overflow: hidden;">
        <tr>
            <td colspan="2">
                <p style="font-size: 6pt; margin-top: 20px;">Absa Bank (Mauritius) Limited is committed to keeping your information private. We only process and share your personal data to provide you with the products and services that you applied for. You can read our privacy policy by visiting our website: <a href="absabank.mu/en/privacy-policy/" style="font-weight: 800; color: rgb(31, 175, 175);">absabank.mu/en/privacy-policy/</a></p>
            </td>
        </tr>
    </table>`;
 
const footerTemplate_NIC_disclosure = `
     <small style="position: relative; left: 0; bottom: 0; width: 100%; padding: 10px; text-align: center; margin-top: 30px; padding-top: 30px;font-size: 8px; white-space: normal;">
          <em><b>Disclaimer</b></em>: The details in this document are only for information purposes. Such details may vary from time to time and you are required to independently check the accuracy of these details by
          contacting the insurance companies. Neither Absa, nor any officer or employee thereof, accepts any liability whatsoever for any direct or consequential losses arising from any use of the above
          information
     </small>
   `;
 
const footerTemplate_NIC_general = `<table style="width: 100%;">
    <tfoot>
      <tr style="padding-top: 50px">
        <td colspan="3" style="text-align: center;">
          <p style="padding-top: 50px; font-size: 6pt; line-height: 12px;">National Insurance Co, LTD, NIC Centre, 217 Royal Road, Curepipe, Republic of Mauritius <br />
          T:(230)6023000 - F:(230)6703384 - Email: customerservice@nicl.mu - Web: www.nicl.mu <br />
          Business Registration Number: C15129641
          </p>
        </td>
      </tr>
    </tfoot>
  </table>`;

const footerTemplate_final_sanction_letter = `
<table style="width: 100%;">
    <tfoot>
      <tr style="padding-top: 50px;">
        <td colspan="3" style="text-align: center;">
          <p style="padding-top: 50px; font-size: 6pt; line-height: 12px; margin-top: 20px;">

            Absa Bank (Mauritius) Limited (registered number C10068913). Absa Bank (Mauritius) Limited is regulated by
            the Bank of Mauritius and the Financial Services Commission.
            <br />
            MUR – SLD – Digital (Retail) – Digi Loan (Unsecured) – V.10.23
          </p>
        </td>
      </tr>
    </tfoot>
</table>`;

module.exports = {
    footerTemplate_Retail_Mortgage,

    footerTemplate_MAU_disclosure,
    
    footerTemplate_NIC_disclosure,
    footerTemplate_NIC_general,
    
    footerTemplate_final_sanction_letter,
}

    // footerTemplate_NIC_insurance_letter,
    // footerTemplate_MUA_general,
    // footerTemplate_MAU_insurance_letter,