import account from '../../../images/accounts1.png'
import deposit from '../../../images/deposit.png'
import cards from '../../../images/cards.png'
import invest from '../../../images/investment.png'
import insurance from '../../../images/insurance.png'
import loan from '../../../images/loan.png'
import styles from './products.module.css'
import Sidebar from '../../../components/employeeSidebar/Sidebar'
function Products(){


    return(
      <>
  <Sidebar/>
        <div className={styles.products}>
        

        <h1 className="img">
      <div Display="flex"><img src={account} height="225px" width="100%" Display="flex"></img></div>
      <div Display="flex">Accounts</div>
      <div Display="flex" style={{fontSize:"20px", fontFamily:"serif"}}>With the world going cashless, bank accounts have become a necessity rather than an option. Having a bank account is essentially having a 24x7 security for your hard-earned money. But safety isn’t the only feature we offer. 
        You can earn interest on your savings, make hassle-free payments, and manage all your expenses online.</div>
      </h1>

      <h1 className="img">
      <div Display="flex"><img src={cards} height="225px" width="100%" Display="flex"></img></div>
      <div Display="flex">Cards</div>
      <div Display="flex" style={{fontSize:"20px", fontFamily:"serif"}}>Explore our range of cards designed for your unique needs. Avail amazing discounts and cashback schemes with Axis Bank Credit Cards.
      Get access to your funds securely anytime, anywhere!
      </div>
      </h1>

      <h1 className="img">
      <div Display="flex"><img src={deposit} height="225px" width="100%" Display="flex"></img></div>
      <div Display="flex">Deposits</div>
      <div Display="flex" style={{fontSize:"20px", fontFamily:"serif"}}>If you’re looking to invest your money, bank deposits are one of the most popular forms of investment and 
        with good reason: the high interest rates and minimum risk factor ensure that your money is in safe hands.
      Get the best out of your wealth with Axis Bank's special offers on Fixed and Recurring Deposits 
      that come with competitive rates of interest.</div>
      </h1>

      <h1 className="img">
      <div Display="flex"><img src={loan} height="225px" width="100%" Display="flex"></img></div>
      <div Display="flex">Loans</div>
      <div Display="flex" style={{fontSize:"20px", fontFamily:"serif"}}>At Axis Bank, we believe your journey should continue without any speed bumps. This is why we bring you customized Bank Loans at competitive interest rates. 
        To get started, check your loan eligibility using our simple loan calculators. </div>
      </h1>

      <h1 className="img">
      <div Display="flex"><img src={insurance} height="225px" width="100%" Display="flex"></img></div>
      <div Display="flex">Insurance</div>
      <div Display="flex" style={{fontSize:"20px", fontFamily:"serif"}}>Life can throw up any kind of unforeseen risk, arising from a medical emergency, an accident, a natural calamity or the loss of a loved one. So now you can protect yourself and your family against all risks with our Online 
        Insurance Plans and get the policy instantly here with just a few clicks.</div>
      </h1>

      <h1 className="img">
      <div Display="flex"><img src={invest} height="225px" width="100%" Display="flex"></img></div>
      <div Display="flex">Investment</div>
      <div Display="flex" style={{fontSize:"20px", fontFamily:"serif"}}>If you have just started earning, you probably know the joy of receiving your first salary. It allows you the financial freedom to save for everything you have aspired for. But given that life is not always sunshine, 
        it is also equally important to save your hard-earned money. This will provide you with the necessary financial security.</div>
      </h1>

     

        </div>
        </>
)

}

export default Products;
