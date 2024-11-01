import React from "react";
import PartnerItem from "./ItemPartner";

const PartnerList = ({ partners, onEdit }) => {
  return (
    <div className="partner-list">
      {partners.length > 0 ? (
        partners.map((partner) => (
          <PartnerItem key={partner.id} partner={partner} onEdit={onEdit} />
        ))
      ) : (
        <p className="text-center text-xl">Nenhum parceiro encontrado.</p>
      )}
    </div>
  );
};

export default PartnerList;
