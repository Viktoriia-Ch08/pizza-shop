const ConfirmModal = () => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <form>
        <label>
          <p>
            Write your number correctly and our manager will call you for
            checking details!
          </p>
          <input type="number" value={auth ? user.number : ""} />
        </label>
        <button type="submit">Confirm the order</button>
      </form>
    </div>
  );
};

export default ConfirmModal;
