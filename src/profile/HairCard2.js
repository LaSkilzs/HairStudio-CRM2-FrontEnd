import React from "react";

const HairCard2 = props => {
  return (
    <div className="profile-card">
      <div className="card">
        <div className="back">
          <div className="go-back">
            <i className="fa fa-chevron-circle-left" />
          </div>
          <ul className="appointment-facts">
            <li className="facts">suffered_from_hair_loss:</li>
            <li className="facts">been_diagnosed_with_alopecia:</li>
            <li className="facts">take_any_medication:</li>
            <li className="facts">been_pregnant_in_the_last_6_months:</li>
            <li className="facts">suffer_from_ezcema_to_the_scalp:</li>
            <li className="facts">suffer_from_psoriasis_to_the_scalp:</li>
            <li className="facts">have_a_sensitive_scalp:</li>
            <li className="facts">any_known_allergies :</li>
            <li className="facts">frequently_swim_or_go_to_the_gym:</li>
            <li className="facts">currently_have_colour_in_your_hair:</li>
            <li className="facts">used_hair_extensions_before:</li>
            <li className="facts">which_type_did_you_use:</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HairCard2;
