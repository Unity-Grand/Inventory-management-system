import React from "react";

function Button(pops) {
  return (
    <div>
      <button
        type="submit"
        class="text-black border-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {pops.name}
      </button>
    </div>
  );
}

export default Button;