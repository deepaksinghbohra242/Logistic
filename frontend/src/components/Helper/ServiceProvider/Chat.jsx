import React from "react";

const Chat = () => {
  const contacts = [
    {
      name: "ashish",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aditya",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aju",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aman",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aman",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aman",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aman",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
    {
      name: "Aman",
      status: "Abailable 🟢",
      img: "images/img4.png",
    },
  ];
  return (
    <div className="w-screen flex tiems-center">
      <div className="w-[25%] h-scerrn bg-Alight">
        <div className="flex items-center my-8 mx-14 shadow-lg rounded-full ">
          <div className="border border-black rounded-[30px]">
            <img src="images/img4.png" width={60} height={60} />
          </div>
          <div className="ml-8 ">
            <h3 className="text-xl">Ashish Kathait</h3>
            <p className="text-lg font-light  ">My Account</p>
          </div>
        </div>
        <div className="text-primary text-lg">Meaages</div>

        <hr />
        <div className="ml-14 mt-8 h-[35%] overflow-y-scroll">
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-300  border  ">
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img src={img} width={60} height={60} />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-600">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-#0284c7 flex items-center h-[80px] my-14 rounded-full flex items-center px-8 shadow-lg">
          <img src="assets/image" width={60} height={60} />

          <div className="ml-6 mr-auto">
            <h3 className="text-lg  font-semibold">Ashish kathait</h3>
            <p className="text-sm font-light text-gray-600"> Online 🟢</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-call"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
          </div>
        </div>
        <div className="h-[75%]  w-full overflow-scroll shadow-sm">
          <div className=" p-14">
            <div className="max-w-[50%] bg-Alight rouneded-b-xl rounded-full p-4 mb-6">
              hi ashish this side hi ashish this side hi ashish this side
            </div>
            <div className="max-w-[50%] bg-Light rouneded-b-xl rounded-full ml-auto p-4 mb-6 text-white mb-6">
              hello ashish how are you
            </div>
            <div className="max-w-[50%] bg-Alight rouneded-b-xl rounded-full p-4 mb-6">
              hi ashish this side hi ashish this side hi ashish this side
            </div>
            <div className="max-w-[50%] bg-Light rouneded-b-xl rounded-full ml-auto p-4 mb-6 text-white mb-6">
              hello ashish how are you
            </div>
            <div className="max-w-[50%] bg-Alight rouneded-b-xl rounded-full p-4 mb-6">
              hi ashish this side hi ashish this side hi ashish this side
            </div>
            <div className="max-w-[50%] bg-Light rouneded-b-xl rounded-full ml-auto p-4 mb-6 text-white mb-6">
              hello ashish how are you
            </div>
            <div className="max-w-[50%] bg-Alight rouneded-b-xl rounded-full p-4 mb-6">
              hi ashish this side hi ashish this side hi ashish this side
            </div>
            <div className="max-w-[50%] bg-Light rouneded-b-xl rounded-full ml-auto p-4 mb-6 text-white mb-6">
              hello ashish how are you
            </div>
            <div className="max-w-[50%] bg-Alight rouneded-b-xl rounded-full p-4 mb-6">
              hi ashish this side hi ashish this side hi ashish this side
            </div>
            <div className="max-w-[50%] bg-Light rouneded-b-xl rounded-full ml-auto p-4 mb-6 text-white mb-6">
              hello ashish how are you
            </div>
          </div>
        </div>
        <div className="p-14 w-full flex item-center">
          <input
            className="w-[30rem]  h-[50px] border border-0 rounded-full pl-5 shadow-md bg-#f5f5f5 outline-none"
            placeholder="type a message...."
          />

          <div className="ml-3 p-3  cursor-pointer bg-#f5f5f5 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path
                d="M21 3l-6.5 18a.55 .55 0 0 
                  1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
              />
            </svg>
          </div>
          <div className="ml-3 p-3  cursor-pointer bg-#f5f5f5 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler
                icon-tabler-square-rounded-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 3c7.2 0 9 1.8 9 
 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
              />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen"></div>
    </div>
    
  );
};

export default Chat;
