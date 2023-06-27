import api from "./api";
const studyRecordAllGet = async () => {
  const resp = await api.get("/study-record/all", {
    headers: {
      Authorization: localStorage.getItem("access-token"),
    },
  });
  console.log("dat = ", resp.data);

  return resp.data.response;
};

export default studyRecordAllGet;
