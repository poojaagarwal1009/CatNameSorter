/* eslint-disable padded-blocks */

import * as ACTION from "../constants/action.constant";
import Api from "../api/nameList.api";
import { apiAction } from "./api.action";
import { genericError } from "./generic.action";

const _log = (...msg) => {
  console.log("|membersActions|", ...msg);
};

const isErrorGenericResult = genericResult => {
  return genericResult.isError;
};

const examineMemberResult = (memberResult, dispatch) => {
  if (isErrorGenericResult(memberResult.documentsHistory)) {
    const msg = `Failed to load documentsHistory. status: ${
      memberResult.documentsHistory.status
    }`;

    dispatch(
      genericError(msg, { status: memberResult.documentsHistory.status })
    );
  }

  for (const claim of memberResult.claims) {
    if (isErrorGenericResult(claim.mostRecentPayment)) {
      const msg =
        `Failed to load mostRecentPayment for claim ${claim.claimId}. ` +
        `status: ${claim.mostRecentPayment.status}`;

      dispatch(genericError(msg, { status: claim.mostRecentPayment.status }));
    }

    if (isErrorGenericResult(claim.nextFuturePayment)) {
      const msg =
        `Failed to load nextFuturePayment for claim ${claim.claimId}. ` +
        `status: ${claim.nextFuturePayment.status}`;

      dispatch(genericError(msg, { status: claim.nextFuturePayment.status }));
    }
  }
};

class MemberAction {
  static loadMembersSuccess = result => {
    return {
      type: ACTION.LOAD_MEMBERS_SUCCESS,
      member: result
    };
  };
}

export class MemberDispatchAction {
  static dispatchLoadMembers = () =>
    apiAction(dispatch => {
      _log("dispatchLoadMembers");
      //dispatch({type: ACTION.LOAD_MEMBERS});

      return Api.getMemberDetails().then(result => {
        dispatch(MemberAction.loadMembersSuccess(result));
        examineMemberResult(result, dispatch);
      });
    });
}
