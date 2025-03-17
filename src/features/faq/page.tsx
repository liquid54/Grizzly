import TermsOfUse from "@/features/faq/TermsOfUse";
import FAQ from "@/features/faq/FAQ";

const Faq = () => {
    return (
        <div className='space-y-[150px] px-[375px] pt-[100px]'>
            <FAQ/>
            <TermsOfUse/>
        </div>
    );
}

export default Faq;