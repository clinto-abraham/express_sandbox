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
 
const footerTemplate_NIC_disclosure = `<table style="width: 100%; padding: 0 30px;">
<tr>
    <td>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACplBMVEUAAAD/gIC/gIDVgIDfgJ/mgJnVgJXbgJLfgI/jgI7ZgJncgJfeepDgeo/Ze47ce43ee5Tnn6/gfJPhnq3bfJLdfJHdeY3feYzbeYzcepHeepDfeo/beI3ceIzdeIzbdo3cd43dd4zbdYrcdonddo3edozbdYrcdYrddYrddIjbdIvcc4ndc4nmmqnbc4nkmajacYjbcojbcIbacYbbcIfbcIfZb4bab4baboTbb4TZboXbbYTZbIPZbYPabITabITYa4PZa4Laa4LklKXZaoPZaoHZaYDYaIDYZ4DYZ4DYZ3/ZZn7XZn7YZX7XZX3YZHvXY3zXYnvjj6LYY3vhj6HYYnvWYXrXYXnXYXvXYXrWYHnWX3jXX3jWX3jjjaDWX3fijJ/WXnjWXnfVXXfVXHbWXXbVXHbii57VW3Xiip3VWnTVWXPVWXTVWHPUWXPUV3HUVnHUVnHUVXDTVXDTVW/UVG7UVG/TU2/SUWzSUGvTUGzTUGvST2vRTmrSTGjRS2fRS2fRS2fQSWbRSWXRSGXQSGTQR2TQSGTQRmPPRmPPRGHPRmPQRGHPRGLPQmDPQ2HPQmDOQV7OQl/OQF/OP13PQF7OP13OPVvOPlzNPFvNPVzMOlnOO1rNOVjNOljMN1fMNlXMN1bLNVTLNlXMM1TMNVXLM1PLMVHLMlLKMFDKMVHKLk/KL1DJLU7JLk/KLE3KLU7JKkvJK0zIJ0rIKErHJUfHJkjIJ0nGI0bHJEbHJUfHIUTHI0bGHkHGH0LGIUPFGj7FGz/FHEDFHUHEFzzEGD3EGT7EGj7DEjfEFDnEFTnEFjrEFzvBCzHBDDLCDTPCDjTCDzTCEDXDETbDEje+ACi+ASm/Aiq/Ayu/BCu/BSzABi3ABy7ACC/ACTDBCjDBCzH///875C2nAAAA1XRSTlMAAgQGCAoMDhASFBYXGRsdHyAhIiMlJigqLC4wMTM1ODo8P0FDRUZISktNUFJTVFVaXF1hYmRlZ2hqa3Bxc3R2d3p8fH+AgYSIiouMjpCTl5iZmZubnJ2eoKGio6SmpqenqKmqq62vsLGxsrS1tri8vb6/wMHCw8THyMnKy8/Q0tPU1dbX2NnZ2tvc3N3e39/g4eHi4+Pk5eXn5+jo6urr7Ozt7e7u7/Dw8fHy8vPz9PT19fb29/f3+Pj4+fn6+vr7+/v7/Pz8/P39/f39/v7+/v7+/v6Lmd8KAAAAAWJLR0ThXwjPpgAABGFJREFUSMeVl/lflFUUh784g4MbYGFioonaom0YuJR7IpXZYqViZqallbiEo6WpaaWhiZgipWiB2AbimEpWaiYjaBKYUs8MggF/Sj+8MzKvs71zfpn7nneez73vued877lSSLNlLdledaHZ622urdq+JMsmyxY/vagZk/2zO9tuCe2z4hIh7PLyPlHRuJmXCWON87tFZh875vvn1cP52ZlDExOHZk5fXd7kc7pGRWLfagXg5t6JphDZJ+1pA6B1cVi0RyEATav6B79Lfc+YfmeP0GzKCQBPYVro12m7PADHk0NG+SeAhvHhP2pCA4Crd4g1fw9wckikkAw6ClDZK2iLvgLY2z3yZjiKAfbf7l4MUBofLQ1s+wAWmJ0PtgOHHdHzz1EOdIw0ZfNpwJ1kJXuT3cCpwExfBNwYa61sxrUAr3U996wDVlstOidQ35UrK4Fah1W4+0Vg+a3HvGsw23q9z4ZreQFRyK8KrIThOQsHRNqvqvyuHA1K5jLIiDb9QONngPfk/F6xwQkzj7TcLUnKBQpig7cBcyVJe4AZscEzgL2SJDd4E2ODk71wUZLuBM5I0gN5u74u+nCKAW/9/PD25+2S4p7a+MU3O5emS0m5n5SWfpTbU5J+BfpKehQolKQCQ+W2SWU+wavoLvtBY/i+lGOMzt0laRfwsKRpgFOSDtLe2A6MURlwvQ1YqeeApsb/2CrlcuOv68A6SWuAaZJeAeZI0iP9JNseWKYyeELxm+GsNsEHcVLqCOmeoXHSC1AlaS7wkqTXgacNNUnLnLIDVvsCltiGJ2kLFE/PSjfkPuWhSa9CjS/cb0h6G5gqSbnnjY9y+qN9GYa/aPhqZ0mZlR7AgKcC7wbAoz1ws74hAD4P99s2/A1Ay33xdeC58rsZ9i97DWy26c0u2N4JqZIjPSvnGCzMgHNJGmxetj9g6yFPgfDL0Kg+dknaCEvHQKX8cK4vYP6tmgcduz895YN/3l/hhU165mr1gaLyG5DdHyj/+JAB+7fKnyT9GgkIGAB/pGisb3jGoRLfsCYgSfoCv0nSkK2nmzvOHll1r8ZtqLzUerVmbZKUvP5EQ2vj8XUpkmPl0bq2etemyQHpKTd4kxST3SqMECUZ1Z69VZLBYhDVusQgNUiGolqXDPm1LDYbGNA+HbVb52yudXfIJPpzrMNzTKK/IqbjJuECkGc+6JxW4bXmg04LAO94a+zjLcC8wMP9F8CdbCm5aoEaU3hHtgPlFj474QjQMcLsXAhwIGpDE38IYP7t7i8BiqPM7SgBKAlu4r4FOBG5iXMBfJcQ/Ka3C6BhQnh24hWA6pB1kHwcwLN7UGh0cJEHwBWm9BN2ANCZH6KnGODsBOCzhLALW2T05G0lk00baZ+yz+ji2xZECklGtU/lmiqcOVnDEhOHjc5xVnT6nNUZ0S4oteEuKHWz4qLmUK9lIXH3O9bUxvZk4b9m8s/CqTFc6rqNWlzwg7u5paX54o8Fi0aFuVD9D6TfKMImC2toAAAAAElFTkSuQmCC" alt="absa-logo"   style="width: 100px; height: 100px; object-fit: none">
    </td>
</tr>
</table>`;
 
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