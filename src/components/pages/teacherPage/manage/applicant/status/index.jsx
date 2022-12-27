import { useParams } from "react-router-dom";
import { getUserCompany } from "../../../../../api/teacher";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  userdata,
  userDataAction,
} from "../../../../../../redux/store/userData";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../../../../../common/loading";
import ErrorPage from "../../../../../common/error";
import {
  CheckImg,
  CancelImg,
  CheckBlack,
  CancelBlack,
} from "../../../../../../images";
import AppliModal from "../modal";
import { stateModalManage } from "../../../../../../redux/store/modal";
import ApplicantPortal from "../modal/portal";
const StatusManageComponent = ({ props }) => {
  const { teacherId } = useParams();
  const dispatch = useDispatch();
  console.log(props.company.companyNumber, teacherId);
  const { status, data } = useQuery(
    ["teacherGetUser", teacherId, props.company.companyNumber],
    () => getUserCompany(props.company.companyNumber, teacherId, "")
  );
  const modal = useSelector((state) => state.userData.data.modal);
  // const status = "success";
  // const data = [
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "APPROVE",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "REJECT",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "WAITING",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "APPROVE",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "REJECT",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "WAITING",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "APPROVE",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "REJECT",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  //   {
  //     appliesId: "string",
  //     applier: {
  //       email: "jingeon27@gmail.com",
  //       name: "string",
  //     },
  //     noticeId: "string",
  //     status: "WAITING",
  //     resumeList: [
  //       {
  //         fileId: "string",
  //         fileUrl: "string",
  //         fileType: "FileType",
  //         extension: "string",
  //         fileName: "string",
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      {status === "loading" ? (
        <>
          <Table>
            <Ulbox>지원자가 없습니다.</Ulbox>
          </Table>
        </>
      ) : status === "error" ? (
        <>
          <Table>
            <Ulbox>지원자가 없습니다.</Ulbox>
          </Table>
        </>
      ) : (
        <>
          <Table>
            <Ulbox>
              {data.map((user, i) => (
                <Libox>
                  <Box>
                    <Category>
                      <div className="asdf">{user.appliersId}</div>
                      <div className="asdf">{user.applier.name}</div>
                      <div className="email">{user.applier.email}</div>
                    </Category>
                    <CateGory2>
                      {user.status === "WAITING" ? (
                        <>
                          <div>대기중</div>
                          <div>
                            <img src={CheckImg} alt=""></img>
                          </div>
                          <div>
                            <img src={CancelImg} alt=""></img>
                          </div>
                          <div
                            onClick={() => {
                              dispatch(
                                userDataAction({
                                  name: user.applier.name,
                                  email: user.applier.email,
                                  file: user.resumeList,
                                  modal: true,
                                })
                              );
                            }}
                          >
                            서류전형
                          </div>
                        </>
                      ) : (
                        <>
                          {user.status === "APPROVE" ? (
                            <>
                              <div>승인됨</div>
                            </>
                          ) : (
                            <>
                              <div>거절됨</div>
                            </>
                          )}
                          <div>
                            <img src={CheckBlack} alt=""></img>
                          </div>
                          <div>
                            <img src={CancelBlack} alt=""></img>
                          </div>
                          <div
                            onClick={() => {
                              dispatch(
                                userDataAction({
                                  name: user.applier.name,
                                  email: user.applier.email,
                                  file: user.resumeList,
                                  modal: true,
                                })
                              );
                            }}
                          >
                            서류전형
                          </div>
                        </>
                      )}
                    </CateGory2>
                  </Box>
                </Libox>
              ))}
            </Ulbox>
            {modal ? (
              <>
                <AppliModal />
              </>
            ) : (
              <></>
            )}
          </Table>
        </>
      )}
    </>
  );
};
export default StatusManageComponent;
const Table = styled.div`
  margin: 0px auto;
  margin-bottom: 100px;
  width: 1190px;
  height: 663px;
  background-color: ${(props) => props.theme.colors.mediumPurple};
  border-radius: 20px;
`;
const Ulbox = styled.ul`
  position: relative;
  list-style-type: none;
  width: 1160px;
  height: 620px;
  top: 20px;
  margin: 0 auto;
  overflow-y: scroll;
  scroll-padding-top: 20px;
  scroll-snap-points-y: none;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    width: 18px;
    border-radius: 20px;

    background-color: ${(props) => props.theme.colors.mediumGray};
  }

  &::-webkit-scrollbar-thumb {
    padding-top: 9px;
    height: 28px;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.blue};
  }
  overflow-x: hidden;
  margin-top: -3.5px;
`;
const Libox = styled.li`
  margin-bottom: 20px;
  margin-left: -40px;
`;
const Box = styled.div`
  display: flex;
  width: 1136px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.mediumGray};
  border-radius: 20px;
  padding-left: 40px;
  padding-top: 0px;
  font: 700 normal 24px "NanumGothic";
  color: #4000ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Category = styled.div`
  width: 634px;
  height: 80px;
  margin: 0;
  display: inline-flex;
  line-height: 80px;
  gap: 45px;
  .email {
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const CateGory2 = styled.div`
  width: 400px;
  height: 80px;
  line-height: 80px;
  display: flex;
  img {
    width: 30px;
    height: 30px;
  }
  div {
    :first-child {
      margin-right: 100px;
    }
    :nth-child(2) {
      cursor: pointer;
      margin-right: 20px;
    }
    :nth-child(3) {
      cursor: pointer;
      margin-right: 33px;
    }
    :last-child {
      font-weight: 500;
      cursor: pointer;
      :hover {
        color: #808080;
      }
    }
  }
`;
