const ShowFeedBack = ({ feedback, isOpen, setIsOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white flex justify-center items-center flex-col gap-1 w-1/2 p-6 rounded shadow">
            <div className="p-4"><p>{feedback}</p></div>
            <button
              className="btn btn-error btn-sm"
              onClick={() => setIsOpen(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowFeedBack;
