import "./Education.css";
const Education = (props) => {
  return (
    <>
      <div className={props.hide}>
        <h2 style={{ textAlign: "center", marginTop: "1.5rem" }}>Education</h2>
        <div className="edu">
          <div className="college">
            <h3>Shri Guru Tegbahadur Khalsa College</h3>
            <div className="inner">
              <div>
                <h4>B.COM Taxation</h4>
                <h4 style={{ fontWeight: "300" }}>07/16 - 06/19</h4>
              </div>
              <div>
                <h4>CA-CPT</h4>
                <h4 style={{ fontWeight: "300" }}>05/13</h4>
              </div>
            </div>
          </div>
          <div className="college">
            <h3>Nachiketa Higher Secondary School</h3>
            <div className="inner">
              <div>
                <h4>12th</h4>
                <h4 style={{ fontWeight: "300" }}>04/12 - 03/13</h4>
              </div>
            </div>
          </div>
        </div>
        <hr
          color="lightgray"
          style={{ marginTop: "3rem", width: "100%", height: "0.1px" }}
        />
        <h2 style={{ textAlign: "center", marginTop: "2.5rem" }}>
          Professional Experience
        </h2>
        <div className="expe">
          <div className="work">
            <h3>SD TOURS AND TRAVELS</h3>
            <div className="inner">
              <div>
                <h4>Accounts Executive</h4>
                <h4 style={{ fontWeight: "300" }}>07/22 - present</h4>
                <h4 style={{ fontWeight: "400" }}>Key Result Areas</h4>
                <ul
                  style={{
                    textAlign: "left",
                  }}
                >
                  <li>
                    Accurately maintained daily financial records, including
                    updating entries in books and ledgers.
                  </li>
                  <li>
                    Payment collection from debtors and Ledger updation
                    respectively
                  </li>
                  <li>
                    Preparing monthly Data for GST returns and making payments.
                  </li>
                  <li>
                    Updating bank entries, making Bank reconciliation and
                    ensuring accuracy of financial records.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="work">
            <h3>GAURAV ENTERPRISES</h3>
            <div className="inner">
              <div>
                <h4>Senior Accountant</h4>
                <h4 style={{ fontWeight: "300" }}>01/22 - 06/22</h4>
                <h4 style={{ fontWeight: "400" }}>Key Result Areas</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>Prepared Proper Books of Accounts.</li>
                  <li>Maintained cash and cash payments.</li>
                  <li>Prepared Data for GST and TDS returns.</li>
                  <li>Bidding in E-Coal Auctions.</li>
                  <li>
                    Collected payments from clients and updated their ledgers
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="work">
            <h3>GOUR ROAD TAR COAT</h3>
            <div className="inner">
              <div>
                <h4>Accountant</h4>
                <h4 style={{ fontWeight: "300" }}>03/21 - 01/22</h4>
                <h4 style={{ fontWeight: "600" }}>
                  I worked on a construction site as an Accountant and as a
                  cashie.
                </h4>
                <h4 style={{ fontWeight: "400" }}>Key Result Areas</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    Managed cash and made payments necessary for site upkeep and
                    operation.
                  </li>
                  <li>
                    Performed purchase entries against GRN and other accounting
                    entries in ERP software and finalized books.
                  </li>
                  <li>
                    Kept track of employee’s attendance and paid their salaries
                    and wages
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="work">
            <h3>SETH SANJAY & ASSOCIATES (CHARTERED ACCOUNTANT) </h3>
            <div className="inner">
              <div>
                <h4>Auditor</h4>
                <h4 style={{ fontWeight: "300" }}>05/18 - 02/21</h4>
                <h4 style={{ fontWeight: "400" }}>Key Result Areas</h4>
                <ul style={{ textAlign: "left" }}>
                  <li>Reviewed financial documents to identify inaccuracies</li>
                  <li>Calculated income and reconciliation.</li>
                  <li>
                    {" "}
                    Preparation of estimated and projected financial statements.
                  </li>
                  <li>Preparing proper accounts.</li>
                  <li>
                    Conducted Tax Audits, GST Audits and Internal Audit, and
                    Filed GST returns.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="achievement" style={{ width: "300px" }}>
            <h2 style={{ textAlign: "center", marginTop: "2.5rem" }}>
              Achievement
            </h2>
            <div>
              <h4 style={{ textAlign: "center" }}>
                Certificate obtained in Information technology & orientation
                programme, conducted by ICAI
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
