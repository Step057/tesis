const index = () => {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="text-light"
        style={{
          backgroundColor: "#FFF8E1",
          minHeight: "5vh",
          flexShrink: "0",
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
        }}
      >
        <div className="container py-2">
          <div className="row">
            <div className="col text-center">
              <h3
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontSize: "14px",
                }}
              >
                {" "}
                Derechos reservados ISTER 2024{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
