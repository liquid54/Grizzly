import TermsOfUse from "@/features/faq/TermsOfUse";
import FAQ from "@/features/faq/FAQ";

const Faq = () => {
    return (
        <div className='lg:space-y-[150px] md:space-y-[76px] space-y-[100px] md:pt-[100px] pt-[50px] pb-[100px] md:px-[32px] px-[16px]'>
            <FAQ/>
            <TermsOfUse/>
        </div>
    );
}

export default Faq;