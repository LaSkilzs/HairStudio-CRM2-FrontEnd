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
            <li className="facts">
              suffered_from_hair_loss: {props.suffered_from_hair_loss}
            </li>
            <li className="facts">
              been_diagnosed_with_alopecia:
              {props.been_diagnosed_with_alopecia}
            </li>
            <li className="facts">
              take_any_medication:{props.take_any_medication}
            </li>
            <li className="facts">
              been_pregnant_in_the_last_6_months:
              {props.been_pregnant_in_the_last_6_months}
            </li>
            <li className="facts">
              suffer_from_ezcema_to_the_scalp:
              {props.suffered_from_ezcema_to_the_scalp}
            </li>
            <li className="facts">
              suffer_from_psoriasis_to_the_scalp:
              {props.suffered_psoriasis_to_the_scalp}
            </li>
            <li className="facts">
              have_a_sensitive_scalp:
              {props.have_a_sensitive_scalp}
            </li>
            <li className="facts">
              any_known_allergies: {props.any_known_allergies}
            </li>
            <li className="facts">
              frequently_swim_or_go_to_the_gym:
              {props.frequently_swim_or_go_to_the_gym}
            </li>
            <li className="facts">
              currently_have_colour_in_your_hair:
              {props.currently_have_colour_in_your_hair}
            </li>
            <li className="facts">
              used_hair_extensions_before:{props.used_hair_extensions_before}
            </li>
            <li className="facts">
              which_type_did_you_use: {props.which_type_did_you_use}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

HairCard2.propTypes = {
  suffered_from_hair_loss: propTypes.bool.isRequired,
  been_diagnosed_with_alopecia: propTypes.bool.isRequired,
  take_any_medication: propTypes.bool.isRequired,
  been_pregnant_in_the_last_6_months: propTypes.bool.isRequired,
  suffer_from_ezcema_to_the_scalp: propTypes.bool.isRequired,
  suffer_from_psoriasis_to_the_scalp: propTypes.bool.isRequired,
  have_a_sensitive_scalp: propTypes.bool.isRequired,
  any_known_allergies: propTypes.string.isRequired,
  frequently_swim_or_go_to_the_gym: propTypes.bool.isRequired,
  currently_have_colour_in_your_hair: propTypes.bool.isRequired,
  used_hair_extensions_before: propTypes.bool.isRequired,
  which_type_did_you_use: propTypes.string.isRequired
};

HairCard2.defaultProps = {
  suffered_from_hair_loss: false.toString(),
  been_diagnosed_with_alopecia: false.toString(),
  take_any_medication: false.toString(),
  been_pregnant_in_the_last_6_months: pfalse.toString(),
  suffer_from_ezcema_to_the_scalp: false.toString(),
  suffer_from_psoriasis_to_the_scalp: false.toString(),
  have_a_sensitive_scalp: false.toString(),
  any_known_allergies: false.toString(),
  frequently_swim_or_go_to_the_gym: false.toString(),
  currently_have_colour_in_your_hair: false.toString(),
  used_hair_extensions_before: false.toString(),
  which_type_did_you_use: "n/as"
};

export default HairCard2;
