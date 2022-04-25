// Get the modal
const modal = document.getElementById("our-projects__myModal");
const ourProjectsModalP = document.getElementById("our-projects__modal__p");
const ourProjectsModalH2 = document.getElementById("our-projects__modal__h2");

// Get the button that opens the modal
// var btn = document.getElementById("our-projects__myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("our-projects__close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
// modal.style.display = "block";
// };

const ourProjectsHandler = id => {
    modal.style.display = "block";

    switch (id) {
        case 1:
            ourProjectsModalH2.textContent = "Education for all";
            ourProjectsModalP.textContent =
                "We believe that education is the foundation for leading a happy and fulfilled life. With this objective in mind we have been imparting value-creating education to needy children since 2001. We are happy to share that so far, we have provided basic education to more than 15,000 children with most of them inducted into formal education system after completing the bridge course. In 2006, we expanded the project to include orphans, beggars and other destitute children who were deprived of this opportunity. We also reached out to children in conflict with law in observations homes, and offered after-release back-up classes after their release or acquittal. We strive to tap the inherent potential of these children to bring about a positive change in their lives.";
            break;

        case 2:
            ourProjectsModalH2.textContent = "Vocational Training";
            ourProjectsModalP.textContent =
                "SES has been imparting vocational training to make the beneficiaries self-reliant. Some of the popular skills that have been taught are Cookery, Textile Designing, Beauty Culture, Mobile Repair, Retail Management, Data-entry Computer Course, and Cutting and Tailoring (for women). We have also provided vocational training to women in Nari Niketan and children in Delhi-govt.-run children homes.";
            break;
        case 3:
            ourProjectsModalH2.textContent =
                "Open Shelter Home for Street Children";
            ourProjectsModalP.textContent =
                "Determined to make a difference in the lives of destitute children, we have set up an Open Shelter Home to provide them care, protection, and a healthy and happy environment. These children include beggars, rag- pickers, small vendors, orphaned, deserted, run-away and other vulnerable children. Besides giving them food, clothing, medical care and basic education, we also counsel them to bring about behavioural changes.";
            break;
        case 4:
            ourProjectsModalH2.textContent = "Girl Child Project";
            ourProjectsModalP.textContent =
                "Resonating with the national objective of 'Beti padhao beti bachao' campaign, we started the Girl Child Project in 2016. The programme aims at providing opportunities for education and employment to girls who have been treated as liabilities in their families and immediate surroundings. It is a matter of pleasure to report that the number of enrolment is increasing every year.";
            break;
        case 5:
            ourProjectsModalH2.textContent = "De-addiction Programme";
            ourProjectsModalP.textContent =
                "Observing that many of the boys in the Open Shelter Home were involved in substance abuse, we have initiated a project to wean children off this harmful habit. It is encouraging to see that many of these children give up addiction through love, care and activities that engage them at physical, mental and emotional levels.";
            break;
        default:
            break;
    }

    console.log(id);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
