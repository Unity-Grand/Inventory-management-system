import React from "react";

function InputBox(props) {
  return (
    <div class="flex flex-wrap -mx-3 mb-3">
      <div class="w-full px-3">
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        />
        <p class="text-gary-600 text-xs italic">{props.massage}</p>
      </div>
    </div>
  );
}

export default InputBox;
