import { Loader } from 'components/Loader/Loader';

export const UpdateForm = () => {
  return (
    <>
      {isLoading && !error && <Loader />}
      {isUpdate && (
        <form onSubmit={handleContactCorrect}>
          <label>
            Name update
            <input
              type="text"
              name="name"
              // value={contactUpdate.name}
              placeholder={contactUpdate.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Number update
            <input
              type="tel"
              name="number"
              // value={contactUpdate.number}
              placeholder={contactUpdate.number}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Correct contact</button>
        </form>
      )}
    </>
  );
};
