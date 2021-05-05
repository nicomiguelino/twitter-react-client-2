function CreateTweetForm() {
  return (
        <div class="form-group mb-5">
          <textarea
            id="create-tweet"
            placeholder="What's happening?"
            name="create-tweet"
            rows="4"
            className="form-control mb-3 p-3"
            style={{
              'font-size': '1.3em',
              'resize': 'none'
            }}
          >
          </textarea>

          <div className="d-flex flex-row">
            <span className="text-black-50 ml-2">
              280/280
            </span>

            <button
              className="btn btn-success rounded ml-auto"
            >
              <strong>Tweet</strong>
            </button>
          </div>
        </div>
  );
}

export default CreateTweetForm;
