var response_Module_Factory = function () {
  var response = {
    name: 'response',
    typeInfos: [{
        localName: 'FlexCacheRespType',
        typeName: 'flexCacheRespType',
        propertyInfos: [{
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
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'accountNum',
            required: true,
            elementName: {
              localPart: 'AccountNum'
            }
          }, {
            name: 'startAccountNum',
            required: true,
            elementName: {
              localPart: 'StartAccountNum'
            }
          }, {
            name: 'batchFailedAcctNum',
            elementName: {
              localPart: 'BatchFailedAcctNum'
            }
          }, {
            name: 'flexRequestedAmount',
            required: true,
            elementName: {
              localPart: 'FlexRequestedAmount'
            }
          }, {
            name: 'flexRedeemedAmt',
            elementName: {
              localPart: 'FlexRedeemedAmt'
            }
          }, {
            name: 'flexHostTrace',
            required: true,
            elementName: {
              localPart: 'FlexHostTrace'
            }
          }, {
            name: 'flexAction',
            required: true,
            elementName: {
              localPart: 'FlexAction'
            }
          }, {
            name: 'flexAcctBalance',
            required: true,
            elementName: {
              localPart: 'FlexAcctBalance'
            }
          }, {
            name: 'flexAcctPriorBalance',
            required: true,
            elementName: {
              localPart: 'FlexAcctPriorBalance'
            }
          }, {
            name: 'flexAcctExpireDate',
            elementName: {
              localPart: 'FlexAcctExpireDate'
            }
          }, {
            name: 'cardBrand',
            required: true,
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            required: true,
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'approvalStatus',
            required: true,
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'authCode',
            elementName: {
              localPart: 'AuthCode'
            }
          }, {
            name: 'respCode',
            required: true,
            elementName: {
              localPart: 'RespCode'
            }
          }, {
            name: 'cvv2RespCode',
            required: true,
            elementName: {
              localPart: 'CVV2RespCode'
            }
          }, {
            name: 'autoAuthTxRefIdx',
            elementName: {
              localPart: 'AutoAuthTxRefIdx'
            }
          }, {
            name: 'autoAuthTxRefNum',
            elementName: {
              localPart: 'AutoAuthTxRefNum'
            }
          }, {
            name: 'autoAuthProcStatus',
            elementName: {
              localPart: 'AutoAuthProcStatus'
            }
          }, {
            name: 'autoAuthStatusMsg',
            elementName: {
              localPart: 'AutoAuthStatusMsg'
            }
          }, {
            name: 'autoAuthApprovalStatus',
            elementName: {
              localPart: 'AutoAuthApprovalStatus'
            }
          }, {
            name: 'autoAuthFlexRedeemedAmt',
            elementName: {
              localPart: 'AutoAuthFlexRedeemedAmt'
            }
          }, {
            name: 'autoAuthAuthCode',
            elementName: {
              localPart: 'AutoAuthAuthCode'
            }
          }, {
            name: 'autoAuthRespCode',
            elementName: {
              localPart: 'AutoAuthRespCode'
            }
          }, {
            name: 'autoAuthFlexHostTrace',
            elementName: {
              localPart: 'AutoAuthFlexHostTrace'
            }
          }, {
            name: 'autoAuthFlexAction',
            elementName: {
              localPart: 'AutoAuthFlexAction'
            }
          }, {
            name: 'autoAuthRespTime',
            elementName: {
              localPart: 'AutoAuthRespTime'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'fraudScoreProcStatus',
            elementName: {
              localPart: 'FraudScoreProcStatus'
            }
          }, {
            name: 'fraudScoreProcMsg',
            elementName: {
              localPart: 'FraudScoreProcMsg'
            }
          }, {
            name: 'fraudAnalysisResponse',
            elementName: {
              localPart: 'FraudAnalysisResponse'
            },
            typeInfo: '.FraudAnalysisRespType'
          }]
      }, {
        localName: 'QuickRespTypeOld',
        typeName: 'quickRespType_old',
        propertyInfos: [{
            name: 'merchantID',
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'procStatus',
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'statusMsg',
            elementName: {
              localPart: 'StatusMsg'
            },
            typeInfo: '.StatusMsg'
          }, {
            name: 'approvalStatus',
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'txRefIdx',
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'txRefNum',
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'orderNumber',
            elementName: {
              localPart: 'OrderNumber'
            }
          }, {
            name: 'accountNum',
            elementName: {
              localPart: 'AccountNum'
            }
          }, {
            name: 'posEntryMode',
            elementName: {
              localPart: 'POSEntryMode'
            }
          }, {
            name: 'cardType1',
            elementName: {
              localPart: 'CardType1'
            }
          }, {
            name: 'respTime',
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'customerProfileResponse',
            elementName: {
              localPart: 'CustomerProfileResponse'
            }
          }, {
            name: 'hcsTcsInd',
            values: ['T', 'H'],
            attributeName: {
              localPart: 'HcsTcsInd'
            },
            type: 'attribute'
          }, {
            name: 'messageType',
            values: ['FR', 'PR', 'V', 'A', 'AC', 'C', 'B', 'UC', 'U'],
            attributeName: {
              localPart: 'MessageType'
            },
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'Version'
            },
            type: 'attribute'
          }, {
            name: 'capStatus',
            values: ['0', '1', '2', '3', '4', '5', '6', '7'],
            attributeName: {
              localPart: 'CapStatus'
            },
            type: 'attribute'
          }, {
            name: 'langInd',
            attributeName: {
              localPart: 'LangInd'
            },
            type: 'attribute'
          }, {
            name: 'tzCode',
            attributeName: {
              localPart: 'TzCode'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StatusMsg',
        typeName: null,
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'statusMsgLth',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'StatusMsgLth'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AccountUpdaterRespType',
        typeName: 'accountUpdaterRespType',
        propertyInfos: [{
            name: 'customerBin',
            required: true,
            elementName: {
              localPart: 'customerBin'
            }
          }, {
            name: 'customerMerchantID',
            required: true,
            elementName: {
              localPart: 'customerMerchantID'
            }
          }, {
            name: 'customerRefNum',
            required: true,
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerProfileAction',
            required: true,
            elementName: {
              localPart: 'CustomerProfileAction'
            }
          }, {
            name: 'status',
            required: true,
            elementName: {
              localPart: 'Status'
            }
          }, {
            name: 'scheduledDate',
            required: true,
            elementName: {
              localPart: 'ScheduledDate'
            }
          }, {
            name: 'profileProcStatus',
            required: true,
            elementName: {
              localPart: 'ProfileProcStatus'
            }
          }, {
            name: 'customerProfileMessage',
            required: true,
            elementName: {
              localPart: 'CustomerProfileMessage'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }]
      }, {
        localName: 'FraudAnalysisRespType',
        typeName: 'fraudAnalysisRespType',
        propertyInfos: [{
            name: 'fraudScoreIndicator',
            required: true,
            elementName: {
              localPart: 'FraudScoreIndicator'
            }
          }, {
            name: 'fraudStatusCode',
            required: true,
            elementName: {
              localPart: 'FraudStatusCode'
            }
          }, {
            name: 'riskInquiryTransactionID',
            required: true,
            elementName: {
              localPart: 'RiskInquiryTransactionID'
            }
          }, {
            name: 'autoDecisionResponse',
            required: true,
            elementName: {
              localPart: 'AutoDecisionResponse'
            }
          }, {
            name: 'riskScore',
            required: true,
            elementName: {
              localPart: 'RiskScore'
            }
          }, {
            name: 'kaptchaMatchFlag',
            required: true,
            elementName: {
              localPart: 'KaptchaMatchFlag'
            }
          }, {
            name: 'worstCountry',
            required: true,
            elementName: {
              localPart: 'WorstCountry'
            }
          }, {
            name: 'customerRegion',
            required: true,
            elementName: {
              localPart: 'CustomerRegion'
            }
          }, {
            name: 'paymentBrand',
            required: true,
            elementName: {
              localPart: 'PaymentBrand'
            }
          }, {
            name: 'fourteenDayVelocity',
            required: true,
            elementName: {
              localPart: 'FourteenDayVelocity'
            }
          }, {
            name: 'sixHourVelocity',
            required: true,
            elementName: {
              localPart: 'SixHourVelocity'
            }
          }, {
            name: 'customerNetwork',
            required: true,
            elementName: {
              localPart: 'CustomerNetwork'
            }
          }, {
            name: 'numberOfDevices',
            required: true,
            elementName: {
              localPart: 'NumberOfDevices'
            }
          }, {
            name: 'numberOfCards',
            required: true,
            elementName: {
              localPart: 'NumberOfCards'
            }
          }, {
            name: 'numberOfEmails',
            required: true,
            elementName: {
              localPart: 'NumberOfEmails'
            }
          }, {
            name: 'deviceLayers',
            required: true,
            elementName: {
              localPart: 'DeviceLayers'
            }
          }, {
            name: 'deviceFingerprint',
            required: true,
            elementName: {
              localPart: 'DeviceFingerprint'
            }
          }, {
            name: 'customerTimeZone',
            required: true,
            elementName: {
              localPart: 'CustomerTimeZone'
            }
          }, {
            name: 'customerLocalDateTime',
            required: true,
            elementName: {
              localPart: 'CustomerLocalDateTime'
            }
          }, {
            name: 'deviceRegion',
            required: true,
            elementName: {
              localPart: 'DeviceRegion'
            }
          }, {
            name: 'deviceCountry',
            required: true,
            elementName: {
              localPart: 'DeviceCountry'
            }
          }, {
            name: 'proxyStatus',
            required: true,
            elementName: {
              localPart: 'ProxyStatus'
            }
          }, {
            name: 'javascriptStatus',
            required: true,
            elementName: {
              localPart: 'JavascriptStatus'
            }
          }, {
            name: 'flashStatus',
            required: true,
            elementName: {
              localPart: 'FlashStatus'
            }
          }, {
            name: 'cookiesStatus',
            required: true,
            elementName: {
              localPart: 'CookiesStatus'
            }
          }, {
            name: 'browserCountry',
            required: true,
            elementName: {
              localPart: 'BrowserCountry'
            }
          }, {
            name: 'browserLanguage',
            required: true,
            elementName: {
              localPart: 'BrowserLanguage'
            }
          }, {
            name: 'mobileDeviceIndicator',
            required: true,
            elementName: {
              localPart: 'MobileDeviceIndicator'
            }
          }, {
            name: 'mobileDeviceType',
            required: true,
            elementName: {
              localPart: 'MobileDeviceType'
            }
          }, {
            name: 'mobileWirelessIndicator',
            required: true,
            elementName: {
              localPart: 'MobileWirelessIndicator'
            }
          }, {
            name: 'voiceDevice',
            required: true,
            elementName: {
              localPart: 'VoiceDevice'
            }
          }, {
            name: 'pcRemoteIndicator',
            required: true,
            elementName: {
              localPart: 'PCRemoteIndicator'
            }
          }, {
            name: 'rulesDataLength',
            required: true,
            elementName: {
              localPart: 'RulesDataLength'
            }
          }, {
            name: 'rulesData',
            required: true,
            elementName: {
              localPart: 'RulesData'
            }
          }]
      }, {
        localName: 'EndOfDayRespType',
        typeName: 'endOfDayRespType',
        propertyInfos: [{
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
            name: 'batchSeqNum',
            required: true,
            elementName: {
              localPart: 'BatchSeqNum'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'settleRejectHoldingBin',
            elementName: {
              localPart: 'SettleRejectHoldingBin'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }]
      }, {
        localName: 'ReversalRespType',
        typeName: 'reversalRespType',
        propertyInfos: [{
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
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            required: true,
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'outstandingAmt',
            required: true,
            elementName: {
              localPart: 'OutstandingAmt'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'mitReceivedTransactionID',
            elementName: {
              localPart: 'MITReceivedTransactionID'
            }
          }, {
            name: 'pymtBrandAuthResponseCode',
            elementName: {
              localPart: 'PymtBrandAuthResponseCode'
            }
          }, {
            name: 'pymtBrandResponseCodeCategory',
            elementName: {
              localPart: 'PymtBrandResponseCodeCategory'
            }
          }]
      }, {
        localName: 'Response',
        typeName: null,
        propertyInfos: [{
            name: 'flexCacheResp',
            required: true,
            elementName: {
              localPart: 'FlexCacheResp'
            },
            typeInfo: '.FlexCacheRespType'
          }, {
            name: 'newOrderResp',
            required: true,
            elementName: {
              localPart: 'NewOrderResp'
            },
            typeInfo: '.NewOrderRespType'
          }, {
            name: 'profileResp',
            required: true,
            elementName: {
              localPart: 'ProfileResp'
            },
            typeInfo: '.ProfileRespType'
          }, {
            name: 'endOfDayResp',
            required: true,
            elementName: {
              localPart: 'EndOfDayResp'
            },
            typeInfo: '.EndOfDayRespType'
          }, {
            name: 'reversalResp',
            required: true,
            elementName: {
              localPart: 'ReversalResp'
            },
            typeInfo: '.ReversalRespType'
          }, {
            name: 'markForCaptureResp',
            required: true,
            elementName: {
              localPart: 'MarkForCaptureResp'
            },
            typeInfo: '.MarkForCaptureRespType'
          }, {
            name: 'quickResp',
            required: true,
            elementName: {
              localPart: 'QuickResp'
            },
            typeInfo: '.QuickRespType'
          }, {
            name: 'quickResponse',
            required: true,
            elementName: {
              localPart: 'QuickResponse'
            },
            typeInfo: '.QuickRespTypeOld'
          }, {
            name: 'inquiryResp',
            required: true,
            elementName: {
              localPart: 'InquiryResp'
            },
            typeInfo: '.InquiryRespType'
          }, {
            name: 'accountUpdaterResp',
            required: true,
            elementName: {
              localPart: 'AccountUpdaterResp'
            },
            typeInfo: '.AccountUpdaterRespType'
          }, {
            name: 'safetechFraudAnalysisResp',
            required: true,
            elementName: {
              localPart: 'SafetechFraudAnalysisResp'
            },
            typeInfo: '.SafetechFraudAnalysisRespType'
          }, {
            name: 'transactionStatusResp',
            required: true,
            elementName: {
              localPart: 'TransactionStatusResp'
            },
            typeInfo: '.TransactionStatusRespType'
          }]
      }, {
        localName: 'MarkForCaptureRespType',
        typeName: 'markForCaptureRespType',
        propertyInfos: [{
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
            required: true,
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            required: true,
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'amount',
            required: true,
            elementName: {
              localPart: 'Amount'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'approvalStatus',
            required: true,
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'respCode',
            required: true,
            elementName: {
              localPart: 'RespCode'
            }
          }, {
            name: 'avsRespCode',
            required: true,
            elementName: {
              localPart: 'AVSRespCode'
            }
          }, {
            name: 'authCode',
            required: true,
            elementName: {
              localPart: 'AuthCode'
            }
          }, {
            name: 'respMsg',
            required: true,
            elementName: {
              localPart: 'RespMsg'
            }
          }, {
            name: 'hostRespCode',
            required: true,
            elementName: {
              localPart: 'HostRespCode'
            }
          }, {
            name: 'hostAVSRespCode',
            required: true,
            elementName: {
              localPart: 'HostAVSRespCode'
            }
          }, {
            name: 'txnSurchargeAmt',
            elementName: {
              localPart: 'TxnSurchargeAmt'
            }
          }, {
            name: 'tokenAssuranceLevel',
            elementName: {
              localPart: 'TokenAssuranceLevel'
            }
          }, {
            name: 'dpanAccountStatus',
            elementName: {
              localPart: 'DPANAccountStatus'
            }
          }, {
            name: 'mitReceivedTransactionID',
            elementName: {
              localPart: 'MITReceivedTransactionID'
            }
          }, {
            name: 'pymtBrandAuthResponseCode',
            elementName: {
              localPart: 'PymtBrandAuthResponseCode'
            }
          }, {
            name: 'pymtBrandResponseCodeCategory',
            elementName: {
              localPart: 'PymtBrandResponseCodeCategory'
            }
          }]
      }, {
        localName: 'AlternativePaymentMethodRespType',
        typeName: 'alternativePaymentMethodRespType',
        propertyInfos: [{
            name: 'hostTxRefNum',
            required: true,
            elementName: {
              localPart: 'HostTxRefNum'
            }
          }, {
            name: 'redirectURL',
            required: true,
            elementName: {
              localPart: 'RedirectURL'
            }
          }, {
            name: 'redirectSecret',
            required: true,
            elementName: {
              localPart: 'RedirectSecret'
            }
          }, {
            name: 'paymentMethod',
            required: true,
            elementName: {
              localPart: 'PaymentMethod'
            }
          }, {
            name: 'minAmt',
            elementName: {
              localPart: 'MinAmt'
            }
          }, {
            name: 'maxAmt',
            elementName: {
              localPart: 'MaxAmt'
            }
          }, {
            name: 'outTradeNo',
            elementName: {
              localPart: 'OutTradeNo'
            }
          }, {
            name: 'settlementCurrency',
            elementName: {
              localPart: 'SettlementCurrency'
            }
          }, {
            name: 'settlementAmount',
            elementName: {
              localPart: 'SettlementAmount'
            }
          }, {
            name: 'fxRate',
            elementName: {
              localPart: 'FxRate'
            }
          }, {
            name: 'cnyAmount',
            elementName: {
              localPart: 'CnyAmount'
            }
          }, {
            name: 'alipayCustomsURL',
            elementName: {
              localPart: 'AlipayCustomsURL'
            }
          }, {
            name: 'sourceCurrency',
            elementName: {
              localPart: 'SourceCurrency'
            }
          }, {
            name: 'sourceAmount',
            elementName: {
              localPart: 'SourceAmount'
            }
          }, {
            name: 'acctAttribute',
            elementName: {
              localPart: 'AcctAttribute'
            }
          }, {
            name: 'stan',
            elementName: {
              localPart: 'Stan'
            }
          }, {
            name: 'p24Method',
            elementName: {
              localPart: 'P24Method'
            }
          }, {
            name: 'p24MethodName',
            elementName: {
              localPart: 'P24MethodName'
            }
          }, {
            name: 'p24Descriptor',
            elementName: {
              localPart: 'P24Descriptor'
            }
          }, {
            name: 'sourceCountry',
            elementName: {
              localPart: 'SourceCountry'
            }
          }, {
            name: 'paymentPurpose',
            elementName: {
              localPart: 'PaymentPurpose'
            }
          }, {
            name: 'sourceAccountHolder',
            elementName: {
              localPart: 'SourceAccountHolder'
            }
          }, {
            name: 'sourceIban',
            elementName: {
              localPart: 'SourceIban'
            }
          }, {
            name: 'sourceBic',
            elementName: {
              localPart: 'SourceBic'
            }
          }, {
            name: 'sourceBankName',
            elementName: {
              localPart: 'SourceBankName'
            }
          }, {
            name: 'sourceAccountNumber',
            elementName: {
              localPart: 'SourceAccountNumber'
            }
          }, {
            name: 'sourceBankCode',
            elementName: {
              localPart: 'SourceBankCode'
            }
          }, {
            name: 'expiryTimeStamp',
            elementName: {
              localPart: 'ExpiryTimeStamp'
            }
          }, {
            name: 'qrCodeUrl',
            elementName: {
              localPart: 'QrCodeUrl'
            }
          }, {
            name: 'multibancoPaymentReference',
            elementName: {
              localPart: 'MultibancoPaymentReference'
            }
          }, {
            name: 'serviceSupplierId',
            elementName: {
              localPart: 'ServiceSupplierId'
            }
          }, {
            name: 'redirectOptional',
            elementName: {
              localPart: 'RedirectOptional'
            }
          }, {
            name: 'waitForNotification',
            elementName: {
              localPart: 'WaitForNotification'
            }
          }, {
            name: 'terminalAddressLocation',
            elementName: {
              localPart: 'TerminalAddressLocation'
            }
          }, {
            name: 'terminalIdentification',
            elementName: {
              localPart: 'TerminalIdentification'
            }
          }, {
            name: 'terminalType',
            elementName: {
              localPart: 'TerminalType'
            }
          }, {
            name: 'schemeOrderId',
            elementName: {
              localPart: 'SchemeOrderId'
            }
          }, {
            name: 'providerErrorCode',
            elementName: {
              localPart: 'ProviderErrorCode'
            }
          }, {
            name: 'providerErrorMessage',
            elementName: {
              localPart: 'ProviderErrorMessage'
            }
          }, {
            name: 'billingCategory',
            elementName: {
              localPart: 'BillingCategory'
            }
          }, {
            name: 'authorizedPaymentMethod',
            elementName: {
              localPart: 'AuthorizedPaymentMethod'
            }
          }, {
            name: 'dstAmount',
            elementName: {
              localPart: 'DstAmount'
            }
          }, {
            name: 'dstCurrency',
            elementName: {
              localPart: 'DstCurrency'
            }
          }]
      }, {
        localName: 'TransactionStatusRespType',
        typeName: 'transactionStatusRespType',
        propertyInfos: [{
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
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'approvalStatus',
            required: true,
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'respCode',
            required: true,
            elementName: {
              localPart: 'RespCode'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'fundingStatus',
            elementName: {
              localPart: 'FundingStatus'
            }
          }, {
            name: 'alternativePaymentMethod',
            elementName: {
              localPart: 'AlternativePaymentMethod'
            },
            typeInfo: '.AlternativePaymentMethodRespType'
          }]
      }, {
        localName: 'QuickRespType',
        typeName: 'quickRespType',
        propertyInfos: [{
            name: 'merchantID',
            elementName: {
              localPart: 'MerchantID'
            }
          }, {
            name: 'terminalID',
            elementName: {
              localPart: 'TerminalID'
            }
          }, {
            name: 'orderID',
            elementName: {
              localPart: 'OrderID'
            }
          }, {
            name: 'accountNum',
            elementName: {
              localPart: 'AccountNum'
            }
          }, {
            name: 'startAccountNum',
            elementName: {
              localPart: 'StartAccountNum'
            }
          }, {
            name: 'txRefNum',
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'approvalStatus',
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'customerBin',
            elementName: {
              localPart: 'CustomerBin'
            }
          }, {
            name: 'customerMerchantID',
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
            name: 'customerProfileAction',
            elementName: {
              localPart: 'CustomerProfileAction'
            }
          }, {
            name: 'profileProcStatus',
            elementName: {
              localPart: 'ProfileProcStatus'
            }
          }, {
            name: 'customerProfileMessage',
            elementName: {
              localPart: 'CustomerProfileMessage'
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
            name: 'customerProfileOrderOverrideInd',
            elementName: {
              localPart: 'CustomerProfileOrderOverrideInd'
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
            name: 'respTime',
            elementName: {
              localPart: 'RespTime'
            }
          }]
      }, {
        localName: 'InquiryRespType',
        typeName: 'inquiryRespType',
        propertyInfos: [{
            name: 'industryType',
            required: true,
            elementName: {
              localPart: 'IndustryType'
            }
          }, {
            name: 'messageType',
            required: true,
            elementName: {
              localPart: 'MessageType'
            }
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
            required: true,
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'accountNum',
            required: true,
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
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            required: true,
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'approvalStatus',
            required: true,
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'respCode',
            required: true,
            elementName: {
              localPart: 'RespCode'
            }
          }, {
            name: 'avsRespCode',
            required: true,
            elementName: {
              localPart: 'AVSRespCode'
            }
          }, {
            name: 'cvv2RespCode',
            required: true,
            elementName: {
              localPart: 'CVV2RespCode'
            }
          }, {
            name: 'authCode',
            required: true,
            elementName: {
              localPart: 'AuthCode'
            }
          }, {
            name: 'recurringAdviceCd',
            required: true,
            elementName: {
              localPart: 'RecurringAdviceCd'
            }
          }, {
            name: 'cavvRespCode',
            required: true,
            elementName: {
              localPart: 'CAVVRespCode'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'respMsg',
            required: true,
            elementName: {
              localPart: 'RespMsg'
            }
          }, {
            name: 'hostRespCode',
            required: true,
            elementName: {
              localPart: 'HostRespCode'
            }
          }, {
            name: 'hostAVSRespCode',
            required: true,
            elementName: {
              localPart: 'HostAVSRespCode'
            }
          }, {
            name: 'hostCVV2RespCode',
            required: true,
            elementName: {
              localPart: 'HostCVV2RespCode'
            }
          }, {
            name: 'customerRefNum',
            required: true,
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerName',
            required: true,
            elementName: {
              localPart: 'CustomerName'
            }
          }, {
            name: 'profileProcStatus',
            required: true,
            elementName: {
              localPart: 'ProfileProcStatus'
            }
          }, {
            name: 'customerProfileMessage',
            required: true,
            elementName: {
              localPart: 'CustomerProfileMessage'
            }
          }, {
            name: 'billerReferenceNumber',
            elementName: {
              localPart: 'BillerReferenceNumber'
            }
          }, {
            name: 'mbStatus',
            elementName: {
              localPart: 'MBStatus'
            }
          }, {
            name: 'mbMicroPaymentDaysLeft',
            elementName: {
              localPart: 'MBMicroPaymentDaysLeft'
            }
          }, {
            name: 'mbMicroPaymentDollarsLeft',
            elementName: {
              localPart: 'MBMicroPaymentDollarsLeft'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'partialAuthOccurred',
            required: true,
            elementName: {
              localPart: 'PartialAuthOccurred'
            }
          }, {
            name: 'requestedAmount',
            required: true,
            elementName: {
              localPart: 'RequestedAmount'
            }
          }, {
            name: 'redeemedAmount',
            required: true,
            elementName: {
              localPart: 'RedeemedAmount'
            }
          }, {
            name: 'remainingBalance',
            required: true,
            elementName: {
              localPart: 'RemainingBalance'
            }
          }, {
            name: 'countryFraudFilterStatus',
            required: true,
            elementName: {
              localPart: 'CountryFraudFilterStatus'
            }
          }, {
            name: 'isoCountryCode',
            required: true,
            elementName: {
              localPart: 'IsoCountryCode'
            }
          }, {
            name: 'fraudScoreProcStatus',
            elementName: {
              localPart: 'FraudScoreProcStatus'
            }
          }, {
            name: 'fraudScoreProcMsg',
            elementName: {
              localPart: 'FraudScoreProcMsg'
            }
          }, {
            name: 'fraudAnalysisResponse',
            elementName: {
              localPart: 'FraudAnalysisResponse'
            },
            typeInfo: '.FraudAnalysisRespType'
          }, {
            name: 'ctiAffluentCard',
            elementName: {
              localPart: 'CTIAffluentCard'
            }
          }, {
            name: 'ctiCommercialCard',
            elementName: {
              localPart: 'CTICommercialCard'
            }
          }, {
            name: 'ctiDurbinExemption',
            elementName: {
              localPart: 'CTIDurbinExemption'
            }
          }, {
            name: 'ctiHealthcareCard',
            elementName: {
              localPart: 'CTIHealthcareCard'
            }
          }, {
            name: 'ctiLevel3Eligible',
            elementName: {
              localPart: 'CTILevel3Eligible'
            }
          }, {
            name: 'ctiPayrollCard',
            elementName: {
              localPart: 'CTIPayrollCard'
            }
          }, {
            name: 'ctiPrepaidCard',
            elementName: {
              localPart: 'CTIPrepaidCard'
            }
          }, {
            name: 'ctipiNlessDebitCard',
            elementName: {
              localPart: 'CTIPINlessDebitCard'
            }
          }, {
            name: 'ctiSignatureDebitCard',
            elementName: {
              localPart: 'CTISignatureDebitCard'
            }
          }, {
            name: 'ctiIssuingCountry',
            elementName: {
              localPart: 'CTIIssuingCountry'
            }
          }, {
            name: 'ctiPrepaidReloadableCard',
            elementName: {
              localPart: 'CTIPrepaidReloadableCard'
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
            name: 'tokenAssuranceLevel',
            elementName: {
              localPart: 'TokenAssuranceLevel'
            }
          }, {
            name: 'dpanAccountStatus',
            elementName: {
              localPart: 'DPANAccountStatus'
            }
          }]
      }, {
        localName: 'SafetechFraudAnalysisRespType',
        typeName: 'safetechFraudAnalysisRespType',
        propertyInfos: [{
            name: 'industryType',
            required: true,
            elementName: {
              localPart: 'IndustryType'
            }
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
            required: true,
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'accountNum',
            required: true,
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
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'approvalStatus',
            required: true,
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'respCode',
            required: true,
            elementName: {
              localPart: 'RespCode'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'respMsg',
            required: true,
            elementName: {
              localPart: 'RespMsg'
            }
          }, {
            name: 'hostRespCode',
            required: true,
            elementName: {
              localPart: 'HostRespCode'
            }
          }, {
            name: 'customerRefNum',
            required: true,
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerName',
            required: true,
            elementName: {
              localPart: 'CustomerName'
            }
          }, {
            name: 'profileProcStatus',
            required: true,
            elementName: {
              localPart: 'ProfileProcStatus'
            }
          }, {
            name: 'customerProfileMessage',
            required: true,
            elementName: {
              localPart: 'CustomerProfileMessage'
            }
          }, {
            name: 'fraudAnalysisResponse',
            required: true,
            elementName: {
              localPart: 'FraudAnalysisResponse'
            },
            typeInfo: '.FraudAnalysisRespType'
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
            name: 'safetechToken',
            elementName: {
              localPart: 'SafetechToken'
            }
          }]
      }, {
        localName: 'ProfileRespType',
        typeName: 'profileRespType',
        propertyInfos: [{
            name: 'customerBin',
            required: true,
            elementName: {
              localPart: 'CustomerBin'
            }
          }, {
            name: 'customerMerchantID',
            required: true,
            elementName: {
              localPart: 'CustomerMerchantID'
            }
          }, {
            name: 'customerName',
            required: true,
            elementName: {
              localPart: 'CustomerName'
            }
          }, {
            name: 'customerRefNum',
            required: true,
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerProfileAction',
            required: true,
            elementName: {
              localPart: 'CustomerProfileAction'
            }
          }, {
            name: 'profileProcStatus',
            required: true,
            elementName: {
              localPart: 'ProfileProcStatus'
            }
          }, {
            name: 'customerProfileMessage',
            required: true,
            elementName: {
              localPart: 'CustomerProfileMessage'
            }
          }, {
            name: 'customerAddress1',
            required: true,
            elementName: {
              localPart: 'CustomerAddress1'
            }
          }, {
            name: 'customerAddress2',
            required: true,
            elementName: {
              localPart: 'CustomerAddress2'
            }
          }, {
            name: 'customerCity',
            required: true,
            elementName: {
              localPart: 'CustomerCity'
            }
          }, {
            name: 'customerState',
            required: true,
            elementName: {
              localPart: 'CustomerState'
            }
          }, {
            name: 'customerZIP',
            required: true,
            elementName: {
              localPart: 'CustomerZIP'
            }
          }, {
            name: 'customerEmail',
            required: true,
            elementName: {
              localPart: 'CustomerEmail'
            }
          }, {
            name: 'customerPhone',
            required: true,
            elementName: {
              localPart: 'CustomerPhone'
            }
          }, {
            name: 'customerCountryCode',
            required: true,
            elementName: {
              localPart: 'CustomerCountryCode'
            }
          }, {
            name: 'customerProfileOrderOverrideInd',
            required: true,
            elementName: {
              localPart: 'CustomerProfileOrderOverrideInd'
            }
          }, {
            name: 'orderDefaultDescription',
            required: true,
            elementName: {
              localPart: 'OrderDefaultDescription'
            }
          }, {
            name: 'orderDefaultAmount',
            required: true,
            elementName: {
              localPart: 'OrderDefaultAmount'
            }
          }, {
            name: 'customerAccountType',
            required: true,
            elementName: {
              localPart: 'CustomerAccountType'
            }
          }, {
            name: 'status',
            required: true,
            elementName: {
              localPart: 'Status'
            }
          }, {
            name: 'cardBrand',
            required: true,
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'ccAccountNum',
            required: true,
            elementName: {
              localPart: 'CCAccountNum'
            }
          }, {
            name: 'ccExpireDate',
            required: true,
            elementName: {
              localPart: 'CCExpireDate'
            }
          }, {
            name: 'ecpAccountDDA',
            required: true,
            elementName: {
              localPart: 'ECPAccountDDA'
            }
          }, {
            name: 'ecpAccountType',
            required: true,
            elementName: {
              localPart: 'ECPAccountType'
            }
          }, {
            name: 'ecpAccountRT',
            required: true,
            elementName: {
              localPart: 'ECPAccountRT'
            }
          }, {
            name: 'ecpBankPmtDlv',
            required: true,
            elementName: {
              localPart: 'ECPBankPmtDlv'
            }
          }, {
            name: 'switchSoloStartDate',
            required: true,
            elementName: {
              localPart: 'SwitchSoloStartDate'
            }
          }, {
            name: 'switchSoloIssueNum',
            required: true,
            elementName: {
              localPart: 'SwitchSoloIssueNum'
            }
          }, {
            name: 'customerMBStatus',
            elementName: {
              localPart: 'CustomerMBStatus'
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
            name: 'mbCustomerStatus',
            elementName: {
              localPart: 'MBCustomerStatus'
            }
          }, {
            name: 'mbMicroPaymentDaysLeft',
            elementName: {
              localPart: 'MBMicroPaymentDaysLeft'
            }
          }, {
            name: 'mbMicroPaymentDollarsLeft',
            elementName: {
              localPart: 'MBMicroPaymentDollarsLeft'
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
            required: true,
            elementName: {
              localPart: 'BillerReferenceNumber'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
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
            name: 'safetechToken',
            elementName: {
              localPart: 'SafetechToken'
            }
          }, {
            name: 'healthBenefitCardInd',
            elementName: {
              localPart: 'HealthBenefitCardInd'
            }
          }]
      }, {
        localName: 'NewOrderRespType',
        typeName: 'newOrderRespType',
        propertyInfos: [{
            name: 'industryType',
            required: true,
            elementName: {
              localPart: 'IndustryType'
            }
          }, {
            name: 'messageType',
            required: true,
            elementName: {
              localPart: 'MessageType'
            }
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
            required: true,
            elementName: {
              localPart: 'CardBrand'
            }
          }, {
            name: 'accountNum',
            required: true,
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
            name: 'txRefNum',
            required: true,
            elementName: {
              localPart: 'TxRefNum'
            }
          }, {
            name: 'txRefIdx',
            required: true,
            elementName: {
              localPart: 'TxRefIdx'
            }
          }, {
            name: 'procStatus',
            required: true,
            elementName: {
              localPart: 'ProcStatus'
            }
          }, {
            name: 'approvalStatus',
            required: true,
            elementName: {
              localPart: 'ApprovalStatus'
            }
          }, {
            name: 'respCode',
            required: true,
            elementName: {
              localPart: 'RespCode'
            }
          }, {
            name: 'avsRespCode',
            required: true,
            elementName: {
              localPart: 'AVSRespCode'
            }
          }, {
            name: 'cvv2RespCode',
            required: true,
            elementName: {
              localPart: 'CVV2RespCode'
            }
          }, {
            name: 'authCode',
            required: true,
            elementName: {
              localPart: 'AuthCode'
            }
          }, {
            name: 'recurringAdviceCd',
            required: true,
            elementName: {
              localPart: 'RecurringAdviceCd'
            }
          }, {
            name: 'cavvRespCode',
            required: true,
            elementName: {
              localPart: 'CAVVRespCode'
            }
          }, {
            name: 'statusMsg',
            required: true,
            elementName: {
              localPart: 'StatusMsg'
            }
          }, {
            name: 'respMsg',
            required: true,
            elementName: {
              localPart: 'RespMsg'
            }
          }, {
            name: 'hostRespCode',
            required: true,
            elementName: {
              localPart: 'HostRespCode'
            }
          }, {
            name: 'hostAVSRespCode',
            required: true,
            elementName: {
              localPart: 'HostAVSRespCode'
            }
          }, {
            name: 'hostCVV2RespCode',
            required: true,
            elementName: {
              localPart: 'HostCVV2RespCode'
            }
          }, {
            name: 'customerRefNum',
            required: true,
            elementName: {
              localPart: 'CustomerRefNum'
            }
          }, {
            name: 'customerName',
            required: true,
            elementName: {
              localPart: 'CustomerName'
            }
          }, {
            name: 'profileProcStatus',
            required: true,
            elementName: {
              localPart: 'ProfileProcStatus'
            }
          }, {
            name: 'customerProfileMessage',
            required: true,
            elementName: {
              localPart: 'CustomerProfileMessage'
            }
          }, {
            name: 'billerReferenceNumber',
            elementName: {
              localPart: 'BillerReferenceNumber'
            }
          }, {
            name: 'mbStatus',
            elementName: {
              localPart: 'MBStatus'
            }
          }, {
            name: 'mbMicroPaymentDaysLeft',
            elementName: {
              localPart: 'MBMicroPaymentDaysLeft'
            }
          }, {
            name: 'mbMicroPaymentDollarsLeft',
            elementName: {
              localPart: 'MBMicroPaymentDollarsLeft'
            }
          }, {
            name: 'respTime',
            required: true,
            elementName: {
              localPart: 'RespTime'
            }
          }, {
            name: 'partialAuthOccurred',
            required: true,
            elementName: {
              localPart: 'PartialAuthOccurred'
            }
          }, {
            name: 'requestedAmount',
            required: true,
            elementName: {
              localPart: 'RequestedAmount'
            }
          }, {
            name: 'redeemedAmount',
            required: true,
            elementName: {
              localPart: 'RedeemedAmount'
            }
          }, {
            name: 'remainingBalance',
            required: true,
            elementName: {
              localPart: 'RemainingBalance'
            }
          }, {
            name: 'countryFraudFilterStatus',
            required: true,
            elementName: {
              localPart: 'CountryFraudFilterStatus'
            }
          }, {
            name: 'isoCountryCode',
            required: true,
            elementName: {
              localPart: 'IsoCountryCode'
            }
          }, {
            name: 'fraudScoreProcStatus',
            elementName: {
              localPart: 'FraudScoreProcStatus'
            }
          }, {
            name: 'fraudScoreProcMsg',
            elementName: {
              localPart: 'FraudScoreProcMsg'
            }
          }, {
            name: 'fraudAnalysisResponse',
            elementName: {
              localPart: 'FraudAnalysisResponse'
            },
            typeInfo: '.FraudAnalysisRespType'
          }, {
            name: 'ctiAffluentCard',
            elementName: {
              localPart: 'CTIAffluentCard'
            }
          }, {
            name: 'ctiCommercialCard',
            elementName: {
              localPart: 'CTICommercialCard'
            }
          }, {
            name: 'ctiDurbinExemption',
            elementName: {
              localPart: 'CTIDurbinExemption'
            }
          }, {
            name: 'ctiHealthcareCard',
            elementName: {
              localPart: 'CTIHealthcareCard'
            }
          }, {
            name: 'ctiLevel3Eligible',
            elementName: {
              localPart: 'CTILevel3Eligible'
            }
          }, {
            name: 'ctiPayrollCard',
            elementName: {
              localPart: 'CTIPayrollCard'
            }
          }, {
            name: 'ctiPrepaidCard',
            elementName: {
              localPart: 'CTIPrepaidCard'
            }
          }, {
            name: 'ctipiNlessDebitCard',
            elementName: {
              localPart: 'CTIPINlessDebitCard'
            }
          }, {
            name: 'ctiSignatureDebitCard',
            elementName: {
              localPart: 'CTISignatureDebitCard'
            }
          }, {
            name: 'ctiIssuingCountry',
            elementName: {
              localPart: 'CTIIssuingCountry'
            }
          }, {
            name: 'ctiPrepaidReloadableCard',
            elementName: {
              localPart: 'CTIPrepaidReloadableCard'
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
            name: 'tokenAssuranceLevel',
            elementName: {
              localPart: 'TokenAssuranceLevel'
            }
          }, {
            name: 'dpanAccountStatus',
            elementName: {
              localPart: 'DPANAccountStatus'
            }
          }, {
            name: 'ewsAccountStatusCode',
            elementName: {
              localPart: 'EWSAccountStatusCode'
            }
          }, {
            name: 'ewsaoaConditionCode',
            elementName: {
              localPart: 'EWSAOAConditionCode'
            }
          }, {
            name: 'ewsNameMatch',
            elementName: {
              localPart: 'EWSNameMatch'
            }
          }, {
            name: 'ewsFirstNameMatch',
            elementName: {
              localPart: 'EWSFirstNameMatch'
            }
          }, {
            name: 'ewsMiddleNameMatch',
            elementName: {
              localPart: 'EWSMiddleNameMatch'
            }
          }, {
            name: 'ewsLastNameMatch',
            elementName: {
              localPart: 'EWSLastNameMatch'
            }
          }, {
            name: 'ewsBusinessNameMatch',
            elementName: {
              localPart: 'EWSBusinessNameMatch'
            }
          }, {
            name: 'ewsAddressMatch',
            elementName: {
              localPart: 'EWSAddressMatch'
            }
          }, {
            name: 'ewsCityMatch',
            elementName: {
              localPart: 'EWSCityMatch'
            }
          }, {
            name: 'ewsStateMatch',
            elementName: {
              localPart: 'EWSStateMatch'
            }
          }, {
            name: 'ewsZipMatch',
            elementName: {
              localPart: 'EWSZipMatch'
            }
          }, {
            name: 'ewsPhoneMatch',
            elementName: {
              localPart: 'EWSPhoneMatch'
            }
          }, {
            name: 'ewsssntinMatch',
            elementName: {
              localPart: 'EWSSSNTINMatch'
            }
          }, {
            name: 'ewsdobMatch',
            elementName: {
              localPart: 'EWSDOBMatch'
            }
          }, {
            name: 'ewsidTypeMatch',
            elementName: {
              localPart: 'EWSIDTypeMatch'
            }
          }, {
            name: 'ewsidNumberMatch',
            elementName: {
              localPart: 'EWSIDNumberMatch'
            }
          }, {
            name: 'ewsidStateMatch',
            elementName: {
              localPart: 'EWSIDStateMatch'
            }
          }, {
            name: 'fxOptOutInd',
            elementName: {
              localPart: 'FXOptOutInd'
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
            name: 'fxDefaultRateInd',
            elementName: {
              localPart: 'FXDefaultRateInd'
            }
          }, {
            name: 'fxRateStatus',
            elementName: {
              localPart: 'FXRateStatus'
            }
          }, {
            name: 'mitReceivedTransactionID',
            elementName: {
              localPart: 'MITReceivedTransactionID'
            }
          }, {
            name: 'rtauUpdatedCardNum',
            elementName: {
              localPart: 'RtauUpdatedCardNum'
            }
          }, {
            name: 'rtauUpdatedCardExp',
            elementName: {
              localPart: 'RtauUpdatedCardExp'
            }
          }, {
            name: 'rtauResponseCode',
            elementName: {
              localPart: 'RtauResponseCode'
            }
          }, {
            name: 'avConsumerAccountDate',
            elementName: {
              localPart: 'AVConsumerAccountDate'
            }
          }, {
            name: 'safetechToken',
            elementName: {
              localPart: 'SafetechToken'
            }
          }, {
            name: 'pymtBrandAuthResponseCode',
            elementName: {
              localPart: 'PymtBrandAuthResponseCode'
            }
          }, {
            name: 'pymtBrandResponseCodeCategory',
            elementName: {
              localPart: 'PymtBrandResponseCodeCategory'
            }
          }, {
            name: 'fundingStatus',
            elementName: {
              localPart: 'FundingStatus'
            }
          }, {
            name: 'alternativePaymentMethod',
            elementName: {
              localPart: 'AlternativePaymentMethod'
            },
            typeInfo: '.AlternativePaymentMethodRespType'
          }, {
            name: 'receivedNetworkTransactionId',
            elementName: {
              localPart: 'ReceivedNetworkTransactionId'
            }
          }]
      }],
    elementInfos: [{
        typeInfo: '.Response',
        elementName: {
          localPart: 'Response'
        }
      }, {
        typeInfo: '.StatusMsg',
        elementName: {
          localPart: 'StatusMsg'
        }
      }]
  };
  return {
    response: response
  };
};
if (typeof define === 'function' && define.amd) {
  define([], response_Module_Factory);
}
else {
  var response_Module = response_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.response = response_Module.response;
  }
  else {
    var response = response_Module.response;
  }
}