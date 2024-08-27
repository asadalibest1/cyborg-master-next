
const modals = document.querySelectorAll('.modal');
const cardBtns = document.querySelectorAll('.card_btn');
const closeBtns = document.querySelectorAll('.close_btn');
const linkInput = document.querySelectorAll('.link_input')[0];
const c_loading = document.querySelectorAll('.custom_loader_1')[0];
const show_error = document.querySelectorAll('.show_error')[0];
const group_image = document.querySelectorAll('.group_image')[0];
const upload_group = document.querySelectorAll('.fa-upload-group')[0];
const group_heading = document.querySelectorAll('.group_heading')[0];
const create_button_group = document.querySelectorAll('.create_button_group')[0];
const input_image_group = document.querySelectorAll('.input_image_group')[0];

let users = {};

const loading = (t) => t ? c_loading.classList.remove('hidden') : c_loading.classList.add('hidden');
const Image = (t) => t ? group_image.classList.remove('hidden') : c_loading.classList.add('hidden');



cardBtns[0].addEventListener('click', () => {
    openModal(0);

});

closeBtns[0].addEventListener('click', () => {
    closeModal(0);
});

closeBtns[1].addEventListener('click', () => {
    closeModal(1);
});

closeBtns[2].addEventListener('click', () => {
    // closeModal(1);
    // openModal(2);

    console.log(users);
});

input_image_group.addEventListener('change', (e) => {
    if (e.target.files[0]) {
        console.log(e.target.files[0].name);

        
        let imagesPreview = function (input) {
            if (input.files) {
                let filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    let reader = new FileReader();
                    reader.onload = function (event) {
                        // $($.parseHTML("<img>"))
                        //   .attr("src", event.target.result)
                        //   .appendTo(placeToInsertImagePreview);
                    };
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };
        imagesPreview(this);










    }
});


closeBtns[3].addEventListener('click', () => {
    closeModal(2);
    // openModal(2);
    console.log({ users });
    alert(users)
});
closeBtns[4].addEventListener('click', () => {
    closeModal(2);
});

closeBtns[5].addEventListener('click', () => {
    closeModal(2);
    openModal(0);
});






linkInput.addEventListener('input', async (e) => {
    if (e.target.value.split.length !== 0) {


        try {
            loading(true)
            users = await getGroup(e.target.value)
            console.log({ users });
            loading(false);
            show_error.innerText = "";


            if (users.res.url) {
                group_image.src = users.res.url
                group_heading.innerText = users.res.title;
                group_image.classList.remove('hidden')
                upload_group.classList.add('hidden');
                closeModal(0);
                openModal(1);
            } else {
                group_image.classList.add('hidden')
                upload_group.classList.remove('hidden')
            }

        } catch (error) {
            loading(false);
            show_error.innerText = error.error;
            console.log(error);

        }

    }
})




const openModal = (index) => {
    modals[index].classList.add('open');
};

const closeModal = (index) => {
    modals[index].classList.remove('open');
};


   // opening the clicked Modal.
//    cardBtns.forEach((currCardBtn, index) => {
//      currCardBtn.addEventListener('click', () => {
//        openModal(index);
//      });
//    });


//    // closing the current opened Modal.
//    closeBtns.forEach((currCloseBtn, index) => {
//      currCloseBtn.addEventListener('click', () => {
//        closeModal(index);
//      });
//    });


//    // closing the current opened Modal on clicking outside.
//    window.addEventListener('click', (e) => {
//      if (e.target.className === 'modal_wrapper' || e.target.className === 'fa fa-times') {
//        modals.forEach((currModal) => {
//          currModal.classList.remove('open');
//        });
//      }
//    });