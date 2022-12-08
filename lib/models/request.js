var request_Module_Factory = function () {
  var request = {
    name: 'request',
    typeInfos: [{
        localName: 'MarkForCaptureType',
        typeName: 'markForCaptureType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'orderID',
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'amount',
            elementName: {
              localPart: 'Amount'
            }
          }, {
            name: 'taxInd',
            elementName: {
              localPart: 'TaxInd'
            }
          }, {
            name: 'tax',
            elementName: {
              localPart: 'Tax'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'pcOrderNum',
            elementName: {
              localPart: 'PCOrderNum'
            }
          }, {
            name: 'pcDestZip',
            elementName: {
              localPart: 'PCDestZip'
            }
          }, {
            name: 'pcDestName',
            elementName: {
              localPart: 'PCDestName'
            }
          }, {
            name: 'pcDestAddress1',
            elementName: {
              localPart: 'PCDestAddress1'
            }
          }, {
            name: 'pcDestAddress2',
            elementName: {
              localPart: 'PCDestAddress2'
            }
          }, {
            name: 'pcDestCity',
            elementName: {
              localPart: 'PCDestCity'
            }
          }, {
            name: 'pcDestState',
            elementName: {
              localPart: 'PCDestState'
            }
          }, {
            name: 'amexTranAdvAddn1',
            elementName: {
              localPart: 'AMEXTranAdvAddn1'
            }
          }, {
            name: 'amexTranAdvAddn2',
            elementName: {
              localPart: 'AMEXTranAdvAddn2'
            }
          }, {
            name: 'amexTranAdvAddn3',
            elementName: {
              localPart: 'AMEXTranAdvAddn3'
            }
          }, {
            name: 'amexTranAdvAddn4',
            elementName: {
              localPart: 'AMEXTranAdvAddn4'
            }
          }, {
            name: 'pc3FreightAmt',
            elementName: {
              localPart: 'PC3FreightAmt'
            }
          }, {
            name: 'pc3DutyAmt',
            elementName: {
              localPart: 'PC3DutyAmt'
            }
          }, {
            name: 'pc3DestCountryCd',
            elementName: {
              localPart: 'PC3DestCountryCd'
            }
          }, {
            name: 'pc3ShipFromZip',
            elementName: {
              localPart: 'PC3ShipFromZip'
            }
          }, {
            name: 'pc3DiscAmt',
            elementName: {
              localPart: 'PC3DiscAmt'
            }
          }, {
            name: 'pc3VATtaxAmt',
            elementName: {
              localPart: 'PC3VATtaxAmt'
            }
          }, {
            name: 'pc3VATtaxRate',
            elementName: {
              localPart: 'PC3VATtaxRate'
            }
          }, {
            name: 'pc3AltTaxInd',
            elementName: {
              localPart: 'PC3AltTaxInd'
            }
          }, {
            name: 'pc3AltTaxID',
            elementName: {
              localPart: 'PC3AltTaxID'
            }
          }, {
            name: 'pc3AltTaxAmt',
            elementName: {
              localPart: 'PC3AltTaxAmt'
            }
          }, {
            name: 'pc3LineItemCount',
            elementName: {
              localPart: 'PC3LineItemCount'
            }
          }, {
            name: 'pc3LineItemArray',
            elementName: {
              localPart: 'PC3LineItemArray'
            },
            typeInfo: '.PC3LineItemArray'
          }, {
            name: 'pCardRequestorName',
            elementName: {
              localPart: 'PCardRequestorName'
            }
          }, {
            name: 'pCardLocalTaxRate',
            elementName: {
              localPart: 'PCardLocalTaxRate'
            }
          }, {
            name: 'pCardNationalTax',
            elementName: {
              localPart: 'PCardNationalTax'
            }
          }, {
            name: 'pCardPstTaxRegNumber',
            elementName: {
              localPart: 'PCardPstTaxRegNumber'
            }
          }, {
            name: 'pCardCustomerVatRegNumber',
            elementName: {
              localPart: 'PCardCustomerVatRegNumber'
            }
          }, {
            name: 'pCardMerchantVatRegNumber',
            elementName: {
              localPart: 'PCardMerchantVatRegNumber'
            }
          }, {
            name: 'pCardTotalTaxAmount',
            elementName: {
              localPart: 'PCardTotalTaxAmount'
            }
          }, {
            name: 'pCardDtlTaxAmount1Ind',
            elementName: {
              localPart: 'PCardDtlTaxAmount1Ind'
            }
          }, {
            name: 'pCardDtlTaxAmount1',
            elementName: {
              localPart: 'PCardDtlTaxAmount1'
            }
          }, {
            name: 'pCardDtlTaxAmount2Ind',
            elementName: {
              localPart: 'PCardDtlTaxAmount2Ind'
            }
          }, {
            name: 'pCardDtlTaxAmount2',
            elementName: {
              localPart: 'PCardDtlTaxAmount2'
            }
          }, {
            name: 'pinlessDebitTotalShpmnt',
            elementName: {
              localPart: 'PinlessDebitTotalShpmnt'
            }
          }, {
            name: 'authenticationECIInd',
            elementName: {
              localPart: 'AuthenticationECIInd'
            }
          }, {
            name: 'digitalTokenCryptogram',
            elementName: {
              localPart: 'DigitalTokenCryptogram'
            }
          }, {
            name: 'xid',
            elementName: {
              localPart: 'XID'
            }
          }, {
            name: 'scaTrustedMerchant',
            elementName: {
              localPart: 'SCATrustedMerchant'
            }
          }, {
            name: 'scaSecureCorporatePayment',
            elementName: {
              localPart: 'SCASecureCorporatePayment'
            }
          }, {
            name: 'scaTransactionRiskAnalysis',
            elementName: {
              localPart: 'SCATransactionRiskAnalysis'
            }
          }, {
            name: 'scaLowValuePayment',
            elementName: {
              localPart: 'SCALowValuePayment'
            }
          }, {
            name: 'scaMerchantInitiatedTransaction',
            elementName: {
              localPart: 'SCAMerchantInitiatedTransaction'
            }
          }, {
            name: 'scaRecurringPayment',
            elementName: {
              localPart: 'SCARecurringPayment'
            }
          }, {
            name: 'scaDelegation',
            elementName: {
              localPart: 'SCADelegation'
            }
          }, {
            name: 'mcProgramProtocol',
            elementName: {
              localPart: 'MCProgramProtocol'
            }
          }, {
            name: 'mcDirectoryTransID',
            elementName: {
              localPart: 'MCDirectoryTransID'
            }
          }, {
            name: 'ucafInd',
            elementName: {
              localPart: 'UCAFInd'
            }
          }, {
            name: 'pCardCommodityCode',
            elementName: {
              localPart: 'PCardCommodityCode'
            }
          }, {
            name: 'pc3InvoiceDiscTreatment',
            elementName: {
              localPart: 'PC3InvoiceDiscTreatment'
            }
          }, {
            name: 'pc3TaxTreatment',
            elementName: {
              localPart: 'PC3TaxTreatment'
            }
          }, {
            name: 'pc3UniqueVATInvoiceRefNum',
            elementName: {
              localPart: 'PC3UniqueVATInvoiceRefNum'
            }
          }, {
            name: 'pc3FreightShipVATtaxAmt',
            elementName: {
              localPart: 'PC3FreightShipVATtaxAmt'
            }
          }, {
            name: 'pc3ShipVATRate',
            elementName: {
              localPart: 'PC3ShipVATRate'
            }
          }, {
            name: 'partialReversalAmount',
            elementName: {
              localPart: 'PartialReversalAmount'
            }
          }]
      }, {
        localName: 'TransactionStatusType',
        typeName: 'transactionStatusType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'txRefNum',
            elementName: {
              localPart: 'TxRefNum'
            }
          }]
      }, {
        localName: 'PassengerTransportTripLegDataType',
        typeName: 'passengerTransportTripLegDataType',
        propertyInfos: [{
            name: 'tripLegRecordSequenceNumber',
            elementName: {
              localPart: 'TripLegRecordSequenceNumber'
            }
          }, {
            name: 'conjunctionTicketNumber',
            elementName: {
              localPart: 'ConjunctionTicketNumber'
            }
          }, {
            name: 'exchangeTicketNumber',
            elementName: {
              localPart: 'ExchangeTicketNumber'
            }
          }, {
            name: 'couponNumber',
            elementName: {
              localPart: 'CouponNumber'
            }
          }, {
            name: 'serviceClass',
            elementName: {
              localPart: 'ServiceClass'
            }
          }, {
            name: 'carrierCode',
            elementName: {
              localPart: 'CarrierCode'
            }
          }, {
            name: 'stopOverCode',
            elementName: {
              localPart: 'StopOverCode'
            }
          }, {
            name: 'cityOfOriginAirportCode',
            elementName: {
              localPart: 'CityOfOriginAirportCode'
            }
          }, {
            name: 'cityOfDestinationAirportCode',
            elementName: {
              localPart: 'CityOfDestinationAirportCode'
            }
          }, {
            name: 'flightNumber',
            elementName: {
              localPart: 'FlightNumber'
            }
          }, {
            name: 'departureDate',
            elementName: {
              localPart: 'DepartureDate'
            }
          }, {
            name: 'departureTime',
            elementName: {
              localPart: 'DepartureTime'
            }
          }, {
            name: 'arrivalTime',
            elementName: {
              localPart: 'ArrivalTime'
            }
          }, {
            name: 'fareBasisCode',
            elementName: {
              localPart: 'FareBasisCode'
            }
          }, {
            name: 'tripLegFare',
            elementName: {
              localPart: 'TripLegFare'
            }
          }, {
            name: 'tripLegTaxes',
            elementName: {
              localPart: 'TripLegTaxes'
            }
          }, {
            name: 'tripLegFee',
            elementName: {
              localPart: 'TripLegFee'
            }
          }, {
            name: 'endorsementsRestrictions',
            elementName: {
              localPart: 'EndorsementsRestrictions'
            }
          }]
      }, {
        localName: 'LPMBillingType',
        propertyInfos: [{
            name: 'altmopBillingAddress1',
            elementName: {
              localPart: 'AltmopBillingAddress1'
            }
          }, {
            name: 'altmopBillingAddress2',
            elementName: {
              localPart: 'AltmopBillingAddress2'
            }
          }, {
            name: 'altmopBillingPostalCode',
            elementName: {
              localPart: 'AltmopBillingPostalCode'
            }
          }, {
            name: 'altmopBillingState',
            elementName: {
              localPart: 'AltmopBillingState'
            }
          }, {
            name: 'altmopBillingCity',
            elementName: {
              localPart: 'AltmopBillingCity'
            }
          }, {
            name: 'altmopBillingCountryCode',
            elementName: {
              localPart: 'AltmopBillingCountryCode'
            }
          }, {
            name: 'altmopBillingFirstName',
            elementName: {
              localPart: 'AltmopBillingFirstName'
            }
          }, {
            name: 'altmopBillingLastName',
            elementName: {
              localPart: 'AltmopBillingLastName'
            }
          }, {
            name: 'altmopBillingOrganizationName',
            elementName: {
              localPart: 'AltmopBillingOrganizationName'
            }
          }, {
            name: 'altmopBillingEmail',
            elementName: {
              localPart: 'AltmopBillingEmail'
            }
          }, {
            name: 'altmopBillingTitle',
            elementName: {
              localPart: 'AltmopBillingTitle'
            }
          }, {
            name: 'altmopBillingPhone',
            elementName: {
              localPart: 'AltmopBillingPhone'
            }
          }]
      }, {
        localName: 'TravelTicketAndPassengerInfoType',
        typeName: 'travelTicketAndPassengerInfoType',
        propertyInfos: [{
            name: 'taaTicketNumber',
            elementName: {
              localPart: 'TAATicketNumber'
            }
          }, {
            name: 'taaPassengerName',
            elementName: {
              localPart: 'TAAPassengerName'
            }
          }, {
            name: 'taaCustomerCode',
            elementName: {
              localPart: 'TAACustomerCode'
            }
          }, {
            name: 'taaIssueDate',
            elementName: {
              localPart: 'TAAIssueDate'
            }
          }, {
            name: 'taaIssuingCarrier',
            elementName: {
              localPart: 'TAAIssuingCarrier'
            }
          }, {
            name: 'taaArrivalDate',
            elementName: {
              localPart: 'TAAArrivalDate'
            }
          }, {
            name: 'taaNumberInParty',
            elementName: {
              localPart: 'TAANumberInParty'
            }
          }, {
            name: 'taaConjunctionTicketIndicator',
            elementName: {
              localPart: 'TAAConjunctionTicketIndicator'
            }
          }, {
            name: 'taaElectronicTicketIndicator',
            elementName: {
              localPart: 'TAAElectronicTicketIndicator'
            }
          }, {
            name: 'taaRestrictedTicketIndicator',
            elementName: {
              localPart: 'TAARestrictedTicketIndicator'
            }
          }, {
            name: 'taaiataClientCode',
            elementName: {
              localPart: 'TAAIATAClientCode'
            }
          }, {
            name: 'taaCreditReasonIndicator',
            elementName: {
              localPart: 'TAACreditReasonIndicator'
            }
          }, {
            name: 'taaTicketChangeIndicator',
            elementName: {
              localPart: 'TAATicketChangeIndicator'
            }
          }, {
            name: 'taaDocumentType',
            elementName: {
              localPart: 'TAADocumentType'
            }
          }, {
            name: 'taaTicketType',
            elementName: {
              localPart: 'TAATicketType'
            }
          }, {
            name: 'taaFormatCode',
            elementName: {
              localPart: 'TAAFormatCode'
            }
          }, {
            name: 'taaTransactionType',
            elementName: {
              localPart: 'TAATransactionType'
            }
          }, {
            name: 'taaTicketingCarrierName',
            elementName: {
              localPart: 'TAATicketingCarrierName'
            }
          }, {
            name: 'taaTicketIssueCity',
            elementName: {
              localPart: 'TAATicketIssueCity'
            }
          }, {
            name: 'taaTravelPackageIndicator',
            elementName: {
              localPart: 'TAATravelPackageIndicator'
            }
          }]
      }, {
        localName: 'FlexCacheType',
        typeName: 'flexCacheType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'accountNum',
            elementName: {
              localPart: 'AccountNum'
            }
          }, {
            name: 'orderID',
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'amount',
            elementName: {
              localPart: 'Amount'
            }
          }, {
            name: 'cardSecVal',
            elementName: {
              localPart: 'CardSecVal'
            }
          }, {
            name: 'comments',
            elementName: {
              localPart: 'Comments'
            }
          }, {
            name: 'shippingRef',
            elementName: {
              localPart: 'ShippingRef'
            }
          }, {
            name: 'industryType',
            required: true,
            elementName: {
              localPart: 'IndustryType'
            },
            typeInfo: '.ValidIndustryTypes'
          }, {
            name: 'flexAutoAuthInd',
            required: true,
            elementName: {
              localPart: 'FlexAutoAuthInd'
            },
            values: ['Y', 'y', 'N', 'n']
          }, {
            name: 'flexPartialRedemptionInd',
            required: true,
            elementName: {
              localPart: 'FlexPartialRedemptionInd'
            },
            values: ['Y', 'y', 'N', 'n']
          }, {
            name: 'flexAction',
            required: true,
            elementName: {
              localPart: 'FlexAction'
            }
          }, {
            name: 'startAccountNum',
            elementName: {
              localPart: 'StartAccountNum'
            }
          }, {
            name: 'activationCount',
            elementName: {
              localPart: 'ActivationCount'
            }
          }, {
            name: 'txRefNum',
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'flexEmployeeNumber',
            elementName: {
              localPart: 'FlexEmployeeNumber'
            }
          }, {
            name: 'priorAuthID',
            elementName: {
              localPart: 'PriorAuthID'
            }
          }, {
            name: 'avSzip',
            elementName: {
              localPart: 'AVSzip'
            }
          }, {
            name: 'avSaddress1',
            elementName: {
              localPart: 'AVSaddress1'
            }
          }, {
            name: 'avSaddress2',
            elementName: {
              localPart: 'AVSaddress2'
            }
          }, {
            name: 'avScity',
            elementName: {
              localPart: 'AVScity'
            }
          }, {
            name: 'avSstate',
            elementName: {
              localPart: 'AVSstate'
            }
          }, {
            name: 'avSphoneNum',
            elementName: {
              localPart: 'AVSphoneNum'
            }
          }, {
            name: 'avSname',
            elementName: {
              localPart: 'AVSname'
            }
          }, {
            name: 'avScountryCode',
            elementName: {
              localPart: 'AVScountryCode'
            }
          }, {
            name: 'avsDestzip',
            elementName: {
              localPart: 'AVSDestzip'
            }
          }, {
            name: 'avsDestaddress1',
            elementName: {
              localPart: 'AVSDestaddress1'
            }
          }, {
            name: 'avsDestaddress2',
            elementName: {
              localPart: 'AVSDestaddress2'
            }
          }, {
            name: 'avsDestcity',
            elementName: {
              localPart: 'AVSDestcity'
            }
          }, {
            name: 'avsDeststate',
            elementName: {
              localPart: 'AVSDeststate'
            }
          }, {
            name: 'avsDestphoneNum',
            elementName: {
              localPart: 'AVSDestphoneNum'
            }
          }, {
            name: 'avsDestname',
            elementName: {
              localPart: 'AVSDestname'
            }
          }, {
            name: 'avsDestcountryCode',
            elementName: {
              localPart: 'AVSDestcountryCode'
            }
          }, {
            name: 'customerAni',
            elementName: {
              localPart: 'CustomerAni'
            }
          }, {
            name: 'avsPhoneType',
            elementName: {
              localPart: 'AVSPhoneType'
            }
          }, {
            name: 'avsDestPhoneType',
            elementName: {
              localPart: 'AVSDestPhoneType'
            }
          }, {
            name: 'customerEmail',
            elementName: {
              localPart: 'CustomerEmail'
            }
          }, {
            name: 'customerIpAddress',
            elementName: {
              localPart: 'CustomerIpAddress'
            }
          }, {
            name: 'emailAddressSubtype',
            elementName: {
              localPart: 'EmailAddressSubtype'
            }
          }, {
            name: 'customerBrowserName',
            elementName: {
              localPart: 'CustomerBrowserName'
            }
          }, {
            name: 'shippingMethod',
            elementName: {
              localPart: 'ShippingMethod'
            }
          }, {
            name: 'fraudAnalysis',
            elementName: {
              localPart: 'FraudAnalysis'
            },
            typeInfo: '.FraudAnalysisType'
          }, {
            name: 'vendorID',
            elementName: {
              localPart: 'VendorID'
            }
          }, {
            name: 'softwareID',
            elementName: {
              localPart: 'SoftwareID'
            }
          }, {
            name: 'readerSerialNumber',
            elementName: {
              localPart: 'ReaderSerialNumber'
            }
          }]
      }, {
        localName: 'SoftMerchantDescriptorsType',
        typeName: 'softMerchantDescriptorsType',
        propertyInfos: [{
            name: 'smddba',
            elementName: {
              localPart: 'SMDDBA'
            }
          }, {
            name: 'smdMerchantID',
            elementName: {
              localPart: 'SMDMerchantID'
            }
          }, {
            name: 'smdContactInfo',
            elementName: {
              localPart: 'SMDContactInfo'
            }
          }, {
            name: 'smdStreet',
            elementName: {
              localPart: 'SMDStreet'
            }
          }, {
            name: 'smdCity',
            elementName: {
              localPart: 'SMDCity'
            }
          }, {
            name: 'smdRegion',
            elementName: {
              localPart: 'SMDRegion'
            }
          }, {
            name: 'smdPostalCode',
            elementName: {
              localPart: 'SMDPostalCode'
            }
          }, {
            name: 'smdCountryCode',
            elementName: {
              localPart: 'SMDCountryCode'
            }
          }, {
            name: 'smdmcc',
            elementName: {
              localPart: 'SMDMCC'
            }
          }, {
            name: 'smdEmail',
            elementName: {
              localPart: 'SMDEmail'
            }
          }, {
            name: 'smdPhoneNumber',
            elementName: {
              localPart: 'SMDPhoneNumber'
            }
          }, {
            name: 'smdServiceEstablishmentNum',
            elementName: {
              localPart: 'SMDServiceEstablishmentNum'
            }
          }, {
            name: 'smdTaxExemptCharityInd',
            elementName: {
              localPart: 'SMDTaxExemptCharityInd'
            }
          }]
      }, {
        localName: 'DirectPayDetailType',
        typeName: 'directPayDetailType',
        propertyInfos: [{
            name: 'dpBusinessApplicationIdentifier',
            elementName: {
              localPart: 'DPBusinessApplicationIdentifier'
            }
          }, {
            name: 'dpServiceFee',
            elementName: {
              localPart: 'DPServiceFee'
            }
          }, {
            name: 'dpForeignExchangeMarkupFee',
            elementName: {
              localPart: 'DPForeignExchangeMarkupFee'
            }
          }, {
            name: 'dpSenderReferenceNumber',
            elementName: {
              localPart: 'DPSenderReferenceNumber'
            }
          }, {
            name: 'dpSenderAccountNumber',
            elementName: {
              localPart: 'DPSenderAccountNumber'
            }
          }, {
            name: 'dpSourceOfFunds',
            elementName: {
              localPart: 'DPSourceOfFunds'
            }
          }, {
            name: 'dpRecipientName',
            elementName: {
              localPart: 'DPRecipientName'
            }
          }, {
            name: 'dpSenderFirstName',
            elementName: {
              localPart: 'DPSenderFirstName'
            }
          }, {
            name: 'dpSenderLastName',
            elementName: {
              localPart: 'DPSenderLastName'
            }
          }, {
            name: 'dpSenderAddress',
            elementName: {
              localPart: 'DPSenderAddress'
            }
          }, {
            name: 'dpSenderCity',
            elementName: {
              localPart: 'DPSenderCity'
            }
          }, {
            name: 'dpSenderState',
            elementName: {
              localPart: 'DPSenderState'
            }
          }, {
            name: 'dpSenderZipCode',
            elementName: {
              localPart: 'DPSenderZipCode'
            }
          }, {
            name: 'dpSenderCountryCode',
            elementName: {
              localPart: 'DPSenderCountryCode'
            }
          }, {
            name: 'dpProviderName',
            elementName: {
              localPart: 'DPProviderName'
            }
          }]
      }, {
        localName: 'PC3LineItemArray',
        propertyInfos: [{
            name: 'pc3LineItem',
            required: true,
            maxOccurs: 998,
            collection: true,
            elementName: {
              localPart: 'PC3LineItem'
            },
            typeInfo: '.PC3LineItemType'
          }]
      }, {
        localName: 'ProfileType',
        typeName: 'profileType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'customerBin',
            required: true,
            elementName: {
              localPart: 'CustomerBin'
            },
            values: ['000001', '000002']
          }, {
            name: 'customerMerchantID',
            required: true,
            elementName: {
              localPart: 'CustomerMerchantID'
            }
          }, {
            name: 'customerName',
            elementName: {
              localPart: 'CustomerName'
            }
          }, {
            name: 'customerRefNum',
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerAddress1',
            elementName: {
              localPart: 'CustomerAddress1'
            }
          }, {
            name: 'customerAddress2',
            elementName: {
              localPart: 'CustomerAddress2'
            }
          }, {
            name: 'customerCity',
            elementName: {
              localPart: 'CustomerCity'
            }
          }, {
            name: 'customerState',
            elementName: {
              localPart: 'CustomerState'
            }
          }, {
            name: 'customerZIP',
            elementName: {
              localPart: 'CustomerZIP'
            }
          }, {
            name: 'customerEmail',
            elementName: {
              localPart: 'CustomerEmail'
            }
          }, {
            name: 'customerPhone',
            elementName: {
              localPart: 'CustomerPhone'
            }
          }, {
            name: 'customerCountryCode',
            elementName: {
              localPart: 'CustomerCountryCode'
            }
          }, {
            name: 'customerProfileAction',
            required: true,
            elementName: {
              localPart: 'CustomerProfileAction'
            },
            typeInfo: '.ProfileActionTypes'
          }, {
            name: 'customerProfileOrderOverrideInd',
            elementName: {
              localPart: 'CustomerProfileOrderOverrideInd'
            }
          }, {
            name: 'customerProfileFromOrderInd',
            elementName: {
              localPart: 'CustomerProfileFromOrderInd'
            }
          }, {
            name: 'orderDefaultDescription',
            elementName: {
              localPart: 'OrderDefaultDescription'
            }
          }, {
            name: 'orderDefaultAmount',
            elementName: {
              localPart: 'OrderDefaultAmount'
            }
          }, {
            name: 'customerAccountType',
            elementName: {
              localPart: 'CustomerAccountType'
            }
          }, {
            name: 'status',
            elementName: {
              localPart: 'Status'
            }
          }, {
            name: 'ccAccountNum',
            elementName: {
              localPart: 'CCAccountNum'
            }
          }, {
            name: 'ccExpireDate',
            elementName: {
              localPart: 'CCExpireDate'
            }
          }, {
            name: 'ecpAccountDDA',
            elementName: {
              localPart: 'ECPAccountDDA'
            }
          }, {
            name: 'ecpAccountType',
            elementName: {
              localPart: 'ECPAccountType'
            }
          }, {
            name: 'ecpAccountRT',
            elementName: {
              localPart: 'ECPAccountRT'
            }
          }, {
            name: 'ecpBankPmtDlv',
            elementName: {
              localPart: 'ECPBankPmtDlv'
            }
          }, {
            name: 'switchSoloStartDate',
            elementName: {
              localPart: 'SwitchSoloStartDate'
            }
          }, {
            name: 'switchSoloIssueNum',
            elementName: {
              localPart: 'SwitchSoloIssueNum'
            }
          }, {
            name: 'mbType',
            elementName: {
              localPart: 'MBType'
            }
          }, {
            name: 'mbOrderIdGenerationMethod',
            elementName: {
              localPart: 'MBOrderIdGenerationMethod'
            }
          }, {
            name: 'mbRecurringStartDate',
            elementName: {
              localPart: 'MBRecurringStartDate'
            }
          }, {
            name: 'mbRecurringEndDate',
            elementName: {
              localPart: 'MBRecurringEndDate'
            }
          }, {
            name: 'mbRecurringNoEndDateFlag',
            elementName: {
              localPart: 'MBRecurringNoEndDateFlag'
            }
          }, {
            name: 'mbRecurringMaxBillings',
            elementName: {
              localPart: 'MBRecurringMaxBillings'
            }
          }, {
            name: 'mbRecurringFrequency',
            elementName: {
              localPart: 'MBRecurringFrequency'
            }
          }, {
            name: 'mbDeferredBillDate',
            elementName: {
              localPart: 'MBDeferredBillDate'
            }
          }, {
            name: 'mbMicroPaymentMaxDollarValue',
            elementName: {
              localPart: 'MBMicroPaymentMaxDollarValue'
            }
          }, {
            name: 'mbMicroPaymentMaxBillingDays',
            elementName: {
              localPart: 'MBMicroPaymentMaxBillingDays'
            }
          }, {
            name: 'mbMicroPaymentMaxTransactions',
            elementName: {
              localPart: 'MBMicroPaymentMaxTransactions'
            }
          }, {
            name: 'mbCancelDate',
            elementName: {
              localPart: 'MBCancelDate'
            }
          }, {
            name: 'mbRestoreBillingDate',
            elementName: {
              localPart: 'MBRestoreBillingDate'
            }
          }, {
            name: 'mbRemoveFlag',
            elementName: {
              localPart: 'MBRemoveFlag'
            }
          }, {
            name: 'euddCountryCode',
            elementName: {
              localPart: 'EUDDCountryCode'
            }
          }, {
            name: 'euddBankSortCode',
            elementName: {
              localPart: 'EUDDBankSortCode'
            }
          }, {
            name: 'euddRibCode',
            elementName: {
              localPart: 'EUDDRibCode'
            }
          }, {
            name: 'sdMerchantName',
            elementName: {
              localPart: 'SDMerchantName'
            }
          }, {
            name: 'sdProductDescription',
            elementName: {
              localPart: 'SDProductDescription'
            }
          }, {
            name: 'sdMerchantCity',
            elementName: {
              localPart: 'SDMerchantCity'
            }
          }, {
            name: 'sdMerchantPhone',
            elementName: {
              localPart: 'SDMerchantPhone'
            }
          }, {
            name: 'sdMerchantURL',
            elementName: {
              localPart: 'SDMerchantURL'
            }
          }, {
            name: 'sdMerchantEmail',
            elementName: {
              localPart: 'SDMerchantEmail'
            }
          }, {
            name: 'billerReferenceNumber',
            elementName: {
              localPart: 'BillerReferenceNumber'
            }
          }, {
            name: 'accountUpdaterEligibility',
            elementName: {
              localPart: 'AccountUpdaterEligibility'
            }
          }, {
            name: 'euddBankBranchCode',
            elementName: {
              localPart: 'EUDDBankBranchCode'
            }
          }, {
            name: 'euddiban',
            elementName: {
              localPart: 'EUDDIBAN'
            }
          }, {
            name: 'euddbic',
            elementName: {
              localPart: 'EUDDBIC'
            }
          }, {
            name: 'euddMandateSignatureDate',
            elementName: {
              localPart: 'EUDDMandateSignatureDate'
            }
          }, {
            name: 'euddMandateID',
            elementName: {
              localPart: 'EUDDMandateID'
            }
          }, {
            name: 'euddMandateType',
            elementName: {
              localPart: 'EUDDMandateType'
            }
          }, {
            name: 'dpanInd',
            elementName: {
              localPart: 'DPANInd'
            }
          }, {
            name: 'tokenRequestorID',
            elementName: {
              localPart: 'TokenRequestorID'
            }
          }, {
            name: 'mitMsgType',
            elementName: {
              localPart: 'MITMsgType'
            }
          }, {
            name: 'mitSubmittedTransactionID',
            elementName: {
              localPart: 'MITSubmittedTransactionID'
            }
          }, {
            name: 'pinlessDebitTxnType',
            elementName: {
              localPart: 'PinlessDebitTxnType'
            }
          }, {
            name: 'pinlessDebitMerchantUrl',
            elementName: {
              localPart: 'PinlessDebitMerchantUrl'
            }
          }, {
            name: 'cardBrand',
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'healthBenefitCardInd',
            elementName: {
              localPart: 'HealthBenefitCardInd'
            }
          }]
      }, {
        localName: 'InquiryType',
        typeName: 'inquiryType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'orderID',
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'inquiryRetryNumber',
            required: true,
            elementName: {
              localPart: 'InquiryRetryNumber'
            }
          }]
      }, {
        localName: 'NewOrderType',
        typeName: 'newOrderType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'industryType',
            required: true,
            elementName: {
              localPart: 'IndustryType'
            },
            typeInfo: '.ValidIndustryTypes'
          }, {
            name: 'messageType',
            required: true,
            elementName: {
              localPart: 'MessageType'
            },
            typeInfo: '.ValidTransTypes'
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'cardBrand',
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'accountNum',
            elementName: {
              localPart: 'AccountNum'
            }
          }, {
            name: 'exp',
            elementName: {
              localPart: 'Exp'
            }
          }, {
            name: 'currencyCode',
            elementName: {
              localPart: 'CurrencyCode'
            }
          }, {
            name: 'currencyExponent',
            elementName: {
              localPart: 'CurrencyExponent'
            }
          }, {
            name: 'cardSecValInd',
            elementName: {
              localPart: 'CardSecValInd'
            }
          }, {
            name: 'cardSecVal',
            elementName: {
              localPart: 'CardSecVal'
            }
          }, {
            name: 'debitCardIssueNum',
            elementName: {
              localPart: 'DebitCardIssueNum'
            }
          }, {
            name: 'debitCardStartDate',
            elementName: {
              localPart: 'DebitCardStartDate'
            }
          }, {
            name: 'bcRtNum',
            elementName: {
              localPart: 'BCRtNum'
            }
          }, {
            name: 'checkDDA',
            elementName: {
              localPart: 'CheckDDA'
            }
          }, {
            name: 'bankAccountType',
            elementName: {
              localPart: 'BankAccountType'
            }
          }, {
            name: 'ecpAuthMethod',
            elementName: {
              localPart: 'ECPAuthMethod'
            }
          }, {
            name: 'bankPmtDelv',
            elementName: {
              localPart: 'BankPmtDelv'
            }
          }, {
            name: 'avSzip',
            elementName: {
              localPart: 'AVSzip'
            }
          }, {
            name: 'avSaddress1',
            elementName: {
              localPart: 'AVSaddress1'
            }
          }, {
            name: 'avSaddress2',
            elementName: {
              localPart: 'AVSaddress2'
            }
          }, {
            name: 'avScity',
            elementName: {
              localPart: 'AVScity'
            }
          }, {
            name: 'avSstate',
            elementName: {
              localPart: 'AVSstate'
            }
          }, {
            name: 'avSphoneNum',
            elementName: {
              localPart: 'AVSphoneNum'
            }
          }, {
            name: 'avSname',
            elementName: {
              localPart: 'AVSname'
            }
          }, {
            name: 'avScountryCode',
            elementName: {
              localPart: 'AVScountryCode'
            }
          }, {
            name: 'avsDestzip',
            elementName: {
              localPart: 'AVSDestzip'
            }
          }, {
            name: 'avsDestaddress1',
            elementName: {
              localPart: 'AVSDestaddress1'
            }
          }, {
            name: 'avsDestaddress2',
            elementName: {
              localPart: 'AVSDestaddress2'
            }
          }, {
            name: 'avsDestcity',
            elementName: {
              localPart: 'AVSDestcity'
            }
          }, {
            name: 'avsDeststate',
            elementName: {
              localPart: 'AVSDeststate'
            }
          }, {
            name: 'avsDestphoneNum',
            elementName: {
              localPart: 'AVSDestphoneNum'
            }
          }, {
            name: 'avsDestname',
            elementName: {
              localPart: 'AVSDestname'
            }
          }, {
            name: 'avsDestcountryCode',
            elementName: {
              localPart: 'AVSDestcountryCode'
            }
          }, {
            name: 'customerProfileFromOrderInd',
            elementName: {
              localPart: 'CustomerProfileFromOrderInd'
            }
          }, {
            name: 'customerRefNum',
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerProfileOrderOverrideInd',
            elementName: {
              localPart: 'CustomerProfileOrderOverrideInd'
            }
          }, {
            name: 'status',
            elementName: {
              localPart: 'Status'
            }
          }, {
            name: 'authenticationECIInd',
            elementName: {
              localPart: 'AuthenticationECIInd'
            }
          }, {
            name: 'cavv',
            elementName: {
              localPart: 'CAVV'
            }
          }, {
            name: 'xid',
            elementName: {
              localPart: 'XID'
            }
          }, {
            name: 'priorAuthID',
            elementName: {
              localPart: 'PriorAuthID'
            }
          }, {
            name: 'orderID',
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'amount',
            elementName: {
              localPart: 'Amount'
            }
          }, {
            name: 'comments',
            elementName: {
              localPart: 'Comments'
            }
          }, {
            name: 'shippingRef',
            elementName: {
              localPart: 'ShippingRef'
            }
          }, {
            name: 'taxInd',
            elementName: {
              localPart: 'TaxInd'
            }
          }, {
            name: 'tax',
            elementName: {
              localPart: 'Tax'
            }
          }, {
            name: 'amexTranAdvAddn1',
            elementName: {
              localPart: 'AMEXTranAdvAddn1'
            }
          }, {
            name: 'amexTranAdvAddn2',
            elementName: {
              localPart: 'AMEXTranAdvAddn2'
            }
          }, {
            name: 'amexTranAdvAddn3',
            elementName: {
              localPart: 'AMEXTranAdvAddn3'
            }
          }, {
            name: 'amexTranAdvAddn4',
            elementName: {
              localPart: 'AMEXTranAdvAddn4'
            }
          }, {
            name: 'aav',
            elementName: {
              localPart: 'AAV'
            }
          }, {
            name: 'sdMerchantName',
            elementName: {
              localPart: 'SDMerchantName'
            }
          }, {
            name: 'sdProductDescription',
            elementName: {
              localPart: 'SDProductDescription'
            }
          }, {
            name: 'sdMerchantCity',
            elementName: {
              localPart: 'SDMerchantCity'
            }
          }, {
            name: 'sdMerchantPhone',
            elementName: {
              localPart: 'SDMerchantPhone'
            }
          }, {
            name: 'sdMerchantURL',
            elementName: {
              localPart: 'SDMerchantURL'
            }
          }, {
            name: 'sdMerchantEmail',
            elementName: {
              localPart: 'SDMerchantEmail'
            }
          }, {
            name: 'recurringInd',
            elementName: {
              localPart: 'RecurringInd'
            }
          }, {
            name: 'euddCountryCode',
            elementName: {
              localPart: 'EUDDCountryCode'
            }
          }, {
            name: 'euddBankSortCode',
            elementName: {
              localPart: 'EUDDBankSortCode'
            }
          }, {
            name: 'euddRibCode',
            elementName: {
              localPart: 'EUDDRibCode'
            }
          }, {
            name: 'bmlCustomerIP',
            elementName: {
              localPart: 'BMLCustomerIP'
            }
          }, {
            name: 'bmlCustomerEmail',
            elementName: {
              localPart: 'BMLCustomerEmail'
            }
          }, {
            name: 'bmlShippingCost',
            elementName: {
              localPart: 'BMLShippingCost'
            }
          }, {
            name: 'bmltncVersion',
            elementName: {
              localPart: 'BMLTNCVersion'
            }
          }, {
            name: 'bmlCustomerRegistrationDate',
            elementName: {
              localPart: 'BMLCustomerRegistrationDate'
            }
          }, {
            name: 'bmlCustomerTypeFlag',
            elementName: {
              localPart: 'BMLCustomerTypeFlag'
            }
          }, {
            name: 'bmlItemCategory',
            elementName: {
              localPart: 'BMLItemCategory'
            }
          }, {
            name: 'bmlPreapprovalInvitationNum',
            elementName: {
              localPart: 'BMLPreapprovalInvitationNum'
            }
          }, {
            name: 'bmlMerchantPromotionalCode',
            elementName: {
              localPart: 'BMLMerchantPromotionalCode'
            }
          }, {
            name: 'bmlCustomerBirthDate',
            elementName: {
              localPart: 'BMLCustomerBirthDate'
            }
          }, {
            name: 'bmlCustomerSSN',
            elementName: {
              localPart: 'BMLCustomerSSN'
            }
          }, {
            name: 'bmlCustomerAnnualIncome',
            elementName: {
              localPart: 'BMLCustomerAnnualIncome'
            }
          }, {
            name: 'bmlCustomerResidenceStatus',
            elementName: {
              localPart: 'BMLCustomerResidenceStatus'
            }
          }, {
            name: 'bmlCustomerCheckingAccount',
            elementName: {
              localPart: 'BMLCustomerCheckingAccount'
            }
          }, {
            name: 'bmlCustomerSavingsAccount',
            elementName: {
              localPart: 'BMLCustomerSavingsAccount'
            }
          }, {
            name: 'bmlProductDeliveryType',
            elementName: {
              localPart: 'BMLProductDeliveryType'
            }
          }, {
            name: 'billerReferenceNumber',
            elementName: {
              localPart: 'BillerReferenceNumber'
            }
          }, {
            name: 'mbType',
            elementName: {
              localPart: 'MBType'
            }
          }, {
            name: 'mbOrderIdGenerationMethod',
            elementName: {
              localPart: 'MBOrderIdGenerationMethod'
            }
          }, {
            name: 'mbRecurringStartDate',
            elementName: {
              localPart: 'MBRecurringStartDate'
            }
          }, {
            name: 'mbRecurringEndDate',
            elementName: {
              localPart: 'MBRecurringEndDate'
            }
          }, {
            name: 'mbRecurringNoEndDateFlag',
            elementName: {
              localPart: 'MBRecurringNoEndDateFlag'
            }
          }, {
            name: 'mbRecurringMaxBillings',
            elementName: {
              localPart: 'MBRecurringMaxBillings'
            }
          }, {
            name: 'mbRecurringFrequency',
            elementName: {
              localPart: 'MBRecurringFrequency'
            }
          }, {
            name: 'mbDeferredBillDate',
            elementName: {
              localPart: 'MBDeferredBillDate'
            }
          }, {
            name: 'mbMicroPaymentMaxDollarValue',
            elementName: {
              localPart: 'MBMicroPaymentMaxDollarValue'
            }
          }, {
            name: 'mbMicroPaymentMaxBillingDays',
            elementName: {
              localPart: 'MBMicroPaymentMaxBillingDays'
            }
          }, {
            name: 'mbMicroPaymentMaxTransactions',
            elementName: {
              localPart: 'MBMicroPaymentMaxTransactions'
            }
          }, {
            name: 'txRefNum',
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'pcOrderNum',
            elementName: {
              localPart: 'PCOrderNum'
            }
          }, {
            name: 'pcDestZip',
            elementName: {
              localPart: 'PCDestZip'
            }
          }, {
            name: 'pcDestName',
            elementName: {
              localPart: 'PCDestName'
            }
          }, {
            name: 'pcDestAddress1',
            elementName: {
              localPart: 'PCDestAddress1'
            }
          }, {
            name: 'pcDestAddress2',
            elementName: {
              localPart: 'PCDestAddress2'
            }
          }, {
            name: 'pcDestCity',
            elementName: {
              localPart: 'PCDestCity'
            }
          }, {
            name: 'pcDestState',
            elementName: {
              localPart: 'PCDestState'
            }
          }, {
            name: 'pc3FreightAmt',
            elementName: {
              localPart: 'PC3FreightAmt'
            }
          }, {
            name: 'pc3DutyAmt',
            elementName: {
              localPart: 'PC3DutyAmt'
            }
          }, {
            name: 'pc3DestCountryCd',
            elementName: {
              localPart: 'PC3DestCountryCd'
            }
          }, {
            name: 'pc3ShipFromZip',
            elementName: {
              localPart: 'PC3ShipFromZip'
            }
          }, {
            name: 'pc3DiscAmt',
            elementName: {
              localPart: 'PC3DiscAmt'
            }
          }, {
            name: 'pc3VATtaxAmt',
            elementName: {
              localPart: 'PC3VATtaxAmt'
            }
          }, {
            name: 'pc3VATtaxRate',
            elementName: {
              localPart: 'PC3VATtaxRate'
            }
          }, {
            name: 'pc3AltTaxInd',
            elementName: {
              localPart: 'PC3AltTaxInd'
            }
          }, {
            name: 'pc3AltTaxAmt',
            elementName: {
              localPart: 'PC3AltTaxAmt'
            }
          }, {
            name: 'pc3LineItemCount',
            elementName: {
              localPart: 'PC3LineItemCount'
            }
          }, {
            name: 'pc3LineItemArray',
            elementName: {
              localPart: 'PC3LineItemArray'
            },
            typeInfo: '.PC3LineItemArray'
          }, {
            name: 'partialAuthInd',
            elementName: {
              localPart: 'PartialAuthInd'
            }
          }, {
            name: 'accountUpdaterEligibility',
            elementName: {
              localPart: 'AccountUpdaterEligibility'
            }
          }, {
            name: 'useStoredAAVInd',
            elementName: {
              localPart: 'UseStoredAAVInd'
            }
          }, {
            name: 'ecpActionCode',
            elementName: {
              localPart: 'ECPActionCode'
            }
          }, {
            name: 'ecpCheckSerialNumber',
            elementName: {
              localPart: 'ECPCheckSerialNumber'
            }
          }, {
            name: 'ecpTerminalCity',
            elementName: {
              localPart: 'ECPTerminalCity'
            }
          }, {
            name: 'ecpTerminalState',
            elementName: {
              localPart: 'ECPTerminalState'
            }
          }, {
            name: 'ecpImageReferenceNumber',
            elementName: {
              localPart: 'ECPImageReferenceNumber'
            }
          }, {
            name: 'customerAni',
            elementName: {
              localPart: 'CustomerAni'
            }
          }, {
            name: 'avsPhoneType',
            elementName: {
              localPart: 'AVSPhoneType'
            }
          }, {
            name: 'avsDestPhoneType',
            elementName: {
              localPart: 'AVSDestPhoneType'
            }
          }, {
            name: 'customerEmail',
            elementName: {
              localPart: 'CustomerEmail'
            }
          }, {
            name: 'customerIpAddress',
            elementName: {
              localPart: 'CustomerIpAddress'
            }
          }, {
            name: 'emailAddressSubtype',
            elementName: {
              localPart: 'EmailAddressSubtype'
            }
          }, {
            name: 'customerBrowserName',
            elementName: {
              localPart: 'CustomerBrowserName'
            }
          }, {
            name: 'shippingMethod',
            elementName: {
              localPart: 'ShippingMethod'
            }
          }, {
            name: 'fraudAnalysis',
            elementName: {
              localPart: 'FraudAnalysis'
            },
            typeInfo: '.FraudAnalysisType'
          }, {
            name: 'softMerchantDescriptors',
            elementName: {
              localPart: 'SoftMerchantDescriptors'
            },
            typeInfo: '.SoftMerchantDescriptorsType'
          }, {
            name: 'cardIndicators',
            elementName: {
              localPart: 'CardIndicators'
            }
          }, {
            name: 'euddBankBranchCode',
            elementName: {
              localPart: 'EUDDBankBranchCode'
            }
          }, {
            name: 'euddiban',
            elementName: {
              localPart: 'EUDDIBAN'
            }
          }, {
            name: 'euddbic',
            elementName: {
              localPart: 'EUDDBIC'
            }
          }, {
            name: 'euddMandateSignatureDate',
            elementName: {
              localPart: 'EUDDMandateSignatureDate'
            }
          }, {
            name: 'euddMandateID',
            elementName: {
              localPart: 'EUDDMandateID'
            }
          }, {
            name: 'euddMandateType',
            elementName: {
              localPart: 'EUDDMandateType'
            }
          }, {
            name: 'paymentInd',
            elementName: {
              localPart: 'PaymentInd'
            }
          }, {
            name: 'txnSurchargeAmt',
            elementName: {
              localPart: 'TxnSurchargeAmt'
            }
          }, {
            name: 'paymentActionInd',
            elementName: {
              localPart: 'PaymentActionInd'
            }
          }, {
            name: 'dpanInd',
            elementName: {
              localPart: 'DPANInd'
            }
          }, {
            name: 'aevv',
            elementName: {
              localPart: 'AEVV'
            }
          }, {
            name: 'dwWalletID',
            elementName: {
              localPart: 'DWWalletID'
            }
          }, {
            name: 'dwsli',
            elementName: {
              localPart: 'DWSLI'
            }
          }, {
            name: 'dwIncentiveInd',
            elementName: {
              localPart: 'DWIncentiveInd'
            }
          }, {
            name: 'digitalWalletType',
            elementName: {
              localPart: 'DigitalWalletType'
            }
          }, {
            name: 'prBirthDate',
            elementName: {
              localPart: 'PRBirthDate'
            }
          }, {
            name: 'prMaskedAccountNumber',
            elementName: {
              localPart: 'PRMaskedAccountNumber'
            }
          }, {
            name: 'prPartialPostalCode',
            elementName: {
              localPart: 'PRPartialPostalCode'
            }
          }, {
            name: 'prLastName',
            elementName: {
              localPart: 'PRLastName'
            }
          }, {
            name: 'tokenRequestorID',
            elementName: {
              localPart: 'TokenRequestorID'
            }
          }, {
            name: 'pCardRequestorName',
            elementName: {
              localPart: 'PCardRequestorName'
            }
          }, {
            name: 'pCardLocalTaxRate',
            elementName: {
              localPart: 'PCardLocalTaxRate'
            }
          }, {
            name: 'pCardNationalTax',
            elementName: {
              localPart: 'PCardNationalTax'
            }
          }, {
            name: 'pCardPstTaxRegNumber',
            elementName: {
              localPart: 'PCardPstTaxRegNumber'
            }
          }, {
            name: 'pCardCustomerVatRegNumber',
            elementName: {
              localPart: 'PCardCustomerVatRegNumber'
            }
          }, {
            name: 'pCardMerchantVatRegNumber',
            elementName: {
              localPart: 'PCardMerchantVatRegNumber'
            }
          }, {
            name: 'pCardTotalTaxAmount',
            elementName: {
              localPart: 'PCardTotalTaxAmount'
            }
          }, {
            name: 'pCardDtlTaxAmount1Ind',
            elementName: {
              localPart: 'PCardDtlTaxAmount1Ind'
            }
          }, {
            name: 'pCardDtlTaxAmount1',
            elementName: {
              localPart: 'PCardDtlTaxAmount1'
            }
          }, {
            name: 'pCardDtlTaxAmount2Ind',
            elementName: {
              localPart: 'PCardDtlTaxAmount2Ind'
            }
          }, {
            name: 'pCardDtlTaxAmount2',
            elementName: {
              localPart: 'PCardDtlTaxAmount2'
            }
          }, {
            name: 'digitalTokenCryptogram',
            elementName: {
              localPart: 'DigitalTokenCryptogram'
            }
          }, {
            name: 'pCardNationalTaxRate',
            elementName: {
              localPart: 'PCardNationalTaxRate'
            }
          }, {
            name: 'pCardLocalTaxAmount',
            elementName: {
              localPart: 'PCardLocalTaxAmount'
            }
          }, {
            name: 'ewsFirstName',
            elementName: {
              localPart: 'EWSFirstName'
            }
          }, {
            name: 'ewsMiddleName',
            elementName: {
              localPart: 'EWSMiddleName'
            }
          }, {
            name: 'ewsLastName',
            elementName: {
              localPart: 'EWSLastName'
            }
          }, {
            name: 'ewsBusinessName',
            elementName: {
              localPart: 'EWSBusinessName'
            }
          }, {
            name: 'ewsAddressLine1',
            elementName: {
              localPart: 'EWSAddressLine1'
            }
          }, {
            name: 'ewsAddressLine2',
            elementName: {
              localPart: 'EWSAddressLine2'
            }
          }, {
            name: 'ewsCity',
            elementName: {
              localPart: 'EWSCity'
            }
          }, {
            name: 'ewsState',
            elementName: {
              localPart: 'EWSState'
            }
          }, {
            name: 'ewsZip',
            elementName: {
              localPart: 'EWSZip'
            }
          }, {
            name: 'ewsPhoneType',
            elementName: {
              localPart: 'EWSPhoneType'
            }
          }, {
            name: 'ewsPhoneNumber',
            elementName: {
              localPart: 'EWSPhoneNumber'
            }
          }, {
            name: 'ewsCheckSerialNumber',
            elementName: {
              localPart: 'EWSCheckSerialNumber'
            }
          }, {
            name: 'ewsssntin',
            elementName: {
              localPart: 'EWSSSNTIN'
            }
          }, {
            name: 'ewsdob',
            elementName: {
              localPart: 'EWSDOB'
            }
          }, {
            name: 'ewsidType',
            elementName: {
              localPart: 'EWSIDType'
            }
          }, {
            name: 'ewsidNumber',
            elementName: {
              localPart: 'EWSIDNumber'
            }
          }, {
            name: 'ewsidState',
            elementName: {
              localPart: 'EWSIDState'
            }
          }, {
            name: 'ecpSameDayInd',
            elementName: {
              localPart: 'ECPSameDayInd'
            }
          }, {
            name: 'ecpReDepositFreq',
            elementName: {
              localPart: 'ECPReDepositFreq'
            }
          }, {
            name: 'ecpReDepositInd',
            elementName: {
              localPart: 'ECPReDepositInd'
            }
          }, {
            name: 'fxOptoutInd',
            elementName: {
              localPart: 'FXOptoutInd'
            }
          }, {
            name: 'fxRateHandlingInd',
            elementName: {
              localPart: 'FXRateHandlingInd'
            }
          }, {
            name: 'fxRateID',
            elementName: {
              localPart: 'FXRateID'
            }
          }, {
            name: 'fxExchangeRate',
            elementName: {
              localPart: 'FXExchangeRate'
            }
          }, {
            name: 'fxPresentmentCurrency',
            elementName: {
              localPart: 'FXPresentmentCurrency'
            }
          }, {
            name: 'fxSettlementCurrency',
            elementName: {
              localPart: 'FXSettlementCurrency'
            }
          }, {
            name: 'mitMsgType',
            elementName: {
              localPart: 'MITMsgType'
            }
          }, {
            name: 'mitStoredCredentialInd',
            elementName: {
              localPart: 'MITStoredCredentialInd'
            }
          }, {
            name: 'mitSubmittedTransactionID',
            elementName: {
              localPart: 'MITSubmittedTransactionID'
            }
          }, {
            name: 'pinlessDebitTxnType',
            elementName: {
              localPart: 'PinlessDebitTxnType'
            }
          }, {
            name: 'pinlessDebitMerchantUrl',
            elementName: {
              localPart: 'PinlessDebitMerchantUrl'
            }
          }, {
            name: 'rtauOptOutInd',
            elementName: {
              localPart: 'RtauOptOutInd'
            }
          }, {
            name: 'pymtBrandProgramCode',
            elementName: {
              localPart: 'PymtBrandProgramCode'
            }
          }, {
            name: 'tokenTxnType',
            elementName: {
              localPart: 'TokenTxnType'
            }
          }, {
            name: 'scaTrustedMerchant',
            elementName: {
              localPart: 'SCATrustedMerchant'
            }
          }, {
            name: 'scaSecureCorporatePayment',
            elementName: {
              localPart: 'SCASecureCorporatePayment'
            }
          }, {
            name: 'scaTransactionRiskAnalysis',
            elementName: {
              localPart: 'SCATransactionRiskAnalysis'
            }
          }, {
            name: 'scaLowValuePayment',
            elementName: {
              localPart: 'SCALowValuePayment'
            }
          }, {
            name: 'scaMerchantInitiatedTransaction',
            elementName: {
              localPart: 'SCAMerchantInitiatedTransaction'
            }
          }, {
            name: 'scaRecurringPayment',
            elementName: {
              localPart: 'SCARecurringPayment'
            }
          }, {
            name: 'scaDelegation',
            elementName: {
              localPart: 'SCADelegation'
            }
          }, {
            name: 'deferredAuth',
            elementName: {
              localPart: 'DeferredAuth'
            }
          }, {
            name: 'mcProgramProtocol',
            elementName: {
              localPart: 'MCProgramProtocol'
            }
          }, {
            name: 'mcDirectoryTransID',
            elementName: {
              localPart: 'MCDirectoryTransID'
            }
          }, {
            name: 'ucafInd',
            elementName: {
              localPart: 'UCAFInd'
            }
          }, {
            name: 'dsrpCryptogram',
            elementName: {
              localPart: 'DsrpCryptogram'
            }
          }, {
            name: 'targetCardBrand',
            elementName: {
              localPart: 'TargetCardBrand'
            }
          }, {
            name: 'pieSubscriberID',
            elementName: {
              localPart: 'PieSubscriberID'
            }
          }, {
            name: 'pieFormatID',
            elementName: {
              localPart: 'PieFormatID'
            }
          }, {
            name: 'pieIntegrityCheck',
            elementName: {
              localPart: 'PieIntegrityCheck'
            }
          }, {
            name: 'pieKeyID',
            elementName: {
              localPart: 'PieKeyID'
            }
          }, {
            name: 'piePhaseID',
            elementName: {
              localPart: 'PiePhaseID'
            }
          }, {
            name: 'pieMode',
            elementName: {
              localPart: 'PieMode'
            }
          }, {
            name: 'debitRoutingNetwork',
            elementName: {
              localPart: 'DebitRoutingNetwork'
            }
          }, {
            name: 'travelTicketAndPassengerInfo',
            elementName: {
              localPart: 'TravelTicketAndPassengerInfo'
            },
            typeInfo: '.TravelTicketAndPassengerInfoType'
          }, {
            name: 'travelFareDetail',
            elementName: {
              localPart: 'TravelFareDetail'
            },
            typeInfo: '.TravelFareDetailType'
          }, {
            name: 'cruiseTravelDetails',
            elementName: {
              localPart: 'CruiseTravelDetails'
            },
            typeInfo: '.CruiseTravelDetailsType'
          }, {
            name: 'qhpAmt',
            elementName: {
              localPart: 'QhpAmt'
            }
          }, {
            name: 'rxAmt',
            elementName: {
              localPart: 'RxAmt'
            }
          }, {
            name: 'visionAmt',
            elementName: {
              localPart: 'VisionAmt'
            }
          }, {
            name: 'clinicOtherAmt',
            elementName: {
              localPart: 'ClinicOtherAmt'
            }
          }, {
            name: 'dentalAmt',
            elementName: {
              localPart: 'DentalAmt'
            }
          }, {
            name: 'iiasFlag',
            elementName: {
              localPart: 'IiasFlag'
            }
          }, {
            name: 'passengerTransportTripLegs',
            elementName: {
              localPart: 'PassengerTransportTripLegs'
            },
            typeInfo: '.PassengerTransportTripLegArray'
          }, {
            name: 'vendorID',
            elementName: {
              localPart: 'VendorID'
            }
          }, {
            name: 'softwareID',
            elementName: {
              localPart: 'SoftwareID'
            }
          }, {
            name: 'readerSerialNumber',
            elementName: {
              localPart: 'ReaderSerialNumber'
            }
          }, {
            name: 'alternativePaymentMethod',
            elementName: {
              localPart: 'AlternativePaymentMethod'
            },
            typeInfo: '.AlternativePaymentMethodType'
          }, {
            name: 'tokenAssuranceMethod',
            elementName: {
              localPart: 'TokenAssuranceMethod'
            }
          }, {
            name: 'pCardCommodityCode',
            elementName: {
              localPart: 'PCardCommodityCode'
            }
          }, {
            name: 'pc3InvoiceDiscTreatment',
            elementName: {
              localPart: 'PC3InvoiceDiscTreatment'
            }
          }, {
            name: 'pc3TaxTreatment',
            elementName: {
              localPart: 'PC3TaxTreatment'
            }
          }, {
            name: 'pc3UniqueVATInvoiceRefNum',
            elementName: {
              localPart: 'PC3UniqueVATInvoiceRefNum'
            }
          }, {
            name: 'pc3FreightShipVATtaxAmt',
            elementName: {
              localPart: 'PC3FreightShipVATtaxAmt'
            }
          }, {
            name: 'pc3ShipVATRate',
            elementName: {
              localPart: 'PC3ShipVATRate'
            }
          }, {
            name: 'submittedNetworkTransactionId',
            elementName: {
              localPart: 'SubmittedNetworkTransactionId'
            }
          }, {
            name: 'directPayDetail',
            elementName: {
              localPart: 'DirectPayDetail'
            },
            typeInfo: '.DirectPayDetailType'
          }]
      }, {
        localName: 'PassengerTransportTripLegArray',
        typeName: 'passengerTransportTripLegArray',
        propertyInfos: [{
            name: 'passengerTransportTripLeg',
            required: true,
            collection: true,
            elementName: {
              localPart: 'PassengerTransportTripLeg'
            },
            typeInfo: '.PassengerTransportTripLegDataType'
          }]
      }, {
        localName: 'AlternativePaymentMethodType',
        typeName: 'alternativePaymentMethodType',
        propertyInfos: [{
            name: 'paymentMethod',
            elementName: {
              localPart: 'PaymentMethod'
            }
          }, {
            name: 'customerCurrencyCode',
            elementName: {
              localPart: 'CustomerCurrencyCode'
            }
          }, {
            name: 'customerCountryCode',
            elementName: {
              localPart: 'CustomerCountryCode'
            }
          }, {
            name: 'customerPreferredLanguage',
            elementName: {
              localPart: 'CustomerPreferredLanguage'
            }
          }, {
            name: 'merchantRedirectURL',
            elementName: {
              localPart: 'MerchantRedirectURL'
            }
          }, {
            name: 'customerLocale',
            elementName: {
              localPart: 'CustomerLocale'
            }
          }, {
            name: 'dynamicDescriptor',
            elementName: {
              localPart: 'DynamicDescriptor'
            }
          }, {
            name: 'shopperFirstName',
            elementName: {
              localPart: 'ShopperFirstName'
            }
          }, {
            name: 'shopperLastName',
            elementName: {
              localPart: 'ShopperLastName'
            }
          }, {
            name: 'shopperEmail',
            elementName: {
              localPart: 'ShopperEmail'
            }
          }, {
            name: 'shipping',
            elementName: {
              localPart: 'Shipping'
            },
            typeInfo: '.LPMShippingType'
          }, {
            name: 'billing',
            elementName: {
              localPart: 'Billing'
            },
            typeInfo: '.LPMBillingType'
          }, {
            name: 'orderItems',
            elementName: {
              localPart: 'OrderItems'
            }
          }, {
            name: 'hotelName',
            elementName: {
              localPart: 'HotelName'
            }
          }, {
            name: 'checkinTime',
            elementName: {
              localPart: 'CheckinTime'
            }
          }, {
            name: 'checkoutTime',
            elementName: {
              localPart: 'CheckoutTime'
            }
          }, {
            name: 'altmopFlightNumber',
            elementName: {
              localPart: 'AltmopFlightNumber'
            }
          }, {
            name: 'altmopDepartureTime',
            elementName: {
              localPart: 'AltmopDepartureTime'
            }
          }, {
            name: 'admissionNoticeURL',
            elementName: {
              localPart: 'AdmissionNoticeURL'
            }
          }, {
            name: 'goodsInfo',
            elementName: {
              localPart: 'GoodsInfo'
            }
          }, {
            name: 'bic',
            elementName: {
              localPart: 'Bic'
            }
          }, {
            name: 'consumerRef',
            elementName: {
              localPart: 'ConsumerRef'
            }
          }, {
            name: 'clientIP',
            elementName: {
              localPart: 'ClientIP'
            }
          }, {
            name: 'nationalId',
            elementName: {
              localPart: 'NationalId'
            }
          }, {
            name: 'beneficiaryId',
            elementName: {
              localPart: 'BeneficiaryId'
            }
          }, {
            name: 'beneficiaryName',
            elementName: {
              localPart: 'BeneficiaryName'
            }
          }, {
            name: 'beneficiaryAddress',
            elementName: {
              localPart: 'BeneficiaryAddress'
            }
          }, {
            name: 'beneficiaryCountryCode',
            elementName: {
              localPart: 'BeneficiaryCountryCode'
            }
          }, {
            name: 'altmopTaxAmount',
            elementName: {
              localPart: 'AltmopTaxAmount'
            }
          }, {
            name: 'paymentMethodCategory',
            elementName: {
              localPart: 'PaymentMethodCategory'
            }
          }, {
            name: 'emd',
            elementName: {
              localPart: 'Emd'
            }
          }, {
            name: 'hppTitle',
            elementName: {
              localPart: 'HppTitle'
            }
          }, {
            name: 'logoUrl',
            elementName: {
              localPart: 'LogoUrl'
            }
          }, {
            name: 'purchaseType',
            elementName: {
              localPart: 'PurchaseType'
            }
          }, {
            name: 'backgroundImages',
            elementName: {
              localPart: 'BackgroundImages'
            }
          }]
      }, {
        localName: 'AccountUpdaterType',
        typeName: 'accountUpdaterType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'customerBin',
            required: true,
            elementName: {
              localPart: 'CustomerBin'
            },
            values: ['000001', '000002']
          }, {
            name: 'customerMerchantID',
            required: true,
            elementName: {
              localPart: 'CustomerMerchantID'
            }
          }, {
            name: 'customerRefNum',
            required: true,
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerProfileAction',
            elementName: {
              localPart: 'CustomerProfileAction'
            }
          }, {
            name: 'scheduledDate',
            elementName: {
              localPart: 'ScheduledDate'
            }
          }]
      }, {
        localName: 'Request',
        typeName: null,
        propertyInfos: [{
            name: 'accountUpdater',
            required: true,
            elementName: {
              localPart: 'AccountUpdater'
            },
            typeInfo: '.AccountUpdaterType'
          }, {
            name: 'inquiry',
            required: true,
            elementName: {
              localPart: 'Inquiry'
            },
            typeInfo: '.InquiryType'
          }, {
            name: 'newOrder',
            required: true,
            elementName: {
              localPart: 'NewOrder'
            },
            typeInfo: '.NewOrderType'
          }, {
            name: 'endOfDay',
            required: true,
            elementName: {
              localPart: 'EndOfDay'
            },
            typeInfo: '.EndOfDayType'
          }, {
            name: 'flexCache',
            required: true,
            elementName: {
              localPart: 'FlexCache'
            },
            typeInfo: '.FlexCacheType'
          }, {
            name: 'profile',
            required: true,
            elementName: {
              localPart: 'Profile'
            },
            typeInfo: '.ProfileType'
          }, {
            name: 'reversal',
            required: true,
            elementName: {
              localPart: 'Reversal'
            },
            typeInfo: '.ReversalType'
          }, {
            name: 'markForCapture',
            required: true,
            elementName: {
              localPart: 'MarkForCapture'
            },
            typeInfo: '.MarkForCaptureType'
          }, {
            name: 'safetechFraudAnalysis',
            required: true,
            elementName: {
              localPart: 'SafetechFraudAnalysis'
            },
            typeInfo: '.SafetechFraudAnalysisType'
          }, {
            name: 'transactionStatus',
            required: true,
            elementName: {
              localPart: 'TransactionStatus'
            },
            typeInfo: '.TransactionStatusType'
          }]
      }, {
        localName: 'EndOfDayType',
        typeName: 'endOfDayType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'settleRejectHoldingBin',
            elementName: {
              localPart: 'SettleRejectHoldingBin'
            }
          }]
      }, {
        localName: 'ReversalType',
        typeName: 'reversalType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'adjustedAmt',
            elementName: {
              localPart: 'AdjustedAmt'
            }
          }, {
            name: 'orderID',
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'reversalRetryNumber',
            elementName: {
              localPart: 'ReversalRetryNumber'
            }
          }, {
            name: 'onlineReversalInd',
            elementName: {
              localPart: 'OnlineReversalInd'
            }
          }, {
            name: 'vendorID',
            elementName: {
              localPart: 'VendorID'
            }
          }, {
            name: 'softwareID',
            elementName: {
              localPart: 'SoftwareID'
            }
          }, {
            name: 'readerSerialNumber',
            elementName: {
              localPart: 'ReaderSerialNumber'
            }
          }, {
            name: 'digitalTokenCryptogram',
            elementName: {
              localPart: 'DigitalTokenCryptogram'
            }
          }]
      }, {
        localName: 'BaseElementsType',
        typeName: 'baseElementsType',
        propertyInfos: [{
            name: 'industryType',
            required: true,
            elementName: {
              localPart: 'IndustryType'
            },
            typeInfo: '.ValidIndustryTypes'
          }, {
            name: 'cardBrand',
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'accountNum',
            elementName: {
              localPart: 'AccountNum'
            }
          }, {
            name: 'exp',
            elementName: {
              localPart: 'Exp'
            }
          }, {
            name: 'currencyCode',
            elementName: {
              localPart: 'CurrencyCode'
            }
          }, {
            name: 'currencyExponent',
            elementName: {
              localPart: 'CurrencyExponent'
            }
          }, {
            name: 'cardSecValInd',
            elementName: {
              localPart: 'CardSecValInd'
            }
          }, {
            name: 'cardSecVal',
            elementName: {
              localPart: 'CardSecVal'
            }
          }, {
            name: 'bcRtNum',
            elementName: {
              localPart: 'BCRtNum'
            }
          }, {
            name: 'checkDDA',
            elementName: {
              localPart: 'CheckDDA'
            }
          }, {
            name: 'bankAccountType',
            elementName: {
              localPart: 'BankAccountType'
            }
          }, {
            name: 'ecpAuthMethod',
            elementName: {
              localPart: 'ECPAuthMethod'
            }
          }, {
            name: 'bankPmtDelv',
            elementName: {
              localPart: 'BankPmtDelv'
            }
          }, {
            name: 'avSzip',
            elementName: {
              localPart: 'AVSzip'
            }
          }, {
            name: 'avSaddress1',
            elementName: {
              localPart: 'AVSaddress1'
            }
          }, {
            name: 'avSaddress2',
            elementName: {
              localPart: 'AVSaddress2'
            }
          }, {
            name: 'avScity',
            elementName: {
              localPart: 'AVScity'
            }
          }, {
            name: 'avSstate',
            elementName: {
              localPart: 'AVSstate'
            }
          }, {
            name: 'avSphoneNum',
            elementName: {
              localPart: 'AVSphoneNum'
            }
          }, {
            name: 'avSname',
            elementName: {
              localPart: 'AVSname'
            }
          }, {
            name: 'avScountryCode',
            elementName: {
              localPart: 'AVScountryCode'
            }
          }, {
            name: 'avsDestzip',
            elementName: {
              localPart: 'AVSDestzip'
            }
          }, {
            name: 'avsDestaddress1',
            elementName: {
              localPart: 'AVSDestaddress1'
            }
          }, {
            name: 'avsDestaddress2',
            elementName: {
              localPart: 'AVSDestaddress2'
            }
          }, {
            name: 'avsDestcity',
            elementName: {
              localPart: 'AVSDestcity'
            }
          }, {
            name: 'avsDeststate',
            elementName: {
              localPart: 'AVSDeststate'
            }
          }, {
            name: 'avsDestphoneNum',
            elementName: {
              localPart: 'AVSDestphoneNum'
            }
          }, {
            name: 'avsDestname',
            elementName: {
              localPart: 'AVSDestname'
            }
          }, {
            name: 'avsDestcountryCode',
            elementName: {
              localPart: 'AVSDestcountryCode'
            }
          }, {
            name: 'useCustomerRefNum',
            elementName: {
              localPart: 'UseCustomerRefNum'
            }
          }, {
            name: 'authenticationECIInd',
            elementName: {
              localPart: 'AuthenticationECIInd'
            }
          }, {
            name: 'cavv',
            elementName: {
              localPart: 'CAVV'
            }
          }, {
            name: 'xid',
            elementName: {
              localPart: 'XID'
            }
          }, {
            name: 'aav',
            elementName: {
              localPart: 'AAV'
            }
          }, {
            name: 'orderID',
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'amount',
            elementName: {
              localPart: 'Amount'
            }
          }, {
            name: 'comments',
            elementName: {
              localPart: 'Comments'
            }
          }, {
            name: 'euddCountryCode',
            elementName: {
              localPart: 'EUDDCountryCode'
            }
          }, {
            name: 'euddBankSortCode',
            elementName: {
              localPart: 'EUDDBankSortCode'
            }
          }, {
            name: 'euddRibCode',
            elementName: {
              localPart: 'EUDDRibCode'
            }
          }, {
            name: 'bmlCustomerIP',
            elementName: {
              localPart: 'BMLCustomerIP'
            }
          }, {
            name: 'bmlCustomerEmail',
            elementName: {
              localPart: 'BMLCustomerEmail'
            }
          }, {
            name: 'bmlShippingCost',
            elementName: {
              localPart: 'BMLShippingCost'
            }
          }, {
            name: 'bmltncVersion',
            elementName: {
              localPart: 'BMLTNCVersion'
            }
          }, {
            name: 'bmlCustomerRegistrationDate',
            elementName: {
              localPart: 'BMLCustomerRegistrationDate'
            }
          }, {
            name: 'bmlCustomerTypeFlag',
            elementName: {
              localPart: 'BMLCustomerTypeFlag'
            }
          }, {
            name: 'bmlItemCategory',
            elementName: {
              localPart: 'BMLItemCategory'
            }
          }, {
            name: 'bmlPreapprovalInvitationNum',
            elementName: {
              localPart: 'BMLPreapprovalInvitationNum'
            }
          }, {
            name: 'bmlMerchantPromotionalCode',
            elementName: {
              localPart: 'BMLMerchantPromotionalCode'
            }
          }, {
            name: 'bmlCustomerBirthDate',
            elementName: {
              localPart: 'BMLCustomerBirthDate'
            }
          }, {
            name: 'bmlCustomerSSN',
            elementName: {
              localPart: 'BMLCustomerSSN'
            }
          }, {
            name: 'bmlCustomerAnnualIncome',
            elementName: {
              localPart: 'BMLCustomerAnnualIncome'
            }
          }, {
            name: 'bmlCustomerResidenceStatus',
            elementName: {
              localPart: 'BMLCustomerResidenceStatus'
            }
          }, {
            name: 'bmlCustomerCheckingAccount',
            elementName: {
              localPart: 'BMLCustomerCheckingAccount'
            }
          }, {
            name: 'bmlCustomerSavingsAccount',
            elementName: {
              localPart: 'BMLCustomerSavingsAccount'
            }
          }, {
            name: 'bmlProductDeliveryType',
            elementName: {
              localPart: 'BMLProductDeliveryType'
            }
          }, {
            name: 'billerReferenceNumber',
            elementName: {
              localPart: 'BillerReferenceNumber'
            }
          }, {
            name: 'useStoredAAVInd',
            elementName: {
              localPart: 'UseStoredAAVInd'
            }
          }, {
            name: 'ecpCheckSerialNumber',
            elementName: {
              localPart: 'ECPCheckSerialNumber'
            }
          }, {
            name: 'ecpTerminalCity',
            elementName: {
              localPart: 'ECPTerminalCity'
            }
          }, {
            name: 'ecpTerminalState',
            elementName: {
              localPart: 'ECPTerminalState'
            }
          }, {
            name: 'ecpImageReferenceNumber',
            elementName: {
              localPart: 'ECPImageReferenceNumber'
            }
          }, {
            name: 'customerAni',
            elementName: {
              localPart: 'CustomerAni'
            }
          }, {
            name: 'avsPhoneType',
            elementName: {
              localPart: 'AVSPhoneType'
            }
          }, {
            name: 'avsDestPhoneType',
            elementName: {
              localPart: 'AVSDestPhoneType'
            }
          }, {
            name: 'customerEmail',
            elementName: {
              localPart: 'CustomerEmail'
            }
          }, {
            name: 'customerIpAddress',
            elementName: {
              localPart: 'CustomerIpAddress'
            }
          }, {
            name: 'emailAddressSubtype',
            elementName: {
              localPart: 'EmailAddressSubtype'
            }
          }, {
            name: 'customerBrowserName',
            elementName: {
              localPart: 'CustomerBrowserName'
            }
          }, {
            name: 'shippingMethod',
            elementName: {
              localPart: 'ShippingMethod'
            }
          }, {
            name: 'euddBankBranchCode',
            elementName: {
              localPart: 'EUDDBankBranchCode'
            }
          }, {
            name: 'euddiban',
            elementName: {
              localPart: 'EUDDIBAN'
            }
          }, {
            name: 'euddbic',
            elementName: {
              localPart: 'EUDDBIC'
            }
          }, {
            name: 'dwWalletID',
            elementName: {
              localPart: 'DWWalletID'
            }
          }, {
            name: 'dwsli',
            elementName: {
              localPart: 'DWSLI'
            }
          }, {
            name: 'dwIncentiveInd',
            elementName: {
              localPart: 'DWIncentiveInd'
            }
          }, {
            name: 'digitalWalletType',
            elementName: {
              localPart: 'DigitalWalletType'
            }
          }, {
            name: 'pieSubscriberID',
            elementName: {
              localPart: 'PieSubscriberID'
            }
          }, {
            name: 'pieFormatID',
            elementName: {
              localPart: 'PieFormatID'
            }
          }, {
            name: 'pieIntegrityCheck',
            elementName: {
              localPart: 'PieIntegrityCheck'
            }
          }, {
            name: 'pieKeyID',
            elementName: {
              localPart: 'PieKeyID'
            }
          }, {
            name: 'piePhaseID',
            elementName: {
              localPart: 'PiePhaseID'
            }
          }, {
            name: 'pieMode',
            elementName: {
              localPart: 'PieMode'
            }
          }, {
            name: 'debitRoutingNetwork',
            elementName: {
              localPart: 'DebitRoutingNetwork'
            }
          }, {
            name: 'tokenTxnType',
            elementName: {
              localPart: 'TokenTxnType'
            }
          }]
      }, {
        localName: 'TravelFareDetailType',
        typeName: 'travelFareDetailType',
        propertyInfos: [{
            name: 'taaTotalFare',
            elementName: {
              localPart: 'TAATotalFare'
            }
          }, {
            name: 'taaTotalFees',
            elementName: {
              localPart: 'TAATotalFees'
            }
          }, {
            name: 'taaTotalTaxes',
            elementName: {
              localPart: 'TAATotalTaxes'
            }
          }, {
            name: 'taaExchangeTicketAmount',
            elementName: {
              localPart: 'TAAExchangeTicketAmount'
            }
          }, {
            name: 'taaExchangeFeeAmount',
            elementName: {
              localPart: 'TAAExchangeFeeAmount'
            }
          }, {
            name: 'taaInvoiceNumber',
            elementName: {
              localPart: 'TAAInvoiceNumber'
            }
          }, {
            name: 'taaOriginalCurrencyCode',
            elementName: {
              localPart: 'TAAOriginalCurrencyCode'
            }
          }]
      }, {
        localName: 'LPMShippingType',
        propertyInfos: [{
            name: 'address1',
            elementName: {
              localPart: 'Address1'
            }
          }, {
            name: 'address2',
            elementName: {
              localPart: 'Address2'
            }
          }, {
            name: 'postalCode',
            elementName: {
              localPart: 'PostalCode'
            }
          }, {
            name: 'state',
            elementName: {
              localPart: 'State'
            }
          }, {
            name: 'city',
            elementName: {
              localPart: 'City'
            }
          }, {
            name: 'countryCode',
            elementName: {
              localPart: 'CountryCode'
            }
          }, {
            name: 'firstName',
            elementName: {
              localPart: 'FirstName'
            }
          }, {
            name: 'lastName',
            elementName: {
              localPart: 'LastName'
            }
          }, {
            name: 'attention',
            elementName: {
              localPart: 'Attention'
            }
          }, {
            name: 'email',
            elementName: {
              localPart: 'Email'
            }
          }, {
            name: 'organizationName',
            elementName: {
              localPart: 'OrganizationName'
            }
          }, {
            name: 'phone',
            elementName: {
              localPart: 'Phone'
            }
          }, {
            name: 'title',
            elementName: {
              localPart: 'Title'
            }
          }, {
            name: 'isShippingRequired',
            elementName: {
              localPart: 'IsShippingRequired'
            }
          }]
      }, {
        localName: 'SafetechFraudAnalysisType',
        typeName: 'safetechFraudAnalysisType',
        propertyInfos: [{
            name: 'orbitalConnectionUsername',
            elementName: {
              localPart: 'OrbitalConnectionUsername'
            }
          }, {
            name: 'orbitalConnectionPassword',
            elementName: {
              localPart: 'OrbitalConnectionPassword'
            }
          }, {
            name: 'bin',
            required: true,
            elementName: {
              localPart: 'BIN'
            },
            values: ['000001', '000002']
          }, {
            name: 'merchantID',
            required: true,
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            required: true,
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'baseElements',
            required: true,
            elementName: {
              localPart: 'BaseElements'
            },
            typeInfo: '.BaseElementsType'
          }, {
            name: 'fraudAnalysis',
            required: true,
            elementName: {
              localPart: 'FraudAnalysis'
            },
            typeInfo: '.FraudAnalysisType'
          }]
      }, {
        localName: 'FraudAnalysisType',
        typeName: 'fraudAnalysisType',
        propertyInfos: [{
            name: 'fraudScoreIndicator',
            elementName: {
              localPart: 'FraudScoreIndicator'
            }
          }, {
            name: 'rulesTrigger',
            elementName: {
              localPart: 'RulesTrigger'
            }
          }, {
            name: 'safetechMerchantID',
            elementName: {
              localPart: 'SafetechMerchantID'
            }
          }, {
            name: 'kaptchaSessionID',
            elementName: {
              localPart: 'KaptchaSessionID'
            }
          }, {
            name: 'websiteShortName',
            elementName: {
              localPart: 'WebsiteShortName'
            }
          }, {
            name: 'cashValueOfFencibleItems',
            elementName: {
              localPart: 'CashValueOfFencibleItems'
            }
          }, {
            name: 'customerDOB',
            elementName: {
              localPart: 'CustomerDOB'
            }
          }, {
            name: 'customerGender',
            elementName: {
              localPart: 'CustomerGender'
            }
          }, {
            name: 'customerDriverLicense',
            elementName: {
              localPart: 'CustomerDriverLicense'
            }
          }, {
            name: 'customerID',
            elementName: {
              localPart: 'CustomerID'
            }
          }, {
            name: 'customerIDCreationTime',
            elementName: {
              localPart: 'CustomerIDCreationTime'
            }
          }, {
            name: 'kttVersionNumber',
            elementName: {
              localPart: 'KTTVersionNumber'
            }
          }, {
            name: 'kttDataLength',
            elementName: {
              localPart: 'KTTDataLength'
            }
          }, {
            name: 'kttDataString',
            elementName: {
              localPart: 'KTTDataString'
            }
          }, {
            name: 'pinlessDebitTxnType',
            elementName: {
              localPart: 'PinlessDebitTxnType'
            }
          }, {
            name: 'pinlessDebitMerchantUrl',
            elementName: {
              localPart: 'PinlessDebitMerchantUrl'
            }
          }]
      }, {
        localName: 'CruiseTravelDetailsType',
        typeName: 'cruiseTravelDetailsType',
        propertyInfos: [{
            name: 'taaDepartureDate',
            elementName: {
              localPart: 'TAADepartureDate'
            }
          }, {
            name: 'taaReturnDate',
            elementName: {
              localPart: 'TAAReturnDate'
            }
          }, {
            name: 'taaTotalCost',
            elementName: {
              localPart: 'TAATotalCost'
            }
          }, {
            name: 'taaCruiseDuration',
            elementName: {
              localPart: 'TAACruiseDuration'
            }
          }, {
            name: 'taaShipName',
            elementName: {
              localPart: 'TAAShipName'
            }
          }, {
            name: 'taaRegionCode',
            elementName: {
              localPart: 'TAARegionCode'
            }
          }, {
            name: 'taaCountryCode',
            elementName: {
              localPart: 'TAACountryCode'
            }
          }, {
            name: 'taaCityName',
            elementName: {
              localPart: 'TAACityName'
            }
          }]
      }, {
        localName: 'PC3LineItemType',
        propertyInfos: [{
            name: 'pc3DtlIndex',
            elementName: {
              localPart: 'PC3DtlIndex'
            }
          }, {
            name: 'pc3DtlDesc',
            elementName: {
              localPart: 'PC3DtlDesc'
            }
          }, {
            name: 'pc3DtlProdCd',
            elementName: {
              localPart: 'PC3DtlProdCd'
            }
          }, {
            name: 'pc3DtlQty',
            elementName: {
              localPart: 'PC3DtlQty'
            }
          }, {
            name: 'pc3DtlUOM',
            elementName: {
              localPart: 'PC3DtlUOM'
            }
          }, {
            name: 'pc3DtlTaxAmt',
            elementName: {
              localPart: 'PC3DtlTaxAmt'
            }
          }, {
            name: 'pc3DtlTaxRate',
            elementName: {
              localPart: 'PC3DtlTaxRate'
            }
          }, {
            name: 'pc3Dtllinetot',
            elementName: {
              localPart: 'PC3Dtllinetot'
            }
          }, {
            name: 'pc3DtlDisc',
            elementName: {
              localPart: 'PC3DtlDisc'
            }
          }, {
            name: 'pc3DtlCommCd',
            elementName: {
              localPart: 'PC3DtlCommCd'
            }
          }, {
            name: 'pc3DtlUnitCost',
            elementName: {
              localPart: 'PC3DtlUnitCost'
            }
          }, {
            name: 'pc3DtlGrossNet',
            elementName: {
              localPart: 'PC3DtlGrossNet'
            }
          }, {
            name: 'pc3DtlTaxType',
            elementName: {
              localPart: 'PC3DtlTaxType'
            }
          }, {
            name: 'pc3DtlDiscInd',
            elementName: {
              localPart: 'PC3DtlDiscInd'
            }
          }, {
            name: 'pc3DtlDebitInd',
            elementName: {
              localPart: 'PC3DtlDebitInd'
            }
          }, {
            name: 'pc3DtlDiscountRate',
            elementName: {
              localPart: 'PC3DtlDiscountRate'
            }
          }, {
            name: 'pc3DtlTaxAmt2',
            elementName: {
              localPart: 'PC3DtlTaxAmt2'
            }
          }, {
            name: 'pc3DtlTaxRate2',
            elementName: {
              localPart: 'PC3DtlTaxRate2'
            }
          }, {
            name: 'pc3DtlTaxType2',
            elementName: {
              localPart: 'PC3DtlTaxType2'
            }
          }, {
            name: 'pc3DtlDiscTreatmentCd',
            elementName: {
              localPart: 'PC3DtlDiscTreatmentCd'
            }
          }, {
            name: 'pc3DtlInd',
            elementName: {
              localPart: 'PC3DtlInd'
            }
          }]
      }, {
        type: 'enumInfo',
        localName: 'ValidTransTypes',
        values: ['A', 'AC', 'F', 'FR', 'FC', 'R']
      }, {
        type: 'enumInfo',
        localName: 'ProfileActionTypes',
        values: ['C', 'R', 'U', 'D']
      }, {
        type: 'enumInfo',
        localName: 'ValidIndustryTypes',
        values: ['EC', 'RC', 'MO', 'IV', 'IN']
      }],
    elementInfos: [{
        typeInfo: '.Request',
        elementName: {
          localPart: 'Request'
        }
      }]
  };
  return {
    request: request
  };
};
if (typeof define === 'function' && define.amd) {
  define([], request_Module_Factory);
}
else {
  var request_Module = request_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.request = request_Module.request;
  }
  else {
    var request = request_Module.request;
  }
}