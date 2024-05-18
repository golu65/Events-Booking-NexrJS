// @ts-nocheck
// @ts-ignore
"use client";
import React, { Fragment } from "react";
import { Box,  styled } from "@mui/material";
import NavbarOne from "@/app/MainNavbar/NavbarOne";
import Footer from "@/app/Page/Footer";

// import baseURL from "../../apiConfig";

const MainBox = styled(Box)`
  padding-top: 150px;
  width: 100%;
  height: 100%;
  background: rgb(8, 8, 16);
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    // overflow: hidden;
    // border: 2px solid red;
    padding-top: 1px;
    padding-bottom: 50px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const BoxPrivacy = styled(Box)`
width: 60%;
 margin: auto;
 @media (max-width: 767px) {
  width: 100%;

  // overflow: hidden;
  // border: 2px solid red;
  padding-top: 120px;
  padding-bottom: 50px;
}
`;


const page = () => {
    return (
        <Fragment>
            <NavbarOne />
            <MainBox>
                <BoxPrivacy>
                    <h1 style={{ textAlign: 'center', margin: '10px', fontSize: '22px', fontWeight: '600' }}>Disclaimer</h1>
                    <h3 style={{ textAlign: 'center', margin: '10px', fontSize: '22px', fontWeight: '600' }}>Disclaimer of Warranties and Limitation of Liability</h3>
                    <p style={{ textAlign: 'left', margin: '20px' }}>This site and all information, content, materials, products (including software) and services included on or otherwise made available to you through this site are provided by StarClinch.com on an “as is” and “as available” basis, unless otherwise specified in writing. StarClinch.com makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, products (including software) or services included on or otherwise made available to you through this site, unless otherwise specified in writing. You expressly agree that your use of this site is at your sole risk.</p>



                    <p style={{ textAlign: 'left', margin: '20px' }}>To the full extent permissible by applicable law, StarClinch.com disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. StarClinch.com does not warrant that this site; information, content, materials, products (including software) or services included on or otherwise made available to you through this site; their servers; or e-mail sent from StarClinch.com are free of viruses or other harmful components. StarClinch.com will not be liable for any damages of any kind arising from the use of this site or from any information, content, materials, products (including software) or services included on or otherwise made available to you through this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages, unless otherwise specified in writing.</p>


                    <p style={{ textAlign: 'left', margin: '20px' }}>StarClinch.com makes no representation or warranty that any material, content, products or services displayed on or offered through the service are accurate, complete, appropriate, reliable, or timely. We also make no representations or warranties that the service will meet your requirements and/or your access to and use of the service will be uninterrupted or error-free, free of viruses, malicious code, or other harmful components, or otherwise secure. Some jurisdictions do not allow the exclusion of certain warranties. Accordingly, some of the above exclusions may not apply to you.</p>


                    <p style={{ textAlign: 'left', margin: '20px' }}>You agree that your use of the StarClinch.com website shall be at your sole risk. To the fullest extent permitted by law, StarClinch.com, its officers, directors, employees, and agents disclaim all warranties, express or implied, in connection with the website and your use thereof. StarClinch.com makes no warranties or representations about the accuracy or completeness of this site’s content or the content of any sites linked to this site and assumes no liability or responsibility for any (i) errors, mistakes, or inaccuracies of content, (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our website, (iii) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (iv) any interruption or cessation of transmission to or from our website, (iv) any bugs, viruses, trojan horses, or the like which may be transmitted to or through our website by any third party, and/or (v) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the StarClinch.com website. StarClinch.com does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the StarClinch.com website or any hyperlinked website or featured in any banner or other advertising, and StarClinch.com will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.</p>

                    {/* <h2 style={{ textAlign: 'center', margin: '10px', fontSize: '18px', fontWeight: '600' }}>1. COLLECTION OF INFORMATION</h2> */}
                    <p style={{ textAlign: 'left', margin: '20px' }}>Inclusion of any linked website on the StarClinch.com website does not imply approval or endorsement of the linked website by StarClinch.com. When you access these third-party sites, you do so at your own risk. StarClinch.com takes no responsibility for third party advertisements which are posted on the StarClinch.com website or through the StarClinch.com services, nor does it take any responsibility for the goods or services provided by its advertisers. StarClinch.com is not responsible for the conduct, whether online or offline, of any user of the StarClinch.com services. StarClinch.com assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, any user or member communication. StarClinch.com is not responsible for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of any email or players due to technical problems or traffic congestion on the internet or on any of the StarClinch.com services or combination thereof, including any injury or damage to users or to any person’s computer related to or resulting from participation in connection with the StarClinch.com services. Under no circumstances shall StarClinch.com be responsible for any loss or damage, including personal injury or death, resulting from use of the StarClinch.com services, attendance at a StarClinch.com event, from any content posted on or through the StarClinch.com services, or from the conduct of any users of the StarClinch.com services, whether online or offline. The StarClinch.com services are provided “as-is” and as available and StarClinch.com expressly disclaims any warranty of fitness for a particular purpose or non-infringement. StarClinch.com cannot guarantee and does not promise any specific results from use of the StarClinch.com services.</p>

                    <p style={{ textAlign: 'left', margin: '20px' }}>The information (Written Content / Images) in this website StarClinch.com is provided for promotional and general information purposes only.</p>

                    <p style={{ textAlign: 'left', margin: '20px' }}>Most of the Images which have been used /referred on www.StarClinch.com have been sourced from various website and sources. The Liability and the claim to these images remain solely with original owner/website of the image from where it has been sourced. The complete ownership lies with the image owner and StarClinch.com does not take any responsibility of the correctness of the content.</p>


                    <p style={{ textAlign: 'left', margin: '20px' }}>All content used has been re-edited, re-compiled from other sites and sources except for the content written by StarClinch.com designated team. The Liability and the claim to this content remain solely with original owner/website of the image from where it has been sourced. The complete ownership lies with the content owner and StarClinch.com does not take any responsibility of the correctness of the content.</p>

                    <p style={{ textAlign: 'left', margin: '20px' }}>No responsibility is taken by StarClinch.com for the accuracy of this information. THE CONTENT MAY NOT BE ACCURATE, UP TO DATE, COMPLETE OR UNTAMPERED, AND IS NOT TO BE RELIED UPON.</p>


                    <p style={{ textAlign: 'left', margin: '20px' }}>THE CONTENT SHOULD NOT BE INTERPRETED AS A RECOMMENDATION FOR ANY SPECIFIC PRODUCT OR SERVICE, USE OR COURSE OF ACTION. YOU SHOULD NOT ACT OR RELY ON ANY OF THE CONTENT WITHOUT SEEKING ADVICE OF A QUALIFIED PROFESSIONAL.</p>


                   
               


                    <p style={{ textAlign: 'left', margin: '20px' }}>STARCLINCH.COM ASSUMES NO OBLIGATION TO UPDATE THE CONTENT ON THIS SITE. THE CONTENT ON THIS SITE MAY BE CHANGED WITHOUT NOTICE TO YOU. STARCLINCH.COM IS NOT RESPONSIBLE FOR ANY CONTENT OR INFORMATION THAT YOU MAY FIND UNDESIRABLE OR OBJECTIONABLE. STARCLINCH.COM DISCLAIMS ANY LIABILITY FOR UNAUTHORIZED USE OR REPRODUCTION OF ANY PORTION OF THE WEB SITE. ACCESSING THE CONTENT FROM TERRITORIES WHERE IT MAY BE ILLEGAL IS PROHIBITED.</p>

                    


                </BoxPrivacy>
            </MainBox>
            <Footer />
        </Fragment>
    )
}

export default page