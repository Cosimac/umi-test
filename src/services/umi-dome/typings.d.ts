declare namespace API {
  type abortUsingGETParams = {
    /** 活动id */
    id: number;
  };

  type addUsingGETParams = {
    /** words */
    words: string;
  };

  type AddWxCorpRequest = {
    /** agentID */
    agentID: string;
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** corpID */
    corpID: string;
    /** corpName */
    corpName?: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type AdPageDTO = {
    /** 内容 */
    content?: string;
    /** 指定的员工 */
    guideIds?: number[];
    /** 热度等级 */
    hotLevel?: number;
    /** 图片链接 */
    imgUrl?: string;
    /** 对外信息id */
    profileId?: number;
    /** 选择员工类型, 0 全部 1 部分,传入使用guideIds */
    userType?: number;
    /** 标识id */
    uuid?: string;
    /** 视频首页链接 */
    videoTopUrl?: string;
    /** 视频链接 */
    videoUrl?: string;
    /** 企业微信成员对外信息 */
    weWorkExternalProfile?: SgWeWorkExternalProfileDao;
  };

  type analysisUsingGETParams = {
    /** 活动id */
    id: number;
  };

  type Annex = {
    content?: InnerContent;
    type?: number;
  };

  type ApiDTO = {
    name?: string;
    parameters?: ParameterDTO[];
  };

  type AppendReceiverRequest = {
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 群发消息id */
    messageId?: number;
    /** 接收人信息 */
    receivers?: CreateReceiverVo[];
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type AppIdletInfoVo = {
    /** 企业微信应用类型：0 自建应用启，1 第三方应用 */
    applicationType?: number;
    /** 会话存档配置是否完成：0 未配置，1 已配置 */
    isChatDataSettingReady?: number;
    /** 通讯录配置是否完成：0 未配置，1 已配置 */
    isContactSettingReady?: number;
    /** 企业是否介入：0 未接入，1 已接入 */
    isCropReady?: number;
  };

  type appletAuthUsingDELETEParams = {
    /** type */
    type: number;
    /** auth_code */
    auth_code?: string;
    /** host */
    host?: string;
  };

  type appletAuthUsingGETParams = {
    /** type */
    type: number;
    /** auth_code */
    auth_code?: string;
    /** host */
    host?: string;
  };

  type appletAuthUsingPATCHParams = {
    /** type */
    type: number;
    /** auth_code */
    auth_code?: string;
    /** host */
    host?: string;
  };

  type appletAuthUsingPOSTParams = {
    /** type */
    type: number;
    /** auth_code */
    auth_code?: string;
    /** host */
    host?: string;
  };

  type appletAuthUsingPUTParams = {
    /** type */
    type: number;
    /** auth_code */
    auth_code?: string;
    /** host */
    host?: string;
  };

  type AreaDTO = {
    /** 区域ID */
    areaId?: number;
    /** 区域名称 */
    areaName?: string;
  };

  type baocunhaopingfanxian = {
    /** 好评返现活动主配置 */
    activity?: chuangjianhaopingfanxianhuodong;
    /** 好评返现活动返现阶梯配置 */
    cashbackLadder?: chuangjianhaopingfanxianhuodongfanxianjieti[];
    /** 好评返现活动返现配置(不包含阶梯) */
    cashbackPolicy?: chuangjianhaopingfanxianhuodongfanxiancelve;
    /** 好评返现活动扩展配置 */
    ext?: chuangjianhaopingfanxianhuodongkuozhanbiao;
    /** 好评返现活动欢迎语配置 */
    welcomeCode?: chuangjianweixinzhinenghuanyingyu;
  };

  type BaseBehaviorCountDto = {
    endTime?: string;
    guideId?: number;
    shopId?: number;
    stateTime?: string;
    type?: number;
  };

  type BaseResponse = {
    body?: string;
    code?: string;
    msg?: string;
    params?: Record<string, any>;
    requestId?: string;
    result?: Record<string, any>;
    success?: boolean;
  };

  type BaseWeChatQrCodePlacardConfigDTO = {
    /** 自动打标 0 不开启，1开启， */
    autoTag?: number;
    /** 使用范围，欢迎语二维码为必输，类型，0 无 1：渠道  2 门店 3员工 */
    channelType?: number;
    /** 使用范围名称 */
    channelTypeName?: string;
    /** 类型值，给前端在详情对应回显 */
    channelTypeValue?: string;
    /** 创建时间 */
    createTime?: string;
    /** 微信二维码海报配置ID */
    id?: number;
    /** 创建人 */
    loginAccount?: string;
    /** 公众号标签 */
    mpTag?: string[];
    /** 海报 */
    placard?: string;
    /** 二维码海报标题 */
    title?: string;
    /** 类型 1公众号码 2小程序码 */
    type?: number;
    /** 企微标签 */
    weworkTag?: string[];
  };

  type batchDownloadShopRecruitmentQrcodeUsingDELETEParams = {
    /** codeType */
    codeType?: number;
    /** shopIds */
    shopIds?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type batchDownloadShopRecruitmentQrcodeUsingGETParams = {
    /** codeType */
    codeType?: number;
    /** shopIds */
    shopIds?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type batchDownloadShopRecruitmentQrcodeUsingPATCHParams = {
    /** codeType */
    codeType?: number;
    /** shopIds */
    shopIds?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type batchDownloadShopRecruitmentQrcodeUsingPOSTParams = {
    /** codeType */
    codeType?: number;
    /** shopIds */
    shopIds?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type batchDownloadShopRecruitmentQrcodeUsingPUTParams = {
    /** codeType */
    codeType?: number;
    /** shopIds */
    shopIds?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type BatchItem = {
    id: number;
    isDirectory: number;
    parentPath: string;
  };

  type BeanCommonResult = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Record<string, any>;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultAppIdletInfoVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: AppIdletInfoVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseChatDataListVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseChatDataListVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseChatRoomDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseChatRoomDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseFriendResultDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseFriendResultDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponsekehuxiangxixinxidaogoushuju = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponsekehuxiangxixinxidaogoushuju;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseListKeyWordsTopicVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseListKeyWordsTopicVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseListKeyWordsVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseListKeyWordsVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseqiweichengyuanxiaoshouyejitongjixiangyingti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseqiweichengyuanxiaoshouyejitongjixiangyingti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseqiweiqunliaoxiaoshouyejitongjixiangyingti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseqiweiqunliaoxiaoshouyejitongjixiangyingti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseqiweixiaoshouyejixiangqingtongjixiangyingti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseqiweixiaoshouyejixiangqingtongjixiangyingti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponsequdaofenxiliebiaomingxishujushiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponsequdaofenxiliebiaomingxishujushiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponsequdaofenxiliebiaoshujushiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponsequdaofenxiliebiaoshujushiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponsequnhuanyingyushitiduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponsequnhuanyingyushitiduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponserpafaxiaoxijieshourenxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponserpafaxiaoxijieshourenxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseRPAhuodongchaxunliebiaoDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseRPAhuodongchaxunliebiaoDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponserpakehuxiangying = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponserpakehuxiangying;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponserpazhanghaotianjiarizhibiaoxiangqingxiangying = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponserpazhanghaotianjiarizhibiaoxiangqingxiangying;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseShopCustomerVO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseShopCustomerVO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponseWelcomeMsgLogVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponseWelcomeMsgLogVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponsezhongfuquntongjiliebiaochaxunxiangyingduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponsezhongfuquntongjiliebiaochaxunxiangyingduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultBeanTableResponsezhongfuquntongjixiangqingliebiaochaxunxiangyingduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BeanTableResponsezhongfuquntongjixiangqingliebiaochaxunxiangyingduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultboolean = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: boolean;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultConfigVO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: ConfigVO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultCorpUserBindVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: CorpUserBindVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultCustomerFriendCrowDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: CustomerFriendCrowDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultdaoruhaopingfanxianshangpinliebiaojieguo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: daoruhaopingfanxianshangpinliebiaojieguo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultEnterpriseWxActivityVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: EnterpriseWxActivityVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultEnterpriseWXMarketingAuditInfoVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: EnterpriseWXMarketingAuditInfoVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultgongzhonghaodabiaorenwubiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaodabiaorenwubiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultgongzhonghaohuanyingyubaocunhuogengxinshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaohuanyingyubaocunhuogengxinshiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultgongzhonghaoliebiaoxiaoguofenxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaoliebiaoxiaoguofenxi;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultgongzhonghaoyingxiaohuodongxiangqingxiangyingti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaoyingxiaohuodongxiangqingxiangyingti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultGuestCodeActivityAllDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: GuestCodeActivityAllDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultGuestCodeStatisticsDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: GuestCodeStatisticsDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultGuideExecuteTransferIngDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: GuideExecuteTransferIngDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultGuideTransferDetailDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: GuideTransferDetailDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulthaopingfanxianhuodongwanzhengxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: haopingfanxianhuodongwanzhengxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulthaoshi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: haoshi;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulthexinyaosufanhuiqianduanshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: hexinyaosufanhuiqianduanshiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulthongbaocelveDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: hongbaocelveDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulthongbaofengmianxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: hongbaofengmianxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulthudongleidahuodongzhubiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: hudongleidahuodongzhubiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultIdDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: IdDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultint = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: number;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultkehuxiangxixinxifanhuiduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: kehuxiangxixinxifanhuiduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultliebiaoshujuqunrilichuangjianbianjiduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: liebiaoshujuqunrilichuangjianbianjiduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListbiaoqianzhishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: biaoqianzhishiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListBindPlatformAccountResultPageDto = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: BindPlatformAccountResultPageDto[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListcaidanpeizhidto = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: caidanpeizhidto[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListCmShopVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: CmShopVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListCorpTagGroupVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: CorpTagGroupVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListecrpdianpupingtaishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: ecrpdianpupingtaishiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListFounderVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: FounderVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListgongnenggengxindiedairizhibiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongnenggengxindiedairizhibiaoxiangqing[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListgongzhonghaobiaoqianbiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaobiaoqianbiaoxiangqing[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListgongzhonghaokefuzhanghao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaokefuzhanghao[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListgongzhonghaomoban = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaomoban[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListgongzhonghaoxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: gongzhonghaoxinxi[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListhaoyouhedianpubangdingxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: haoyouhedianpubangdingxinxi[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListhaoyouqushigailanshujufanhuivo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: haoyouqushigailanshujufanhuivo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListKdPlatShopDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: KdPlatShopDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListKdShopDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: KdShopDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListkepeizhideshaixuantiaojianxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: kepeizhideshaixuantiaojianxiangqing[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListleidaqudaobiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: leidaqudaobiaoxiangqing[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListMarkSceneTreeNode = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: MarkSceneTreeNode[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListMpTagDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: MpTagDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListPaymentDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PaymentDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListPlatCustomerVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PlatCustomerVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListPlatDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PlatDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListPolicyAdviseDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PolicyAdviseDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListqiweibiaoqianshitiduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qiweibiaoqianshitiduixiang[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListqiweixinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qiweixinxi[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListqiyongyejileixingshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qiyongyejileixingshiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListqunqushigailanshujufanhuivo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qunqushigailanshujufanhuivo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListRecruitingVipDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RecruitingVipDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListrenqunshuxingshaixuanxiangshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renqunshuxingshaixuanxiangshiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListrenwushujugailanshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renwushujugailanshiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListrpazhanghaoshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: rpazhanghaoshiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListsanfangxiaochengxuxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sanfangxiaochengxuxinxi[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListSearchReceiverCountGroupByDayResultDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SearchReceiverCountGroupByDayResultDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListSearchSentMessageCountGroupByDayResultDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SearchSentMessageCountGroupByDayResultDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListSgWeworkTagDao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SgWeworkTagDao[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListShopListResponse = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: ShopListResponse[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListShopPlatInfo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: ShopPlatInfo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListShopUrlDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: ShopUrlDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListSkuVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SkuVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListsopcelvepeizhixiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sopcelvepeizhixiangqing[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListsopcelvezhuanhuaqushidian = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sopcelvezhuanhuaqushidian[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListsophuabuguolvxiangzhongdehuiyuandengjishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sophuabuguolvxiangzhongdehuiyuandengjishiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListstring = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: string[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListSubdivisionDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SubdivisionDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListSystemPresetDto = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SystemPresetDto[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListTaskProgressDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TaskProgressDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListTreeNode = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TreeNode[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListViewDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: ViewDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListWechatAnalysisReportData = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WechatAnalysisReportData[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListWechatGroupLeaderVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WechatGroupLeaderVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListWeworkTagVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WeworkTagVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListWeWorkUserBehaviorDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WeWorkUserBehaviorDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListWeWorkWelcomeCodeMsgDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WeWorkWelcomeCodeMsgDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListWxUserVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WxUserVo[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListxiaochengxuyemianmokuaipeizhishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: xiaochengxuyemianmokuaipeizhishiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListxiaochengxuyemianmokuaishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: xiaochengxuyemianmokuaishiti[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListxitongbutongyewuyushecanshupeizhiDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: xitongbutongyewuyushecanshupeizhiDTO[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListyifenfadegongsiliebiao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: yifenfadegongsiliebiao[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListyuangongxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: yuangongxinxi[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListzhanghaojishouyegailanyemianmoban = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: zhanghaojishouyegailanyemianmoban[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListzhanghaojishouyegailanzuichangshiyongshitu = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: zhanghaojishouyegailanzuichangshiyongshitu[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultListzhanghaoquanxianxiademendian = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: zhanghaoquanxianxiademendian[];
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultlong = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: number;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultMapstringobject = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Record<string, any>;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultMapstringstring = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Record<string, any>;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultMarkSceneTreeNode = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: MarkSceneTreeNode;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultMessageIdVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: MessageIdVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultMpComponentTokenVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: MpComponentTokenVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultobject = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Record<string, any>;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOhudongleidahuodongzhubiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOhudongleidahuodongzhubiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOhudongleidayonghutongji = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOhudongleidayonghutongji;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOhudongleidayonghuxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOhudongleidayonghuxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOleidaqudaobiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOleidaqudaobiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOrpazhanghaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOrpazhanghaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOshenhelishijilubiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOshenhelishijilubiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPageResultDTOTaskProgressDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PageResultDTOTaskProgressDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultPolicyDetailDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: PolicyDetailDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultqiweichengyuanxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qiweichengyuanxinxi;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultqudaofenxiliebiaomingxishujushiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qudaofenxiliebiaomingxishujushiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultqudaofenxitubiaoshujushiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qudaofenxitubiaoshujushiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultqunfaxiaoxixiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qunfaxiaoxixiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultqunhuanyingyushitiduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: qunhuanyingyushitiduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultRecordStatisticsDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RecordStatisticsDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultRecruitingPageConfigDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RecruitingPageConfigDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultRecruitVersionVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RecruitVersionVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrenqunshuxingshaixuanxiangshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renqunshuxingshaixuanxiangshiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrenwukuozhanduixiangVO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renwukuozhanduixiangVO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrenwushezhishitu = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renwushezhishitu;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrenwushujugailanshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renwushujugailanshiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrenwuxiangqingshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: renwuxiangqingshiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultRpaAccountLoginStatusDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RpaAccountLoginStatusDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrpajiahaoyouhuodongrenwushezhigongsiqiweiweiduxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: rpajiahaoyouhuodongrenwushezhigongsiqiweiweiduxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrpapengyouquanyingxiaobiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: rpapengyouquanyingxiaobiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultrpapiliangjiahaoyouhuodongbiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: rpapiliangjiahaoyouhuodongbiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultRpaSeatAccountDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RpaSeatAccountDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultRPAxinjianyingxiaohuodongxiangqingDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: RPAxinjianyingxiaohuodongxiangqingDTO0;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSendStatisticsDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SendStatisticsDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSgGroupConfigDao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SgGroupConfigDao;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSgSecruitmentSetDao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SgSecruitmentSetDaoRes;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSgSysConfigVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SgSysConfigVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultshangchuanhaopingfanxianexcelshangpinjieguo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: shangchuanhaopingfanxianexcelshangpinjieguo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultshouyegailanmendianfenbudetu = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: shouyegailanmendianfenbudetu;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultshouyegailanqushigailan = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: shouyegailanqushigailan;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultshouyegailanshujugailanxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: shouyegailanshujugailanxinxi;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultshouyegailanSOP = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: shouyegailanSOP;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultshouyegailanzhinengdabiao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: shouyegailanzhinengdabiao;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSopcelveqishujufenxijieguo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Sopcelveqishujufenxijieguo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultsopcelveshujugailan = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sopcelveshujugailan;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultsopcelvezhuanhualoudou = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sopcelvezhuanhualoudou;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSophuabuliebiaozhuangtaifenzushuliangxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Sophuabuliebiaozhuangtaifenzushuliangxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSophuabuxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Sophuabuxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSopmobanliebiaozhuangtaifenzushuliangxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Sopmobanliebiaozhuangtaifenzushuliangxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultsopmobanxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sopmobanxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultsopshoudanzhuanhuacelvexiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: sopshoudanzhuanhuacelvexiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultSopshujufenxijieguo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Sopshujufenxijieguo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultstring = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: string;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsedabiaorenwuliebiaofanhuishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsedabiaorenwuliebiaofanhuishiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsedangesopcelveshuju = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsedangesopcelveshuju;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsehaopingfanxianhuodongcanyujilubiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsehaopingfanxianhuodongcanyujilubiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsehaopingfanxianhuodongwanzhengxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsehaopingfanxianhuodongwanzhengxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsehaopingfanxianlingquliebiao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsehaopingfanxianlingquliebiao;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsehuihuatongjifanhuiduixiang = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsehuihuatongjifanhuiduixiang;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseLossGuideCapitalRecordDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseLossGuideCapitalRecordDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseRecord = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseRecord;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponserenwushujugailanshiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponserenwushujugailanshiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseSgCustomerTransferTaskDetailVO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseSgCustomerTransferTaskDetailVO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseshangpinliebiao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseshangpinliebiao;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseshoudanSOPmeirishujubaobiao = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseshoudanSOPmeirishujubaobiao;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsesopmobanxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsesopmobanxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseTransferChatRoomResultDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseTransferChatRoomResultDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseTransferFriendsResultDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseTransferFriendsResultDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponseTreeNode = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponseTreeNode;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultTableResponsezhinengdabiaohaoyouliebiaofanhuishiti = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: TableResponsezhinengdabiaohaoyouliebiaofanhuishiti;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResulttongjihuiyuanxinxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: tongjihuiyuanxinxi;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultUploadRpaAddFriendExcelVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: UploadRpaAddFriendExcelVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultUrlsVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: UrlsVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultWeChatQrCodePlacardConfigDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WeChatQrCodePlacardConfigDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultweixinfukuanzhanghaoDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: weixinfukuanzhanghaoDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultWeWorkUserBehaviorDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WeWorkUserBehaviorDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultWxCorpInfoVO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WxCorpInfoVO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultWxCustomerCountDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WxCustomerCountDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultWXMarketingAnalysisTotalVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: WXMarketingAnalysisTotalVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultxiaoguofenxi = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: xiaoguofenxi;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultxinzengqiweixiaoyanwenjianDTO = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: xinzengqiweixiaoyanwenjianDTO;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultzhengshulujing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: zhengshulujing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultzhinengdabiaojuherenwubiaoxiangqing = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: zhinengdabiaojuherenwubiaoxiangqing;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanCommonResultzongjishujufanhuivo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: zongjishujufanhuivo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type BeanTableRequest = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: Record<string, any>;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxundanchukuangduandeliebiandashihuodongqingqiuduixiang = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxundanchukuangduandeliebiandashihuodongqingqiuduixiang;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxundiaozhengjinejilu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxundiaozhengjinejilu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxunhaopingfanxian = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxunhaopingfanxian;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxunhaopingfanxianshenhejilu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxunhaopingfanxianshenhejilu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxunqudaofenximouqudaodeliebiaoshuju = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxunqudaofenximouqudaodeliebiaoshuju;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxunrpakehuqingqiu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxunrpakehuqingqiu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxunshijitianjiadehaoyoumingxibiaoxiangqingdechaxunshiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxunshijitianjiadehaoyoumingxibiaoxiangqingdechaxunshiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestchaxunsopcelveshujugailan = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: chaxunsopcelveshujugailan;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestfenyesousuorpafaxiaoxijieshouren = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: fenyesousuorpafaxiaoxijieshouren;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestfenyesousuorpaqunliao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: fenyesousuorpaqunliao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestfenyesousuorpayingxiaoxiaoxi = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: fenyesousuorpayingxiaoxiaoxi;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestfenyesousuorpazhanghao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: fenyesousuorpazhanghao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestgongzhonghaodabiaohuodongliebiaoqingqiuti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: gongzhonghaodabiaohuodongliebiaoqingqiuti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestgongzhonghaohuanyingyudangehuanyingyurenyuanhuodianpuqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: gongzhonghaohuanyingyudangehuanyingyurenyuanhuodianpuqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestgongzhonghaohuanyingyuliebiaoqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: gongzhonghaohuanyingyuliebiaoqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestgongzhonghaotuwenxiaoxiqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: gongzhonghaotuwenxiaoxiqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestgongzhonghaoyingxiaohuodongliebiaoqingqiuti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: gongzhonghaoyingxiaohuodongliebiaoqingqiuti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequesthuoquhuiyuanxinxichaxuncanshu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: huoquhuiyuanxinxichaxuncanshu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestkuaijiehuashufenzubiaoxiangqing = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: kuaijiehuashufenzubiaoxiangqing;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestlong = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: number;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestmeirishujubaobiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: meirishujubaobiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestMessageQuery = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: MessageQuery;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestobject = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: Record<string, any>;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestPCduangenjinjiluchaxuncanshu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: PCduangenjinjiluchaxuncanshu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestqingqiuguanlianrenwuguanliandezhinengdabiaorenwu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: qingqiuguanlianrenwuguanliandezhinengdabiaorenwu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestqiweiqunhuochengyuanliebiaoxiaoshouyejitongji = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: qiweiqunhuochengyuanliebiaoxiaoshouyejitongji;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestqiweixiangqingliebiaoxiaoshouyejitongji = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: qiweixiangqingliebiaoxiaoshouyejitongji;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestqudaofenxiliebiaoshujuchaxunshiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: qudaofenxiliebiaoshujuchaxunshiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestqunhuanyingyubiaochaxunqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: qunhuanyingyubiaochaxunqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestReceiverQuery = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: ReceiverQuery;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestRpaSearchAccountRequest = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: RpaSearchAccountRequest;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestrpaxiaoyanjingqunliao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: rpaxiaoyanjingqunliao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestrpazhanghaopicichaxun = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: rpazhanghaopicichaxun;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestSearchGuideVo = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: SearchGuideVo;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestSearchMessageReportLogDTO = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: SearchMessageReportLogDTO;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestshangpinliebiaoqingqiu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: shangpinliebiaoqingqiu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsopcelvefenyechaxunqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sopcelvefenyechaxunqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsopcelveqifenyechaxunliebiaocanshu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sopcelveqifenyechaxunliebiaocanshu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestSOPfenyeqingqiu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: SOPfenyeqingqiu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsophuabufenyechaxunliebiaocanshu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sophuabufenyechaxunliebiaocanshu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuocaiwuliushui = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuocaiwuliushui;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuorpapengyouquanyingxiaobiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuorpapengyouquanyingxiaobiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuorpapengyouquanzhanghaomingxichaxunshiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuorpapengyouquanzhanghaomingxichaxunshiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuorpapiliangjiahaoyouhuodongbiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuorpapiliangjiahaoyouhuodongbiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuorpazuoxiguanlianrpazhanghaobiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuorpazuoxiguanlianrpazhanghaobiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuoweixinfukuanzhanghao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuoweixinfukuanzhanghao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuozhinengdabiaodabiaorenwubiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuozhinengdabiaodabiaorenwubiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestsousuozhinengdabiaojuherenwubiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: sousuozhinengdabiaojuherenwubiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestTargetChatRoomQuery = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: TargetChatRoomQuery;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestTargetQuery = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: TargetQuery;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestWelcomeMsgLogDTO = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: WelcomeMsgLogDTO;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestxiaoguofenxiqingqiu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: xiaoguofenxiqingqiu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestyigongsiweidufenyechaxunyifenfademobanliebiaoqingqiu = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: yigongsiweidufenyechaxunyifenfademobanliebiaoqingqiu;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestzhinengdabiaoguizeliebiaoqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: zhinengdabiaoguizeliebiaoqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestzhinengdabiaohaoyouliebiaoqingqiushiti = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: zhinengdabiaohaoyouliebiaoqingqiushiti;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestzhinengdabiaomeirishujubaobiao = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: zhinengdabiaomeirishujubaobiao;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestzhongfuquntongjiliebiaochaxunqingqiuduixiang = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: zhongfuquntongjiliebiaochaxunqingqiuduixiang;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableRequestzhongfuquntongjixiangqingliebiaochaxunqingqiuduixiang = {
    /** 未知 */
    draw?: number;
    /** 分页大小 */
    length?: number;
    /** 排序规则 */
    orderDir?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 查询参数实体对象 */
    searchMap?: zhongfuquntongjixiangqingliebiaochaxunqingqiuduixiang;
    /** 快捷搜索内容 */
    searchValue?: string;
    /** 分页查询起始位置 */
    start?: number;
  };

  type BeanTableResponseChatDataListVo = {
    /** 数据 */
    data?: ChatDataListVo[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseChatRoomDTO = {
    /** 数据 */
    data?: ChatRoomDTO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseFriendResultDTO = {
    /** 数据 */
    data?: FriendResultDTO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsegenjinjilu = {
    /** 数据 */
    data?: genjinjilu[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseGuestCodeActivityPopupResponse = {
    /** 数据 */
    data?: GuestCodeActivityPopupResponse[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsekehuxiangxixinxidaogoushuju = {
    /** 数据 */
    data?: kehuxiangxixinxidaogoushuju[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseListKeyWordsTopicVo = {
    /** 数据 */
    data?: KeyWordsTopicVo[][];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseListKeyWordsVo = {
    /** 数据 */
    data?: KeyWordsVo[][];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsemobanliebiao = {
    /** 数据 */
    data?: mobanliebiao[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseqiweichengyuanxiaoshouyejitongjixiangyingti = {
    /** 数据 */
    data?: qiweichengyuanxiaoshouyejitongjixiangyingti[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseqiweiqunliaoxiaoshouyejitongjixiangyingti = {
    /** 数据 */
    data?: qiweiqunliaoxiaoshouyejitongjixiangyingti[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseqiweixiaoshouyejixiangqingtongjixiangyingti = {
    /** 数据 */
    data?: qiweixiaoshouyejixiangqingtongjixiangyingti[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsequdaofenxiliebiaomingxishujushiti = {
    /** 数据 */
    data?: qudaofenxiliebiaomingxishujushiti[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsequdaofenxiliebiaoshujushiti = {
    /** 数据 */
    data?: qudaofenxiliebiaoshujushiti[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsequnhuanyingyushitiduixiang = {
    /** 数据 */
    data?: qunhuanyingyushitiduixiang[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponserenwutixihuiyuanxinxi = {
    /** 数据 */
    data?: renwutixihuiyuanxinxi[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponserpafaxiaoxijieshourenxiangqing = {
    /** 数据 */
    data?: rpafaxiaoxijieshourenxiangqing[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseRPAhuodongchaxunliebiaoDTO = {
    /** 数据 */
    data?: RPAhuodongchaxunliebiaoDTO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponserpakehuxiangying = {
    /** 数据 */
    data?: rpakehuxiangying[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponserpazhanghaotianjiarizhibiaoxiangqingxiangying = {
    /** 数据 */
    data?: rpazhanghaotianjiarizhibiaoxiangqingxiangying[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseSgCustomerTransferTaskVO = {
    /** 数据 */
    data?: SgCustomerTransferTaskVO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseShopCustomerVO = {
    /** 数据 */
    data?: ShopCustomerVO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseShopDTO = {
    /** 数据 */
    data?: ShopDTO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponseWelcomeMsgLogVo = {
    /** 数据 */
    data?: WelcomeMsgLogVo[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsewenjiandaochujiluVO = {
    /** 数据 */
    data?: wenjiandaochujiluVO[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsezhongfuquntongjiliebiaochaxunxiangyingduixiang = {
    /** 数据 */
    data?: zhongfuquntongjiliebiaochaxunxiangyingduixiang[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type BeanTableResponsezhongfuquntongjixiangqingliebiaochaxunxiangyingduixiang = {
    /** 数据 */
    data?: zhongfuquntongjixiangqingliebiaochaxunxiangyingduixiang[];
    /** 请求的次数 */
    draw?: number;
    /** 扩展属性 */
    ext?: Record<string, any>;
    /** 是否含有下一页 */
    hasNext?: boolean;
    /** 当前条件过滤出的记录数 */
    recordsFiltered?: number;
    /** 未过滤时的总记录数 */
    recordsTotal?: number;
  };

  type biangengyemianbanben = {
    /** 目标版本(0旧版，1新版) */
    version?: number;
  };

  type bianjikehuqiyebiaoqian = {
    /** 要标记的标签列表 */
    addTag?: string[];
    /** appKey */
    appkey: string;
    /** 企微企业id */
    corpId?: string;
    /** 数据中心类型（1: ECRP; 2: 客道） */
    dataCenterType?: number;
    /** 外部联系人userid */
    externalUserid?: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 要移除的标签列表 */
    removeTag?: string[];
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
    /** 添加外部联系人的userid */
    userid?: string;
  };

  type bianjiweixinfukuanzhanghaoVO = {
    /** 证书路径（从上传接口传到临时目录，这边提交的是临时目录的相对路径） */
    cert?: string;
    /** 证书有效期过期时间 */
    expireTime?: string;
    /** 商户平台密钥key */
    key?: string;
    /** 商户账号appid */
    mchAppid?: string;
    /** 商户号 */
    mchid?: string;
    /** 证书有效期起始时间 */
    startTime?: string;
    /** 商户API证书序列号（只有V3版本才有该字段） */
    wechatPaySerialNo?: string;
  };

  type biaoqianzhishiti = {
    /** 标签id */
    tagId?: string;
    /** 标签名称 */
    tagName?: string;
  };

  type BindPlatformAccountResultPageDto = {
    /** 关联结果页配置json */
    bindResultPageJson?: string;
    /** 平台类型 */
    platform?: number;
    /** 平台名称 */
    platformName?: string;
  };

  type BindPlatformAccountResultPageSaveQuery = {
    /** 关联结果页配置json */
    bindResultPageJson?: string;
    /** 平台类型 */
    platform?: number;
  };

  type buildPaymentTendencyDataUsingDELETEParams = {
    /** data */
    data?: string;
    /** viewId */
    viewId?: number;
    /** policyIds */
    policyIds?: number;
  };

  type buildPaymentTendencyDataUsingGETParams = {
    /** data */
    data?: string;
    /** viewId */
    viewId?: number;
    /** policyIds */
    policyIds?: number;
  };

  type buildPaymentTendencyDataUsingPATCHParams = {
    /** data */
    data?: string;
    /** viewId */
    viewId?: number;
    /** policyIds */
    policyIds?: number;
  };

  type buildPaymentTendencyDataUsingPOSTParams = {
    /** data */
    data?: string;
    /** viewId */
    viewId?: number;
    /** policyIds */
    policyIds?: number;
  };

  type buildPaymentTendencyDataUsingPUTParams = {
    /** data */
    data?: string;
    /** viewId */
    viewId?: number;
    /** policyIds */
    policyIds?: number;
  };

  type buildPolicyEditUsingDELETEParams = {
    /** data */
    data?: string;
    /** policyIds */
    policyIds?: number;
  };

  type buildPolicyEditUsingGETParams = {
    /** data */
    data?: string;
    /** policyIds */
    policyIds?: number;
  };

  type buildPolicyEditUsingPATCHParams = {
    /** data */
    data?: string;
    /** policyIds */
    policyIds?: number;
  };

  type buildPolicyEditUsingPOSTParams = {
    /** data */
    data?: string;
    /** policyIds */
    policyIds?: number;
  };

  type buildPolicyEditUsingPUTParams = {
    /** data */
    data?: string;
    /** policyIds */
    policyIds?: number;
  };

  type caidanpeizhidto = {
    /** 账号 */
    account?: string;
    /** 路由地址 */
    address?: string;
    /** 创建时间 */
    createTime?: string;
    /** 企业id */
    groupId?: number;
    /** 自增主键 */
    id?: number;
    /** 是否显示(0-不展示 1-展示) */
    isShow?: boolean;
    /** 菜单名称 */
    name?: string;
    /** 环境 (qa/saas/kd/ecrp) */
    type?: string;
  };

  type callbackMsgUsingGETParams = {
    /** msg_signature */
    msg_signature: string;
    /** timestamp */
    timestamp?: string;
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
  };

  type callbackMsgUsingPOSTParams = {
    /** msg_signature */
    msg_signature: string;
    /** timestamp */
    timestamp?: string;
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
  };

  type callUsingPOSTParams = {
    /** beanName */
    beanName: string;
    /** methodName */
    methodName: string;
  };

  type canvasDataAnalyseUsingGETParams = {
    /** canvasId */
    canvasId: number;
  };

  type casLoginUsingGETParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type changeViewUsingDELETEParams = {
    /** areaId */
    areaId?: number;
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** areaType */
    areaType?: number;
  };

  type changeViewUsingGETParams = {
    /** areaId */
    areaId?: number;
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** areaType */
    areaType?: number;
  };

  type changeViewUsingPATCHParams = {
    /** areaId */
    areaId?: number;
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** areaType */
    areaType?: number;
  };

  type changeViewUsingPOSTParams = {
    /** areaId */
    areaId?: number;
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** areaType */
    areaType?: number;
  };

  type changeViewUsingPUTParams = {
    /** areaId */
    areaId?: number;
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** areaType */
    areaType?: number;
  };

  type changzhizhuanhuanqingqiushiti = {
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 映射键 */
    key: string;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 映射类型 1:二维码场景值 默认为1 */
    swapType?: number;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type ChannelActivityCouponDTO = {
    /** 优惠券活动发放配置表Id */
    activityCouponConfigId?: number;
    /** 门店优惠券状态（0：禁用,1：启用， 3：已过期） */
    couponStatus?: number;
    /** 优惠券标题 */
    couponTitle?: string;
    /** 门店优惠券类型（0：未知，1：代金券、2：折扣券、3：兑换券） */
    couponType?: number;
    /** 优惠券面值：coupon_type=1，优惠券面额（单位：元）；coupon_type=2，折扣值（8.5折即0.85） */
    couponValue?: number;
    /** 创建人 */
    createAccount?: string;
    /** 优惠券的截止时间 */
    endTime?: string;
    /** 导购优惠券状态 */
    guideCouponStatus?: number;
    /** 备注 */
    remark?: string;
    /** 优惠券剩余数量 */
    validNumber?: number;
  };

  type ChannelLineChartData = {
    dimensions?: string[];
    source?: Record<string, any>[];
  };

  type ChannelPieChartData = {
    /** 添加好友数 */
    addCount?: number;
    /** 渠道名称 */
    channelName?: string;
    /** 日期 */
    date?: string;
  };

  type ChatDataListVo = {
    /** 头像 */
    avatar?: string;
    /** 好友名称 */
    contactName?: string;
    /** 内容 */
    content?: string;
    /** 员工名称 */
    guideName?: string;
    /** 关键词 */
    keyWord?: string;
    /** 聊天时间戳 */
    msgtime?: string;
    /** 群id */
    roomid?: string;
    /** 聊天发起人 */
    sender?: string;
    /** 聊天序列 */
    seq?: string;
    /** 聊天接收人 */
    tolist?: string;
  };

  type ChatRoomDTO = {
    /** 建群时间 */
    buildTime?: string;
    /** 群Id */
    chatId?: string;
    /** 群主名 */
    chatroomLeaderNick?: string;
    /** 群人数 */
    count?: number;
    /** 导购Id */
    guideId?: number;
    /** 群名 */
    title?: string;
  };

  type ChatRoomGroupConfigVo = {
    autoCreateRoom?: number;
    chatIdList?: string[];
    configId?: string;
    corpId?: string;
    remark: string;
    roomBaseId?: number;
    roomBaseName?: string;
    scene?: number;
    source?: number;
  };

  type ChatRoomIdsDTO = {
    chatIds?: string[];
  };

  type ChatRoomParamsQuery = {
    /** 企业微信Id */
    corpId?: string;
    /** 建群结束时间 */
    endBuildTime?: string;
    /** 公司Id */
    groupId?: number;
    /** 导购Id */
    guideId: number;
    /** 群名称/群主 */
    ownerNameOrOwner?: string;
    /** 建群开始时间 */
    startBuildTime?: string;
  };

  type ChatRoomsVo = {
    /** 群Id */
    chatId: string;
    /** 原专属导购ID */
    sgExclusiveGuideId: number;
  };

  type chaxundanchukuangduandeliebiandashihuodongqingqiuduixiang = {
    /** 创建人 */
    loginAccount?: string;
    /** 活动名称 */
    name?: string;
    /** 创建人/活动名称 */
    nameOrLoginAccount?: string;
  };

  type chaxundiaozhengjinejilu = {
    /** 账号Id */
    changeEmployeeId?: number;
    /** 订单号 */
    tradeId?: string;
  };

  type chaxunhaopingfanxian = {
    /** 名称 */
    name?: string;
    /** 活动状态：1正常 2活动未开始  3活动结束 */
    status?: number;
    /** 活动开始时间起 */
    validTimeStartFrom?: string;
    /** 活动开始时间至 */
    validTimeStartTo?: string;
  };

  type chaxunhaopingfanxianshenhejilu = {
    /** 审核结果：1 审核通过 2审核不通过； */
    auditResult?: number;
    /** 审核状态(1未审核,2已审核) */
    auditStatus?: number;
    /** 活动名称 */
    name?: string;
    /** 下单时间结束 */
    orderTimeEnd?: string;
    /** 下单时间开始 */
    orderTimeStart?: string;
    /** 提交时间结束 */
    participateTimeEnd?: string;
    /** 提交时间开始 */
    participateTimeStart?: string;
    /** 平台id */
    platformId?: number;
    /** 会员名 */
    platformNick?: string;
    /** 店铺id */
    shopId?: number;
    /** 活动状态：1正常 2未开始 3活动结束 */
    status?: number;
    /** 订单号 */
    tradeId?: string;
  };

  type chaxunqudaofenximouqudaodeliebiaoshuju = {
    /** 渠道编码 */
    channelCode?: string;
    /** 企微id */
    corpId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 公司ID */
    groupId?: number;
    /** 开始时间 */
    startTime?: string;
  };

  type chaxunrpakehuqingqiu = {
    /** 客户名 */
    groupName?: string;
  };

  type chaxunshijitianjiadehaoyoumingxibiaoxiangqingdechaxunshiti = {
    /** 账号id */
    accountId?: number;
    /** 活动id */
    activityId?: number;
    /** 状态 */
    status?: number;
  };

  type chaxunsopcelveshujugailan = {
    /** 视角id */
    viewId?: number;
  };

  type chaxunsucaifujiancanshu = {
    /** 素材Id */
    materialId?: number;
  };

  type checkWelcomeCodeNameUsingGETParams = {
    /** title */
    title?: string;
    /** welcomeCodeUuid */
    welcomeCodeUuid?: string;
  };

  type chuangjiangongzhonghaoqunfaxiaoxizhixingrenshaixuantiaojian = {
    /** 区域id */
    areaId?: number;
    /** 导购id（逗号分割） */
    guideIds?: string;
    /** 门店id */
    shopId?: number;
  };

  type chuangjiangongzhonghaoqunfaxiaoxizhixingrenshaixuantiaojian0 = {
    /** 区域id */
    areaId?: number;
    /** 导购id（逗号分割） */
    guideIds?: string;
    /** 门店id */
    shopId?: number;
  };

  type chuangjianhaopingfanxianhuodong = {
    /** 公众号id */
    appId?: string;
    /** 区域id */
    areaId?: number;
    /** 返现订单笔数,指当前活动最多返现的订单笔数，超过此数量将不再返现，0表示不限 */
    cashbackOrderNumLimit?: number;
    /** 返现策略:1固定金额,2订单比例,3随机金额,4阶梯返现,5买N免M */
    cashbackPolicy?: number;
    /** 企微id */
    corpId?: string;
    /** 商品信息,用json存储 */
    goodsInfo?: string;
    /** 商品列表类型:1全部,2选中,3除去 */
    goodsType?: number;
    /** 公司ID */
    groupId?: number;
    /** 绑定平台昵称是否开启(将根据输入的订单号与好友账号绑定,仅支持kd) */
    isBindingPlatform?: boolean;
    /** 活动链接url */
    linkUrl?: string;
    /** 名称 */
    name?: string;
    /** 订单确认收货时间结束(指此段时间确认收货单可参与此活动) */
    orderConfirmTimeEnd?: string;
    /** 订单确认收货时间开始(指此段时间确认收货单可参与此活动) */
    orderConfirmTimeStart?: string;
    /** 订单付款时间结束(指此段时间付款的订单可参与此活动) */
    orderPayTimeEnd?: string;
    /** 订单付款时间开始(指此段时间付款的订单可参与此活动) */
    orderPayTimeStart?: string;
    /** 可参与的订单状态: 1确认收货 */
    participateInOrderStatus?: number;
    /** 支付方式id */
    payMethodId?: number;
    /** 活动二维码url */
    qrcodeUrl?: string;
    /** 店铺信息,用json存储 */
    shopInfo?: string;
    /** 活动状态：1正常 2活动未开始  3活动结束 */
    status?: number;
    /** 每人参与次数指每个用户最多参与次数，0表示不限 */
    userParticipateNumLimit?: number;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType?: number;
  };

  type chuangjianhaopingfanxianhuodongfanxiancelve = {
    /** 活动id */
    activityId?: number;
    /** 固定金额（单位：分） */
    fixedMoney?: number;
    /** 公司ID */
    groupId?: number;
    /** 最低付款金额限制（单位：分） */
    minPayMoney?: number;
    /** 买N免M的N */
    nmBuyN?: number;
    /** 买N免M的M */
    nmGiveM?: number;
    /** 每人赠送数量上限 */
    nmGiveMaxNum?: number;
    /** 订单比例的最大返现金额（单位：分） */
    percentMaxMoney?: number;
    /** 订单比例(0-100) */
    percentNum?: number;
    /** 随机金额的最大值（单位：分） */
    randomMaxMoney?: number;
    /** 随机金额的最小值（单位：分） */
    randomMinMoney?: number;
  };

  type chuangjianhaopingfanxianhuodongfanxianjieti = {
    /** 活动id */
    activityId?: number;
    /** 固定金额大小 */
    fixMoney?: number;
    /** 公司ID */
    groupId?: number;
    /** 返现方式:1固定金额,2范围内随机金额 */
    method?: number;
    /** 随机金额最大值 */
    randomMaxMoney?: number;
    /** 随机金额最小值 */
    randomMinMoney?: number;
    /** 付款金额范围结束 */
    rangeEndPayMoney?: number;
    /** 付款金额范围开始 */
    rangeStartPayMoney?: number;
    /** 多个规则顺序号 */
    sequenceNum?: number;
  };

  type chuangjianhaopingfanxianhuodongkuozhanbiao = {
    /** 活动id */
    activityId?: number;
    /** 活动介绍 */
    activityIntroduction?: string;
    /** 活动消息卡片文案 */
    cardCopywriting?: string;
    /** 活动消息卡片封面图片 */
    cardCoverPic?: string;
    /** 活动消息卡片标题 */
    cardTitle?: string;
    /** 商品信息,用json存储 */
    goodsInfo?: string;
    /** 公司ID */
    groupId?: number;
    /** 页面配色 */
    pageColor?: string;
    /** 好评返现活动页面装修配置,【商品设置】、【自定义图片】、【好评信息】、【活动说明】支持自定义顺序 */
    pageDecoration?: string;
    /** 公众号海报url */
    posterUrl?: string;
    /** 二维码尺寸 */
    qrcodeSize?: number;
    /** 公众号二维码url */
    qrcodeUrl?: string;
    /** 二维码图片在海报的X轴位置 */
    qrcodeX?: number;
    /** 二维码图片在海报的Y轴位置 */
    qrcodeY?: number;
  };

  type chuangjianhudongleidahuodongzhubiao = {
    /** appId */
    appId?: string;
    /** 渠道代码集合 */
    channelCodeList?: string[];
    /** 渠道集合对象 */
    channelList?: leidaqudaobiaoxiangqing[];
    /** 企业微信corpId */
    corpId?: string;
    /** 创建人登录账号 */
    createAccount?: string;
    /** 创建人 */
    createName?: string;
    /** 品牌ID */
    groupId?: number;
    /** 是否开启授权 */
    isShowAuth?: boolean;
    /** 是否开启客户标签 */
    isShowTag?: boolean;
    /** 雷达图片地址 */
    linkImageAddress?: string;
    /** 雷达描述 */
    linkMessage?: string;
    /** 雷达标题 */
    linkTitle?: string;
    /** 雷达地址 */
    radarAddress?: string;
    /** 雷达code */
    radarCode?: string;
    /** 雷达名称 */
    radarName?: string;
    /** 分表key */
    subTableKey?: number;
    /** 客户标签 */
    tagIdList?: string[];
  };

  type chuangjianqunfaxiaoxi = {
    /** 附件 */
    attachments?: chuangjianxiaoxifujian[];
    /** 消息文本内容 */
    content?: string;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    employeeSelect?: string;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则立即发送） */
    predictSendTime?: string;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 创建群发消息执行人筛选条件（标签类型下有效） */
    targetCondition?: chuangjianqunfaxiaoxizhixingrenshaixuantiaojian;
    /** 群发消息执行人 */
    targets?: chuangjianqunfaxiaoxizhixingren[];
    /** 群发类型（1: 好友消息; 2: 群消息; 3: 客户分组） */
    type?: number;
  };

  type chuangjianqunfaxiaoxizhixingren = {
    /** 分群类别 */
    categoryName?: string;
    /** 营销人群（具体含义根据message type确定） */
    targetId?: number;
    /** 营销人名称（message_type=3时有值） */
    targetName?: string;
  };

  type chuangjianqunfaxiaoxizhixingrenshaixuantiaojian = {
    /** 区域id */
    areaId?: number;
    /** 导购id（逗号分割） */
    guideIds?: string;
    /** 门店id */
    shopId?: number;
  };

  type chuangjianrenwushiti = {
    /** 规则 */
    rules: chuangjianzhinengdabiaodangerenwuguizebiao[];
    /** 场景id */
    sceneId: number;
    /** 场景名称 */
    sceneName: string;
    /** 标签id */
    tagId: string;
    /** 任务名称 */
    taskName: string;
  };

  type chuangjianrpapengyouquanyingxiaobiao = {
    /** 发朋友圈的账号id集合 */
    accountList?: number[];
    /** 附件信息 */
    attachmentDTOList?: rpapengyouquanyingxiaofujianxiangqing[];
    /** 活动名称 */
    name?: string;
    /** 活动开始时间 */
    sendTime?: string;
    /** 0 立即发送 1 定时发送 */
    sendType?: number;
    /** 朋友圈文案 */
    text?: string;
  };

  type chuangjianrpapiliangjiahaoyouhuodongshiti = {
    /** 添加账号 */
    addAccount?: string;
    /** 添加好友数量 */
    addFriendCount?: number;
    /** 企微标签,存放逗号分隔的标签id */
    corpTag?: string;
    /** 文件名称 */
    fileName?: string;
    /** 上传文件路径 */
    filePath?: string;
    /** 活动名称 */
    name?: string;
    /** 活动开始时间 */
    startTime?: string;
  };

  type chuangjianweixinzhinenghuanyingyu = {
    /** 公司所对应的运营公众号appId */
    appId?: string;
    /** 欢迎语内容json格式 */
    content?: string;
    corpId?: string;
    /** 员工选择组件数据，用于前端回显 */
    employeeSelect?: string;
    /** 失效时间（秒）:如添加好友开始距离该时间后才触发欢迎语，则不发送 */
    failureTime?: number;
    /** 公司ID */
    groupId?: number;
    /** 1:企微，2:个号，3: 公众号,4:好评返现活动 */
    plan?: number;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 发送次数 */
    sendCount?: number;
    /** 欢迎语启用状态 0未开启 1启用 */
    status?: number;
    /** 标题 */
    title?: string;
    /** 模板类型：0基础模板；9默认模板； */
    type?: number;
    /** 记录唯一标识 uuid 去除'-'  */
    uuid?: string;
  };

  type chuangjianxiaoxifujian = {
    /** 小程序appid */
    appid?: string;
    /** 描述 */
    description?: string;
    /** 素材id，企微素材管理接口返回 */
    mediaId?: string;
    /** 小程序page路径 */
    page?: string;
    /** 图片链接 */
    picUrl?: string;
    /** 二维码海报配置id（仅type=5时有效） */
    qrcodePlacardConfigId?: number;
    /** 远程文件（根据附件类型不同，可能是图片、视频、小程序封面图的OSS地址） */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型（1: 图片; 2: 视频; 3: 连接; 4: 小程序; 5: 二维码海报） */
    type?: number;
    /** 跳转链接 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型（1:自定义链接; 2: 系统预置链接） */
    urlType?: number;
  };

  type chuangjianzhanghaojishouyegailanyemianmoban = {
    /** 模块编码 */
    code?: string;
    /** 子层级内容 */
    content?: Record<string, any>[];
    /** 展示: 0-不展示, 1-展示 */
    display?: number;
    /** 是否全宽: 0-否, 1-是 */
    fullWidth?: number;
    /** 是否侧边: 0-不在侧边展示, 1-在侧边展示 */
    isSide?: number;
    /** 模块名称 */
    name?: string;
    /** 页面路径 */
    pagePath?: string;
    /** 顺序: 0第一位, 1第二位, ... */
    sort?: number;
  };

  type chuangjianzhinengdabiaodangerenwuguizebiao = {
    /** 选择类型 */
    checkStatus?: number;
    /** v3员工组件返回 */
    employeeSelect?: string;
    /** 当为点赞和评论朋友圈的时候此处必传 绑定店铺时传3，为绑定传6，为运算符是（时间区间）也必传,1:<,2:<=,3:=,4>,5:>=,6：!= */
    operate?: number;
    /** 规则组id */
    ruleGroupId: number;
    /** 规则名称 ：运算符时此处为时间，群聊为群聊id，会员为会员体系id, 点赞和评论朋友圈时为次数, 添加指定好友是为导购id,绑定店铺/未绑定店铺为店铺id，流失好友为导购id，视角的时候为视角id ,休眠时间点为天数, 最近付款时间 为天数   休眠时间区间 为数组区间[startTime,endTime],重复好友是为导购id好友来源 JSON存储 */
    ruleName: string;
    /** 规则类型( 1：运算符 ，2：加入群聊，3：加入会员 4：点赞朋友圈 5：评论朋友圈,6:添加指定好友,7:淘宝,8:京东 ,9 有赞，10 抖店，11.流失好友，12 下单次数 13 下单金额，14 视角, ,15 最近付款时间 ,16 休眠天数(时间点) 17 付款时间区间 18 重复好友 19好友来源 */
    ruleType: number;
  };

  type chuangjianzhinengdabiaojuherenwubiao = {
    /** 聚合任务关联的任务信息 */
    taskList?: juherenwuguanlianderenwushiti[];
    /** 任务名称 */
    taskName?: string;
    /** 1 启用 ，0 未启用 */
    taskStatus?: number;
  };

  type ClassInfo = {
    description?: string;
    example?: Record<string, any>;
    fields?: Record<string, any>[];
    name?: string;
    type?: Type;
  };

  type closeGuestCodeActivityUsingGETParams = {
    /** 裂变大师活动ID */
    guestCodeId: number;
  };

  type closeTaskUsingGETParams = {
    /** taskId */
    taskId?: number;
  };

  type CmShopVo = {
    sellerNick?: string;
    shopGUID?: string;
    shopId?: number;
    shopName?: string;
    shopPlatId?: number;
  };

  type CodePoster = {
    mediaid?: string;
    model?: PosterModel;
    type?: string;
  };

  type CommodityByConversionQuery = {
    /** 商品库id */
    goodsLibId?: number;
    /** 商品商家编码 */
    goodsOuterId?: string;
    /** 商品名 */
    goodsTitle?: string;
    /** 建议零售价 */
    suggestPrice?: string;
    /** 商品id */
    sysItemId?: number;
  };

  type CommonResult = {
    code?: string;
    msg?: string;
    result?: Record<string, any>;
    success?: boolean;
  };

  type ConfigVO = {
    /** 可信域名 */
    appDomain?: string;
    /** 校验文件 */
    filename?: string;
    /** 应用类型：0=自建应用； 1=自建代开发应用 */
    type?: string;
    /** 外部联系人自定义详情页 */
    webLink?: string;
  };

  type confirmAnnouncementUsingGETParams = {
    /** id */
    id: string;
  };

  type Content = {
    image?: Image;
    miniPro?: MiniPro;
    picText?: PicText;
    text?: string;
  };

  type CorpShopRelationVo = {
    sellerNick?: string;
    shopGUID?: string;
    shopName?: string;
    shopPlatId?: string;
  };

  type CorpTagGroupVo = {
    /** 企微用户id */
    addUserID?: string;
    /** 企微corpId */
    corpID?: string;
    /** 标签列表 */
    corpTagList?: CorpTagVo[];
    /** 标签组id */
    groupID?: string;
    /** 标签组名 */
    groupName?: string;
    /** 标签组排序的次序值，值越大越靠前 */
    groupOrder?: number;
    /** 标签类别 1-企业设置, 2-用户自定义 */
    tagType?: number;
  };

  type CorpTagVo = {
    /** 标签ID */
    tagID?: string;
    /** 标签名 */
    tagName?: string;
    /**  标签排序的次序值，值越大越靠前 */
    tagOrder?: number;
  };

  type CorpUserBind = {
    /** 用户在店铺的唯一标识 */
    buyerNick?: string;
    /** 企微id */
    corpId?: string;
    /** 微信用户id */
    externalUserId?: string;
    /** 公司id */
    groupId?: number;
    /** 变更时间 */
    modifiedDate?: string;
    /** 卖家昵称 */
    sellerNick?: string;
    /** 店铺Guid */
    shopGuid?: string;
    /** 店铺id */
    shopId?: number;
    /** 店铺平台类型 1 淘宝 3 京东 11 有赞 */
    shopPlatId?: number;
    /** 绑定状态 1是绑定，0是解绑 */
    state?: string;
    /** 外部联系人在微信开放平台的唯一身份标识 */
    unionId?: string;
  };

  type CorpUserBindRequest = {
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** 企业ID */
    corpID?: string;
    /** 结束时间,yyyy-MM-dd HH:mm:ss */
    endTime: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 购买人nick */
    nick?: string;
    /** 分页ID */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** shopGUID */
    shopGUID: string;
    /** 签名 */
    sign: string;
    /** 开始时间,yyyy-MM-dd HH:mm:ss */
    startTime: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type CorpUserBindVo = {
    corpUserBindList?: CorpUserBind[];
    /** 总记录条数 */
    total?: number;
  };

  type costTimeUsingGETParams = {
    /** 分组id */
    subdivisionId: number;
  };

  type CouponCustomerRequest = {
    /** 活动优惠券ID */
    activityCouponId: number;
    /** appKey */
    appkey: string;
    draw?: number;
    /** 集团/品牌/公司 id */
    groupId: number;
    /** 导购ID */
    guideId: number;
    /** 分页大小，1 - 100 */
    length?: number;
    /** 商城id */
    mallId?: number;
    /** 排序方向，默认为升序 */
    orderDir?: string;
    /** 排序字段，是否支持排序视各个接口实际情况而定 */
    orderKey?: string;
    /** 分页起始条数（位置偏移量），从0开始（当前接口start属性无效） */
    pageStart: number;
    /** 签名 */
    sign: string;
    /** 排序字段 */
    sort?: string;
    /** 分页起始条数（位置偏移量），从0开始 */
    start?: number;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
    /** 视角ID id */
    viewId: number;
  };

  type CouponGuideVo = {
    guideCouponTotal?: number;
    guideId?: number;
    guideName?: string;
    shopIds?: number;
  };

  type CouponParameterRequest = {
    /** appKey */
    appkey: string;
    /** 优惠券是否过期 0:未过期 1：已过期  */
    dateState: number;
    /** ECRP公司ID */
    groupId: number;
    /** 导购ID */
    guideId: number;
    /** 商城id */
    mallId?: number;
    /** 返回条数Size，从0开始（当前接口Size属性无效） */
    pageSize?: number;
    /** 分页起始条数（位置偏移量），从0开始（当前接口start属性无效） */
    pageStart: number;
    /** 店铺ID */
    shopId: number;
    /** 签名 */
    sign: string;
    /** 排序字段 */
    sort?: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type CouponParameterRequest0 = {
    /** appKey */
    appkey: string;
    /** 优惠券是否过期 0:未过期 1：已过期  */
    dateState: number;
    draw?: number;
    /** 集团/品牌/公司 id */
    groupId: number;
    /** 导购ID */
    guideId: number;
    /** 分页大小，1 - 100 */
    length?: number;
    /** 商城id */
    mallId?: number;
    /** 排序方向，默认为升序 */
    orderDir?: string;
    /** 排序字段，是否支持排序视各个接口实际情况而定 */
    orderKey?: string;
    /** 返回条数Size，从0开始（当前接口start属性无效） */
    pageSize?: number;
    /** 分页起始条数（位置偏移量），从0开始（当前接口start属性无效） */
    pageStart: number;
    /** 店铺ID */
    shopId: number;
    /** 签名 */
    sign: string;
    /** 排序字段 */
    sort?: string;
    /** 分页起始条数（位置偏移量），从0开始 */
    start?: number;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type CouponResponse = {
    /** 相对时间 若干天后起效 */
    afterGetValidDays?: number;
    /** 未被领取的优惠券 */
    couponRemain?: number;
    /** 优惠券 主题/名字 */
    couponTitle?: string;
    /** 优惠券类型 0：未知，1：代金券、2：折扣券、3：兑换券 */
    couponType?: string;
    /** 优惠券金额           当coupon_type为1时，此框标识优惠券面额
当coupon_type为2时，此框表示折扣值，8.5折请存0.85 当coupon_type为3时，此框表示兑换券 展示“礼”字 */
    couponValue?: number;
    /** 有效时间类型 0：固定，1：相对
            为0时，start_time和end_time有效
            为1时，after_get_valid_days和valid_da */
    dateValidType?: number;
    /** 固定时间 领取截止时间 */
    endTime?: string;
    /** 领取截至时间 */
    receiveEndTime?: string;
    /** 已领取的优惠券 */
    sendCoupon?: number;
    /** 固定时间 生效时间  */
    startTime?: string;
    /** 优惠券发布类型 0：公用   1：店铺配额 */
    type?: string;
    /** 使用条件：           type:0:无门槛，1：订单或者商品，2：同一订单同一商品
            当type=0时，condition内容无效
            当type=1时，condition为：{tradeAmount:20,logic:"and",itemAmount:10 }
            当type=2时，condition为：{itemCount:2} */
    useConditionJson?: string;
    /** 使用范围 使用范围 eg:{itemRangeType:1,itemRange:{type:2,itemList:[{itemId:23232,itemName:"烘干机"},{itemId:32323,itemName:"洗衣机"}]},      shopRangeType:1,shopList:[{shopId:21212,shopName:"杭州店"},{shopId:23232,shopName:"厦门店"}]}备注：itemRangeType：0：不限，1：包含指定商品，2：排除包含指定商品当itemRangeType=0时，itemRange无效。1时，itemRange={type:2,itemList:[{itemId:23232,itemName:"烘干机"},{itemId:32323,itemName:"洗衣机"}]}。2时，itemRange={type:2,itemList:[{itemId:23232,itemName:"烘干机"},{itemId:32323,itemName:"洗衣机"}]}\\r\\n            type：0：全部，1：只包含，2：部分包含\\r\\n            当type=0时，itemList无效。1时，itemList=[{itemId:23232,itemName:"烘干机"},{itemId:32323,itemName:"洗衣机"}]。2时，itemList=[{itemId:23232,itemName:"烘干机"},{itemId:32323,itemName:"洗衣机"}]\\r\\n            shopRangeType:0:不限，1：仅限所选门店，2：排除所选门店\\r\\n            当shopRangeType=0时，shopList无效。1时，shopList=[{shopId:21212,shopName:"杭州店"},{shopId:23232,shopName:"厦门店"}]。2时，shopList=[{shopId:21212,shopName:"杭州店"},{shopId:23232,shopName:"厦门店"}] */
    useRange?: string;
    /** 相对时间 有效天数 */
    validDays?: number;
  };

  type CouponShopVo = {
    shopCouponTotal?: number;
    shopId?: number;
    shopName?: string;
  };

  type CouponStatisticsRequest = {
    /** 活动优惠券ID */
    activityCouponId: number;
    /** appKey */
    appkey: string;
    draw?: number;
    /** 集团/品牌/公司 id */
    groupId: number;
    /** 导购ID */
    guideId: number;
    /** 分页大小，1 - 100 */
    length?: number;
    /** 商城id */
    mallId?: number;
    /** 排序方向，默认为升序 */
    orderDir?: string;
    /** 排序字段，是否支持排序视各个接口实际情况而定 */
    orderKey?: string;
    /** 店铺ID */
    shopId: number;
    /** 签名 */
    sign: string;
    /** 排序字段 */
    sort?: string;
    /** 分页起始条数（位置偏移量），从0开始 */
    start?: number;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type CouponStatisticsResponse = {
    /** 已领取的优惠券数量 */
    couponGetNumber?: string;
    /** 已使用的优惠券数量 */
    couponUseNumber?: string;
  };

  type CreateAttachmentVo = {
    /** 小程序appid */
    appid?: string;
    /** 描述 */
    description?: string;
    /** 素材id，企微素材管理接口返回 */
    mediaId?: string;
    /** 小程序page路径 */
    page?: string;
    /** 图片链接 */
    picUrl?: string;
    /** 二维码海报配置id（仅type=5时有效） */
    qrcodePlacardConfigId?: number;
    /** 远程文件（根据附件类型不同，可能是图片、视频、小程序封面图的OSS地址） */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型（1: 图片; 2: 视频; 3: 连接; 4: 小程序; 5: 二维码海报） */
    type?: number;
    /** 跳转链接 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型（1:自定义链接; 2: 系统预置链接） */
    urlType?: number;
  };

  type CreateCoverVO = {
    /** 背景图 */
    background?: string;
    /** 是否默认封面 */
    isDefault?: boolean;
    /** 封面名称 */
    name?: string;
  };

  type createExportTaskUsingPOSTParams = {
    /** json */
    json: string;
    /** fileName */
    fileName: string;
  };

  type CreateGroupMessageRequest = {
    /** appKey */
    appkey: string;
    /** 附件 */
    attachments?: CreateAttachmentVo[];
    /** 消息文本内容 */
    content?: string;
    /** 企微企业id */
    corpId?: string;
    /** 数据中心类型（1: ECRP; 2: 客道） */
    dataCenterType?: number;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则调用发送接口立即发送） */
    predictSendTime?: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type CreateReceiverVo = {
    /** 外部联系人id */
    externalUserid?: string;
    /** 员工id（发送人） */
    guideId?: number;
    /** 员工企微userid */
    userid?: string;
  };

  type createShortUrlUsingGETParams = {
    /** 长链url */
    url: string;
  };

  type CreateSimpleGroupMessageRequest = {
    /** appKey */
    appkey: string;
    /** 附件 */
    attachments?: CreateAttachmentVo[];
    /** 消息文本内容 */
    content?: string;
    /** 企微企业id */
    corpId?: string;
    /** 数据中心类型（1: ECRP; 2: 客道） */
    dataCenterType?: number;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则调用发送接口立即发送） */
    predictSendTime?: string;
    /** 接收人信息 */
    receivers?: CreateReceiverVo[];
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type CustomerFollowVo = {
    /** 添加了此外部联系人的企业成员userid */
    addUserId?: string;
    /** 添加的企业成员名称 */
    addUserName?: string;
    /** 该成员添加此客户的来源 */
    addWay?: number;
    /** 0-正常 1-离职待继承 2-离职继承中 3-离职继承完成 */
    customerStatus?: number;
    /** 好友关系状态：0-删除 1-正常 */
    followState?: number;
    /** 客户标签 */
    tags?: string;
    /** 激活状态: 1=已激活，2=已禁用，4=未激活, 5=退出企业 */
    userStatus?: number;
    /** 添加此客户的渠道，由用户通过创建「联系我」方式指定 */
    weiXinState?: string;
  };

  type CustomerFriendCrowDTO = {
    /** 返回的群数据 */
    crowResponse?: BeanCommonResultBeanTableResponseChatRoomDTO;
    /** 返回的会员数据 */
    customerResponse?: BeanCommonResultBeanTableResponseShopCustomerVO;
    /** 返回的好友数据 */
    friendResponse?: BeanCommonResultBeanTableResponseFriendResultDTO;
  };

  type CustomerInTimeNickInfo = {
    nasOuid?: string;
    nick?: string;
    platform?: number;
  };

  type CustomerOrderCondition = {
    order?: string;
    orderKey?: string;
  };

  type CustomerParamsQuery = {
    /** 会员入会结束时间 */
    addEndTime?: string;
    /** 会员入会开始时间 */
    addStartTime?: string;
    /** 会员卡号 */
    cardId?: string;
    /** 企业微信Id */
    corpId?: string;
    /** 会员名 */
    customerName?: string;
    /** 等级 */
    grade?: number;
    /** 公司Id */
    groupId?: number;
    /** 导购Id */
    guideId: number;
    /** 手机号 */
    mobile?: string;
    /** 昵称 */
    nick?: string;
    /** 店铺Id */
    shopId: number;
  };

  type CustomerTagCondition = {
    tagCode?: string;
    tagValue?: string;
  };

  type dabiaorenwuliebiaofanhuishiti = {
    /** 昨日新增人数 */
    addCnt?: number;
    /** 当前任务是关联任务时有值 */
    aggregationName?: string;
    /** 创建时间 */
    date?: string;
    /** 昨日流失人数 */
    lossCnt?: number;
    /** 是否是关联任务，ture为是 */
    relation?: boolean;
    /** 标签组id */
    tagGroupId?: string;
    /** 标签组名称 */
    tagGroupName?: string;
    /** 标签id */
    tagId?: string;
    /** 标签名称 */
    tagName?: string;
    /** 任务id */
    taskId?: number;
    /** 任务名称 */
    taskName?: string;
    /** 1 启用 ，0 未启用 */
    taskStatus?: number;
    /** 标签总人数 */
    totalCnt?: number;
    /**  0：实时更新，1定时更新 */
    updateRule?: number;
  };

  type dangeshenhejiekoucanshu = {
    /** 返现金额 */
    amount?: number;
    /** 审核记录id */
    id?: number;
    /** 是否审核通过 */
    passOrNot?: boolean;
    /** 备注 */
    remark?: string;
  };

  type dangesopcelveshuju = {
    /** 是否需要高亮显示建议阶段 */
    isNeedAdvise?: boolean;
    /** sop付款总金额 */
    paymentMoneyTotal?: number;
    /** sop付款总人数 */
    paymentPersonTotal?: number;
    /** 所属阶段 */
    phase?: number;
    /** 阶段进度 */
    sectionSchedule?: number;
  };

  type daogoujianyaoxinxi = {
    /** 员工信息扩展表详情 */
    guideExt?: daogoukuozhanxinxi;
    /** 导购id */
    id?: number;
    /** 照片 */
    image?: string;
    /** 手机号(明文) */
    mobile?: string;
    /** 姓名 */
    name?: string;
    /** 昵称 */
    nickname?: string;
    /** 性别:0女、1男 */
    sex?: number;
    /** 店铺简要信息 */
    simpleShops?: mendianjianyaoxinxi[];
    /** 导购启用状态： 0禁用 1启用 2离职 */
    status?: number;
    /** 工号|员工登录账号 */
    workId?: string;
    /** 工号 */
    workNumber?: string;
  };

  type daogoukehushuliangxinxiVo = {
    /** 完成时间 */
    completeTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 跟进完成数量 */
    customerFollowNum?: number;
    /** 跟进中数量 */
    customerFollowingNum?: number;
    /** 未跟进数量 */
    customerNoFollowNum?: number;
    /** 客户总数 */
    customerTotal?: number;
    /** 跟进进度 */
    followProgress?: string;
    /** 导购id */
    guideId?: number;
    /** id */
    id?: number;
    /** 导购名称 */
    name?: string;
    /** 备注 */
    remark?: string;
    /** 门店id */
    shopId?: number;
    /** 门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3完成 */
    state?: number;
    /** 任务id：sg_task_shop.id */
    taskId?: number;
    /** 任务名称 */
    taskName?: string;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 指派对象类型：1门店、2导购 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 图片json */
    urlJson?: string;
    /** 导购工号 */
    workId?: string;
  };

  type daogoukuozhanxinxi = {
    /** 企业微信唯一标识 */
    userId?: string;
    /** 企业微信员工名称 */
    userName?: string;
  };

  type daogouliushizichanzhuanyirenwuchuangjianqingqiu = {
    /** 接收门店&taskType = 1 场景下使用：选中群列表 */
    chatRoomList?: ChatRoomsVo[];
    /** 群的转移查询参数 */
    chatRoomParamsQuery?: ChatRoomParamsQuery;
    /** taskType = 1 场景下使用：客户选中类型 0选中 1取消选中  解释：如果是全选的换传1，不是全选的话传0 */
    checkType?: number;
    /** 接收门店&taskType = 1 场景下使用：选中会员列表 */
    customerList?: NickVo[];
    /** 会员的转移查询参数 */
    customerParamsQuery?: CustomerParamsQuery;
    /** 接收门店&taskType = 1 场景下使用：选中好友列表 */
    friendList?: FriendsVo[];
    /** 好友的转移查询参数 */
    friendParamsQuery?: FriendParamsQuery;
    /** 操作人ID */
    operator: number;
    /** 操作人姓名 */
    operatorName: string;
    /**  taskType = 2 场景下使用：待转出会员的导购ID集合 */
    outGuideIdList?: number[];
    /** 接收门店&导购信息 */
    receiveShopGuideList: ReceiveShopGuideDTO[];
    /** 当前门店ID */
    shopId?: number;
    /** 待转出的导购ID和店铺的集合 */
    shopIdAndGuideIdListOld?: ShopAndGuideDTO[];
    /** 任务类型 1选择会员进行转移 2选择导购进行转移 */
    taskType: number;
    /** 终端类型 0未知 1后台、2小程序 3后台手动资产转移,4后台自动资产转移 */
    terminalType: number;
    /** 转移范围 1仅会员 2会员+好友 4好友转移  5群转移  */
    transferRange?: number;
    /** 好友转移成功通知消息 */
    transferSuccessMsg?: string;
    /** 当前视角ID */
    viewId?: number;
  };

  type daogourenwubiaoxiangqing = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    /** 定时下发任务时间 */
    taskSendTime?: LocalTime;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type daogourenwuVO = {
    /** 完成时间 */
    completeTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 执行截止时间 */
    endTime?: string;
    /** 跟进进度 */
    followProgress?: string;
    /** 导购id */
    guidId?: number;
    /** 导购信息 */
    guide?: daogoujianyaoxinxi;
    /** 是否忽略(0-不忽略, 1-忽略) */
    hide?: number;
    /** id */
    id?: number;
    /** 导购名称 */
    name?: string;
    /** 备注 */
    remark?: string;
    /** 门店信息 */
    shop?: mendianjianyaoxinxi;
    /** 门店id */
    shopId?: number;
    /** 门店名称 */
    shopName?: string;
    /** 执行起始时间 */
    startTime?: string;
    /** 状态:0无效、1执行中、2已关闭、3完成 */
    state?: number;
    /** 任务id：sg_task_shop.id */
    taskId?: number;
    /** 任务名称 */
    taskName?: string;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 指派对象类型：1门店、2导购 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 图片json */
    urlJson?: string;
    /** 导购工号id */
    workId?: string;
    /** 导购工号number */
    workNumber?: string;
  };

  type daogouyuangongliebiaovo = {
    areaId?: string;
    auth?: boolean;
    empDepar?: string;
    empName?: string;
    fileImportKey?: string;
    /** 导购id集合 */
    guideIds?: number[];
    job?: number;
    manualInputKey?: string;
    mobile?: string;
    /** 是否仅查询是群主的员工 */
    onlyOwner?: boolean;
    pageNo?: number;
    pageSize?: number;
    shopId?: number;
    status?: number;
    switchAreaFlag?: number;
    userIds?: string;
  };

  type daogouzhaomuliuchengpeizhiDTO = {
    /** 导购招募成功通知 */
    guideMsgCfg?: RecruitingNoticeCfgVO;
    /** 关注公众号开关 */
    mpFollowState?: number;
    /** 门店招募成功通知 */
    shopManageMsgCfg?: RecruitingNoticeCfgVO;
  };

  type daoruhaopingfanxianshangpinliebiaojieguo = {
    /** 导入失败条数 */
    failGoods?: number;
    /** 商品列表 */
    items?: dianpushangpinjichuxinxi[];
    /** 导入成功条数 */
    successGoods?: number;
  };

  type daorukuaijiehuashuEXCELxiangyingqianduanxinxishiti = {
    /** fileKey */
    excelFileKey?: string;
  };

  type delByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type deleteByConfigIdUsingGETParams = {
    /** 二维码海报配置ID */
    configId: number;
  };

  type deleteByIdsUsingDELETEParams = {
    /** ids */
    ids?: string;
  };

  type deleteByIdsUsingGETParams = {
    /** ids */
    ids?: string;
  };

  type deleteByIdsUsingPATCHParams = {
    /** ids */
    ids?: string;
  };

  type deleteByIdsUsingPOSTParams = {
    /** ids */
    ids?: string;
  };

  type deleteByIdsUsingPUTParams = {
    /** ids */
    ids?: string;
  };

  type deleteByIdUsingGETParams = {
    /** uuid */
    uuid?: string;
  };

  type deleteKeyWordTopicUsingGETParams = {
    /** topicId */
    topicId: number;
  };

  type deleteKeyWordUsingGETParams = {
    /** topicId */
    topicId: number;
    /** keyWordId */
    keyWordId: number;
  };

  type deleteMenuUsingDELETEParams = {
    /** id */
    id?: number;
  };

  type deleteMenuUsingGETParams = {
    /** id */
    id?: number;
  };

  type deleteMenuUsingPATCHParams = {
    /** id */
    id?: number;
  };

  type deleteMenuUsingPOSTParams = {
    /** id */
    id?: number;
  };

  type deleteMenuUsingPUTParams = {
    /** id */
    id?: number;
  };

  type deleteRadarUsingGETParams = {
    /** id */
    id: number;
  };

  type deleteSopCanvasUsingGETParams = {
    /** canvasId */
    canvasId: number;
  };

  type deleteTaskUsingDELETEParams = {
    /** taskId */
    taskId?: number;
  };

  type deleteTaskUsingGETParams = {
    /** taskId */
    taskId?: number;
  };

  type deleteTaskUsingPATCHParams = {
    /** taskId */
    taskId?: number;
  };

  type deleteTaskUsingPOST1Params = {
    /** taskId */
    taskId?: number;
  };

  type deleteTaskUsingPUTParams = {
    /** taskId */
    taskId?: number;
  };

  type deleteUsingGET1Params = {
    /** configId */
    configId: string;
    /** chatId */
    chatId: string;
  };

  type deleteUsingGET2Params = {
    /** configId */
    configId: string;
  };

  type deleteUsingGET3Params = {
    /** id */
    id: number;
  };

  type deleteUsingGET6Params = {
    /** id */
    id: number;
  };

  type deleteUsingPOST3Params = {
    /** id */
    id: number;
  };

  type deleteUsingPOST5Params = {
    /** id */
    id: number;
  };

  type deleteUsingPOST6Params = {
    /** id */
    id: number;
  };

  type deleteWxActivityUsingGETParams = {
    /** id */
    id: number;
  };

  type detailUsingGET1Params = {
    /** 活动id */
    id: number;
  };

  type detailUsingGET2Params = {
    /** activityId */
    activityId: number;
  };

  type detailUsingGETParams = {
    /** id */
    id: number;
  };

  type dianpuhuoyuangongliebiaoVO = {
    /** 集团id */
    groupId?: number;
    /** 导购名称 */
    guideName?: string;
    /** 发红包Id */
    settingId: number;
    /** 店铺名称 */
    shopName?: string;
    /** 使用人员 1：全部员工 2：按店铺 3：按员工 */
    useType: number;
  };

  type dianpushangpinjichuxinxi = {
    /** 商品分类 */
    cid?: string;
    /** 商品库id */
    goodsLibId?: number;
    /** 商品sku信息 */
    itemSkuList?: shangpinskuxinxi[];
    /** 商品状态0、上架 1、下架（仓库中） 2、卖完 */
    itemState?: number;
    /** 商品URL */
    itemUrl?: string;
    /** 商品划线价 */
    markedPrice?: number;
    /** 外部商品编码 */
    outItemId?: string;
    /** 商家编码 */
    outerId?: string;
    /** 商品主图片 */
    pictureUrl?: string;
    /** 商品副图片 */
    pictureUrls?: string;
    /** 售价 */
    price?: number;
    /** 店铺id */
    shopId?: number;
    /** 商品零售价 */
    suggestPrice?: number;
    /** 系统商品编码 */
    sysItemId?: number;
    /** 商品名称 */
    title?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type DirectoryGetDTO = {
    addName?: string;
    corpId?: string;
    id?: number;
    isDirectory?: number;
    name?: string;
    parentId?: number;
    passwd?: string;
    sourceId?: number;
    timeEnd?: string;
    timeStart?: string;
  };

  type downloadFileUsingDELETE1Params = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingDELETEParams = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingGET1Params = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingGETParams = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingPATCH1Params = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingPATCHParams = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingPOST1Params = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingPOSTParams = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingPUT1Params = {
    /** fileKey */
    fileKey?: string;
  };

  type downloadFileUsingPUTParams = {
    /** fileKey */
    fileKey?: string;
  };

  type downLoadQrCodeUsingGETParams = {
    /** url */
    url: string;
    /** fileName */
    fileName?: string;
  };

  type downloadTemplateUsingDELETEParams = {
    /** type */
    type?: number;
    /** year */
    year?: string;
  };

  type downloadTemplateUsingGETParams = {
    /** type */
    type?: number;
    /** year */
    year?: string;
  };

  type downloadTemplateUsingPATCHParams = {
    /** type */
    type?: number;
    /** year */
    year?: string;
  };

  type downloadTemplateUsingPOSTParams = {
    /** type */
    type?: number;
    /** year */
    year?: string;
  };

  type downloadTemplateUsingPUTParams = {
    /** type */
    type?: number;
    /** year */
    year?: string;
  };

  type ecrpdianpupingtaishiti = {
    /** 平台id */
    platId?: number;
    /** 平台名称 */
    platName?: string;
    /** 店铺列表 */
    shopDTOList?: ecrpdianpushiti[];
  };

  type ecrpdianpushiti = {
    /** 店铺id */
    shopId?: number;
    /** 店铺名称 */
    shopName?: string;
  };

  type EmployeePageDTO = {
    employeeName?: string;
    id?: number;
  };

  type EmployeeUpdateNotifyRequest = {
    /** appKey */
    appkey: string;
    /** 操作人ID */
    dealUserId?: number;
    /** 操作人姓名 */
    dealUserName?: string;
    /** 员工ID集合 */
    employeeIds: number[];
    /** 公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type endUsingPOSTParams = {
    /** activityId */
    activityId: number;
  };

  type EnterpriseWxActivityContentVo = {
    image?: EnterpriseWxActivityImageVo;
    miniPro?: EnterpriseWxActivityMiniProVo;
    picText?: EnterpriseWxActivityPicTextVo;
    text?: string;
  };

  type EnterpriseWxActivityImageVo = {
    code?: string;
    image?: string;
  };

  type EnterpriseWxActivityMiniProVo = {
    appPath?: string;
    appid?: string;
    code?: string;
    pic?: string;
    title?: string;
  };

  type EnterpriseWxActivityPicTextVo = {
    code?: string;
    desc?: string;
    pic?: string;
    title?: string;
    url?: string;
  };

  type EnterpriseWxActivityVo = {
    content?: EnterpriseWxActivityContentVo;
    customerType?: number;
    executeMode?: number;
    executeTime?: string;
    id?: number;
    isUpdate?: boolean;
    marketingType?: number;
    name?: string;
    userGroupIds?: string;
  };

  type EnterpriseWXMarketingAuditInfoVo = {
    areaId?: number;
    commentContent?: string;
    content?: string;
    customerType?: number;
    executeMode?: number;
    executeTime?: string;
    failNum?: number;
    groupId?: number;
    id?: number;
    isComment?: number;
    isDumpFriend?: number;
    isSlient?: number;
    loginAccount?: string;
    marketingType?: number;
    planName?: string;
    planStatus?: number;
    slientBeginIme?: string;
    slientEndIme?: string;
    successNum?: number;
    totalNum?: number;
    unSendNum?: number;
    userGroupIds?: string;
    userName?: string;
    userStr?: string;
  };

  type EnterpriseWxTemplateDataVo = {
    key?: string;
    value?: string;
  };

  type eventUsingDELETEParams = {
    /** brandId */
    brandId: number;
  };

  type eventUsingGETParams = {
    /** brandId */
    brandId: number;
  };

  type eventUsingPATCHParams = {
    /** brandId */
    brandId: number;
  };

  type eventUsingPOSTParams = {
    /** brandId */
    brandId: number;
  };

  type eventUsingPUTParams = {
    /** brandId */
    brandId: number;
  };

  type exitUsingDELETEParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type exitUsingGETParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type exitUsingPATCHParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type exitUsingPOSTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type exitUsingPUTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type exportActivityAddUserDataUsingPOSTParams = {
    /** map */
    map: Record<string, any>;
  };

  type exportActivityShopDataUsingPOSTParams = {
    /** map */
    map: Record<string, any>;
  };

  type exportByGuideUsingPOSTParams = {
    /** map */
    map: Record<string, any>;
  };

  type exportDataUsingDELETEParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportDataUsingGETParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportDataUsingPATCHParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportDataUsingPOSTParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportDataUsingPUTParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingDELETE1Params = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingDELETEParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingGET1Params = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingGETParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingPATCH1Params = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingPATCHParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingPOST1Params = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingPOSTParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingPUT1Params = {
    /** params */
    params: Record<string, any>;
  };

  type exportExcelUsingPUTParams = {
    /** params */
    params: Record<string, any>;
  };

  type exportUsingPOST1Params = {
    /** map */
    map: Record<string, any>;
  };

  type exportUsingPOSTParams = {
    /** map */
    map: Record<string, any>;
  };

  type ExternalLogByTypeQuery = {
    /** 区域Id */
    areaId?: number;
    /** 结束时间 */
    endTime?: string;
    /** 页码长度 */
    length?: number;
    /** 排序字段，取值：pv、uv、visitTime，默认为visitTime */
    orderBy?: string;
    /** 对外属性Id */
    profileId?: number;
    /** 门店Id 列表. */
    shopIds?: string;
    /** 排序方式，取值：asc/desc */
    sort?: string;
    /** 起始位置 */
    start?: number;
    /** 开始时间 */
    startTime?: string;
    /** 0日期,1导购 */
    type?: number;
  };

  type ExternalLogQuery = {
    /** 区域Id */
    areaId?: number;
    /** 结束时间 */
    endTime?: string;
    /** 排序字段，取值：pv、uv、visitTime，默认为visitTime */
    orderBy?: string;
    /** 对外属性Id */
    profileId?: number;
    /** 门店Id 列表. */
    shopIds?: string;
    /** 排序方式，取值：asc/desc */
    sort?: string;
    /** 开始时间 */
    startTime?: string;
  };

  type ExternalProFileDTO = {
    /** id */
    id?: number;
    /** 对外信息名称 */
    name?: string;
    /** H5顶端签名 */
    signature?: string;
    /** 展示内容样式， 0 朋友圈，1设计师，2多媒体 */
    style?: number;
    /** H5顶端图片  */
    topImgUrl?: string;
    /** 网页标题 */
    webTitle?: string;
  };

  type ExternalProFileQuery = {
    groupId?: number;
    length: number;
    start: number;
  };

  type faqizidongdenglushiti = {
    /** 导购id */
    guideId?: number;
    /** 手机号码 */
    mobile?: string;
  };

  type fenyesousuohudongleidahuodongzhubiao = {
    asc?: boolean;
    /** corpId */
    corpId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 雷达code */
    radarCode?: string;
    /** 雷达名称 */
    radarName?: string;
    /** 开始时间 */
    startTime?: string;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
  };

  type fenyesousuoleidaqudaobiao = {
    asc?: boolean;
    /** 渠道code */
    channelCode?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 雷达code */
    radarCode?: string;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
  };

  type fenyesousuorpafaxiaoxijieshouren = {
    asc?: boolean;
    /** 昵称 */
    chatName?: string;
    /** 企微企业id */
    corpId?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 消息id */
    messageId?: number;
    /** 消息类型1: 好友消息; 2: 群消息 */
    messageType?: number;
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 发送状态（1: 待创建; 2: 创建成功; 3: 创建失败;4:发送成功; 5:发送失败 ） */
    sendStatus?: number;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
  };

  type fenyesousuorpaqunliao = {
    /** 部门 */
    departmentId?: string;
    ownerName?: string;
    /** 群名称/群主名称 */
    searchValue?: string;
    /** 门店 */
    workShopId?: string;
  };

  type fenyesousuorpayingxiaoxiaoxi = {
    /** 结束时间 */
    endTime?: string;
    /** 活动名称 */
    name?: string;
    /** 开始时间 */
    predictSendTime?: string;
    /** 活动状态（0：全部，1: 待发送; 2: 发送中; 3: 发送成功; 4: 已终止; 5: 发送失败） */
    sendStatus?: number;
    /** 1: 好友消息; 2: 群消息 */
    type?: number;
  };

  type fenyesousuorpazhanghao = {
    /** 结束时间 */
    endTime?: string;
    /** 帐号昵称 */
    name?: string;
    /** 开始时间 */
    startTime?: string;
    /** 登录状态 0未登录 1登录中 2已登录 3登录失败 */
    status?: number;
  };

  type fenyesousuoshenhelishijilubiao = {
    asc?: boolean;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 消息id */
    messageId?: number;
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
  };

  type fenyesousuoshouyegailantuijiangongneng = {
    asc?: boolean;
    /** 企业微信corpId（存在明文&密文两种值） */
    corpId?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
  };

  type fenyesousuoshouyegailanzuijinxiaoxi = {
    asc?: boolean;
    /** 企业微信corpId */
    corpId?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
  };

  type fenzuchaxunshiti = {
    /** 区域ID */
    areaId?: number;
    /** 视角ID */
    viewId?: number;
  };

  type FileDownloadRecordduixiang = {
    /** 登录账号 */
    account?: string;
    attrsMap?: Record<string, any>;
    /** 创建时间 */
    createTime?: string;
    dataSource?: string;
    /** 下载时的IP地址 */
    downloadIp?: string;
    /** 文件下载状态: 0-失败, 1-下载成功 */
    downloadState?: number;
    /** 下载时间 */
    downloadTime?: string;
    /** 错误信息 */
    errMsg?: string;
    /** 文件导出记录ID */
    exportId?: number;
    /** 文件名称 */
    fileName?: string;
    /** 公司ID */
    groupId?: number;
    /** 唯一索引 */
    id?: number;
    modifyAttrs?: string[];
    /** 0删除，1正常 */
    state?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type FileExportRecordduixiang = {
    /** 登录账号 */
    account?: string;
    attrsMap?: Record<string, any>;
    /** 创建时间 */
    createTime?: string;
    dataSource?: string;
    /** 错误信息 */
    errMsg?: string;
    /** 导出类型(用于区分导出的功能) */
    exportType?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件路径 */
    filePath?: string;
    /** 文件导出状态: 0-未处理, 1-处理中, 2-处理完成, 3-处理失败 */
    fileState?: number;
    /** 公司ID */
    groupId?: number;
    /** 唯一索引 */
    id?: number;
    modifyAttrs?: string[];
    /** 搜索参数 */
    searchParam?: string;
    /** 0删除，1正常 */
    state?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type fileUsingGETParams = {
    /** key */
    key: string;
  };

  type findAnnouncementByIdUsingGETParams = {
    /** id */
    id: string;
  };

  type findByCodeUsingGETParams = {
    /** code */
    code?: string;
  };

  type findByIdUsingGET2Params = {
    /** id */
    id: number;
  };

  type findByIdUsingGET3Params = {
    /** id */
    id: number;
  };

  type findByIdUsingGETParams = {
    /** uuid */
    uuid?: string;
  };

  type findChannelCodeListUsingPOSTParams = {
    companyID?: number;
    corpIDs?: string;
    methodType?: string;
  };

  type findCustomerTotalUsingDELETEParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
    /** guideId */
    guideId?: number;
  };

  type findCustomerTotalUsingGETParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
    /** guideId */
    guideId?: number;
  };

  type findCustomerTotalUsingPATCHParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
    /** guideId */
    guideId?: number;
  };

  type findCustomerTotalUsingPOSTParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
    /** guideId */
    guideId?: number;
  };

  type findCustomerTotalUsingPUTParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
    /** guideId */
    guideId?: number;
  };

  type findDailyStatisticsUsingDELETEParams = {
    /** queryDate */
    queryDate?: string;
  };

  type findDailyStatisticsUsingGETParams = {
    /** queryDate */
    queryDate?: string;
  };

  type findDailyStatisticsUsingPATCHParams = {
    /** queryDate */
    queryDate?: string;
  };

  type findDailyStatisticsUsingPOSTParams = {
    /** queryDate */
    queryDate?: string;
  };

  type findDailyStatisticsUsingPUTParams = {
    /** queryDate */
    queryDate?: string;
  };

  type findDigitalShopByShopIdUsingGETParams = {
    /** shopId */
    shopId?: number;
  };

  type findExcelLoginLogUsingGETParams = {
    /** accountType */
    accountType: number;
    /** validTime */
    validTime: string;
    /** shopId */
    shopId: number;
    /** operateName */
    operateName: string;
    /** operateId */
    operateId: number;
  };

  type findExternalUserRelationListUsingGETParams = {
    /** 客户externalUserId */
    externalUserId: string;
    /** 页码 */
    page: number;
    /** 页面长度 */
    pageSize: number;
    /** guideId */
    guideId?: string;
  };

  type findGoodBankListUsingDELETEParams = {
    /** mallId */
    mallId?: number;
  };

  type findGoodBankListUsingGETParams = {
    /** mallId */
    mallId?: number;
  };

  type findGoodBankListUsingPATCHParams = {
    /** mallId */
    mallId?: number;
  };

  type findGoodBankListUsingPOSTParams = {
    /** mallId */
    mallId?: number;
  };

  type findGoodBankListUsingPUTParams = {
    /** mallId */
    mallId?: number;
  };

  type findGuideDetailUsingGETParams = {
    /** guideId */
    guideId?: number;
  };

  type findGuideRankingUsingDELETE1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findGuideRankingUsingGET1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findGuideRankingUsingPATCH1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findGuideRankingUsingPOST1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findGuideRankingUsingPUT1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findGuideShopListUsingDELETEParams = {
    /** guideId */
    guideId?: number;
    /** noGuideId */
    noGuideId?: number;
    /** shopState */
    shopState?: number;
    /** shopStatus */
    shopStatus?: number;
    /** pageNo */
    pageNo?: number;
    /** pageSize */
    pageSize?: number;
  };

  type findGuideShopListUsingGETParams = {
    /** guideId */
    guideId?: number;
    /** noGuideId */
    noGuideId?: number;
    /** shopState */
    shopState?: number;
    /** shopStatus */
    shopStatus?: number;
    /** pageNo */
    pageNo?: number;
    /** pageSize */
    pageSize?: number;
  };

  type findGuideShopListUsingPATCHParams = {
    /** guideId */
    guideId?: number;
    /** noGuideId */
    noGuideId?: number;
    /** shopState */
    shopState?: number;
    /** shopStatus */
    shopStatus?: number;
    /** pageNo */
    pageNo?: number;
    /** pageSize */
    pageSize?: number;
  };

  type findGuideShopListUsingPOSTParams = {
    /** guideId */
    guideId?: number;
    /** noGuideId */
    noGuideId?: number;
    /** shopState */
    shopState?: number;
    /** shopStatus */
    shopStatus?: number;
    /** pageNo */
    pageNo?: number;
    /** pageSize */
    pageSize?: number;
  };

  type findGuideShopListUsingPUTParams = {
    /** guideId */
    guideId?: number;
    /** noGuideId */
    noGuideId?: number;
    /** shopState */
    shopState?: number;
    /** shopStatus */
    shopStatus?: number;
    /** pageNo */
    pageNo?: number;
    /** pageSize */
    pageSize?: number;
  };

  type findIsShopLegalUsingDELETEParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
  };

  type findIsShopLegalUsingGETParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
  };

  type findIsShopLegalUsingPATCHParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
  };

  type findIsShopLegalUsingPOSTParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
  };

  type findIsShopLegalUsingPUTParams = {
    /** shopId */
    shopId?: number;
    /** viewId */
    viewId?: number;
  };

  type findMiniGuideBusinessSettingListUsingGETParams = {
    /** templateCode */
    templateCode: string;
    /** type */
    type: string;
    /** moduleType */
    moduleType?: number;
  };

  type findMiniProgramPageModuleSettingListUsingGETParams = {
    /** templateCode */
    templateCode: string;
    /** moduleType */
    moduleType: number;
  };

  type findMiniProgramPageRewardSettingListUsingGETParams = {
    /** templateCode */
    templateCode: string;
  };

  type findPresetParamListUsingGETParams = {
    /** moduleType */
    moduleType: number;
  };

  type findQuicklyWordGroupListUsingDELETEParams = {
    /** name */
    name?: string;
  };

  type findQuicklyWordGroupListUsingGETParams = {
    /** name */
    name?: string;
  };

  type findQuicklyWordGroupListUsingPATCHParams = {
    /** name */
    name?: string;
  };

  type findQuicklyWordGroupListUsingPOSTParams = {
    /** name */
    name?: string;
  };

  type findQuicklyWordGroupListUsingPUTParams = {
    /** name */
    name?: string;
  };

  type findRecruitingConfigListUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    createTimeEnd?: any;
    /** 起始创建时间 精度最小到秒 */
    createTimeStart?: any;
    /** 创建人 */
    creatorId?: any;
    /** 招募标题 */
    recruitingName?: any;
  };

  type findScriptCompletionDetailListUsingPOSTParams = {
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 未完成/完成: 0=未完成 ,1=完成 ,默认为1 */
    isCompletion?: any;
    /** 剧本素材ID */
    materialScriptId: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
  };

  type findShopListUsingGETParams = {
    /** sameSystemShopId */
    sameSystemShopId?: number;
  };

  type findShopRankingUsingDELETE1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findShopRankingUsingGET1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findShopRankingUsingPATCH1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findShopRankingUsingPOST1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findShopRankingUsingPUT1Params = {
    /** queryDate */
    queryDate?: string;
  };

  type findTrackPageBizTypeListUsingGETParams = {
    /** terminalTypes */
    terminalTypes?: string;
  };

  type findViewListByAreaIdUsingGETParams = {
    /** 区域ID */
    areaId?: number;
  };

  type findWelcomeCodeChannelListUsingGETParams = {
    /** welcomeCodeUuid */
    welcomeCodeUuid?: string;
  };

  type findWeWorkTagListUsingGETParams = {
    /** 区域ID */
    areaId?: string;
    /** 标签值 */
    tagName?: string;
  };

  type FormatReceiverStatusCountVo = {
    /** 发送失败 */
    fail?: number;
    /** 待发送 */
    pending?: number;
    /** 发送成功 */
    success?: number;
  };

  type FounderVo = {
    /** 导购id */
    founderId?: number;
    /** 名称 */
    name?: string;
  };

  type FriendParamsQuery = {
    /** 企业微信Id */
    corpId?: string;
    /** 好友添加结束时间 */
    endAddTime?: string;
    /** 好友添加开始时间 */
    externalName?: string;
    /** 公司Id */
    groupId?: number;
    /** 导购Id */
    guideId: number;
    /** 备注手机号 */
    mobileNum?: string;
    /** 性别 */
    sexy?: number;
    /** 好友添加开始时间 */
    startAddTime?: string;
  };

  type FriendResultDTO = {
    /** 好友添加时间 */
    addTime?: string;
    /** 添加方式 */
    addWay?: string;
    /** 企业公司 */
    corpName?: string;
    /** 好友昵称 */
    externalName?: string;
    /** 好友的userId */
    externalUserId?: string;
    /** 导购Id */
    guideId?: number;
    /** 导购名 */
    guideName?: string;
    /** 头像 */
    headImg?: string;
    /** 备注名 */
    remark?: string;
    /** 手机号 */
    remarkMobile?: string;
    /** 所用手机号 */
    remarkMobileList?: string[];
    /** 性别 0未知，1男，2女 */
    sex?: number;
    /** 所在店铺 */
    shopNameList?: string[];
    /** 导购的userId */
    userId?: string;
  };

  type FriendsVo = {
    /** 客户的userId */
    externalUserId: string;
    /** 原专属导购ID */
    sgExclusiveGuideId: number;
    /** 原专属导购的userId */
    userId: string;
  };

  type FriendTableByAddGuideDTO = {
    /** 好友添加员工门店集合（按逗号间隔） */
    addGuideShopsStr?: string;
    /** 员工手机号 */
    employeeMobile?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 导购id */
    guideId?: number;
    /** 添加好友总数 */
    inviteFriendNumber?: number;
  };

  type gengxinhaopingfanxian = {
    /** 好评返现活动主配置 */
    activity?: gengxinhaopingfanxianhuodong;
    /** 好评返现活动返现阶梯配置 */
    cashbackLadder?: chuangjianhaopingfanxianhuodongfanxianjieti[];
    /** 好评返现活动返现配置(不包含阶梯) */
    cashbackPolicy?: gengxinhaopingfanxianhuodongfanxiancelve;
    /** 好评返现活动扩展配置 */
    ext?: gengxinhaopingfanxianhuodongkuozhanbiao;
    /** 好评返现活动欢迎语配置 */
    welcomeCode?: gengxinweixinzhinenghuanyingyu;
  };

  type gengxinhaopingfanxianhuodong = {
    /** 公众号id */
    appId?: string;
    /** 区域id */
    areaId?: number;
    /** 返现订单笔数,指当前活动最多返现的订单笔数，超过此数量将不再返现，0表示不限 */
    cashbackOrderNumLimit?: number;
    /** 返现策略:1固定金额,2订单比例,3随机金额,4阶梯返现,5买N免M */
    cashbackPolicy?: number;
    /** 企微id */
    corpId?: string;
    /** 商品信息,用json存储 */
    goodsInfo?: string;
    /** 商品列表类型:1全部,2选中,3除去 */
    goodsType?: number;
    /** 公司ID */
    groupId?: number;
    /** 唯一索引 */
    id?: number;
    /** 绑定平台昵称是否开启(将根据输入的订单号与好友账号绑定,仅支持kd) */
    isBindingPlatform?: boolean;
    /** 活动链接url */
    linkUrl?: string;
    /** 名称 */
    name?: string;
    /** 订单确认收货时间结束(指此段时间确认收货单可参与此活动) */
    orderConfirmTimeEnd?: string;
    /** 订单确认收货时间开始(指此段时间确认收货单可参与此活动) */
    orderConfirmTimeStart?: string;
    /** 订单付款时间结束(指此段时间付款的订单可参与此活动) */
    orderPayTimeEnd?: string;
    /** 订单付款时间开始(指此段时间付款的订单可参与此活动) */
    orderPayTimeStart?: string;
    /** 可参与的订单状态: 1确认收货 */
    participateInOrderStatus?: number;
    /** 支付方式id */
    payMethodId?: number;
    /** 活动二维码url */
    qrcodeUrl?: string;
    /** 店铺信息,用json存储 */
    shopInfo?: string;
    /** 活动状态：1正常 0提前结束 3活动结束； */
    status?: number;
    /** 每人参与次数指每个用户最多参与次数，0表示不限 */
    userParticipateNumLimit?: number;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType?: number;
  };

  type gengxinhaopingfanxianhuodongfanxiancelve = {
    /** 活动id */
    activityId?: number;
    /** 固定金额（单位：分） */
    fixedMoney?: number;
    /** 公司ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 最低付款金额限制（单位：分） */
    minPayMoney?: number;
    /** 买N免M的N */
    nmBuyN?: number;
    /** 买N免M的M */
    nmGiveM?: number;
    /** 每人赠送数量上限 */
    nmGiveMaxNum?: number;
    /** 订单比例的最大返现金额（单位：分） */
    percentMaxMoney?: number;
    /** 订单比例(0-100) */
    percentNum?: number;
    /** 随机金额的最大值（单位：分） */
    randomMaxMoney?: number;
    /** 随机金额的最小值（单位：分） */
    randomMinMoney?: number;
  };

  type gengxinhaopingfanxianhuodongkuozhanbiao = {
    /** 活动id */
    activityId?: number;
    /** 活动介绍 */
    activityIntroduction?: string;
    /** 活动消息卡片文案 */
    cardCopywriting?: string;
    /** 活动消息卡片封面图片 */
    cardCoverPic?: string;
    /** 活动消息卡片标题 */
    cardTitle?: string;
    /** 商品信息,用json存储 */
    goodsInfo?: string;
    /** 公司ID */
    groupId?: number;
    /** 唯一索引 */
    id?: number;
    /** 页面配色 */
    pageColor?: string;
    /** 好评返现活动页面装修配置,【商品设置】、【自定义图片】、【好评信息】、【活动说明】支持自定义顺序 */
    pageDecoration?: string;
    /** 公众号海报url */
    posterUrl?: string;
    /** 二维码尺寸 */
    qrcodeSize?: number;
    /** 公众号二维码url */
    qrcodeUrl?: string;
    /** 二维码图片在海报的X轴位置 */
    qrcodeX?: number;
    /** 二维码图片在海报的Y轴位置 */
    qrcodeY?: number;
    /** 公众号欢迎语id */
    welcomeCodeId?: number;
  };

  type gengxinhudongleidahuodongzhubiao = {
    /** appId */
    appId?: string;
    /** 渠道集合对象 */
    channelList?: leidaqudaobiaoxiangqing[];
    /** 企业微信corpId */
    corpId?: string;
    /** 创建人登录账号 */
    createAccount?: string;
    /** 创建人 */
    createName?: string;
    /** 品牌ID */
    groupId?: number;
    id?: number;
    /** 是否开启授权 */
    isShowAuth?: boolean;
    /** 是否开启客户标签 */
    isShowTag?: boolean;
    /** 雷达图片地址 */
    linkImageAddress?: string;
    /** 雷达描述 */
    linkMessage?: string;
    /** 雷达标题 */
    linkTitle?: string;
    /** 雷达地址 */
    radarAddress?: string;
    /** 雷达code */
    radarCode?: string;
    /** 雷达名称 */
    radarName?: string;
    /** 客户标签 */
    tagIdList?: string[];
    /** 更新人登录账号 */
    updateAccount?: string;
    /** 更新人 */
    updateName?: string;
  };

  type gengxinqunfaxiaoxi = {
    /** 附件 */
    attachments?: chuangjianxiaoxifujian[];
    /** 消息文本内容 */
    content?: string;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    employeeSelect?: string;
    /** 群发消息id */
    messageId?: number;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则立即发送） */
    predictSendTime?: string;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 创建群发消息执行人筛选条件（标签类型下有效） */
    targetCondition?: gengxinqunfaxiaoxizhixingrenshaixuantiaojian;
    /** 群发消息执行人 */
    targets?: chuangjianqunfaxiaoxizhixingren[];
    /** 群发类型（1: 好友消息; 2: 群消息; 3: 客户分组） */
    type?: number;
  };

  type gengxinqunfaxiaoxizhixingrenshaixuantiaojian = {
    /** 区域id */
    areaId?: number;
    /** 导购id（逗号分割） */
    guideIds?: string;
    /** 门店id */
    shopId?: number;
  };

  type gengxinrenwushiti = {
    /** 企微id */
    corpId?: string;
    /** 集团ID */
    groupId?: number;
    /** 规则 */
    rules: gengxinzhinengdabiaodangerenwuguizebiao[];
    /** 场景id */
    sceneId: number;
    /** 场景名称 */
    sceneName: string;
    /** 标签id */
    tagId: string;
    /** 标签名称 */
    tagName: string;
    /** 任务id */
    taskId: number;
    /** 任务名称 */
    taskName: string;
  };

  type gengxinrpajiahaoyouhuodongrenwushezhigongsiqiweiweidu = {
    /** 允许加粉时间结束 */
    allowTimeEnd?: string;
    /** 允许加粉时间开始 */
    allowTimeStart?: string;
    /** id */
    id?: number;
    /** 任务回收天数 */
    taskRecycleDayCount?: number;
  };

  type gengxinrpapengyouquanyingxiaobiao = {
    /** 发朋友圈的账号id集合 */
    accountList?: number[];
    /** 附件信息 */
    attachmentDTOList?: rpapengyouquanyingxiaofujianxiangqing[];
    /** id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 活动开始时间 */
    sendTime?: string;
    /** 0 立即发送 1 定时发送 */
    sendType?: number;
    /** 朋友圈文案 */
    text?: string;
  };

  type gengxinrpapiliangjiahaoyouhuodongbiao = {
    /** 添加账号 */
    addAccount?: string;
    /** 添加好友数量 */
    addFriendCount?: number;
    /** 企微标签 */
    corpTag?: string;
    /** 创建人 */
    creator?: number;
    /** 文件名称 */
    fileName?: string;
    /** 上传文件路径 */
    filePath?: string;
    /** id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 活动开始时间 */
    startTime?: string;
  };

  type gengxinsopcelvepeizhi = {
    /** 当前type对应的配置内容 */
    configContentObj?: Record<string, any>;
    /** 企微ID */
    corpId?: string;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 体系id */
    policyId?: number;
    /** 入会1,入群2,社群营销3,精准营销4 */
    type?: number;
  };

  type gengxinweixinzhinenghuanyingyu = {
    /** 公司所对应的运营公众号appId */
    appId?: string;
    /** 欢迎语内容json格式 */
    content?: string;
    corpId?: string;
    /** 员工选择组件数据，用于前端回显 */
    employeeSelect?: string;
    /** 失效时间（秒）:如添加好友开始距离该时间后才触发欢迎语，则不发送 */
    failureTime?: number;
    /** 公司ID */
    groupId?: number;
    id: number;
    /** 1:企微，2:个号，3: 公众号,4:好评返现活动 */
    plan?: number;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 发送次数 */
    sendCount?: number;
    /** 欢迎语启用状态 0未开启 1启用 */
    status?: number;
    /** 标题 */
    title?: string;
    /** 模板类型：0基础模板；9默认模板； */
    type?: number;
    /** 记录唯一标识 uuid 去除'-' */
    uuid?: string;
  };

  type gengxinzhinengdabiaodangerenwuguizebiao = {
    /** 企微id */
    corpId?: string;
    /** v3员工组件返回 */
    employeeSelect?: string;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 操作符类型（1:<,2:<=,3:=,4>,5:>=,6：!=） */
    operate?: number;
    /** 规则组id */
    ruleGroupId?: number;
    /** 规则名称 ：运算符时此处为时间，群聊为群聊id，会员为会员体系id, 点赞和评论朋友圈时为次数, 添加指定好友是为导购id,绑定店铺/未绑定店铺为店铺id，流失好友为导购id，视角的时候为视角id ,休眠时间点为天数, 最近付款时间 为天数   休眠时间区间 为数组区间[startTime,endTime],重复好友是为导购id */
    ruleName: string;
    /** 规则类型( 1：运算符 ，2：加入群聊，3：加入会员 4：点赞朋友圈 5：评论朋友圈,6:添加指定好友,7:淘宝,8:京东 ,9 有赞，10 抖店，11.流失好友，12 下单次数 13 下单金额，14 视角, ,15 最近付款时间 ,16 休眠天数(时间点) 17 付款时间区间 18 重复好友 */
    ruleType: number;
  };

  type gengxinzhinengdabiaojuherenwubiao = {
    /** 主键 */
    id?: number;
    /** 聚合任务关联的任务信息 */
    taskList?: juherenwuguanlianderenwushiti[];
    /** 任务名称 */
    taskName?: string;
    /** 1 启用 ，0 未启用 */
    taskStatus?: number;
  };

  type genjinjilu = {
    /** 跟进次数 */
    followCount?: number;
    /** 跟进时间 */
    followTime?: string;
    /** 导购id */
    guideId?: number;
    /** 记录id */
    id?: number;
    /** 是否只读(0:否(可编辑); 1:是(不可编辑)) */
    readOnly?: number;
    /** 跟进内容 */
    remark?: string;
    /** 执行日期 */
    runDay?: string;
    /** 门店id */
    shopId?: number;
    /** 分组客户详情表id */
    subgroupCustomerId?: number;
    /** 任务id */
    taskId?: number;
    /** unionId */
    unionId?: string;
    /** 图片地址 */
    urlJson?: string[];
  };

  type getAccountPolicyTotalUsingGETParams = {
    /** view */
    view?: number;
  };

  type getAllOwnerUsingGETParams = {
    /** configId */
    configId: string;
  };

  type getAvailableBehaviorCodeUsingGETParams = {
    /** type */
    type: number;
  };

  type getByConfigIdUsingGET1Params = {
    /** 二维码海报配置ID */
    configId: number;
  };

  type getByConfigIdUsingGETParams = {
    /** configId */
    configId: string;
  };

  type getByGuestCodeIdUsingGETParams = {
    /** 裂变大师活动ID */
    guestCodeId: number;
  };

  type getByUUIDUsingGETParams = {
    /** 数据唯一标识 */
    uuid: string;
  };

  type getChannelListUsingDELETEParams = {
    /** channelName */
    channelName?: string;
  };

  type getChannelListUsingGETParams = {
    /** channelName */
    channelName?: string;
  };

  type getChannelListUsingPATCHParams = {
    /** channelName */
    channelName?: string;
  };

  type getChannelListUsingPOSTParams = {
    /** channelName */
    channelName?: string;
  };

  type getChannelListUsingPUTParams = {
    /** channelName */
    channelName?: string;
  };

  type getContactWayUsingDELETEParams = {
    /** guideId */
    guideId?: string;
    /** shopId */
    shopId?: number;
  };

  type getContactWayUsingGETParams = {
    /** guideId */
    guideId?: string;
    /** shopId */
    shopId?: number;
  };

  type getContactWayUsingPATCHParams = {
    /** guideId */
    guideId?: string;
    /** shopId */
    shopId?: number;
  };

  type getContactWayUsingPOSTParams = {
    /** guideId */
    guideId?: string;
    /** shopId */
    shopId?: number;
  };

  type getContactWayUsingPUTParams = {
    /** guideId */
    guideId?: string;
    /** shopId */
    shopId?: number;
  };

  type getCountByStatusUsingGETParams = {
    /** 0审核失败、1未提交、2待审核、3审核成功' */
    status: number;
  };

  type getCustomerDetailUsingGETParams = {
    /** 客户externalUserId */
    externalUserId: string;
  };

  type getDecryptDataUsingGETParams = {
    /** 加密数据 */
    encryptData: string;
    /** 加密类型 */
    type: string;
  };

  type getDepartmentUsingDELETEParams = {
    /** plan */
    plan?: number;
  };

  type getDepartmentUsingGETParams = {
    /** plan */
    plan?: number;
  };

  type getDepartmentUsingPATCHParams = {
    /** plan */
    plan?: number;
  };

  type getDepartmentUsingPOSTParams = {
    /** plan */
    plan?: number;
  };

  type getDepartmentUsingPUTParams = {
    /** plan */
    plan?: number;
  };

  type getDetailUsingDELETE1Params = {
    /** id */
    id?: number;
  };

  type getDetailUsingGET1Params = {
    /** 任务id */
    taskId: number;
  };

  type getDetailUsingGET2Params = {
    /** id */
    id?: number;
  };

  type getDetailUsingPATCH1Params = {
    /** id */
    id?: number;
  };

  type getDetailUsingPOST1Params = {
    /** id */
    id?: number;
  };

  type getDetailUsingPUT1Params = {
    /** id */
    id?: number;
  };

  type getEnterpriseActivityUsingGETParams = {
    /** taskId */
    taskId: number;
  };

  type getEveryDayForCountByMonthUsingGETParams = {
    /** month 日期参数格式yyyy-mm */
    month: string;
  };

  type getGoodsCategoryUsingDELETEParams = {
    /** brandId */
    brandId?: string;
  };

  type getGoodsCategoryUsingGETParams = {
    /** brandId */
    brandId?: string;
  };

  type getGoodsCategoryUsingPATCHParams = {
    /** brandId */
    brandId?: string;
  };

  type getGoodsCategoryUsingPOSTParams = {
    /** brandId */
    brandId?: string;
  };

  type getGoodsCategoryUsingPUTParams = {
    /** brandId */
    brandId?: string;
  };

  type getGroupPlatListUsingGETParams = {
    /** isOnline */
    isOnline?: boolean;
  };

  type getGuideInfoUsingDELETEParams = {
    /** guideId */
    guideId?: number;
  };

  type getGuideInfoUsingGETParams = {
    /** guideId */
    guideId?: number;
  };

  type getGuideInfoUsingPATCHParams = {
    /** guideId */
    guideId?: number;
  };

  type getGuideInfoUsingPOSTParams = {
    /** guideId */
    guideId?: number;
  };

  type getGuideInfoUsingPUTParams = {
    /** guideId */
    guideId?: number;
  };

  type getInteractiveUsingGETParams = {
    /** momentId */
    momentId: string;
  };

  type getLabelUsingPOSTParams = {
    /** appid */
    appid?: string;
  };

  type getLatestUpdateLogUsingGETParams = {
    /** iterationVersion */
    iterationVersion?: string;
  };

  type getListExcelByIdUsingGETParams = {
    endTime?: string;
    guideId?: string;
    isDesc?: string;
    materialId?: string;
    orderType?: string;
    startTime?: string;
  };

  type getListExcelUsingGETParams = {
    endTime?: string;
    folderId?: string;
    guideId?: string;
    isDesc?: string;
    materialTitle?: string;
    materialType?: number;
    orderType?: string;
    startTime?: string;
    tagId?: string;
  };

  type getListUsingGET1Params = {
    /** sop策略ID */
    policyIds: number[];
  };

  type getLogForChatRoomUsingGETParams = {
    /** id */
    id: number;
    /** 展示成功状态 0 不展示 1展示 */
    showSuccessField: number;
  };

  type getLogUsingGETParams = {
    /** code */
    code?: string;
    /** name */
    name?: string;
    /** timeStart */
    timeStart: string;
    /** timeEnd */
    timeEnd: string;
  };

  type getMemberLevelUsingGETParams = {
    /** viewId */
    viewId: number;
  };

  type getMomentInfoUsingGETParams = {
    /** momentId */
    momentId: string;
    /** userId */
    userId?: string;
  };

  type getMoreAccountByWeightUsingDELETEParams = {
    /** brandId */
    brandId?: number;
  };

  type getMoreAccountByWeightUsingGETParams = {
    /** brandId */
    brandId?: number;
  };

  type getMoreAccountByWeightUsingPATCHParams = {
    /** brandId */
    brandId?: number;
  };

  type getMoreAccountByWeightUsingPOSTParams = {
    /** brandId */
    brandId?: number;
  };

  type getMoreAccountByWeightUsingPUTParams = {
    /** brandId */
    brandId?: number;
  };

  type GetMpComponentTokenRequest = {
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type GetMpComponentTokenResponse = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 微信第三方平台token */
    result?: MpComponentTokenVo;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
  };

  type getMsgUsingDELETEParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type getMsgUsingGETParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type getMsgUsingPATCHParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type getMsgUsingPOSTParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type getMsgUsingPUTParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type getNoCompleteStatisticsByMaterialUsingPOSTParams = {
    /** 素材标题 */
    materialTitle?: any;
  };

  type getNoCompleteStatisticsDetailByMaterialUsingPOSTParams = {
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材id */
    materialId: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
  };

  type getOperateStatisticsDetailByDateUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材标题 */
    materialTitle?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 执行时间 精度最小到秒 */
    startTime?: any;
  };

  type getOperateStatisticsDetailByMaterialUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 执行时间 精度最小到秒 */
    executeTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材id */
    materialId: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getOperateStatisticsDetailsByGuideIdUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 动作类型:14 = 发送,16 = 下载,18 = 补充 */
    eventType?: any;
    /** 执行时间 精度最小到秒 */
    executeTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材标题 */
    materialTitle?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getOperateStatisticsListByDateUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
    /** 执行时间 年月日 */
    trackTime?: any;
  };

  type getOperateStatisticsListByGuideIdUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 员工名称 */
    guideName?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getOperateStatisticsListByMaterialUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材标题 */
    materialTitle?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getParentPathUsingGETParams = {
    /** parentId */
    parentId?: number;
  };

  type getPaymentTendencyDataUsingGETParams = {
    /** viewId */
    viewId: number;
  };

  type getPolicyConversionFunnelUsingGETParams = {
    /** policyId */
    policyId?: number;
    /** viewId */
    viewId: number;
  };

  type getPolicyDataViewUsingGETParams = {
    /** policyId */
    policyId?: number;
    /** viewId */
    viewId: number;
  };

  type getPolicySectionDataUsingGETParams = {
    /** policyId */
    policyId: number;
    /** viewId */
    viewId: number;
  };

  type getPolicyTendencyDataUsingGETParams = {
    /** policyId */
    policyId?: number;
    /** viewId */
    viewId: number;
  };

  type getRepeatGuideListUsingDELETEParams = {
    /** id */
    id?: string;
    /** start */
    start?: string;
    /** length */
    length?: string;
    /** orderKey */
    orderKey?: string;
    /** orderDir */
    orderDir?: string;
  };

  type getRepeatGuideListUsingGETParams = {
    /** id */
    id?: string;
    /** start */
    start?: string;
    /** length */
    length?: string;
    /** orderKey */
    orderKey?: string;
    /** orderDir */
    orderDir?: string;
  };

  type getRepeatGuideListUsingPATCHParams = {
    /** id */
    id?: string;
    /** start */
    start?: string;
    /** length */
    length?: string;
    /** orderKey */
    orderKey?: string;
    /** orderDir */
    orderDir?: string;
  };

  type getRepeatGuideListUsingPOSTParams = {
    /** id */
    id?: string;
    /** start */
    start?: string;
    /** length */
    length?: string;
    /** orderKey */
    orderKey?: string;
    /** orderDir */
    orderDir?: string;
  };

  type getRepeatGuideListUsingPUTParams = {
    /** id */
    id?: string;
    /** start */
    start?: string;
    /** length */
    length?: string;
    /** orderKey */
    orderKey?: string;
    /** orderDir */
    orderDir?: string;
  };

  type getRewardInfoUsingDELETEParams = {
    /** monthDate */
    monthDate?: string;
    /** shopId */
    shopId?: number;
  };

  type getRewardInfoUsingGETParams = {
    /** monthDate */
    monthDate?: string;
    /** shopId */
    shopId?: number;
  };

  type getRewardInfoUsingPATCHParams = {
    /** monthDate */
    monthDate?: string;
    /** shopId */
    shopId?: number;
  };

  type getRewardInfoUsingPOSTParams = {
    /** monthDate */
    monthDate?: string;
    /** shopId */
    shopId?: number;
  };

  type getRewardInfoUsingPUTParams = {
    /** monthDate */
    monthDate?: string;
    /** shopId */
    shopId?: number;
  };

  type getSearchResultUsingGETParams = {
    /** areaId */
    areaId: number;
    /** searchParam */
    searchParam: string;
    /** haveUserId */
    haveUserId: number;
    /** guideState */
    guideState: string;
    /** type */
    type: string;
  };

  type getSessionUsingDELETE1Params = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingDELETEParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingGET1Params = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingGETParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingPATCH1Params = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingPATCHParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingPOST1Params = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingPOSTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingPUT1Params = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getSessionUsingPUTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type getShopCustomerTransferTaskStatusUsingGETParams = {
    /** 店铺ID */
    shopId: number;
  };

  type getShopRecruitmentQrcodeUsingDELETEParams = {
    /** codeType */
    codeType?: number;
    /** shopId */
    shopId?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type getShopRecruitmentQrcodeUsingGETParams = {
    /** codeType */
    codeType?: number;
    /** shopId */
    shopId?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type getShopRecruitmentQrcodeUsingPATCHParams = {
    /** codeType */
    codeType?: number;
    /** shopId */
    shopId?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type getShopRecruitmentQrcodeUsingPOSTParams = {
    /** codeType */
    codeType?: number;
    /** shopId */
    shopId?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type getShopRecruitmentQrcodeUsingPUTParams = {
    /** codeType */
    codeType?: number;
    /** shopId */
    shopId?: string;
    /** viewId */
    viewId?: number;
    /** size */
    size?: number;
  };

  type getShopTreeUsingGETParams = {
    /** sameSystemShopId */
    sameSystemShopId?: number;
    /** penetrate */
    penetrate?: number;
    /** viewId */
    viewId?: number;
  };

  type getSopAdviseByPolicyIdUsingGETParams = {
    /** policyId */
    policyId: number;
    /** viewId */
    viewId?: number;
  };

  type getSopCanvasDetailUsingGETParams = {
    /** canvasId */
    canvasId: number;
    /** isCopy */
    isCopy: boolean;
  };

  type getSopCanvasFilterItemUsingGETParams = {
    /** type */
    type: number;
  };

  type getStatisticsDetailByDateUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 动作类型:14 = 发送,16 = 下载,18 = 补充 */
    eventType?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材标题 */
    materialTitle?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getStatisticsDetailByMaterialUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 动作类型:14 = 发送,16 = 下载,18 = 补充 */
    eventType?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材id */
    materialId: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getStatisticsListByDateUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
    /** 查询时间年月日 */
    trackTime?: any;
  };

  type getStatisticsListByMaterialUsingPOSTParams = {
    /** 起始时间 精度最小到秒 */
    endTime?: any;
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: any;
    /** 素材标题 */
    materialTitle?: any;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: any;
    /** 起始时间 精度最小到秒 */
    startTime?: any;
  };

  type getSubdivisionListUsingGETParams = {
    /** areaId */
    areaId?: number;
    /** viewId */
    viewId?: number;
  };

  type getSuccessTotalUsingGETParams = {
    /** id */
    id: number;
  };

  type getSysConfigByKeyUsingGETParams = {
    /** 系統配置名字 */
    key: string;
  };

  type getTaskAccountDetailUsingGETParams = {
    /** id */
    id: number;
  };

  type getTaskCountUsingDELETEParams = {
    /** queryDate */
    queryDate?: string;
  };

  type getTaskCountUsingGETParams = {
    /** queryDate */
    queryDate?: string;
  };

  type getTaskCountUsingPATCHParams = {
    /** queryDate */
    queryDate?: string;
  };

  type getTaskCountUsingPOSTParams = {
    /** queryDate */
    queryDate?: string;
  };

  type getTaskCountUsingPUTParams = {
    /** queryDate */
    queryDate?: string;
  };

  type getTaskDataViewUsingGET1Params = {
    /** taskId */
    taskId: number;
  };

  type getTaskDataViewUsingGETParams = {
    /** 任务id */
    taskId: number;
  };

  type GetTokenRequest = {
    /** appKey */
    appkey: string;
    /** 集团id */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
  };

  type GetTokenResponse = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** token */
    result?: Token;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
  };

  type getUsersAndDepartmentsByShopIdUsingDELETEParams = {
    /** shopId */
    shopId?: number;
  };

  type getUsersAndDepartmentsByShopIdUsingGETParams = {
    /** shopId */
    shopId?: number;
  };

  type getUsersAndDepartmentsByShopIdUsingPATCHParams = {
    /** shopId */
    shopId?: number;
  };

  type getUsersAndDepartmentsByShopIdUsingPOSTParams = {
    /** shopId */
    shopId?: number;
  };

  type getUsersAndDepartmentsByShopIdUsingPUTParams = {
    /** shopId */
    shopId?: number;
  };

  type getUsingGET1Params = {
    /** id */
    id: number;
  };

  type getUsingGET2Params = {
    /** id */
    id: number;
  };

  type getUsingGET3Params = {
    /** policyId */
    policyId: number;
  };

  type getUsingGETParams = {
    /** 关联任务的任务id */
    id: number;
  };

  type getViewShopOffListUsingGETParams = {
    /** viewId */
    viewId?: number;
  };

  type getVisibleUserUsingGET1Params = {
    /** momentId */
    momentId: string;
  };

  type getVisibleUserUsingGETParams = {
    /** momentId */
    momentId: string;
    /** name */
    name?: string;
  };

  type getWelcomeCodeUsingGET2Params = {
    /** welcomeCodeUuid */
    welcomeCodeUuid?: string;
  };

  type getWelcomeCodeUsingGETParams = {
    /** welcomeCodeUuid */
    welcomeCodeUuid?: string;
  };

  type getWeWorkRoomsSearchResultUsingGETParams = {
    /** areaId */
    areaId?: number;
    /** searchParam */
    searchParam?: string;
  };

  type gongnenggengxindiedairizhibiaoxiangqing = {
    /** 功能描述 */
    description?: string;
    /** 迭代版本（例：v7.15.0） */
    iterationVersion?: string;
    /** 链接路径 */
    link?: string;
    /** 链接对应文本 */
    linkText?: string;
  };

  type gongsiquanliebiaodeqingqiu = {
    /** 状态 1正常 0删除 */
    stateList?: number[];
  };

  type gongzhonghaobiaoqianbiaoxiangqing = {
    /** 公众号ID */
    appid?: string;
    /** 创建时间 */
    createTime?: string;
    /** 该标签下粉丝数量 */
    fanCount?: number;
    /** 公司id */
    groupId?: number;
    /** id */
    id?: number;
    /** 公众号tag_id */
    tagId?: number;
    /** 标签名称 */
    tagName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type gongzhonghaodabiaohuodongchuangjianqingqiuti = {
    /** 公众号id */
    appid?: string;
    /** 行为类型(1:关注公众号,2:扫描公众号二维码3:点击公众号菜单，4点击菜单跳转链接,5:发送消息,6:订阅消息通知,7上传地理位置,8取消关注) */
    behaviorType?: number;
    /** 最近多少天 */
    recentDayCount?: number;
    /** 标签id集合,逗号分割的id字符串 */
    tagId?: string;
    /** 任务名称 */
    taskName?: string;
  };

  type gongzhonghaodabiaohuodonggengxinqingqiuti = {
    /** 公众号id */
    appid?: string;
    /** 行为类型(1:关注公众号,2:扫描公众号二维码3:点击公众号菜单，4点击菜单跳转链接,5:发送消息,6:订阅消息通知,7上传地理位置,8取消关注) */
    behaviorType?: number;
    /** 数据id */
    id?: number;
    /** 最近多少天 */
    recentDayCount?: number;
    /** 标签id集合,逗号分割的id字符串 */
    tagId?: string;
    /** 任务名称 */
    taskName?: string;
  };

  type gongzhonghaodabiaohuodongliebiaoqingqiuti = {
    /** 行为类型(1:关注公众号,2:扫描公众号二维码3:点击公众号菜单，4点击菜单跳转链接,5:发送消息,6:订阅消息通知,7上传地理位置,8取消关注) */
    behaviorType?: number;
    /** 活动开始时间的区间开始 */
    startTimeBegin?: string;
    /** 活动开始时间的区间结束 */
    startTimeEnd?: string;
    /** 标签id,只能单选，传id字符串 */
    tagId?: string;
    /** 活动名称 */
    taskName?: string;
    /** 活动状态，0：禁用，1：启用 */
    taskStatus?: string;
  };

  type gongzhonghaodabiaohuodongliebiaoxiangxiangyingti = {
    /** 昨日新增人数 */
    addCnt?: number;
    /** 创建时间 */
    createTime?: string;
    /** 任务id */
    id?: number;
    /** 昨日流失人数 */
    lossCnt?: number;
    /** 标签名称 */
    tagName?: string;
    /** 任务名称 */
    taskName?: string;
    /** 1 启用 ，0 未启用 */
    taskStatus?: number;
    /** 标签总人数 */
    totalCnt?: number;
  };

  type gongzhonghaodabiaorenwubiaoxiangqing = {
    /** 公众号ID */
    appid?: string;
    /** 粉丝行为类型 */
    behaviorType?: number;
    /** 企微id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 1:ecrp,2:kd */
    dataCenterType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 最近多少天(1-365) */
    recentDayCount?: number;
    /** 状态: 1:启用,0:禁用 */
    status?: number;
    /** 标签id,可多选 */
    tagId?: string;
    /** 活动名称 */
    taskName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type gongzhonghaofujianxinxibiaoxiangqing = {
    /** 活动id */
    activityId?: number;
    /** 小程序appid */
    appid?: string;
    /** 描述 */
    description?: string;
    id?: number;
    /** 小程序page路径 */
    page?: string;
    /** 图片链接 */
    picUrl?: string;
    /** 二维码海报id */
    qrcodePlacardConfigId?: number;
    /** OSS地址 */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型(1: 图片; 2: 视频; 3: 链接; 4: 小程序; 5: 二维码海报) */
    type?: number;
    /** 跳转链接地址 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型 */
    urlType?: number;
  };

  type gongzhonghaohuanyingyubaocunhuogengxinshiti = {
    /** 附件内容 */
    annexList?: Annex[];
    /** 公众号Id */
    appId?: string;
    /** 使用渠道codes */
    channelCodes?: string[];
    /** 欢迎语文本消息 */
    content?: string;
    /** 使用员工ids */
    employeeIds?: string[];
    /** 员工选择组件数据 */
    employeeSelect?: string;
    /** 是否是v3,是v3传1，不是不传 */
    isV3?: number;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 使用门店ids */
    shopIds?: string[];
    /** 启用状态 0关闭 1启用 */
    status: number;
    /** 公众号欢迎语标题 */
    title?: string;
    /** 欢迎语类型 0非默认 9默认 */
    type?: number;
    /** 为true时需要重新显示员工和门店选择器数据,去老项目调用service重新处理该参数 */
    updateCondition?: boolean;
    /** 欢迎语配置员工列表 */
    userList?: GuideUserDTO[];
    /** 公众号欢迎语唯一标识,修改时必传 */
    welcomeCodeUuid?: string;
  };

  type gongzhonghaohuanyingyudangehuanyingyurenyuanhuodianpuqingqiushiti = {
    /** 企微id */
    corpId?: string;
    /** 用户名称 */
    employeeName?: string;
    /** 公司id */
    groupId?: number;
    /** 欢迎语的uuid */
    welcomeCodeUuid?: string;
  };

  type gongzhonghaohuanyingyuliebiaoqingqiushiti = {
    /** 公众号appId */
    appId?: string;
    /** 欢迎语内容 */
    content?: string;
    /** 公众号appId */
    corpId?: string;
    /** 1:ecrp,2:kd */
    dataCenterType?: number;
    /** 员工选择 */
    employeeSelect?: string;
    /** 欢迎语内容 */
    groupId?: number;
    /** 导购id */
    guideIds?: string[];
    /** 排序 */
    order?: string;
    /** 排序字段 */
    orderKey?: string;
    /** 默认3,表示公众号欢迎语类型 */
    plan?: number;
    /** 店铺id */
    shopIds?: string[];
    /** 启用状态 0关闭 1启用 */
    status?: number;
    /** 标题 */
    title?: string;
    /** 欢迎语uuid */
    welcomeCodeUuidStr?: string;
  };

  type gongzhonghaokefuzhanghao = {
    /** 完整客服账号，格式为：账号前缀@公众号微信号 */
    kfAccount?: string;
    /** 客服头像 */
    kfHeadimgurl?: string;
    /** 客服工号 */
    kfId?: string;
    /** 客服昵称 */
    kfNick?: string;
  };

  type gongzhonghaokuangxuanrenqunbaoduixiang = {
    /** 活动id */
    activityId?: number;
    /** 所属分类 */
    categoryName?: string;
    /** 企微的人群选人方式;1客户分群,2人群标签,3员工好友,4公众号标签 */
    crowdMethod?: number;
    id?: number;
    /** 目标id */
    targetId?: number;
    /** 目标名称 */
    targetName?: string;
  };

  type gongzhonghaokuangxuanrenqunbaoduixiang0 = {
    /** 所属分类 */
    categoryName?: string;
    /** 企微的人群选人方式;1客户分群,2人群标签,3员工好友 */
    crowdMethod?: number;
    id?: number;
    /** 目标id */
    targetId?: number;
    /** 目标名称 */
    targetName?: string;
  };

  type gongzhonghaoliebiaoxiaoguofenxi = {
    /** 预估总人数 */
    preliminaryNumber?: number;
    /** 触达人数 */
    reachNumber?: number;
    /** 触达人数比例 */
    reachNumberPer?: string;
    /** 未触达人数 */
    unReachNumber?: number;
    /** 未触达人数比例 */
    unReachNumberPer?: string;
  };

  type gongzhonghaomoban = {
    /** 模板内容 */
    content?: string;
    /** 模板id */
    templateId?: string;
    /** 模板标题 */
    title?: string;
  };

  type gongzhonghaotuwenxiaoxiqingqiushiti = {
    /** 图文消息id,获取详情接口必传 */
    mediaId?: string;
    /** 公众号id */
    offiaccountId?: string;
  };

  type gongzhonghaoxinxi = {
    /** 公众号appId */
    appId?: string;
    /** 集团id */
    companyId?: number;
    /** 公众号头像 */
    headImgUrl?: string;
    /** 公众号名称 */
    nickName?: string;
    /** 公众号二维码 */
    qrCodeUrl?: string;
    /** 来源 */
    source?: string;
    /** uniqueId */
    uniqueId?: string;
  };

  type gongzhonghaoyingxiaohuodongbaocunqingqiuti = {
    /** 企微消息附件 */
    attachmentList?: qiweixiaoxifujian[];
    /** 创建群发消息执行人筛选条件（标签类型下有效） */
    crowdConditionDTO?: chuangjiangongzhonghaoqunfaxiaoxizhixingrenshaixuantiaojian;
    /** 人群 */
    crowdList: gongzhonghaokuangxuanrenqunbaoduixiang0[];
    /** 人群包框选方式:1粉丝标签,2是企微好友的粉丝 */
    crowdMethod: number;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    employeeSelect?: string;
    /** 新建时为空,更新时传入id */
    id?: number;
    /** 客服账号 */
    kfAccount?: string;
    /** 公众号图文消息素材id(send_channel=3有值) */
    mediaId?: string;
    /** 活动名称 */
    name: string;
    /** 公众号id */
    offiaccountId: string;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 发送渠道:1模板消息,2客服消息,3 图文消息 */
    sendChannel: number;
    /** 发送方式:1立即发送,2定时发送 */
    sendType: number;
    /** 活动开始时间:立即发送不输入,定时发送时填入定时时间 */
    startTime?: string;
    /** 消息模板内容(send_channel=1有值) */
    templateContent?: string;
    /** 消息模板id(send_channel=1有值) */
    templateId?: string;
    /** 消息模板占位符(send_channel=1有值) */
    templatePlaceholders?: Record<string, any>;
    /** 消息模板跳转url(send_channel=1有值) */
    templateUrl?: string;
    /** 活动文案(send_channel=2有值) */
    word?: string;
  };

  type gongzhonghaoyingxiaohuodongliebiaoqingqiuti = {
    /** 活动名称 */
    name?: string;
    /** 活动开始时间的区间开始 */
    startTimeBegin?: string;
    /** 活动开始时间的区间结束 */
    startTimeEnd?: string;
    /** 活动使用状态;1未执行,2.已执行,3执行中,4执行失败 */
    status?: number;
    /** 视角id */
    viewId?: number;
  };

  type gongzhonghaoyingxiaohuodongliebiaoxiangxiangyingti = {
    /** 区域id */
    areaId?: number;
    /** 企微ID */
    corpId?: string;
    /** 创建人 */
    creator?: string;
    /** 粉丝数量 */
    fansCount?: number;
    /** 集团ID */
    groupId?: number;
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 活动开始时间 */
    startTime?: string;
    /** 活动使用状态;1未执行,2.已执行,3执行中,4执行失败,5已终止 */
    status?: number;
    /** 体系id */
    viewId?: number;
  };

  type gongzhonghaoyingxiaohuodongrenshuyugushiti = {
    /** type为3时的员工数据 */
    employeeSelect?: string;
    /** type为1为分组id，type为2为标签id */
    ids?: string[];
    /** 企微的人群选人方式;1客户分群,2人群标签,3员工好友 */
    type?: number;
  };

  type gongzhonghaoyingxiaohuodongxiangqingxiangyingti = {
    /** v3 9附件组件 */
    annexList?: Annex[];
    /** 企微消息附件 */
    attachmentList?: qiweixiaoxifujian[];
    /** 创建人 */
    creator?: string;
    /** 人群 */
    crowdConditionDTO?: chuangjiangongzhonghaoqunfaxiaoxizhixingrenshaixuantiaojian0;
    /** 人群 */
    crowdList?: gongzhonghaokuangxuanrenqunbaoduixiang[];
    /** 人群包框选方式:1粉丝标签,2是企微好友的粉丝 */
    crowdMethod?: number;
    /** 员工选择组件最终筛选值 */
    employeeSelect?: string;
    id?: number;
    /** 客服账号 */
    kfAccount?: string;
    /** 公众号图文消息素材id(send_channel=3有值) */
    mediaId?: string;
    /** 活动名称 */
    name?: string;
    /** 公众号id */
    offiaccountId?: string;
    /** 员工组件 */
    richTextEcho?: string;
    /** 发送渠道:1模板消息,2客服消息 3 图文消息 */
    sendChannel?: number;
    /** 发送方式:1立即发送,2定时发送 */
    sendType?: number;
    /** 活动开始时间 */
    startTime?: string;
    /** 活动状态;1未执行,2.已执行,3执行中,4执行失败 */
    status?: number;
    /** 消息模板内容(send_channel=1有值) */
    templateContent?: string;
    /** 消息模板id(send_channel=1有值) */
    templateId?: string;
    /** 消息模板跳转链接(send_channel=1有值) */
    templateUrl?: string;
    /** 活动文案(send_channel=2有值) */
    word?: string;
  };

  type GuestCodeActivityAllDTO = {
    /** 活动介绍 */
    activityIntroduction?: string;
    /** 活动海报 */
    activityPlacard?: string;
    /** 活动状态：1正常 0提前结束； */
    activityStatus?: number;
    /** 附件内容 */
    annexList?: Annex[];
    /** 裂变大师头像 */
    avatar?: string;
    /** 活动消息卡片文案 */
    cardCopywriting?: string;
    /** 活动消息卡片封面图片 */
    cardCoverPic?: string;
    /** 活动消息卡片标题 */
    cardTitle?: string;
    /** 裂变大师海报状态，0：过期，1：未生成，2：正常，null:还不是裂变大师 */
    configState?: number;
    /** 欢迎语内容json格式 */
    content?: string;
    /** 企微ID */
    corpId?: string;
    /** 去重方式：0=不去重；1=全局去重；2=活动内去重； */
    distinctType?: number;
    /** 裂变大师活动一客一码有效周期-天（过期时间） */
    effectiveCycle?: number;
    /** 邀请好友总数 */
    friendCount?: number;
    /** 公司ID */
    groupId?: number;
    /** 裂变大师活动ID */
    guestCodeId?: number;
    /** 裂变大师多海报实体集合 */
    guestCodePostersQueryList?: GuestCodePostersQuery[];
    /** 导购ID */
    guideId?: number;
    /** 员工名字 */
    guideName?: string;
    /** 员工头像 */
    headImg?: string;
    /** isOnlyReceiveByMember：是否仅会员可领取奖励：0否；1是 */
    isOnlyReceiveByMember?: number;
    /** 名称 */
    name?: string;
    /** 奖励达标总人数 */
    numberStandard?: number;
    /** 活动页面配色方案 */
    pageColor?: string;
    /** 裂变大师活动页面装修配置 */
    pageDecoration?: string;
    /** 赠送状态： 0发放失败 1奖励已领取 2奖励待领取、3任务未达标 */
    presentsState?: number;
    /** 礼品说明 */
    prizeExplain?: string;
    /** 阶梯奖励规则：0：不允许奖品叠加领取；1：允许奖品叠加领取； */
    prizeLadderRule?: number;
    /** 奖品名称 */
    prizeName?: string;
    /** 奖品规则集合 */
    prizeRuleList?: GuestCodePrizeRuleListDTO[];
    /** 奖品发放方案：0：不发放；1：普通奖励（只能领取一个） */
    prizeSendPlan?: number;
    /** 奖励开关：0 关闭 1开启 */
    prizeStatus?: number;
    /** 裂变大师总数 */
    promotionCount?: number;
    /** 裂变大师昵称 */
    promotionName?: string;
    /** 裂变大师unionId */
    promotionUnionId?: string;
    /** 二维码类型(生成企微联系我二维码类型):0=单员工二维码；1=多员工聚合二维码 */
    qrCodeType?: number;
    /** 招募地址 */
    recruitUrl?: string;
    /** 招募人数要求 */
    recruitment?: number;
    /** 是否允许重复参与：0=允许；1=不允许 */
    repeatParticipation?: number;
    /** 统计类型(统计时效的统计类型):  0=统计时效时间大于活动结束时间(包括立即结束)不记录好友数量；1=统计时效时间大于活动结束时间(包括立即结束)记录好友数量 */
    statisticalType?: number;
    /** 客码状态：1未开始、2进行中、3提前结束、0已结束 */
    status?: number;
    /** 裂变大师自动打标信息DTO */
    tags?: liebiandashizidongdabiaoxinxiDTO;
    /** 解除好友关系是否扣减好友数：0=不扣减；1扣减 */
    unfriendDeduction?: number;
    /** 统计的有效间隔时间(统计时效)：0=立即生效；>0 =间隔该时间后生效 */
    validIntervalTimeOfStatistical?: number;
    /** 奖品有效数量(H5列表才有该值，=0：奖励不足 >0:数量充足  -1:没有奖励) */
    validNumber?: number;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType?: number;
  };

  type GuestCodeActivityDTO = {
    /** 活动海报 */
    activityPlacard?: string;
    /** 创建时间 */
    createTime?: string;
    /** 裂变大师的一客一码有效周期-天（过期时间） */
    effectiveCycle?: number;
    /** 公司ID */
    groupId?: number;
    /** 裂变大师活动ID */
    guestCodeId?: number;
    /** 导购数量 */
    guideCount?: number;
    /** 导购名称集合，只显示前十个 */
    guideNames?: string;
    /** 创建人登录账号 */
    loginAccount?: string;
    /** 名称 */
    name?: string;
    /** 状态 */
    state?: number;
    /** 客码状态：1未开始、2进行中、3提前结束、0已结束 */
    status?: number;
    /** 标签组数量 */
    tagCount?: number;
    /** 标签集合 */
    tags?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType?: number;
  };

  type GuestCodeActivityPopupResponse = {
    /** 活动海报 */
    activityPlacard?: string;
    /** 活动状态：1正常 0提前结束 2活动结束 */
    activityStatus?: number;
    /** 客码背景图片 */
    backgroundPic?: string;
    /** 活动消息卡片文案 */
    cardCopywriting?: string;
    /** 活动消息卡片封面图片 */
    cardCoverPic?: string;
    /** 活动消息卡片标题 */
    cardTitle?: string;
    /** 创建时间 */
    createTime?: string;
    /** 公司ID */
    groupId?: number;
    /** 裂变大师活动ID */
    guestCodeId?: number;
    /** 导购id集合 */
    guideIds?: string;
    /** 导购名称集合List */
    guideNameList?: string[];
    /** 导购名称集合 */
    guideNames?: string;
    /** 创建人 */
    loginAccount?: string;
    /** 名称 */
    name?: string;
    /** 线下门店集合 */
    shopNames?: string;
    /** 客码状态：1未开始、2进行中、3提前结束、0已结束 */
    status?: number;
    /** 企微id集合 */
    userIds?: string;
    /** 企微name集合 */
    userNames?: string;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType?: number;
  };

  type GuestCodeActivityPrizeRuleQuery = {
    /** 新增发放数量 */
    addPrizeNumber?: number;
    /** 奖品等级：1-100 */
    prizeGrade: number;
    /** 奖品等级名称 */
    prizeGradeName?: string;
    /** 奖品标识id：优惠券（sg_activity_coupon表id），与prizeValue互斥 */
    prizeId?: number;
    /** 奖品简介 */
    prizeIntro?: string;
    /** 奖励内容物品名称，如优惠券则为优惠券名称 */
    prizeName?: string;
    prizeNameSetting: string;
    /** 发放总数量 */
    prizeNumber: number;
    /** 奖品图片 */
    prizePic?: string;
    /** 奖励类型： 1：优惠券 */
    prizeType: number;
    /** 奖品值（当奖品无奖品标识id，且只有值得时候，存该值，如红包金额），与prizeId互斥 */
    prizeValue?: string;
    /** 邀请人数要求 */
    recruitment: number;
    /** 奖品活动唯一标识，不传该值，则为新增规则 */
    uuid?: string;
  };

  type GuestCodeActivityQuery = {
    /** 活动规则 */
    activityIntroduction: string;
    /** 聚合员工id集合，只有当qrCodeType=1时进行处理 */
    aggregatedGuideIds?: number[];
    /** 附件内容 */
    annexList?: Annex[];
    /** 活动消息卡片文案 */
    cardCopywriting: string;
    /** 活动消息卡片封面图片 */
    cardCoverPic: string;
    /** 活动消息卡片标题 */
    cardTitle: string;
    /** 去重方式：0=不去重；1=全局去重；2=活动内去重； */
    distinctType: number;
    /** 裂变大师活动一客一码有效周期-天（过期时间） */
    effectiveCycle: number;
    /** 裂变大师活动ID */
    guestCodeId?: number;
    /** 裂变大师多海报实体集合 */
    guestCodePostersQueryList?: GuestCodePostersQuery[];
    /** 分享员工id集合 */
    guideIds?: number[];
    /** 是否仅会员可领取奖励：0否；1是 */
    isOnlyReceiveByMember?: number;
    /** 裂变大师活动名称 */
    name: string;
    /** 是否进行任务通知标识 */
    notifyStatus?: number;
    /** 活动页面配色方案 */
    pageColor: string;
    /** 裂变大师活动页面装修配置 */
    pageDecoration: string;
    /** 阶梯奖励规则：0：不允许奖品叠加领取；1：0：不允许奖品叠加领取； */
    prizeLadderRule?: number;
    /** 奖励规则集，奖励机制启用后，该值不能为空 */
    prizeRuleList?: GuestCodeActivityPrizeRuleQuery[];
    /** 奖品发放方案：0：不发放；1：普通奖励（只能领取一个） */
    prizeSendPlan?: number;
    /** 奖励机制启用状态：0 关闭 1开启 */
    prizeStatus: number;
    /** 二维码类型(生成企微联系我二维码类型):0=单员工二维码；1=多员工聚合二维码 */
    qrCodeType: number;
    /** 是否允许重复参与：0=允许；1=不允许 */
    repeatParticipation: number;
    /** 裂变大师自动打标信息DTO */
    tags?: liebiandashizidongdabiaoxinxiDTO;
    /** 解除好友关系是否扣减好友数：0=不扣减；1扣减 */
    unfriendDeduction: number;
    /** 统计的有效间隔时间(统计时效)：0=立即生效；>0 =间隔该时间后生效 */
    validIntervalTimeOfStatistical: number;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType: number;
  };

  type GuestCodeAwardRecordDTO = {
    /** 导购ID */
    guideId?: number;
    /** 导购名称 */
    guideName?: string;
    /** 裂变大师名称 */
    name?: string;
    /** 员工所在线下门店集合字符串 */
    offlineShopsStr?: string;
    /** 奖品等级 */
    prizeGrade?: number;
    /** 奖品名称 */
    prizeName?: string;
    /** 奖品类型： 1=优惠券; 2=红包 */
    prizeType?: number;
    /** 奖励领取时间 */
    receiveTime?: string;
  };

  type GuestCodeEmployeeDTO = {
    /** 员工手机号 */
    employeeMobile?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 导购id */
    guideId?: number;
    /** 邀请好友总数 */
    inviteFriendNumber?: number;
    /** 员工所在线下门店集合 */
    offlineShops?: string[];
    /** 裂变大师总数 */
    promotionMasterNumber?: number;
    /** 店铺名称 */
    shopName?: string;
  };

  type GuestCodeFriendListDTO = {
    /** 员工姓名 */
    addEmployeeName?: string;
    /** 好友添加员工员工工号 */
    addEmployeeNumber?: string;
    /** 好友添加导购id */
    addGuideId?: number;
    /** 添加员工所在线下门店集合 */
    addOfflineShops?: string;
    /** 最近添加好友时间 */
    addTime?: string;
    addTimeStr?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 好友头像地址 */
    friendAvatar?: string;
    /** 好友昵称 */
    friendName?: string;
    /** 导购id */
    guideId?: number;
    /** 员工所在线下门店集合 */
    offlineShops?: string;
    /** 裂变大师头像地址 */
    promotionAvatar?: string;
    /** 裂变大师昵称 */
    promotionName?: string;
  };

  type GuestCodePostersQuery = {
    /** 裂变大师活动背景图片 */
    backgroundPic: string;
    /** 海报实体Id */
    extId?: number;
    /** 裂变大师活动Id */
    guestCodeId?: number;
    /** 用户头像：0无，1有 */
    headPortrait: number;
    /** 用户头像坐标X轴 */
    headPortraitCoordinateX?: number;
    /** 用户头像坐标Y轴 */
    headPortraitCoordinateY?: number;
    /** 用户头像形状：0圆 1方 */
    headPortraitShape?: number;
    /** 用户头像大小 */
    headPortraitSize?: number;
    /** 用户昵称：0无，1有 */
    nick: number;
    /** 用户昵称字体颜色：十六进制 */
    nickColour?: string;
    /** 用户昵称坐标X轴 */
    nickCoordinateX?: number;
    /** 用户昵称坐标Y轴 */
    nickCoordinateY?: number;
    /** 昵称位置：0居中、1居左 */
    nickPosition?: number;
    /** 用户昵称字体大小 */
    nickSize?: number;
    /** 二维码大小 */
    qrcodeSize: number;
    /** 二维码X轴坐标值 */
    qrcodeX: number;
    /** 二维码Y轴坐标值 */
    qrcodeY: number;
  };

  type GuestCodePrizeRuleListDTO = {
    /** prizeType=1时，存入优惠券信息,为null时，则显示异常优惠券 */
    couponExt?: GuestCodePrizeRuleToCouponDTO;
    /** 裂变大师活动id */
    guestCodeId?: number;
    /** 导购优惠券状态 */
    guideCouponStatus?: number;
    /** 赠送状态(=2才可以领取) ：0发放失败，1奖励已领取  2奖励待领取、3任务未达标、4不允许奖品叠加领取(阶梯奖励已被领取过，其他奖励则为该状态) */
    presentsState?: number;
    /** 奖品等级：1-100 */
    prizeGrade?: number;
    /** 奖品等级名称 */
    prizeGradeName?: string;
    /** 奖品标识id：优惠券（sg_activity_coupon表id），与prizeValue互斥 */
    prizeId?: number;
    /** 奖品简介 */
    prizeIntro?: string;
    /** 奖励内容物品名称，如优惠券则为优惠券名称 */
    prizeName?: string;
    /** 奖品名称设置（人工输入） */
    prizeNameSetting?: string;
    /** 发放总数量 */
    prizeNumber?: number;
    /** 奖品图片 */
    prizePic?: string;
    /** 奖品已赠送数量 */
    prizePresentsNumber?: number;
    /** 奖励类型： 1：优惠券 */
    prizeType?: number;
    /** 奖品有效总数量 */
    prizeValidSum?: number;
    /** 奖品值（当奖品无奖品标识id，且只有值得时候，存该值，如红包金额），与prizeId互斥 */
    prizeValue?: string;
    /** 对应阶段的已经领取头像 */
    promotionAvatars?: string[];
    /** 助力人数要求 */
    recruitment?: number;
    /** prizeType=2时，存入红包信息,为null时，则显示异常优惠券 */
    redPacketExt?: GuestCodePrizeRuleToRedPacketDTO;
    /** 奖品活动唯一标识，不传该值，则为新增规则 */
    uuid?: string;
  };

  type GuestCodePrizeRuleToCouponDTO = {
    /** 优惠券主表ID */
    activityCouponId?: number;
    /** 去使用跳转小程序的小程序appid */
    appId?: string;
    /** 优惠券编码 */
    couponCode?: string;
    /** 优惠券主题 */
    couponTitle?: string;
    /** 门店优惠券类型（0：未知，1：代金券、2：折扣券、3：兑换券） */
    couponType?: number;
    /** 优惠券面值，单位：元 当coupon_type为1时，此框标识优惠券面额 当coupon_type为2时，此框表示折扣值，8.5折为8.5 */
    couponValue?: number;
    /** 是否作废 0 ：否 1 ：是 */
    isValid?: number;
    /** 去使用跳转小程序的小程序原始ID */
    originId?: string;
    /** 去使用跳转小程序的小程序跳转路径 */
    pagePath?: string;
    /** 去使用跳转类型 0:不跳转 1:小程序 */
    skipType?: number;
    /** 使用条件 */
    useCondition?: string;
  };

  type GuestCodePrizeRuleToRedPacketDTO = {
    /** 红包祝福语 */
    benediction?: string;
    /** 红包金额 */
    money?: number;
    /** 红包名称 */
    name?: string;
    /** 红包类型 1：普通红包  2：拼手气红包 3：自定义红包 */
    redPacketType?: number;
  };

  type GuestCodePromotionMasterDTO = {
    /** 裂变大师头像地址 */
    avatar?: string;
    /** 邀请好友数量 */
    inviteFriendNumber?: number;
    /** 最近添加好友时间 */
    lastFriendAddTime?: string;
    /** 推广码状态：0：过期，1：未生成，2：正常' */
    promotionCodeStatus?: number;
    /** 裂变大师userID */
    promotionMasterId?: string;
    /** 裂变大师昵称 */
    promotionMasterName?: string;
  };

  type GuestCodePromotionReachStandardDTO = {
    /** 裂变大师头像 */
    avatar?: string;
    /** 有效招募人数 */
    count?: number;
    /** 有效招募人数 */
    friendsCount?: number;
    /** 导购ID */
    guideId?: number;
    /** 导购名称 */
    guideName?: string;
    /** 裂变大师名称 */
    name?: string;
    /** 员工所在线下门店集合 */
    offlineShops?: string[];
    /** 员工所在线下门店集合字符串 */
    offlineShopsStr?: string;
    /** 达标标志：0=无奖励；1=达标；2=未达标 */
    presentsNum?: number;
    /** 赠送状态： 0发放失败 1奖励已领取 2奖励待领取、3任务未达标 */
    presentsState?: number;
    /** 赠送名称： 0发放失败 1奖励已领取 2奖励待领取、3任务未达标 */
    presentsStateName?: string;
    /** 奖品等级 */
    prizeGrade?: number;
    /** 显示具体阶梯值（产品特殊要求：阶梯一(1),阶梯二(3)） */
    prizeLadderStr?: string;
    /** 奖品名称 */
    prizeName?: string;
    /** 奖品类型： 1：优惠券 */
    prizeType?: number;
    /** 奖品类型名称： 1：优惠券 */
    prizeTypeName?: string;
    /** 裂变大师unionId */
    promotionUnionId?: string;
    /** 招募人数要求 */
    recruitment?: number;
    /** 奖励领取时间（为空则还未领取） */
    time?: string;
    timeStr?: string;
    /** 有效招募后扣减人数 */
    unfriendsCount?: number;
    /** 企微用户标识unionid */
    unionid?: string;
  };

  type GuestCodeStatisticsDTO = {
    /** 领取总数 */
    awardNumber?: number;
    /** 去重方式：0=不去重；1=全局去重；2=活动内去重； */
    distinctType?: number;
    /** 员工总数 */
    employeeNumber?: number;
    /** 邀请好友总数 */
    inviteFriendNumber?: number;
    /** 裂变大师总数 */
    promotionMasterNumber?: number;
    /** 达标总人数 */
    reachStandardNumber?: number;
    /** 是否允许重复参与：0=允许；1=不允许 */
    repeatParticipation?: number;
    /** 解除好友关系是否扣减好友数：0=不扣减；1扣减 */
    unfriendDeduction?: number;
    /** 统计的有效间隔时间(统计时效)：0=立即生效；>0 =间隔该时间后生效 */
    validIntervalTimeOfStatistical?: number;
  };

  type GuestCodeStatisticsQuery = {
    /** 公司id */
    groupId?: number;
    /** 裂变大师活动ID */
    guestCodeId: number;
    /** 结束时间 精度最小到秒 */
    timeEnd?: string;
    /** 起始时间 精度最小到秒 */
    timeStart?: string;
  };

  type GuideCodePromotionDTO = {
    /** 活动状态 */
    activityStatus?: number;
    /** 活动码状态 */
    activityStatusName?: string;
    /** 所属员工姓名 */
    belongEmpName?: string;
    /** 所属员工昵称 */
    belongEmpNick?: string;
    /** 员工所在线下门店集合 */
    belongEmpShops?: Record[];
    /** 员工工号 */
    employeeNumber?: string;
    /** 导购id */
    guideId?: number;
    /** 邀请好友总数 */
    inviteFriendNo?: number;
    /** 最近添加好友时间 */
    lastAddFriendsDate?: string;
    /** 最近添加好友时间 */
    lastAddFriendsDateStr?: string;
    /** 裂变大师头像url */
    promotionAvatar?: string;
    /** 裂变大师id */
    promotionMasterId?: string;
    /** 裂变大师姓名 */
    promotionName?: string;
  };

  type GuideCouponSendRequest = {
    /** 活动优惠券ID */
    activityCouponId: number;
    /** appKey */
    appkey: string;
    /** 优惠券唯一标识 */
    authorizedCode: string;
    /** 优惠券Code */
    couponCode: string;
    draw?: number;
    /** 集团/品牌/公司 id */
    groupId: number;
    /** 导购优惠券ID */
    guideCouponId?: number;
    /** 导购ID */
    guideId: number;
    /** 分页大小，1 - 100 */
    length?: number;
    /** 商城id */
    mallId?: number;
    /** 平台唯一标识 */
    nick: string;
    /** 平台类型 */
    nickType: number;
    /** 排序方向，默认为升序 */
    orderDir?: string;
    /** 排序字段，是否支持排序视各个接口实际情况而定 */
    orderKey?: string;
    /** 店铺优惠券ID */
    shopCouponId?: number;
    /** 店铺ID */
    shopId: number;
    /** 签名 */
    sign: string;
    /** 分页起始条数（位置偏移量），从0开始 */
    start?: number;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
    /** 视角ID */
    viewId: number;
  };

  type GuideExecuteTransferIngDTO = {
    /** 失败数量 */
    failCount?: number;
    /** 导购名称 */
    guideName?: string[];
    /** 任务状态 */
    status?: number;
    /** 成功数量 */
    successCount?: number;
    /** 任务数量,任务数量大于1时候其他字段有值 */
    taskCount?: number;
    /** 任务数量 */
    total?: number;
    /** 转移任务类型 */
    transferType?: number;
    /** 转移中数量 */
    transferringCount?: number;
  };

  type GuideImportQuery = {
    manualInput?: ManualInput;
    redisKey?: string;
  };

  type GuideInfoDTO = {
    /** 导购id */
    id?: number;
    /** 职务: 0导购、1店长、2客服 */
    job?: number;
    /** 手机号 */
    mobile?: string;
    /** 导购名称 */
    name?: string;
    /** 店铺id */
    shopId?: number;
    /** 店铺名称 */
    shopName?: string;
    /** 前端组件所需唯一id，这里直接用导购id+店铺id */
    uuid?: string;
    /** 员工工号 */
    workId?: string;
  };

  type GuidePerfVo = {
    brandId?: number;
    date?: string;
    endDate?: string;
    friendWxnick?: string;
    guideId?: number;
    guideIds?: Record<string, any>[];
    name?: string;
    /** 查询负值 1是 0否（rewardType = 0 时有效） */
    negative?: number;
    /** 退款单号（negative = 1时有效） */
    outRefundId?: string;
    rewardType?: number;
    shopId?: number;
    shopIds?: string;
    shopName?: string;
    startDate?: string;
    tradeNo?: string;
    type?: number;
    workId?: string;
  };

  type GuideResourceDTO = {
    /** 添加好友来源渠道 */
    addFriendChannel?: string;
    areaAuthShopIds?: string;
    /** 区域Id */
    areaId?: number;
    areaUserIdList?: string[];
    /** 会员卡号 */
    cardId?: string;
    /** 群主userID */
    chatroomLeaderWxid?: string;
    /** 企业微信Id */
    corpId?: string;
    /** 会员名 */
    customerName?: string;
    /** 好友添加结束时间 */
    endAddTime?: string;
    /** 建群结束时间 */
    endBuildTime?: string;
    /** 好友昵称/备注名 */
    externalName?: string;
    /** 等级 */
    grade?: number;
    /** 公司Id */
    groupId?: number;
    /** 导购Id */
    guideId: number;
    /** 行数 */
    length: number;
    /** 备注手机号 */
    mobileNum?: string;
    /** 升序/倒序 */
    orderDir?: string;
    /** 根据哪个字段排序 */
    orderKey?: string;
    /** 群名称/群主 */
    ownerNameOrOwner?: string;
    /** 起始行 */
    pageStart?: number;
    /** 性别 */
    sexy?: string;
    /** 店铺Id */
    shopId: number;
    /** 起始页 */
    start: number;
    /** 好友添加开始时间 */
    startAddTime?: string;
    /** 建群开始时间 */
    startBuildTime?: string;
    /** 会员入会时间 */
    time?: string[];
    /** 类型 1：会员；2：好友，3：群 */
    type: number;
    /** 版本 v3 */
    version?: string;
    /** 视图Id */
    viewId?: number;
  };

  type GuideShopChangeRecordQuery = {
    /** 导购Id */
    guideId?: number;
    /** 店铺Id */
    shopId?: number;
  };

  type GuideTransferDetailDTO = {
    /** 返回的群转移明细数据 */
    transferChatRoomDetails?: BeanCommonResultTableResponseTransferChatRoomResultDTO;
    /** 返回的会员、会员+好友转移明细数据 */
    transferCustomerDetails?: BeanCommonResultTableResponseSgCustomerTransferTaskDetailVO;
    /** 返回的好友转移明细数据 */
    transferFriendDetails?: BeanCommonResultTableResponseTransferFriendsResultDTO;
  };

  type GuideTransferDetailParamsDTO = {
    /** 群名称 */
    chatRoomName?: string;
    /** 群转移状态 */
    chatRoomStatus?: number;
    /** 会员名称 */
    customerName?: string;
    /** 会员转移状态:'0未转移 1转移成功 -1 转移失败 2转移中 */
    customerStatus?: number;
    /** 好友昵称 */
    friendNick?: string;
    /** 公司Id */
    groupId?: number;
    /** 手机号 */
    mobile?: string;
    /** 操作人 */
    operatorName?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 好友转移状态 : 0未处理 1-接替完毕 2-等待接替 3-客户拒绝 4-接替成员客户达到上限 5-无接替记 */
    takeoverStatus?: number;
    /** 任务Id */
    taskId?: string;
    /** 转移结束时间 */
    transferEndTime?: string;
    /** 转移开始时间 */
    transferStartTime?: string;
    /** 转移类型 1转移门店，2转移会员，null 全部 */
    transferType?: number;
    /** 类型 1：会员；2：好友，3：群 */
    type: number;
  };

  type GuideTransferProgressDTO = {
    /** 员工姓名 */
    guideName?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 转移结束时间 */
    transferEndTime?: string;
    /** 转移方式 */
    transferRange?: number;
    /** 转移开始时间 */
    transferStartTime?: string;
    /** 视图Id */
    viewId: number;
  };

  type GuideTransferProgressIngDTO = {
    /** 批量的批次号 */
    taskIds?: number[];
  };

  type GuideUserDTO = {
    guideId?: number;
    userName?: string;
  };

  type GuideVo = {
    /** id */
    id?: number;
    /** 姓名 */
    name?: string;
    /** 企微userid */
    userId?: string;
  };

  type handleUsingGET3Params = {
    /** agentId */
    agentId: string;
    apiExtendParams?: string;
    changeType?: string;
    event?: string;
    fromUserName?: string;
    msgContent?: string;
    msgTime?: number;
    msgType?: string;
    reply?: string;
    toUserName?: string;
  };

  type handleUsingGET4Params = {
    /** agentId */
    agentId: string;
    apiExtendParams?: string;
    changeType?: string;
    event?: string;
    fromUserName?: string;
    msgContent?: string;
    msgTime?: number;
    msgType?: string;
    reply?: string;
    toUserName?: string;
  };

  type handleUsingPOST1Params = {
    /** agentId */
    agentId: string;
    apiExtendParams?: string;
    changeType?: string;
    event?: string;
    fromUserName?: string;
    msgContent?: string;
    msgTime?: number;
    msgType?: string;
    reply?: string;
    toUserName?: string;
  };

  type handleUsingPOSTParams = {
    /** agentId */
    agentId: string;
    apiExtendParams?: string;
    changeType?: string;
    event?: string;
    fromUserName?: string;
    msgContent?: string;
    msgTime?: number;
    msgType?: string;
    reply?: string;
    toUserName?: string;
  };

  type haopingfanxiandaoruwenjianhuoshoudonglurushangpin = {
    /** 文件fileKey */
    excelFileKey?: string;
    /** 手工输入值 */
    manualInput?: string;
    /** 店铺id */
    shopId?: number;
  };

  type haopingfanxiandiaozhengjinejiluxingxiangmu = {
    /** 修改账号 */
    account?: string;
    /** 修改时间 */
    auditTime?: string;
    /** 修改账号Id */
    changeEmployeeId?: number;
    /** id */
    id?: string;
    /** 原来的金额 */
    originMoney?: number;
    /** 平台名称 */
    plat?: string;
    /** 平台Id */
    platformId?: number;
    /** 平台昵称 */
    platformNick?: string;
    /** 备注 */
    remark?: string;
    /** 店铺Id */
    shopId?: number;
    /** 店铺名称 */
    shopName?: string;
    /** 订单号 */
    tradeId?: string;
    /** 修改后的金额 */
    updatedMoney?: number;
    /** 微信昵称 */
    wxNickname?: string;
  };

  type haopingfanxianhuodongcanyujilubiaoxiangqing = {
    /** 活动id */
    activityId?: number;
    /** 区域id */
    areaId?: number;
    /** 审核账号id */
    auditEmployeeId?: number;
    /** 审核结果(1审核通过,2审核不通过) */
    auditResult?: number;
    /** 审核状态(1未审核,2已审核) */
    auditStatus?: number;
    /** 审核时间 */
    auditTime?: string;
    /** 授权用户id,对应auth_user表id */
    authUserId?: number;
    /** 返现金额(单位:分) */
    cashbackMoney?: number;
    /** 企微id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 财务流水id */
    financeFlowId?: number;
    /** 公司ID */
    groupId?: number;
    /** 自增id */
    id?: number;
    /** 公众号的open id */
    openId?: string;
    /** 下单时间 */
    orderTime?: string;
    /** 参与时间 */
    participateTime?: string;
    /** 订单对应的平台id */
    platformId?: number;
    /** 订单对应的平台名称 */
    platformName?: string;
    /** 订单对应用户的平台昵称 */
    platformNick?: string;
    /** 领取结果(1待领取 2领取成功,3领取失败) */
    receiveResult?: number;
    /** 备注 */
    remark?: string;
    /** 卖家昵称 */
    sellerNick?: string;
    /** 订单对应的店铺id */
    shopId?: number;
    /** 订单对应的店铺名称 */
    shopName?: string;
    /** 订单号 */
    tradeId?: string;
    /** 订单实付金额(单位:分) */
    tradePayMoney?: number;
    /** 微信开放平台的union id */
    unionId?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 微信昵称 */
    wxNickname?: string;
  };

  type haopingfanxianhuodongfanxiancelvexiangqing = {
    /** 活动id */
    activityId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 固定金额（单位：分） */
    fixedMoney?: number;
    /** 公司ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 最低付款金额限制（单位：分） */
    minPayMoney?: number;
    /** 买N免M的N */
    nmBuyN?: number;
    /** 买N免M的M */
    nmGiveM?: number;
    /** 每人赠送数量上限 */
    nmGiveMaxNum?: number;
    /** 订单比例的最大返现金额（单位：分） */
    percentMaxMoney?: number;
    /** 订单比例(0-100) */
    percentNum?: number;
    /** 随机金额的最大值（单位：分） */
    randomMaxMoney?: number;
    /** 随机金额的最小值（单位：分） */
    randomMinMoney?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type haopingfanxianhuodongfanxianjietixiangqing = {
    /** 活动id */
    activityId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 固定金额大小 */
    fixMoney?: number;
    /** 公司ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 返现方式:1固定金额,2范围内随机金额 */
    method?: number;
    /** 随机金额最大值 */
    randomMaxMoney?: number;
    /** 随机金额最小值 */
    randomMinMoney?: number;
    /** 付款金额范围结束 */
    rangeEndPayMoney?: number;
    /** 付款金额范围开始 */
    rangeStartPayMoney?: number;
    /** 多个规则顺序号 */
    sequenceNum?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type haopingfanxianhuodongkuozhanbiaoxiangqing = {
    /** 活动id */
    activityId?: number;
    /** 活动介绍 */
    activityIntroduction?: string;
    /** 活动消息卡片文案 */
    cardCopywriting?: string;
    /** 活动消息卡片封面图片 */
    cardCoverPic?: string;
    /** 活动消息卡片标题 */
    cardTitle?: string;
    /** 创建时间 */
    createTime?: string;
    /** 商品信息,用json存储 */
    goodsInfo?: string;
    /** 公司ID */
    groupId?: number;
    /** 唯一索引 */
    id?: number;
    /** 页面配色和背景图片 */
    pageColor?: string;
    /** 好评返现活动页面装修配置,【商品设置】、【自定义图片】、【好评信息】支持自定义顺序 */
    pageDecoration?: string;
    /** 公众号海报url */
    posterUrl?: string;
    /** 二维码尺寸 */
    qrcodeSize?: number;
    /** 公众号二维码url */
    qrcodeUrl?: string;
    /** 二维码图片在海报的X轴位置 */
    qrcodeX?: number;
    /** 二维码图片在海报的Y轴位置 */
    qrcodeY?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 公众号欢迎语id */
    welcomeCodeId?: number;
  };

  type haopingfanxianhuodongwanzhengxiangqing = {
    /** 好评返现活动主配置 */
    activity?: haopingfanxianhuodongxiangqing;
    /** 好评返现活动返现阶梯配置 */
    cashbackLadder?: haopingfanxianhuodongfanxianjietixiangqing[];
    /** 好评返现活动返现配置(不包含阶梯) */
    cashbackPolicy?: haopingfanxianhuodongfanxiancelvexiangqing;
    /** 好评返现活动扩展配置 */
    ext?: haopingfanxianhuodongkuozhanbiaoxiangqing;
    /** 好评返现活动欢迎语配置 */
    welcomeCode?: weixinzhinenghuanyingyuxiangqing;
  };

  type haopingfanxianhuodongxiangqing = {
    /** 公众号id */
    appId?: string;
    /** 区域id */
    areaId?: number;
    /** 返现订单笔数,指当前活动最多返现的订单笔数，超过此数量将不再返现，0表示不限 */
    cashbackOrderNumLimit?: number;
    /** 返现策略:1固定金额,2订单比例,3随机金额,4阶梯返现,5买N免M */
    cashbackPolicy?: number;
    /** 企微id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 商品信息,用json存储 */
    goodsInfo?: string;
    /** 商品列表类型:1全部,2选中,3除去 */
    goodsType?: number;
    /** 公司ID */
    groupId?: number;
    /** 唯一索引 */
    id?: number;
    /** 绑定平台昵称是否开启(将根据输入的订单号与好友账号绑定,仅支持kd) */
    isBindingPlatform?: boolean;
    /** 活动链接url */
    linkUrl?: string;
    /** 名称 */
    name?: string;
    /** 订单确认收货时间结束(指此段时间确认收货单可参与此活动) */
    orderConfirmTimeEnd?: string;
    /** 订单确认收货时间开始(指此段时间确认收货单可参与此活动) */
    orderConfirmTimeStart?: string;
    /** 订单付款时间结束(指此段时间付款的订单可参与此活动) */
    orderPayTimeEnd?: string;
    /** 订单付款时间开始(指此段时间付款的订单可参与此活动) */
    orderPayTimeStart?: string;
    /** 可参与的订单状态: 1确认收货 */
    participateInOrderStatus?: number;
    /** 支付方式id */
    payMethodId?: number;
    /** 活动二维码url */
    qrcodeUrl?: string;
    /** 店铺信息,用json存储 */
    shopInfo?: string;
    /** 活动状态：1正常 2活动未开始  3活动结束 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 每人参与次数指每个用户最多参与次数，0表示不限 */
    userParticipateNumLimit?: number;
    /** 活动有效时间结束 */
    validTimeEnd?: string;
    /** 活动有效时间开始 */
    validTimeStart?: string;
    /** 有效时间类型 0永久有效，1固定范围 */
    validTimeType?: number;
  };

  type haopingfanxianlingquliebiao = {
    /** 授权用户id,对应auth_user表id */
    authUserId?: number;
    /** 集团id */
    groupId?: number;
    /** 付款金额（单位：分） */
    money?: number;
    /** 收款人昵称 */
    nick?: string;
    /** 收款人open id */
    openId?: string;
    /** 支付appid */
    payAppId?: string;
    /** 支付公众号名称 */
    payAppName?: string;
    /** 支付商户号id */
    payMchId?: string;
    /** 业务单号 */
    payNo?: string;
    /** 活动名称 */
    payReason?: string;
    /** 付款时间 */
    payTime?: string;
    /** 付款状态:1付款成功、2付款失败 */
    status?: number;
    /** 付款类型:1红包,2好评返现 */
    type?: number;
  };

  type haopingfanxianshenhejiluxingxiangmu = {
    /** 审核账号id */
    auditEmployeeId?: number;
    /** 审核账号名称 */
    auditEmployeeName?: string;
    /** 审核结果：1 审核通过 审核不通过； */
    auditResult?: number;
    /** 审核时间 */
    auditTime?: string;
    /** 返现金额，返回的金额是放大100倍后的整数，需要前端自行除100 */
    cashbackMoney?: number;
    /** 商户订单号 */
    financeFlowId?: string;
    /** 记录的id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 下单时间 */
    orderTime?: string;
    /** 提交时间 */
    participateTime?: string;
    /** 图片集合 */
    picUrlList?: string[];
    /** 平台名称 */
    plat?: string;
    /** 平台id */
    platformId?: number;
    /** 用户平台昵称 */
    platformNick?: string;
    /** 领取状态(1待领取 2领取成功,3领取失败) */
    receiveResult?: number;
    /** 备注 */
    remark?: string;
    /** 店铺id */
    shopId?: number;
    /** 店铺名称 */
    shopName?: string;
    /** 活动状态：1正常 0提前结束 2活动结束； */
    status?: number;
    /** 订单号 */
    tradeId?: string;
    /** 支付金额，返回的金额是放大100倍后的整数，需要前端自行除100 */
    tradePayMoney?: number;
    /** 微信昵称 */
    wxNickname?: string;
  };

  type haoshi = {
    /** 耗时（单位：秒） */
    cost?: number;
    /** 每秒消耗时间（单位：毫秒） */
    perPage?: number;
    /** 总记录数 */
    total?: number;
  };

  type haoyouhedianpubangdingxinxi = {
    /** 绑定标识,0为未绑定，1为绑定 */
    bindFlg?: number;
    /** 企微好友id */
    externalUserId?: string;
    /** 绑定记录id */
    id?: number;
    /** 用户标识 */
    ouid?: string;
    /** 卖家昵称 */
    sellerNick?: string;
    /** 店铺Guid */
    shopGuid?: string;
    /** 店铺id */
    shopId?: number;
    /** 店铺名称 */
    shopName?: string;
    /** 平台类型 1 : 淘宝店铺 ，3 京东 111 抖店  11 有赞 */
    shopPlatId?: number;
    /** 企微用户id */
    userId?: string;
  };

  type haoyouqushigailanshujufanhuivo = {
    /** 聊天好友数 */
    chatFriendCount?: number;
    /** 日期 */
    date?: string;
    /** 当前好友数 */
    friendCount?: number;
    /** 新增好友数 */
    newFriendCount?: number;
  };

  type hello2UsingGETParams = {
    /** type */
    type?: string;
  };

  type hello3UsingGETParams = {
    /** type */
    type?: string;
  };

  type helloUsingGETParams = {
    /** type */
    type?: string;
  };

  type hexinyaosufanhuiqianduanshiti = {
    /** 核心要素实体 */
    coreElementDTO?: hexinyaosushiti;
    /** 优惠券不足提醒 */
    couponNotEnoughWarn?: string;
    /** 策略ID */
    id?: number;
    /** 优惠券信息是否修改,若返回1，优惠券不允许修改 */
    isModifyCoupon?: number;
    /** 商品内容是否修改,若返回1，商品不允许修改 */
    isModifyGoods?: number;
  };

  type hexinyaosushiti = {
    /** 优惠券ID */
    chatroomCouponId?: number;
    /** 优惠券名称 */
    chatroomCouponName?: string;
    /** 优惠券库存 */
    chatroomCouponStock?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 带二维码的商品链接 */
    goodsUrl?: string;
    /** 群聚合码配置Id */
    invited2chatroomConfigId?: string;
    /** 入群Id */
    invited2chatroomId?: string;
    /** 群名称 */
    invited2chatroomName?: string;
    /** 群聚合码链接地址 */
    invited2chatroomUrl?: string;
    /** sop策略名称 */
    policyName?: string;
  };

  type hongbaocelveDTO = {
    /** 红包封面背景url */
    background?: string;
    /** 红包祝福语 */
    benediction?: string;
    /** 红包封面Id */
    coverId?: number;
    /** 创建者id */
    createId?: number;
    /** 创建者名称 */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 是否允许自定义 1：是  2：否 */
    customizeType?: number;
    /** 红包结束时间 */
    endTime?: string;
    /** 每人每日限制数量 */
    everyoneLimit?: number;
    /** 集团ID */
    groupId?: number;
    /** 主键、自增 */
    id?: number;
    /** 投放类型 1：员工发放  2：活动发放 */
    launchType?: number;
    /** 每人每日限制类型 1：有限 2：不限 */
    limitType?: number;
    /** 红包金额 */
    money?: number;
    /** 红包金额最大值 */
    moneyMax?: number;
    /** 红包金额最小值 */
    moneyMin?: number;
    /** 红包名称 */
    name?: string;
    /** 支付配置id */
    payConfigId?: number;
    /** 红包类型 1：普通红包  2：拼手气红包 3：自定义红包 */
    redpackType?: number;
    /** 剩余数量 */
    remainder?: number;
    /** 红包开始时间 */
    startTime?: string;
    /** 状态 */
    state?: number;
    /** 红包有效期类型 1：有限  2：无限 */
    timeType?: number;
    /** 红包总数 */
    total?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type hongbaocelvexiugaikaiqizhuangtaiDTO = {
    /** 集团id */
    groupId?: number;
    /** id */
    id?: number;
    /** 状态 1:启用  2：禁用 */
    state?: number;
  };

  type hongbaofengmianxiangqing = {
    /** 背景图 */
    background?: string;
    createTime?: string;
    /** 集团id */
    groupId?: number;
    id?: number;
    /** 是否默认封面 */
    isDefault?: boolean;
    /** 封面名称 */
    name?: string;
    /** 操作人id */
    operatorId?: number;
    /** 操作人姓名 */
    operatorName?: string;
    updateTime?: string;
  };

  type houtaibangdinghaoyouxinxiqingqiushiti = {
    /** 好友externalUserId */
    externalUserId?: string;
    /** 绑定记录id，如果已绑定则此处有值 */
    id?: number;
    /** 订单号码 */
    orderNum?: string;
    /** 卖家昵称 */
    sellerNick?: string;
    /** 店铺Guid */
    shopGuid?: string;
    /** 平台类型 1 : 淘宝店铺 ，3 京东 111 抖店  11 有赞 */
    shopPlatId?: number;
    /** 企微用户userId */
    userId?: string;
  };

  type hudongleidahuodongzhubiaoxiangqing = {
    /** 渠道集合对象 */
    channelList?: leidaqudaobiaoxiangqing[];
    /** 雷达点击人数 */
    clickPersonNum?: number;
    /** 企业微信corpId */
    corpId?: string;
    /** 创建人登录账号 */
    createAccount?: string;
    /** 创建人 */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 品牌ID */
    groupId?: number;
    id?: number;
    /** 是否开启授权 */
    isShowAuth?: boolean;
    /** 是否开启客户标签 */
    isShowTag?: boolean;
    /** 雷达图片地址 */
    linkImageAddress?: string;
    /** 雷达描述 */
    linkMessage?: string;
    /** 雷达标题 */
    linkTitle?: string;
    /** 雷达地址 */
    radarAddress?: string;
    /** 雷达code */
    radarCode?: string;
    /** 雷达名称 */
    radarName?: string;
    /** 分表key */
    subTableKey?: number;
    /** 标签集合对象 */
    tagList?: leidabiaoqianbiaoxiangqing[];
    /** 更新时间 */
    updateTime?: string;
  };

  type hudongleidayonghutongji = {
    /** 点击总次数 */
    clickTotalNum?: number;
    /** 性别 */
    gender?: string;
    /** 员工名称列表 */
    guideNameList?: string[];
    /** 最近点击渠道名称 */
    lastClickChannelName?: string;
    /** 最近点击时间 */
    lastClickDate?: string;
    /** 最近点击渠道code */
    lastClickRadarChannelCode?: string;
    /** 最近点击渠道名称链接code */
    lastClickRadarChannelLinkCode?: string;
    /** openId */
    openId?: string;
    /** radarCode */
    radarCode?: string;
    /** 授权类别 */
    type?: string;
    /** 好友头像地址 */
    userAvatar?: string;
    /** userId */
    userId?: string;
    /** 好友昵称 */
    userName?: string;
  };

  type hudongleidayonghuxiangqing = {
    /** 渠道code */
    channelCode?: string;
    /** 渠道链接code */
    channelLinkCode?: string;
    /** 渠道名称 */
    channelName?: string;
    /** 点击时间 */
    clickDate?: string;
  };

  type huihuatongjifanhuiduixiang = {
    /** 平均回复时长（单位分钟） */
    avgReplyTime?: string;
    /** 接待人数 */
    receptionTotal?: string;
    /** 已回复聊天占比 */
    replyPercentage?: string;
    /** 群发言统计 */
    roomSpeakTotal?: string;
    /** 敏感词发言次数 */
    sensitiveWordsTotal?: string;
    /** 企业微信成员 */
    userName?: string;
  };

  type huihuatongjishitiduixiang = {
    areaAuthGuideIds?: number[];
    areaAuthUserIds?: string[];
    corpId?: string;
    groupId?: number;
    /** length */
    length?: number;
    operationType?: number;
    /** offset偏移量 */
    start?: number;
    /** 查询时间 */
    time?: string;
    /** 企业微信成员 */
    userIds?: string[];
  };

  type huiyuanliebiaozujiansousuoshitileiDTO = {
    /** 区域id */
    areaId?: number;
    /** 导购状态 */
    guideStatus?: string;
    /** 名称 */
    name?: string;
    /** 门店状态 */
    shopStatus?: string;
  };

  type huiyuanxiangqingqiyepeizhibiaoDTO = {
    /** child集合 */
    childList?: Record<string, any>[];
    /** 字段编码 */
    code?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    /** 企业id */
    groupId?: number;
    /** 自增主键 */
    id?: number;
    /** 是否选中 */
    isSelected?: boolean;
    /** 字段值 */
    name?: string;
    /** 父级编码 */
    parentCode?: string;
    /** 字段排序 */
    sort?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: string;
    /** 字段名称 */
    value?: string;
  };

  type huoquhuiyuanxinxichaxuncanshu = {
    /** 跟进状态 */
    followType?: number;
    /** 导购id */
    guideId?: number;
    /** 查询日期 */
    queryDate?: string;
    /** 门店id */
    shopId?: number;
    /** 任务id */
    taskId?: number;
  };

  type IdDTO = {
    /** Id */
    id?: number;
  };

  type Image = {
    mediaid?: string;
    type?: string;
  };

  type ImageViewStatisticsRequest = {
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 被浏览量 */
    imageViews: ImageViewStatisticsVo[];
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type ImageViewStatisticsVo = {
    /** 执行时间 */
    executeTime: string;
    /** 内部导购Id */
    guideId?: number;
    /** 素材Id */
    materialId: number;
    /** 外部店铺ID;外部和内部店铺id必须传一个 */
    outShopId?: string;
    /** 平台形式：0-线下门店 99999-unionId */
    platform: number;
    /** 内部店铺ID */
    shopId?: number;
    /** 用户的unionId */
    unionId?: string;
    /** 访问唯一标识 */
    uniqueId: string;
    /** 用户标识 platform=0时为手机号 platform=99999时为unionId */
    userId: string;
    /** 外部导购Id;外部和内部导购id必须传一个 */
    workNumber?: string;
  };

  type ImproveMobileDTO = {
    /** 帐号列表id */
    id: number;
    /** 手机号 */
    mobile: string;
  };

  type InnerContent = {
    appid?: string;
    brandId?: number;
    configId?: string;
    custom?: number;
    desc?: string;
    guestCodeId?: number;
    guestCodeName?: string;
    image?: string;
    link?: string;
    path?: string;
    placard?: string;
    settingId?: string;
    title?: string;
    video?: string;
  };

  type isFriendActivateUsingGETParams = {
    /** 客户externalUserId */
    externalUserId: string;
    /** viewId */
    viewId: number;
  };

  type isSuccessUsingGETParams = {
    /** state */
    state?: number;
  };

  type jiamiduixiangDTO = {
    /** 解密数据 */
    decryptData?: string;
    /** 加密数据 */
    encryptData: string;
    /** 加密类型 */
    type: string;
  };

  type jieduanpeizhineirong = true;

  type jinduleixing = {
    /** 企业id */
    cropId?: string;
    /** 公司Id */
    groupId?: number;
    /** 类型 1 客户会话统计；  2 群会话统计 */
    type?: number;
  };

  type judgeFirstOpenUsingGET1Params = {
    /** viewId */
    viewId?: number;
  };

  type judgeFirstOpenUsingGET2Params = {
    /** viewId */
    viewId: number;
  };

  type juherenwuguanlianderenwushiti = {
    /** 聚合任务主键 */
    aggregationId?: number;
    /** 主键 */
    id?: number;
    /** 打标任务名称 */
    name?: string;
    /** 任务优先级 */
    sort?: number;
    /** 任务状态 */
    status?: number;
    /** 标签组 */
    tagNames?: string;
    /** 打标任务主键 */
    taskId?: number;
  };

  type KdPlatShopDTO = {
    /** 店铺列表 */
    kdShopDTOList?: KdShopDTO[];
    /** 平台id */
    platId?: number;
    /** 平台名称 */
    platName?: string;
  };

  type KdShopDTO = {
    companyId?: number;
    createTime?: string;
    /** 店铺id */
    id?: number;
    maxTradeModified?: string;
    remark?: string;
    sellerNick?: string;
    shopGuid?: string;
    /** 店铺名称 */
    shopName?: string;
    /** 平台id */
    shopPlatId?: number;
    /** 平台名称 */
    shopPlatName?: string;
    shopRealName?: string;
    shopType?: string;
    shopUnionId?: string;
    shopUrl?: string;
    /** SID_Str */
    sidString?: string;
    state?: number;
  };

  type kehufenzuduixiangVO = {
    /** 地址 */
    address?: string;
    /** 创建时间 */
    createTime?: string;
    /** 分组客户表主键id */
    customerId?: number;
    /** 用户名称 */
    customerName?: string;
    /** 数据日期 */
    date?: string;
    /** 加密地址 */
    encAddress?: string;
    /** 加密手机号 */
    encMobile?: string;
    /** 加密昵称 */
    encName?: string;
    /** 跟进时间 */
    followTime?: string;
    /** 导购名称 */
    guideName?: string;
    /** 数据hashcode,用于分表 */
    hashCode?: number;
    id?: number;
    /** 是否跟进 0：待跟进 1：跟进完成 2:联系中 */
    isFollow?: number;
    /** 用户手机号 */
    mobile?: string;
    /** 昵称 */
    name?: string;
    /** 电话联系次数 */
    phoneContactCount?: number;
    /** 专属导购id */
    sgExclusiveGuideId?: number;
    /** 专属门店id */
    sgExclusiveShopId?: number;
    /** 门店名称 */
    shopName?: string;
    /** 任务id */
    taskId?: number;
    /** 用户唯一标识 */
    unionId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 企微联系次数 */
    weworkContactCount?: number;
  };

  type kehuqunxiangqingbiaoxiangqing = {
    /** id */
    id?: number;
    /** 群名 */
    name?: string;
    /** 群主ID */
    owner?: string;
    /** 群主名称 */
    ownerName?: string;
    /** 群人数 */
    personNum?: number;
    /** 状态:0删除、1有效 */
    state?: number;
  };

  type kehuxiangxixinxidaogoushuju = {
    /** 添加时间 */
    addTime?: string;
    /** 来源 */
    addWay?: string;
    /** 描述 */
    description?: string;
    /** 企业标签 */
    groupTags?: string;
    /** 最后沟通时间 */
    lastChatTime?: string;
    /** 企微成员名称 */
    name?: string;
    /** 备注名 */
    remark?: string;
    /** 电话 */
    remarkMobile?: string;
    /** 工作门店 */
    shopName?: string;
    /** 工号 */
    workId?: string;
  };

  type kehuxiangxixinxifanhuiduixiang = {
    /** 头像url */
    avatar?: string;
    /** 公司名称 */
    corpName?: string;
    /** 性别 */
    gender?: number;
    /** 所在群名称列表 */
    groupNameList?: string[];
    /** 公司职位 */
    groupTags?: string;
    /** 好友名称 */
    name?: string;
    /** 公司职位 */
    position?: string;
    /** 微信/企微 */
    type?: number;
    /** 好友ID */
    userId?: string;
  };

  type kehuzhuanyirenwuchuangjianqingqiu = {
    /** 回购周期 */
    buyBackAllPeriod?: number;
    /** taskType = 1 场景下使用：客户选中类型 0选中 1取消选中 */
    checkType?: number;
    /** 接收门店&taskType = 1 场景下使用：选中客户列表 */
    customerList?: NickVo[];
    /** 会员的属性标签 */
    customerTagInfoList?: CustomerTagCondition[];
    /** 入会结束时间 */
    endInMemberTime?: string;
    /** 最近下单时间-end */
    endLastOrderTime?: string;
    /** 等级 */
    grade?: number;
    /** 操作人ID */
    operator: number;
    /** 操作人姓名 */
    operatorName: string;
    /** 排序请求参数 */
    orderCondition?: CustomerOrderCondition;
    /**  taskType = 2 场景下使用：待转出会员的导购ID集合 */
    outGuideIdList?: number[];
    /** 下单金额end */
    payAmountEnd?: number;
    /** 下单金额start */
    payAmountStart?: number;
    /** 如果全选的话，会员、好友、群的转移查询的参数 */
    queryParams?: string;
    /** 接收门店&导购信息 */
    receiveShopGuideList: ReceiveShopGuideDTO[];
    /** 好友关系 */
    relationship?: number;
    returnCount?: boolean;
    /** 是否查询门店运营视角下会员，默认false */
    searchBrand?: boolean;
    /** 姓名/手机号 */
    searchValue?: string;
    /** 专属导购 */
    sgExclusiveGuideIdList?: number[];
    /** 专属店铺 */
    sgExclusiveShopId?: number;
    /** 当前门店ID */
    shopId: number;
    /** 待转出的导购ID和店铺的集合 */
    shopIdAndGuideIdListOld?: ShopAndGuideDTO[];
    /** 入会开始时间 */
    startInMemberTime?: string;
    /** 最近下单时间-start */
    startLastOrderTime?: string;
    /** 任务类型 1选择会员进行转移 2选择导购进行转移 */
    taskType: number;
    /** 终端类型 0未知 1后台、2小程序 3后台资产转移 */
    terminalType: number;
    /** 转移范围 1仅会员 2会员+好友 4好友转移  5群转移   */
    transferRange?: number;
    /** 好友转移成功通知消息 */
    transferSuccessMsg?: string;
    /** 当前视角ID */
    viewId?: number;
  };

  type kehuzhuanyirenwugengxinqingqiu = {
    /** 操作人ID */
    operator?: number;
    /** 操作人姓名 */
    operatorName?: string;
    /** 门店ID */
    shopId?: number;
    /** 转移任务id */
    taskId?: number;
    /** 终端类型， 0未知 1后台、2小程序、 3后台资产手动转移、 4后台资产自动转移 */
    terminalType?: number;
  };

  type kehuzhuanyirenwuliebiaochaxunqingqiushiti = {
    /** 会员名称 */
    customerName?: string;
    /** 会员转移状态:'0未转移 1转移成功 -1 转移失败 2转移中 */
    customerStatus?: number;
    /** 好友昵称 */
    friendNick?: string;
    groupId?: number;
    guideId?: number;
    /** 手机号 */
    mobile?: string;
    /** 操作人 */
    operatorName?: string;
    /** 分页页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 数据偏移量 */
    pageStart?: number;
    /** 搜索内容类型：1会员 2好友 */
    searchType?: number;
    /** 搜索内容（会员姓名/手机号(1会员)或好友昵称2(好友)） */
    searchValue?: string;
    shopId?: number;
    /** 好友转移状态 : 0未处理 1-接替完毕 2-等待接替 3-客户拒绝 4-接替成员客户达到上限 5-无接替记 */
    takeoverStatus?: number;
    /** 任务Id */
    taskId?: string;
    /** 多个逗号分开操作终端类型 0未知 1后台、2小程序 3后台手动资产转移 4后台手动资产转移 */
    terminalTypes?: string;
    /** 转移结束时间 */
    transferEndTime?: string;
    /** 转移开始时间 */
    transferStartTime?: string;
    /** 转移类型 */
    transferType?: number;
  };

  type kepeizhideshaixuantiaojianxiangqing = {
    /** 编码 */
    code?: string;
    /** 主键 */
    id?: number;
    /** 名称 */
    name?: string;
    /** 顺序号 */
    priority?: number;
    /** 1.标签 2.分组 3.属性 4.事件 */
    type?: number;
  };

  type KeyWordPageQuery = {
    length: number;
    name?: string;
    sendType?: string;
    start: number;
    time?: string;
    topicId?: number;
  };

  type KeyWordRequest = {
    keyWords: string;
    topicId: number;
  };

  type KeyWordsTopicVo = {
    /** 关键词列表 */
    keyWordsVoList?: KeyWordsVo[];
    /** 话题id */
    topicId?: number;
    /** 话题名称 */
    topicName?: string;
  };

  type KeyWordsVo = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人id */
    creatorId?: number;
    /** 创建人 */
    creatorName?: string;
    /** 好友发送次数 */
    friendSendCount?: number;
    /** 最后发送时间 */
    lastSendTime?: string;
    /** 员工发送次数 */
    staffSendCount?: number;
    /** 关键词 */
    word?: string;
    /** 关键字id */
    wordId?: number;
  };

  type KeyWordTopicRequest = {
    keyWords?: string;
    topicName: string;
  };

  type kfListUsingGETParams = {
    /** 公众号id */
    offiaccountId: string;
  };

  type kuaijiehuashufenzubiaoxiangqing = {
    /** 品牌id */
    brandId?: number;
    /** 快捷话术内容 */
    content?: string;
    /** 企微企业id */
    corpId?: string;
    /** 导购id */
    guideId?: number;
    /** 添加人 */
    name?: string;
    /** 店铺Id */
    shopId?: number;
    /** 快捷话术组id */
    wordGroupId?: number;
  };

  type leidabiaoqianbiaoxiangqing = {
    /** 渠道链接code */
    channelLinkCode?: string;
    /** 企业微信corpId */
    corpId?: string;
    /** 创建人登录账号 */
    createAccount?: string;
    /** 创建人 */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 品牌ID */
    groupId?: number;
    /** 自增主键 */
    id?: number;
    /** 雷达code */
    radarCode?: string;
    /** 标签id */
    tagId?: string;
    /** 标签名称 */
    tagName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type leidaqudaobiaoxiangqing = {
    /** 渠道code */
    channelCode?: string;
    /** 渠道链接(短链) */
    channelLink?: string;
    /** 渠道链接code */
    channelLinkCode?: string;
    /** 渠道名称 */
    channelName?: string;
    /** 渠道状态 */
    channelStatus?: number;
    /** 渠道链接点击次数 */
    clickNum?: number;
    /** 渠道链接点击人数 */
    clickPersonNum?: number;
    /** 企业微信corpId */
    corpId?: string;
    /** 创建人登录账号 */
    createAccount?: string;
    /** 创建人 */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 品牌ID */
    groupId?: number;
    /** 自增主键 */
    id?: number;
    /** 授权链接 */
    oauthCodeUrl?: string;
    /** 渠道二维码地址 */
    qrCodeAddress?: string;
    /** 雷达code */
    radarCode?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 雷达有效期 */
    validityDate?: string;
    /** 短链状态：1 有效 0 无效 */
    validityStatus?: number;
  };

  type liebiandashiyaoqinghaoyouxiangqing = {
    /** 好友添加员工员工ID */
    addGuideId?: number;
    /** 好友添加员工员工昵称 */
    addGuideName?: string;
    /** 好友添加员工工号 */
    addGuideNumber?: string;
    /** 好友添加员工门店集合（按逗号间隔） */
    addGuideShopsStr?: string;
    /** 添加时间 */
    addTime?: string;
    /** 好友头像 */
    avatar?: string;
    /** 裂变大师头像 */
    fissionMasterAvatar?: string;
    /** 裂变大师昵称 */
    fissionMasterName?: string;
    /** 裂变大师所属员工员工ID */
    guideId?: number;
    /** 裂变大师所属员工员工昵称 */
    guideName?: string;
    /** 裂变大师所属员工员工号 */
    guideNumber?: string;
    /** 好友昵称 */
    name?: string;
    /** 裂变大师所属员工员工门店集合（按逗号间隔） */
    shopsStr?: string;
    /** 记录有效类型：1=有效数据(符合所有条件且首次添加);2=非首次添加;3=活动无效;4=导购已剔除出本活动;5=解除好友关系;6=统计时效内；7=统计时效内解除好友关系 */
    status?: number;
    /** 统计的有效间隔时间(统计时效)：0=立即生效；>0 =间隔该时间后生效 */
    validIntervalTimeOfStatistical?: number;
  };

  type liebiandashizidongdabiaoxinxiDTO = {
    /** 通过裂变大师活动加入的有效好友打标的标签数组tagId1,tagId2(英文逗号分割) */
    addValidFriendTags?: TagDTO[];
    /** 通成为裂变大师后自动打标的标签数组tagId1,tagId2(英文逗号分割) */
    beGuestCodeTags?: TagDTO[];
    /** 标签组数量 */
    count?: number;
    /** 活动结束后裂变达标但未领取奖励的标签数组tagId1,tagId2(英文逗号分割) */
    noReceiveRewardsTags?: TagDTO[];
    /** 活动结束后裂变未达标的标签数组tagId1,tagId2(英文逗号分割) */
    noStandardTags?: TagDTO[];
    /** 通过裂变活动领取奖励打标的标签数组tagId1,tagId2(英文逗号分割) */
    receiveRewardsTags?: TagDTO[];
    /** 活动结束后裂变达标的标签数组tagId1,tagId2(英文逗号分割) */
    standardTags?: TagDTO[];
  };

  type liebiaoshujuqunrilichuangjianbianjiduixiang = {
    /** 总数 */
    count?: number;
    /** 数据 */
    list?: qunrilichuangjianbianjiduixiang[];
  };

  type liechuyifenfadegongsiliebiaoqingqiuti = {
    /** 模板id */
    templateId?: number;
  };

  type Link = {
    desc?: string;
    imgUrl?: string;
    link?: string;
    title?: string;
    type?: string;
  };

  type listDetailExcelByIdUsingGETParams = {
    endTime?: string;
    guideId?: string;
    isDesc?: string;
    materialId?: string;
    orderType?: string;
    startTime?: string;
  };

  type listExcelForGuideUsingGETParams = {
    endTime?: string;
    groupId?: number;
    guideId?: string;
    isDesc?: string;
    orderType?: string;
    pageForm?: string;
    startTime?: string;
    systemFrom?: number;
  };

  type listExcelUsingGETParams = {
    endTime?: string;
    groupId?: number;
    guideId?: string;
    isDesc?: string;
    orderType?: string;
    pageForm?: string;
    startTime?: string;
    systemFrom?: number;
  };

  type listUsingGETParams = {
    /** 环境类别 */
    type: string;
  };

  type listUsingPOST12Params = {
    /** map */
    map: Record<string, any>;
  };

  type lisUsingPOSTParams = {
    /** 任务id */
    messageId: any;
  };

  type LocalTime = {
    hour?: number;
    minute?: number;
    nano?: number;
    second?: number;
  };

  type LoginCallBackUsingGETParams = {
    /** auth_code */
    auth_code: string;
  };

  type loginTestUsingDELETEParams = {
    /** groupId */
    groupId?: number;
    /** corpId */
    corpId?: string;
    /** areaId */
    areaId?: number;
    /** userId */
    userId?: number;
    /** account */
    account?: string;
    /** isMock */
    isMock?: number;
  };

  type loginTestUsingGETParams = {
    /** groupId */
    groupId?: number;
    /** corpId */
    corpId?: string;
    /** areaId */
    areaId?: number;
    /** userId */
    userId?: number;
    /** account */
    account?: string;
    /** isMock */
    isMock?: number;
  };

  type loginTestUsingPATCHParams = {
    /** groupId */
    groupId?: number;
    /** corpId */
    corpId?: string;
    /** areaId */
    areaId?: number;
    /** userId */
    userId?: number;
    /** account */
    account?: string;
    /** isMock */
    isMock?: number;
  };

  type loginTestUsingPOSTParams = {
    /** groupId */
    groupId?: number;
    /** corpId */
    corpId?: string;
    /** areaId */
    areaId?: number;
    /** userId */
    userId?: number;
    /** account */
    account?: string;
    /** isMock */
    isMock?: number;
  };

  type loginTestUsingPUTParams = {
    /** groupId */
    groupId?: number;
    /** corpId */
    corpId?: string;
    /** areaId */
    areaId?: number;
    /** userId */
    userId?: number;
    /** account */
    account?: string;
    /** isMock */
    isMock?: number;
  };

  type logoutUsingDELETEParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type logoutUsingGETParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type logoutUsingPATCHParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type logoutUsingPOSTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type logoutUsingPUTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
  };

  type LossGuideCapitalRecordDTO = {
    /** 企业微信本地Id */
    corpLocalId?: number;
    /** 会员数 */
    customerCount?: number;
    /** 事件名 */
    eventName?: string;
    /** 事件时间 */
    eventTime?: string;
    /** 好友数 */
    friendCount?: number;
    /** 集团ID */
    groupId?: number;
    /** 员工Id */
    guideId?: number;
    /** 员工名 */
    guideName?: string;
    /** 主键id */
    id?: number;
    /** 手机号 */
    mobile?: string;
    /** 群数 */
    roomCount?: number;
    /** 店铺Id */
    shopId?: number;
    /** 店铺名 */
    shopName?: string;
    /** 事件类型：删除:0    离职：2    更换门店:3    暂停门店:4   关闭门店:5 */
    type?: number;
  };

  type LossGuideCapitalRecordQuery = {
    /** 选中导购插件数据 */
    employeeSelect?: string;
    /** 事件的结束时间 */
    eventTimeEnd: string;
    /** 事件的开始时间 */
    eventTimeStart: string;
    /** 类型， 1导购事件类型 2店铺事件类型 */
    eventType: number;
    /** 员工名 */
    guideName?: string;
    /** 页数 */
    page: number;
    /** 每页页数 */
    pageSize: number;
    /** 是否全选，false:否;true:是 */
    selectAll?: boolean;
    /** 事件类型:删除:0    离职：2    更换门店:3    暂停门店:4   关闭门店:5  */
    type?: number;
    /** 视角Id */
    viewId: number;
  };

  type ManualInput = {
    searchValue?: string;
    type?: number;
  };

  type MarkSceneTreeNode = {
    /** 当前场景任务数量 */
    num?: number;
    /** 场景名称 */
    sceneName?: string;
    /** 1为开始，0为未开始,没有为全部 */
    taskStatus?: number;
  };

  type MaterialBatchMoveDTO = {
    itemList?: BatchItem[];
    parentId: number;
  };

  type MaterialBatchOpsDTO = {
    itemList?: BatchItem[];
  };

  type MaterialBatchSubdivisionSetDTO = {
    itemList?: BatchItem[];
    /** 标签ID */
    subdivisionId?: Record<string, any>;
    /** 标签IDs */
    subdivisionIds: Record<string, any>;
  };

  type MaterialByGuideInfoVo = {
    /** 推广文本 */
    content?: string;
    /** 坑位类型:1=普通素材 2=坑位素材 */
    materialScriptType: Record<string, any>;
    /** 剧本标题 */
    materialTitle?: string;
    /** 媒体资源url列表 */
    mediaList?: Record<string, any>;
    mtype?: number;
    /** 标签IDS 以英文逗号隔开 */
    subdivisionIds?: Record<string, any>;
  };

  type MaterialByScriptIdVo = {
    /** 补充时间 */
    completionTime?: string;
    /** 员工ID */
    guideId?: number;
    /** 员工名称 */
    guideName?: string;
    /** 店铺名称 */
    shopName?: string;
  };

  type MaterialCompletionScriptDetailByGuideQuery = {
    /** 公司Id */
    groupId?: Record<string, any>;
    /** 导购id */
    guideId: Record<string, any>;
    /** 当前剧本素材id  */
    materialScriptId: Record<string, any>;
  };

  type MaterialCompletionScriptDetailQuery = {
    /** 导购ids,以英文逗号隔开 */
    guideIdsStr?: Record<string, any>;
    /** 未完成/完成: 0=未完成 ,1=完成 ,默认为1 */
    isCompletion?: Record<string, any>;
    /** 当前剧本素材id  */
    materialScriptId: Record<string, any>;
    /** 店铺ids,以英文逗号隔开 */
    shopIdsStr?: Record<string, any>;
  };

  type MaterialSaveBaseDTO = {
    /** 企微ID */
    corpId?: string;
    /** 创建人 */
    creator?: string;
    /** 素材id，新增不传，更新必传  */
    id?: Record<string, any>;
    /** 是否是文件夹 0否 1是 */
    isDirectory: Record<string, any>;
    /** 文件夹下所有的素材数量 */
    materialNum?: number;
    /** 名称:最多输入150个字符  */
    name: Record<string, any>;
    /**  父级文件夹id */
    parentId: Record<string, any>;
    /** 所有文件夹路径:指定文件夹下创建素材或文件夹是此值不可为空 */
    parentPath?: Record<string, any>;
    /** 素材密码(当素材加密状态为1时, 该字段必填) */
    passwd?: string;
    /** 是否有修改密码的权限 */
    passwdPower?: boolean;
    /** 素材加密状态(0: 不加密, 1:加密) */
    passwdState?: Record<string, any>;
  };

  type MaterialSaveDTO = {
    /** 小程序码的指向模块 */
    codeModule?: Record<string, any>;
    /** 营销活动类型1：优惠券；2：多人拼团；3：满减送；4：秒杀；5：赠品； */
    codeTarget?: Record<string, any>;
    /** 小程序码对应的页面标识名称 */
    codeTargetName?: Record<string, any>;
    /**  带码状态：0不带码 1图中码 2单独码 */
    codeType: Record<string, any>;
    /** 推广文案 */
    content?: Record<string, any>;
    /** 企微ID */
    corpId?: string;
    /** 创建人 */
    creator?: string;
    /** 当前状态 1是有效 2是失效 */
    currentStatus: Record<string, any>;
    /** 下架时间 */
    endTime: Record<string, any>;
    /** 下架类型 1-永久有效；0-自定义 */
    endType: Record<string, any>;
    /** 员工id集合 */
    guideIdList?: number[];
    /** 素材id，新增不传，更新必传  */
    id?: Record<string, any>;
    /** 是否是文件夹 0否 1是 */
    isDirectory: Record<string, any>;
    /** 是否是编辑操作0=新建 1=编辑/更新  */
    isUpdate?: Record<string, any>;
    /** 小程序码对应的页面标识 */
    marketType?: Record<string, any>;
    /** 文件夹下所有的素材数量 */
    materialNum?: number;
    /** 坑位类型:1=普通素材 2=坑位素材 */
    materialScriptType: Record<string, any>;
    /** 媒体资源url列表 */
    mediaList: Record<string, any>;
    /** 名称:最多输入150个字符  */
    name: Record<string, any>;
    /** 通知状态: 0-不通知; 1-通知; */
    notifyState: Record<string, any>;
    /** 自定义通知时间 */
    notifyTime?: Record<string, any>;
    /** 通知类型: 0-不通知; 1-上架即通知; 2-自定义通知时间 */
    notifyType: Record<string, any>;
    /**  父级文件夹id */
    parentId: Record<string, any>;
    /** 所有文件夹路径:指定文件夹下创建素材或文件夹是此值不可为空 */
    parentPath?: Record<string, any>;
    /** 素材密码(当素材加密状态为1时, 该字段必填) */
    passwd?: string;
    /** 是否有修改密码的权限 */
    passwdPower?: boolean;
    /** 素材加密状态(0: 不加密, 1:加密) */
    passwdState?: Record<string, any>;
    /** 上架时间 */
    shelfTime: Record<string, any>;
    /** 上架类型1-立即上架；0-自定义 */
    shelfType: Record<string, any>;
    /** 标签IDS */
    subdivisionIds?: Record<string, any>;
    /** 标签IDS 以英文逗号隔开 */
    subdivisionIdsStr?: Record<string, any>;
  };

  type MaterialStatisticsByDateDetailVo = {
    /** 工号 */
    employeeNumber?: string;
    /** 动作类型:14 = 下载,16 = 发送,18 = 补充 */
    eventType?: number;
    /** 员工名 */
    guideName?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 所属门店 */
    shopName?: string;
  };

  type MaterialStatisticsByDateVo = {
    /** 当日补全总数 */
    nowCompletionSum?: string;
    /** 当日下载总数 */
    nowDownloadSum?: string;
    /** 当日发送总数 */
    nowSendSum?: string;
    /** 埋点日期 */
    trackTime?: string;
  };

  type MaterialStatisticsByExcelQuery = {
    /** 结束时间 精度最小到秒 */
    endTime?: string;
    /** 公司ID */
    groupId?: number;
    length?: number;
    start?: number;
    /** 起始时间 精度最小到秒 */
    startTime?: string;
  };

  type MaterialStatisticsByMaterialVo = {
    /** 当日补全总数 */
    completionSum?: string;
    /** 当日下载总数 */
    downloadSum?: string;
    /** 素材id */
    mateialId?: number;
    /** 素材类型 */
    materialScriptType?: number;
    /** 素材标题 */
    materialTitle?: string;
    /** 当日发送总数 */
    sendSum?: string;
  };

  type MaterialStatisticsByNoCompleteVo = {
    /** 未补充人次 */
    noCompleteCompletion?: string;
    /** 未下载人次 */
    noCompleteDownload?: string;
    /** 未发送人次 */
    noCompleteSend?: string;
  };

  type MaterialStatisticsChartVo = {
    /** 补全总数 */
    completionSum?: number;
    /** 当前转化金额总数 */
    conversionAmountSum?: number;
    /** 当前转化订单总数 */
    conversionOrderSum?: number;
    /** 日期 */
    date?: string;
    /** 下载总数 */
    downloadSum?: number;
    /** 发朋友圈总数 */
    friendsCircleSum?: number;
    /** 当前附码被浏览总数 */
    imagesViewedSum?: number;
    /** 昨日补全总数 */
    nowCompletionSum?: number;
    /** 昨天转化金额总数 */
    nowConversionAmountSum?: number;
    /** 昨天转化订单总数 */
    nowConversionOrderSum?: number;
    /** 昨日下载总数 */
    nowDownloadSum?: number;
    /** 昨日发朋友圈总数 */
    nowFriendsCircleSum?: number;
    /** 昨天附码被浏览总数 */
    nowImagesViewedSum?: number;
    /** 昨天附码图片发送总数 */
    nowSendCodePicturesSum?: number;
    /** 昨日发送总数 */
    nowSendSum?: number;
    /** 当前附码图片发送总数 */
    sendCodePicturesSum?: number;
    /** 发送总数 */
    sendSum?: number;
  };

  type MaterialStatisticsQuery = {
    /** 企微ID */
    corpId?: string;
    /** 结束时间 精度最小到秒 */
    endTime?: string;
    /** 动作类型 */
    eventType?: string;
    /** 导购IDS */
    guideIdsStr?: string;
    /** 活动总导购IDS */
    shopIdsStr?: string;
    /** 起始时间 精度最小到秒 */
    startTime?: string;
  };

  type MaterialSubdivisionGetDTO = {
    subdivisionName?: string;
    timeEnd?: string;
    timeStart?: string;
  };

  type MaterialSubdivisionSaveDTO = {
    corpId?: string;
    id?: number;
    name: string;
    sort?: number;
  };

  type meirimubiaozhuanhualv = {
    /** 当日转化率 */
    completeConversionRate?: number;
    /** 当日完成人次 */
    completeNum?: number;
    /** 日期 */
    date?: string;
    /** 当日触达人次 */
    reachNum?: number;
  };

  type meirishujubaobiao = {
    /** 结束时间，yyyy-MM-dd格式 */
    endDate?: string;
    /** 策略的id */
    policyId?: number;
    /** 开始时间，yyyy-MM-dd格式 */
    startDate?: string;
    /** 视角id */
    viewId?: number;
  };

  type mendianjianyaoxinxi = {
    /** 店铺ID */
    shopId?: number;
    /** 名称 */
    shopName?: string;
    /** 店铺状态线上店铺状态：,(0：删除，-1：锁定，-2:过期，1：正常)线下店铺状态：（0：删除，-1：暂停，-2：已关店，1：正常营业） */
    shopStatus?: number;
    /** 店铺类型（B：天猫、C：淘宝店、ZYD：直营店，JMD：加盟）;  */
    shopType?: string;
  };

  type mendiankehushuliangxinxiVo = {
    /** 地址 */
    address?: string[];
    /** 完成度 */
    completion?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 创建者 */
    creator?: yuangongxinxi;
    /** 跟进完成数量 */
    customerFollowNum?: string;
    /** 跟进中数量 */
    customerFollowingNum?: string;
    /** 未跟进数量 */
    customerNoFollowNum?: string;
    /** 客户总数 */
    customerTotal?: string;
    /** 发送错误次数，超过3次不再重试 */
    errorCount?: number;
    /** 错误信息 */
    errorMsg?: string;
    /** 上次发送错误时间 */
    errorTime?: string;
    /** 完成导购执行任务数 */
    finishedTaskRun?: number;
    /** 集团id */
    groupId?: number;
    /** 总导购执行任务数 */
    guideCount?: number;
    /** 指派导购列表 */
    guideList?: daogoujianyaoxinxi[];
    /** 指派的导购总数（保存最大值） */
    guideTotal?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 任务名称 */
    name?: string;
    /** 父任务ID */
    parentTaskId?: number;
    /** 主任务信息 */
    parentTaskInfo?: daogourenwubiaoxiangqing;
    /** 父任务执行类型 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店 */
    shop?: mendianjianyaoxinxi;
    /** 门店id */
    shopId?: number;
    /** 门店名称 */
    shopName?: string;
    /** 门店状态 */
    shopStatus?: number;
    /** 门店类型 */
    shopType?: string;
    /** 执行状态 0：未执行 1：执行中 2：执行成功 3：执行失败 */
    state?: number;
    /** 指派导购id，为0时代表门店下所有导购 */
    targetIds?: string;
    /** 任务总数（单次任务为指派总数，每日任务则为任务天数*指派总数） */
    taskNum?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type mendianrenwukuozhanduixiangVO = {
    /** 指派的导购总数（保存最大值） */
    allNum?: number;
    /** 创建门店名称 */
    createShopName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 创建者名称 */
    createUserName?: string;
    /** 创建者 */
    creator?: yuangongxinxi;
    /** 执行截止时间 */
    endTime?: string;
    /** 发送错误次数，超过3次不再重试 */
    errorCount?: number;
    /** 错误信息 */
    errorMsg?: string;
    /** 上次发送错误时间 */
    errorTime?: string;
    /** 完成导购执行任务数 */
    finishedTaskRun?: number;
    /** 集团id */
    groupId?: number;
    /** 总导购执行任务数 */
    guideCount?: number;
    /** 指派导购列表 */
    guideList?: daogoujianyaoxinxi[];
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材内容 */
    materialContent?: string;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 任务名称 */
    name?: string;
    /** 父任务ID */
    parentTaskId?: number;
    /** 主任务信息 */
    parentTaskInfo?: daogourenwubiaoxiangqing;
    /** 父任务执行类型 */
    runType?: number;
    /** 导购是否重名 */
    sameFlag?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店 */
    shop?: mendianjianyaoxinxi;
    /** 门店id */
    shopId?: number;
    /** 执行起始时间 */
    startTime?: string;
    /** 执行状态 0：未执行 1：执行中 2：执行成功 3：执行失败 */
    state?: number;
    /** 指派导购id，为0时代表门店下所有导购 */
    targetIds?: string;
    /** 任务总数（单次任务为指派总数，每日任务则为任务天数*指派总数） */
    taskNum?: number;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type MessageIdDTO = {
    /** 群发消息id */
    messageId?: number;
  };

  type MessageIdVo = {
    messageId?: number;
  };

  type MessageQuery = {
    /** 创建时间结束 */
    createTimeEnd?: string;
    /** 创建时间开始 */
    createTimeStart?: string;
    /** 创建员工id */
    employeeId?: number;
    /** 创建员工登录名 */
    employeeLoginName?: string;
    /** 名称 */
    name?: string;
    /** 实际发送时间结束 */
    sendTimeEnd?: string;
    /** 实际发送时间开始 */
    sendTimeStart?: string;
    /** 总状态（1: 未提交; 2: 待审核; 3: 审核失败; 4: 待执行; 5: 执行中; 6: 已执行; 7: 已终止; 8: 执行失败） */
    status?: number;
    /** 总状态集合（1: 未提交; 2: 待审核; 3: 审核失败; 4: 待执行; 5: 执行中; 6: 已执行; 7: 已终止; 8: 执行失败） */
    statusSet?: number[];
  };

  type MiniPro = {
    appPath?: string;
    appid?: string;
    code?: string;
    pic?: string;
    title?: string;
  };

  type Miniprogram = {
    appid?: string;
    imgUrl?: string;
    page?: string;
    title?: string;
    type?: string;
  };

  type mobanfenfaqingqiuti = {
    /** 1.指定分发;2全部分发 */
    distributeType?: number;
    /** 当distributeType=1时,须指定集团id列表 */
    groupIdList?: number[];
    /** 模板id */
    templateId?: number;
  };

  type mobanliebiao = {
    /** 附件,存放效果预览的图片 */
    attachment?: string;
    /** 画布id */
    canvasId?: number;
    /** 模板描述 */
    description?: string;
    /** 分发商家数 */
    distributionCount?: number;
    /** 模板名称 */
    templateName?: string;
    /** 1:付费转化,2:新增好友,3:新增会员 */
    templateType?: number;
    /** 缩略图 */
    thumbnail?: string;
  };

  type mobanxiajiaqingqiuti = {
    /** 模板id */
    templateId?: number;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type MomentListDTO = {
    /** 内容 */
    content?: string;
    corpId?: string;
    creators?: string;
    endTime: string;
    /** 筛选的员工 */
    guideIdList?: number[];
    guideIds?: string;
    length: number;
    start: number;
    startTime: string;
    /** 发布类型 */
    type?: number;
    /** 可见范围类型。0：部分可见 1：公开 */
    visibleType?: number;
  };

  type MpComponentTokenVo = {
    /** 有效期，单位：秒 */
    expiresIn?: number;
    /** 微信第三方平台token（aes加密值） */
    token?: string;
  };

  type MpTagDTO = {
    /** 此标签下粉丝数 */
    count?: number;
    /** 标签id */
    id?: number;
    /** 标签名称 */
    name?: string;
  };

  type NickVo = {
    customerFrom?: number;
    nick?: string;
    nickType?: number;
    platform?: number;
    sgExclusiveGuideId?: number;
    sgExclusiveShopId?: number;
  };

  type NoticeMessageduixiang = {
    attrsMap?: Record<string, any>;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: string;
    dataSource?: string;
    /** 集团id */
    groupId?: number;
    /** 自增主键 */
    id?: number;
    /** 是否删除 0：否 1：是 */
    isDelete?: string;
    /** 是否通知 1-是 0-否 */
    isNotice?: string;
    modifyAttrs?: string[];
    /** 通知日期 1-7(每周通知的周几)/1-31(每月通知的几号)/ 0-每天通知 */
    noticeDate?: string;
    /** 通知消息类别 11- 销售榜 12-招募榜 13-加好友榜 21-其他的榜单 22-。。23...   存入的数据格式为逗号分割 例如:(11,12,13) */
    noticeMessageType?: string;
    /** 通知对象 11-店长 12-导购 21 -xxx 22... */
    noticeObj?: string;
    /** 通知时间 10:30:00 */
    noticeTime?: string;
    /** 通知时间类别 -每天 每周 每月 1-每天 2-每周 3-每月 */
    noticeTimeType?: string;
    /** 通知类别 如(1-门店导购排行榜 2-其他 等等) */
    noticeType?: string;
    state?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: string;
  };

  type openCardCallbackUsingGETParams = {
    /** appId */
    appId: string;
    /** card_id */
    card_id: string;
    /** encrypt_code */
    encrypt_code: string;
    /** openid */
    openid?: string;
    /** activate_ticket */
    activate_ticket: string;
    /** outer_str */
    outer_str?: string;
    /** from_wechat */
    from_wechat?: number;
  };

  type OpenCouponInfo = {
    afterGetValidDays?: number;
    appletsConfig?: string;
    channelConfigType?: number;
    channelFreezeAmount?: number;
    channelHadIssueAmount?: number;
    channelType?: number;
    couponFreezeAmount?: number;
    createTime?: string;
    dateValidType?: number;
    endTime?: string;
    exclusiveShopUse?: number;
    extConditionJson?: string;
    giftJson?: string;
    groupId?: number;
    hadIssueAmount?: number;
    id?: number;
    invalidDate?: string;
    isPermitGiven?: number;
    isThirdImport?: number;
    isValid?: number;
    limitAmount?: number;
    loginAccount?: string;
    maxIssueAmount?: number;
    maxIssueCount?: number;
    overlayConfigJson?: string;
    rangeType?: number;
    remark?: string;
    shopIdList?: number[];
    startTime?: string;
    statusUpdateTime?: string;
    storeCouponCode?: string;
    storeCouponLimitValue?: number;
    storeCouponPrice?: number;
    storeCouponResource?: number;
    storeCouponState?: number;
    storeCouponStatus?: number;
    storeCouponTitle?: string;
    storeCouponType?: number;
    storeCouponUseType?: number;
    storeCouponValue?: number;
    tradeCountValid?: number;
    updateTime?: string;
    useConditionJson?: string;
    useRange?: string;
    useRangeResult?: UseRangeResult;
    useRemark?: string;
    validDays?: number;
    validTime?: string;
  };

  type OSSDownloadSearchDTO = {
    id?: number;
  };

  type OverviewFindVo = {
    monthDate?: string;
    /** 分页页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 数据偏移量 */
    pageStart?: number;
    shopId?: number;
    type?: number;
  };

  type PageResultDTOhudongleidahuodongzhubiaoxiangqing = {
    /** 返回数据 */
    data?: hudongleidahuodongzhubiaoxiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOhudongleidayonghutongji = {
    /** 返回数据 */
    data?: hudongleidayonghutongji[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOhudongleidayonghuxiangqing = {
    /** 返回数据 */
    data?: hudongleidayonghuxiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOleidaqudaobiaoxiangqing = {
    /** 返回数据 */
    data?: leidaqudaobiaoxiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOrpazhanghaoxiangqing = {
    /** 返回数据 */
    data?: rpazhanghaoxiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOshenhelishijilubiaoxiangqing = {
    /** 返回数据 */
    data?: shenhelishijilubiaoxiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOshouyegailantuijiangongnengxiangqing = {
    /** 返回数据 */
    data?: shouyegailantuijiangongnengxiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOshouyegailanzuijinxiaoxixiangqing = {
    /** 返回数据 */
    data?: shouyegailanzuijinxiaoxixiangqing[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type PageResultDTOTaskProgressDTO = {
    /** 返回数据 */
    data?: TaskProgressDTO[];
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总记录数（-1则代表不查询总记录数） */
    total?: number;
  };

  type ParameterDTO = {
    classInfo?: ClassInfo;
    example?: string;
    name?: string;
    type?: string;
  };

  type PaymentDTO = {
    /** 时间点 */
    date?: string;
    /** 每日付费累计金额 */
    payment?: number;
    /** 策略id */
    policyId?: number;
  };

  type PCduangenjinjiluchaxuncanshu = {
    /** 导购id */
    guideId: number;
    /** 查询日期 */
    queryDate?: string;
    /** 门店id */
    shopId: number;
    /** 分组客户详情表id */
    subgroupCustomerId: number;
    /** 任务id */
    taskId: number;
  };

  type PersonalQrcodeEffectDto = {
    /** 创建时间 */
    createTime?: string;
    /** 参与员工总数 */
    employeeCount?: number;
    /** 员工手机号 */
    employeeMobile?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 公司ID */
    groupId?: number;
    /** 活动唯一标识 UUID */
    guid?: string;
    /** 导购id */
    guideId?: number;
    /** 添加好友总数 */
    inviteFriendCount?: number;
    /** 员工所在线下门店集合 */
    offlineShops?: string[];
    /** 更新时间 */
    updateTime?: string;
  };

  type PersonalQrcodeInviterFriendDto = {
    /** 创建时间 */
    createTime?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工工号 */
    employeeNumber?: string;
    /** 外部联系人userId */
    externalUserId?: string;
    /** 好友头像地址 */
    friendAvatar?: string;
    /** 好友昵称 */
    friendName?: string;
    /** 外部联系人企微标签 */
    groupTags?: string;
    /** 导购id */
    guideId?: number;
    /** 企微成员userId */
    userId?: string;
    /** v3前端需要唯一id 这里新增一个uuid */
    uuid?: string;
  };

  type PersonWeChatVo = {
    /** 导购ID */
    guideId: number;
    /** 头像 */
    headimg: string;
    /** 导购姓名 */
    name: string;
    /** 在线状态(1:离线  2：在线) */
    online: number;
    /** 微信二维码 */
    qrCode?: string;
    /** 个人号对应云控服务ip */
    serverIp: string;
    /** 门店ID */
    storeId: number;
    /** 企业微信userId */
    userId: string;
    /** 企业微信员工名称 */
    userName: string;
    /** 微信号 */
    wxAccount: string;
    /** 微信Id */
    wxId: string;
    /** 微信昵称 */
    wxNick: string;
  };

  type PersonWxMsgRequest = {
    /** appKey */
    appkey: string;
    /** 公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 公司ID */
    personWeChatVos: PersonWeChatVo[];
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type PersonWxMsgResponse = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Record<string, any>;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
  };

  type PicText = {
    code?: string;
    desc?: string;
    pic?: string;
    title?: string;
    url?: string;
  };

  type piliangshenhejiekoucanshu = {
    /** 审核记录id */
    ids?: number[];
    /** 是否审核通过 */
    passOrNot?: boolean;
    /** 备注 */
    remark?: string;
  };

  type PlatCustomerVo = {
    /** 微信id */
    corpID?: string;
    customerFollowVoList?: CustomerFollowVo[];
    /** 客户名称/别名 */
    customerName?: string;
    /** 外部联系人ID */
    externalUserId?: string;
    /** 性别 0-未知 1-男性 2-女性 */
    gender?: number;
    /** 京东pin */
    jdPin?: string;
    /** 淘宝昵称 */
    taoBaoNick?: string;
    /** 微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来 */
    unionId?: string;
  };

  type PlatDTO = {
    platId?: number;
    platName?: string;
    platType?: number;
  };

  type PolicyAdviseDTO = {
    /** 建议内容 */
    content?: string;
    /** 是否增加 */
    isUp?: boolean;
    /** 所属阶段 */
    phase?: number;
    /** 策略id */
    policyId?: number;
  };

  type PolicyDetailDTO = {
    /** 商品优惠 */
    chatroomCouponName?: string;
    /** 转换商品名称 */
    goodsName?: string;
    /** 群名称 */
    invited2chatroomName?: string;
    /** 阶段对应数据 */
    policySectionDataDTOList?: dangesopcelveshuju[];
  };

  type PosterModel = {
    configId?: string;
    modelInfo?: PosterModelInfo;
  };

  type PosterModelInfo = {
    appId?: string;
    appletPage?: string;
    background?: string;
    createTime?: string;
    id?: string;
    loginAccount?: string;
    placard?: string;
    qrcodeSize?: number;
    qrcodeX?: number;
    qrcodeY?: number;
    sceneStr?: string;
    title?: string;
    type?: number;
  };

  type PresetParam = {
    paramCode?: string;
    paramName?: string;
    status?: number;
  };

  type PromotionFriendsDTO = {
    /** 添加好友时间 */
    addFriendsDate?: string;
    /** 好友头像url */
    friendAvatar?: string;
    /** 好友姓名 */
    friendName?: string;
  };

  type qingqiuguanlianrenwuguanliandezhinengdabiaorenwu = {
    /** 关联任务id */
    id?: number;
  };

  type qiweibiaoqianshitiduixiang = {
    /** 排序 */
    order?: number;
    /** 逻辑状态 0删除 1正常 */
    state?: number;
    /** 标签组ID */
    tagGroupId?: string;
    /** 标签组名称 */
    tagGroupName?: string;
    /** 标签值列表 */
    tagValueList?: SgWeWorkTagDTO[];
  };

  type qiweichengyuanxiaoshouyejitongjixiangyingti = {
    /** 客均单价 */
    avgCustomerPrice?: number;
    /** 客户购买数 */
    buyCustomerCount?: number;
    /** 购买率 */
    buyCustomerTax?: string;
    dismissFlag?: number;
    dismissTime?: string;
    num?: number;
    /** 下单总数 */
    orderCountAll?: number;
    /** 下单价格 */
    orderPriceAll?: number;
    /** 付款总数 */
    payCountAll?: number;
    /** 付款价格 */
    payPriceAll?: number;
    /** 退款总数 */
    refundCountAll?: number;
    /** 退款金额 */
    refundPriceAll?: number;
    /** 店铺门店 */
    shopName?: string[];
    /** 用户id */
    userID?: string;
    /** 用户名称 */
    userName?: string;
  };

  type qiweichengyuanxinxi = {
    /** 成员头像 */
    avatar?: string;
    /** 企业ID */
    corpId?: string;
    /** 成员名称 */
    name?: string;
    /** 成员二维码 */
    qrCodeUrl?: string;
    /** 成员状态 */
    status?: number;
    /** 成员ID */
    userId?: string;
  };

  type qiweiqunhuochengyuanliebiaoxiaoshouyejitongji = {
    /** 客户群ID */
    chatId?: string;
    /** 企业微信ID */
    corpId?: string;
    /** 下单时间结束 */
    createdEnd?: string;
    /** 下单时间开始 */
    createdStart?: string;
    /** 集团ID */
    groupId?: number;
    /** 导购ID列表,以,分隔 */
    guideIdList?: string;
    /** 平台类型：【0线下、门店】【1淘宝】【2拍拍】【3京东】【4淘宝分销】【5当当】【6苏宁】【7亚马逊】【8聚美】【9易迅】【10凡客】【11口袋通(有赞)】【12一号店】【13国美】【14微购物】【15美丽说】【16阿里巴巴】【17爱贝购】【18贝贝网】【19微信（e互动）】【20微盟】【21蘑菇街】【31饿了么】【32美团】【33百度外卖】【34微商】【35支付宝生活号（e互动）】【51微博】【61第三方数据中台】【101客户官网】【102工行融易购】【200商家平台】【301最伙商城】【302最伙导购】，此备注来源云平台，以云平台解释为准 */
    platform?: number;
    /** 店铺来源 */
    shopId?: number;
    /** 员工ID列表,以,分隔 */
    userIdList?: string;
  };

  type qiweiqunliaoxiaoshouyejitongjixiangyingti = {
    /** 客均单价 */
    avgCustomerPrice?: number;
    /** 客户购买数 */
    buyCustomerCount?: number;
    /** 购买率 */
    buyCustomerTax?: string;
    /** 群id */
    chatID?: string;
    /** 群名称 */
    chatName?: string;
    dismissFlag?: number;
    dismissTime?: string;
    num?: number;
    /** 下单总数 */
    orderCountAll?: number;
    /** 下单价格 */
    orderPriceAll?: number;
    /** 群主 */
    owner?: string;
    /** 群主名称 */
    ownerName?: string;
    /** 付款总数 */
    payCountAll?: number;
    /** 付款价格 */
    payPriceAll?: number;
    personNum?: number;
    /** 退款总数 */
    refundCountAll?: number;
    /** 退款金额 */
    refundPriceAll?: number;
    /** 群主门店 */
    shopName?: string[];
  };

  type qiweiwaibulianxirenjichuxinxibiaotongyiqiweizhanghaoxiawaibulianxirenjichubiaouserIdweiyixiangqing =
    {
      /** 外部联系人头像，第三方不可获取 */
      avatar?: string;
      /** 外部联系人所在企业的主体名称 */
      corpFullName?: string;
      /** 外部联系人所在企业的简称 */
      corpName?: string;
      /** 外部联系人的名称; 具体解释看微信获取客户详情 */
      name?: string;
      /** 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户 */
      type?: number;
      /** 外部联系人的userid;群成员userid */
      userId?: string;
    };

  type qiweixiangqingliebiaoxiaoshouyejitongji = {
    /** 客户群ID */
    chatId?: string;
    /** 企业微信ID */
    corpId?: string;
    /** 下单时间结束 */
    createdEnd?: string;
    /** 下单时间开始 */
    createdStart?: string;
    /** 微信或平台昵称 */
    customerNameOrPlatNick?: string;
    /** 导出文件前缀 */
    filePre?: string;
    /** 集团ID */
    groupId?: number;
    /** 导购ID列表,以,分隔 */
    guideIdList?: string;
    /** 平台类型：【0线下、门店】【1淘宝】【2拍拍】【3京东】【4淘宝分销】【5当当】【6苏宁】【7亚马逊】【8聚美】【9易迅】【10凡客】【11口袋通(有赞)】【12一号店】【13国美】【14微购物】【15美丽说】【16阿里巴巴】【17爱贝购】【18贝贝网】【19微信（e互动）】【20微盟】【21蘑菇街】【31饿了么】【32美团】【33百度外卖】【34微商】【35支付宝生活号（e互动）】【51微博】【61第三方数据中台】【101客户官网】【102工行融易购】【200商家平台】【301最伙商城】【302最伙导购】，此备注来源云平台，以云平台解释为准 */
    platform?: number;
    /** 店铺来源 */
    shopId?: number;
    /** union id */
    unionId?: string;
    /** 员工ID列表,以,分隔 */
    userIdList?: string;
    /** 企业标签 */
    workTag?: string;
  };

  type qiweixiaoshouyejixiangqingtongjixiangyingti = {
    /** 微信头像 */
    avatar?: string;
    /** 微信昵称 */
    customerName?: string;
    customerTag?: string;
    externalUserID?: string;
    /** 外部联系人性别 0-未知 1-男性 2-女性 */
    gender?: number;
    /** 商品数量 */
    num?: number;
    /** 下单笔数 */
    orderCount?: number;
    /** 下单价格 */
    orderPrice?: number;
    /** 付款笔数 */
    payCount?: number;
    /** 付款价格 */
    payPrice?: number;
    /** 平台昵称 */
    platNick?: string;
    /** 订单平台类型：【0线下、门店】【1淘宝】【2拍拍】【3京东】【4淘宝分销】【5当当】【6苏宁】【7亚马逊】【8聚美】【9易迅】【10凡客】【11口袋通(有赞)】【12一号店】【13国美】【14微购物】【15美丽说】【16阿里巴巴】【17爱贝购】【18贝贝网】【19微信（e互动）】【20微盟】【21蘑菇街】【31饿了么】【32美团】【33百度外卖】【34微商】【35支付宝生活号（e互动）】【51微博】【61第三方数据中台】【101客户官网】【102工行融易购】【200商家平台】【301最伙商城】【302最伙导购】，此备注来源云平台，以云平台解释为准 */
    platform?: number;
    /** 退款笔数 */
    refundCount?: number;
    /** 退款金额 */
    refundPrice?: number;
    /** 来源店铺 */
    shopName?: string;
    shopPlatID?: string;
    tradeModifiedTime?: string;
    /** 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户 */
    type?: number;
    /** 企微union_id */
    unionId?: string;
    /** 企业标签 */
    workTag?: string;
  };

  type qiweixiaoxifujian = {
    /** 小程序appid */
    appid?: string;
    /** 描述 */
    description?: string;
    /** 素材id，企微素材管理接口返回 */
    mediaId?: string;
    /** 小程序page路径 */
    page?: string;
    /** 图片链接 */
    picUrl?: string;
    /** 二维码海报配置id（仅type=5时有效） */
    qrcodePlacardConfigId?: number;
    /** 远程文件（根据附件类型不同，可能是图片、视频、小程序封面图的OSS地址） */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型（1: 图片; 2: 视频; 3: 连接; 4: 小程序; 5: 二维码海报） */
    type: number;
    /** 跳转链接 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型（1:自定义链接; 2: 系统预置链接） */
    urlType?: number;
  };

  type qiweixinxi = {
    /** 应用ID */
    agentID?: string;
    /** 公司ID */
    companyID?: number;
    /** 企业ID */
    corpID?: string;
    /** 企微名称 */
    corpName?: string;
    /** 企微成员信息 */
    wxUserList?: qiweichengyuanxinxi[];
  };

  type qiyeweixinbiaoqianxiangqing = {
    /** 主键ID */
    id?: number;
    /** 标签/标签组ID */
    tagId?: string;
    /** 标签/标签组名称 */
    tagName?: string;
    /** 标签包含好友数量（因为员工筛选的缘故，这个值可能低于总人数） */
    userCount?: number;
  };

  type qiyongshezhimokuaileixingshiti = {
    /** 设置类型 0:设置指标 1:修改信息 2:重置密码 3:更换手机 4:工作统计 5:离职 6.导购修改密码 7.导购离职 8.新增素材 */
    rewardType?: number;
    /** 启用状态 0关闭 1开启 */
    status?: number;
  };

  type qiyongyejileixingshiti = {
    /** 业绩类型 0: 销售提成 1: 招募会员奖励  2: 加好友奖励 */
    rewardType?: number;
    /** 启用状态 0关闭 1开启 */
    status?: number;
  };

  type qudaofenxiliebiaomingxishujushiti = {
    /** 添加人数 */
    addCount?: number;
    /** 被删除人数 */
    beDeletedCount?: number;
    /** 渠道编码 */
    channelCode?: string;
    /** 日期 */
    date?: string;
    /** 删除人数 */
    deleteCount?: number;
    /** 添加好友总数（已去重） */
    userCount?: number;
  };

  type qudaofenxiliebiaoshujuchaxunshiti = {
    /** 筛选名称 */
    channelName?: string;
    /** 公司id */
    corpId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 公司ID */
    groupId?: number;
    /** 开始时间 */
    startTime?: string;
  };

  type qudaofenxiliebiaoshujushiti = {
    /** 添加人数 */
    addCount?: number;
    /** 总添加人数（不根据时间区间查询） */
    addTotalCount?: number;
    /** 被删除人数 */
    beDeletedCount?: number;
    /** 渠道编码 */
    channelCode?: string;
    /** 渠道名称 */
    channelName?: string;
    /** 删除人数 */
    deleteCount?: number;
  };

  type qudaofenxisousuodto = {
    asc?: boolean;
    /** 结束时间 */
    endTime?: string;
    /** 雷达Id */
    id?: number;
    /** openId */
    openId?: string;
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 雷达code */
    radarCode?: string;
    /** 开始时间 */
    startTime?: string;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
    /** userId */
    userId?: string;
  };

  type qudaofenxitubiaoshujuchaxunshiti = {
    /** 筛选渠道列表,多个用英文逗号分隔 */
    channelCodes?: string;
    /** 企微id */
    corpId?: string;
    /** 折线图数据维度(0新增好友数，1删除好友数，2被删除好友数), 不传默认为0 */
    dataType?: number;
    /** 结束时间 */
    endTime?: string;
    /** 公司ID */
    groupId?: number;
    /** 开始时间 */
    startTime?: string;
  };

  type qudaofenxitubiaoshujushiti = {
    /** 渠道分析每日数据(坐标图) */
    channelLineChartData?: ChannelLineChartData;
    /** 渠道分析数据(饼状图) */
    channelPieChartData?: ChannelPieChartData[];
  };

  type queryAuditInfoUsingGETParams = {
    /** planId */
    planId: number;
  };

  type queryByIdUsingGET1Params = {
    /** id */
    id: number;
  };

  type queryByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type queryChatRoomLeadersByActivityIdUsingGETParams = {
    /** id */
    id: number;
  };

  type QueryChatRoomOwnerQuery = {
    /** 群主名称（模糊搜索） */
    fuzzyOwnerName?: string;
    /** 手机号（精确查找） */
    mobile?: string;
    /** 姓名（精确查找） */
    name?: string;
  };

  type queryCustomerCouponNumUsingDELETEParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryCustomerCouponNumUsingGETParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryCustomerCouponNumUsingPATCHParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryCustomerCouponNumUsingPOSTParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryCustomerCouponNumUsingPUTParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryDeptAndEmplUsingGETParams = {
    /** isEnterprise */
    isEnterprise?: boolean;
  };

  type queryEmployeeWechatInfoListUsingGETParams = {
    /** viewId */
    viewId?: number;
  };

  type queryGuideTaskMomentListUsingGETParams = {
    /** taskId */
    taskId: number;
  };

  type queryMaterialUsingDELETEParams = {
    /** id */
    id?: number;
    /** guideId */
    guideId?: number;
  };

  type queryMaterialUsingGET1Params = {
    /** id */
    id?: number;
    /** guideId */
    guideId?: number;
  };

  type queryMaterialUsingGETParams = {
    /** id */
    id?: number;
  };

  type queryMaterialUsingPATCHParams = {
    /** id */
    id?: number;
    /** guideId */
    guideId?: number;
  };

  type queryMaterialUsingPOSTParams = {
    /** id */
    id?: number;
    /** guideId */
    guideId?: number;
  };

  type queryMaterialUsingPUTParams = {
    /** id */
    id?: number;
    /** guideId */
    guideId?: number;
  };

  type queryMsgInfoByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type QueryPolicyListVO = {
    /** 有效期结束时间（yyyy-MM-dd HH:mm:ss） */
    endTime?: string;
    /** 投放类型 1：员工发放  2：活动发放 */
    launchType?: string;
    /** 红包名称 */
    name?: string;
    /** 支付商户号Id */
    payConfigId?: string;
    /** 红包类型 1：普通红包  2：拼手气红包 3：自定义红包 */
    redpackType?: string;
    /** 排序名称 total：红包总数  remainder：剩余个数  createTime：创建时间 */
    sortName?: string;
    /** 排序类型 0：降序  1：升序 */
    sortType?: number;
    /** 有效期开始时间（yyyy-MM-dd HH:mm:ss） */
    startTime?: string;
    /** 状态 1:启用  2：禁用 */
    state?: number;
  };

  type queryRadarDetailByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type QueryRecordListVO = {
    /** 发送结束时间 */
    endTime?: string;
    /** 集团Id */
    groupId?: number;
    /** 选择员工 */
    guideIds?: number[];
    /** 投放类型 1：员工发放  2：活动发放 */
    launchType?: number;
    /** 支付商户号Id */
    payConfigId?: number;
    /** 红包名称 */
    redpackName?: string;
    /** 发送开始时间 */
    startTime?: string;
  };

  type queryShopUserTreeByYunUsingDELETEParams = {
    /** shopId */
    shopId?: number;
  };

  type queryShopUserTreeByYunUsingGETParams = {
    /** shopId */
    shopId?: number;
  };

  type queryShopUserTreeByYunUsingPATCHParams = {
    /** shopId */
    shopId?: number;
  };

  type queryShopUserTreeByYunUsingPOSTParams = {
    /** shopId */
    shopId?: number;
  };

  type queryShopUserTreeByYunUsingPUTParams = {
    /** shopId */
    shopId?: number;
  };

  type querySmsPlaceholderListUsingDELETEParams = {
    /** type */
    type?: string;
  };

  type querySmsPlaceholderListUsingGETParams = {
    /** type */
    type?: string;
  };

  type querySmsPlaceholderListUsingPATCHParams = {
    /** type */
    type?: string;
  };

  type querySmsPlaceholderListUsingPOSTParams = {
    /** type */
    type?: string;
  };

  type querySmsPlaceholderListUsingPUTParams = {
    /** type */
    type?: string;
  };

  type queryTaskTargetIdsUsingDELETEParams = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    'taskSendTime.hour'?: number;
    'taskSendTime.minute'?: number;
    'taskSendTime.nano'?: number;
    'taskSendTime.second'?: number;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** shopIds */
    shopIds?: string;
  };

  type queryTaskTargetIdsUsingGETParams = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    'taskSendTime.hour'?: number;
    'taskSendTime.minute'?: number;
    'taskSendTime.nano'?: number;
    'taskSendTime.second'?: number;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** shopIds */
    shopIds?: string;
  };

  type queryTaskTargetIdsUsingPATCHParams = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    'taskSendTime.hour'?: number;
    'taskSendTime.minute'?: number;
    'taskSendTime.nano'?: number;
    'taskSendTime.second'?: number;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** shopIds */
    shopIds?: string;
  };

  type queryTaskTargetIdsUsingPOSTParams = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    'taskSendTime.hour'?: number;
    'taskSendTime.minute'?: number;
    'taskSendTime.nano'?: number;
    'taskSendTime.second'?: number;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** shopIds */
    shopIds?: string;
  };

  type queryTaskTargetIdsUsingPUTParams = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者ID */
    createUserId?: number;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    /** 公司id */
    groupId?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    'taskSendTime.hour'?: number;
    'taskSendTime.minute'?: number;
    'taskSendTime.nano'?: number;
    'taskSendTime.second'?: number;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 执行截止时间 */
    timeEnd?: string;
    /** 执行起始时间 */
    timeStart?: string;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** shopIds */
    shopIds?: string;
  };

  type queryTotalUsingGETParams = {
    /** id */
    id: string;
  };

  type queryValidPointUsingDELETEParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryValidPointUsingGETParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryValidPointUsingPATCHParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryValidPointUsingPOSTParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type queryValidPointUsingPUTParams = {
    /** nick */
    nick?: string;
    /** nickType */
    nickType?: number;
    /** customerFrom */
    customerFrom?: number;
  };

  type QuicklyWordVo = {
    addName?: string;
    brandId?: number;
    content?: string;
    guideId?: number;
    id?: number;
    keyWord?: string;
    shopId?: number;
    wordGroupId: number;
    wordGroupIdStr?: string;
  };

  type QuickWordGetListByParamenterRequest = {
    /** appKey */
    appkey: string;
    /** 集团/品牌/公司 id */
    groupId: number;
    /** 返回列表条数 默认10条 */
    length?: number;
    /** 商城id */
    mallId?: number;
    /** 分页起始条数（位置偏移量），从0开始（当前接口start属性无效） */
    pageStart?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
    /** 筛选字段 */
    wordContent?: string;
    /** 话术分组 信息 */
    wordGroupId: string;
  };

  type QuickWordGetMenuListByWordGroupIdRequest = {
    /** appKey */
    appkey: string;
    /** 集团/品牌/公司 id */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
    /** 个人 微信ID */
    wxId: string;
  };

  type qunfaxiaoxijieshourenxiangqing = {
    /** 群id */
    chatId?: string;
    /** 客户群详情 */
    chatRoom?: kehuqunxiangqingbiaoxiangqing;
    /** 创建时间 */
    createTime?: string;
    /** 企微外部联系人信息 */
    externalContact?: qiweiwaibulianxirenjichuxinxibiaotongyiqiweizhanghaoxiawaibulianxirenjichubiaouserIdweiyixiangqing;
    /** 外部联系人id */
    externalUserid?: string;
    /** 导购信息 */
    guide?: daogoujianyaoxinxi;
    /** 员工id（发送人） */
    guideId?: number;
    id?: number;
    /** 群发消息id */
    messageId?: number;
    /** 消息id（企微返回） */
    msgId?: string;
    /** 发送失败原因 */
    sendFailReason?: string;
    /** 发送状态（1: 待创建; 2: 创建成功; 3: 创建失败; 4: 已发送; 5: 因客户不是好友导致发送失败; 6: 因客户已经收到其他群发消息导致发送失败） */
    sendStatus?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 标签名称集合 */
    tagNameList?: string[];
    /** 修改时间 */
    updateTime?: string;
    /** 员工企微userid */
    userid?: string;
  };

  type qunfaxiaoxixiangqing = {
    /** v3 9附件组件 */
    annexList?: Annex[];
    /** 附件 */
    attachments?: xiaoxifujianxiangqing[];
    /** 群发消息客户群数量（仅类型为“群营销”时有值） */
    chatRoomCount?: number;
    /** 消息文本内容 */
    content?: string;
    /** 企微企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 数据中心类型（1: ECRP; 2: 客道） */
    dataCenterType?: number;
    /** 创建人员工信息 */
    employee?: yuangongxinxi;
    /** 创建员工id */
    employeeId?: number;
    /** 员工选择组件最终筛选值 */
    employeeSelect?: string;
    /** 失败原因 */
    failReason?: string;
    /** 失败次数 */
    failTimes?: number;
    /** 格式化后的状态（只保留成功、失败两个状态） */
    formatReceiverStatusCount?: FormatReceiverStatusCountVo;
    /** 集团id */
    groupId?: number;
    id?: number;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则立即发送） */
    predictSendTime?: string;
    /** 群发消息状态统计 */
    receiverStatusCount?: qunfaxiaoxizhuangtaitongji[];
    /** 审核意见 */
    reviewRemark?: string;
    /** 审核状态（1: 待审核; 2: 审核通过; 3: 审核失败） */
    reviewStatus?: number;
    /** 审核时间 */
    reviewTime?: string;
    /** 员工组件 */
    richTextEcho?: string;
    /** 发送状态（1: 待发送; 2: 发送中; 3: 发送成功; 4: 已终止） */
    sendStatus?: number;
    /** 实际发送时间 */
    sendTime?: string;
    /** 总状态（1: 未提交; 2: 待审核; 3: 审核失败; 4: 待执行; 5: 执行中; 6: 已执行; 7: 已终止; 8: 执行失败） */
    status?: number;
    /** 执行人筛选条件（仅类型为“标签”时有值） */
    targetCondition?: qunfaxiaoxizhixingrenshaixuantiaojianxiangqing;
    /** 执行人数量 */
    targetCount?: number;
    /** 群发消息执行人 */
    targets?: qunfaxiaoxizhixingrenxiangqing[];
    /** 群发类型（1: 好友消息; 2: 群消息; 3: 客户分组） */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type qunfaxiaoxizhixingrenshaixuantiaojianxiangqing = {
    /** 区域详情 */
    area?: AreaDTO;
    /** 区域id */
    areaId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 导购id（逗号分割） */
    guideIds?: string;
    /** 导购详情 */
    guides?: TargetConditionGuideDTO[];
    id?: number;
    /** 群发消息id */
    messageId?: number;
    /** 门店 */
    shop?: ShopDTO;
    /** 门店id */
    shopId?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type qunfaxiaoxizhixingrenxiangqing = {
    /** 分群类别 */
    categoryName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 导购信息（messageType=1时有效） */
    guide?: daogoujianyaoxinxi;
    id?: number;
    /** 群发消息id */
    messageId?: number;
    /** 群发消息类型（冗余） */
    messageType?: number;
    /** 外部关联id（目前用于记录分组服务快照id） */
    referId?: number;
    /** 状态（1: 待拉取; 2: 拉取中; 3: 拉取完成） */
    status?: number;
    /** 营销人群（具体含义根据message type确定） */
    targetId?: number;
    /** 营销人名称（message_type=3时有值） */
    targetName?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 企微用户标签（messageType=5时有效） */
    weworkTag?: qiyeweixinbiaoqianxiangqing;
  };

  type qunfaxiaoxizhuangtaitongji = {
    /** 数量 */
    count?: number;
    /** 群发消息id */
    messageId?: number;
    /** 发送状态（1: 待创建; 2: 创建成功; 3: 创建失败; 4: 已发送; 5: 因客户不是好友导致发送失败; 6: 因客户已经收到其他群发消息导致发送失败） */
    sendStatus?: number;
  };

  type qunhuanyingyubiaochaxunqingqiushiti = {
    /** 创建人姓名 */
    createUserName?: string;
    /** 欢迎语内容 */
    textContent?: string;
  };

  type qunhuanyingyushitiduixiang = {
    /** 图片url */
    imageUrl?: string;
    /** 是否通知成员配置该欢迎语 0:不通知(默认值),1:通知 */
    isNotify?: number;
    /** 链接描述 */
    linkDesc?: string;
    /** 链接图片url */
    linkPicUrl?: string;
    /** 链接标题 */
    linkTitle?: string;
    /** 链接url */
    linkUrl?: string;
    /** 小程序appId */
    miniProgramAppId?: string;
    /** 小程序page路径 */
    miniProgramPage?: string;
    /** 小程序图片url */
    miniProgramPicUrl?: string;
    /** 小程序标题 */
    miniProgramTitle?: string;
    /** 附件类型 0:无附件,1:图片,2:链接,3:小程序,4:二维码海报,5:视频,6:文件; */
    otherMsgType: number;
    /** 文本内容 */
    textContent: string;
    /** 记录唯一标识 */
    uuid?: string;
    /** 视频url */
    videoUrl?: string;
  };

  type qunqushigailanshujufanhuivo = {
    /** 日期 */
    date?: string;
    /** 当前群成员数 */
    memberCount?: number;
    /** 新增群成员数 */
    newMemberCount?: number;
  };

  type qunrilichuangjianbianjiduixiang = {
    /** 发送群 */
    chatRoomIdList: string[];
    /** 群数量 */
    chatroomNum?: number;
    /** 任务编号 */
    code: string;
    /** 发送消息详情集合 */
    contentList: xiaoxineirong[];
    /** 查看使用----创建人姓名 */
    creatorName?: string;
    /** 标识 */
    id?: number;
    /** 发送消息数量 */
    msgNum?: number;
    /** 任务名称 */
    name: string;
    /** 备注 */
    reamrk?: string;
    /** 发送时间 sendType = 1 定时发送时使用 */
    sendTime?: string;
    /** 发送状态：0立即发送、1定时发送 */
    sendType: number;
    /** 查看使用----列表--审核状态 0审核失败、1未提交、2待审核、3审核成功 */
    status?: number;
    /** 创建日历使用---提交审核状态 1 不审核 2 审核 */
    submitReview: number;
    /** 查看使用----发送成功数量 */
    successNum?: number;
  };

  type qunrililiebiaoduixiang = {
    /** 任务编号 */
    code?: string;
    /** 创建人 */
    creatorName?: string;
    /**  true= 倒叙.false 正序 */
    desc?: boolean;
    /** 数据长度 */
    length: number;
    /** 任务名称 */
    name?: string;
    /** 包含删除的数据 true= 展示.false 不展示 */
    showDeleteData?: boolean;
    /** 查看发送结果 传 1 需要发送成功结果 */
    showSuccessNum?: number;
    /** 数据起始位置 */
    start: number;
    /** 审核状态 0审核失败、1未提交、2待审核、3审核成功 */
    status?: number;
    /** 时间截至点 yyyy-mm-dd 23:59:59 */
    timeEnd?: string;
    /** 时间起点 yyyy-mm-dd 00:00:00 */
    timeStart?: string;
    /** 发送消息类型 */
    type?: number;
  };

  type qunxiangqingshuju = {
    /** 群id */
    chatId: string;
    /** 群名称 */
    chatRoomName: string;
    /** 群主id */
    guideId: string;
    /** 群主 */
    ownerName: string;
    /** 工号 */
    ownerWorkNum: string;
    /** 群人数 */
    personNum: number;
    /** 社群日历使用---执行员工Id */
    sendGuideId?: number;
    /** 社群日历使用---执行员工名称 */
    sendGuideName?: string;
    /** 社群日历使用---执行员工工号 */
    sendGuideWorkNum?: string;
    /** 群执行状态 */
    status?: number;
    /** 工作门店 */
    workShopName: string[];
  };

  type QuotaFindVo = {
    brandId?: number;
    shopIds?: string;
    shopName?: string;
    shopStatus?: number;
    shopType?: string;
    type?: number;
    year?: number;
  };

  type QuotaYearVo = {
    list?: ShopBatchVo[];
    msg?: string;
    quota1?: number;
    quota10?: number;
    quota11?: number;
    quota12?: number;
    quota2?: number;
    quota3?: number;
    quota4?: number;
    quota5?: number;
    quota6?: number;
    quota7?: number;
    quota8?: number;
    quota9?: number;
    type?: number;
    year?: number;
  };

  type qushishitu = {
    /** 数量 */
    contactCnt?: number;
    /** 日期 */
    time?: string;
  };

  type ReceiveDetailDTO = {
    /** 领取金额（元） */
    money?: number;
    /** 领取人 */
    nickname?: string;
    /** 业务单号 */
    payNo?: string;
    /** 领取时间 */
    payTime?: string;
  };

  type ReceiveDetailVO = {
    /** 集团id */
    groupId?: number;
    /** 发放记录id */
    id?: number;
  };

  type ReceiverQuery = {
    /** 导购id（发送人） */
    guideId?: number;
    /** 群发消息id */
    messageId?: number;
    /** 发送状态（1: 待发送; 2: 发送成功; 3: 发送失败） */
    sendStatus?: number;
    /** 好友昵称 */
    userName?: string;
  };

  type ReceiveShopGuideDTO = {
    receiveGuideId: number;
    receiveShopId: number;
  };

  type receiveUsingDELETEParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type receiveUsingGETParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type receiveUsingPATCHParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type receiveUsingPOSTParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type receiveUsingPUTParams = {
    /** timestamp */
    timestamp?: string;
    /** nonce */
    nonce?: string;
    /** msg_signature */
    msg_signature?: string;
  };

  type Record = true;

  type RecordListDTO = {
    /** 结束时间 */
    endTime?: string;
    /** 发放类型:1员工发放、2裂变大师 */
    launchType?: number;
    /** 支付商户号 */
    mchMsg?: string;
    /** 领取金额（分） */
    money?: number;
    /** 领取人 */
    nickname?: string;
    /** 业务单号 */
    payNo?: string;
    /** 红包名称 */
    redpackName?: string;
    /** 红包类型 1：普通红包  2：拼手气红包 3：自定义红包 */
    redpackType?: number;
    /** 发放人 */
    sendName?: string;
    /** 工作门店 */
    shopNames?: string;
    /** 开始时间 */
    startTime?: string;
    /** 工号 */
    workNumber?: string;
  };

  type RecordStatisticsByGuideIdDTO = {
    /** 员工 */
    name?: number;
    /** 被领红包金额（元） */
    receiverMoney?: number;
    /** 被领红包个数 */
    receiverNum?: number;
    /** 工作门店 */
    shopName?: number;
    /** 工号 */
    wokerNumber?: number;
  };

  type RecordStatisticsDTO = {
    /** 好评返现转出金额 */
    cashbackSendMoney?: number;
    /** 裂变大师转出金额 */
    fissionSendMoney?: number;
    /** 员工转出金额 */
    guideSendMoney?: number;
    /** 红包转出金额（元) */
    redpackSendMoney?: number;
    /** 累计转出金额 */
    sendTotalMoney?: number;
    /** 今日转出金额 */
    todaySendMoney?: number;
  };

  type RecordStatisticsQueryVO = {
    /** 企业id */
    corpId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 导购id */
    guideIds?: number[];
    /** 支付信息id */
    payConfigId?: number;
    /** 开始时间 */
    startTime?: string;
  };

  type RecruitingNoticeCfgVO = {
    memberCard: number;
    mobile: number;
    name: number;
    shopName: number;
    state: number;
    time: number;
  };

  type RecruitingPageConfigDTO = {
    /** 集团LOGO */
    companyLogo?: string;
    /** 招募消息卡片文本 */
    content?: string;
    /** 公司ID */
    groupId?: number;
    /** 导购招募成功通知 */
    guideMsgCfg?: RecruitingNoticeCfgVO;
    /** id */
    id?: number;
    /** 关注公众号页面背景图片 */
    mpFollowBackground?: string;
    /** 关注公众号页面二维码大小 */
    mpFollowQrcodeSize?: number;
    /** 关注公众号页面二维码X坐标 */
    mpFollowQrcodeX?: number;
    /** 关注公众号页面二维码Y坐标 */
    mpFollowQrcodeY?: number;
    /** 关注公众号开关 */
    mpFollowState?: number;
    /** 招募消息卡片图片 */
    picture?: string;
    /** 标题 */
    recruitingName?: string;
    /** 下载招募码背景海报 */
    recruitingPostersImage?: string;
    /** 注册页面背景图 */
    rgBackground?: string;
    /** 注册页面按钮颜色 */
    rgButtonColor?: string;
    /** 注册页面按钮文案 */
    rgButtonText?: string;
    /** 注册页面按钮文案颜色 */
    rgButtonTextColor?: string;
    /** 注册页面会员规则文件名 */
    rgMemberRuleName?: string;
    /** 注册页面会员规则链接 */
    rgMemberRuleUrl?: string;
    /** 注册页面其它入会协议集合（JSON：[{'name:'', 'value':''}]） */
    rgOtherProtocol?: string;
    /** 隐私政策链接地址文件名 */
    rgPrivacyPolicyName?: string;
    /** 隐私政策链接地址 */
    rgPrivacyPolicyUrl?: string;
    /** 门店招募成功通知 */
    shopManageMsgCfg?: RecruitingNoticeCfgVO;
    /** 招募消息卡片标题 */
    title?: string;
    /** vip体系Id */
    vipSystemId?: number;
    /** vip体系名称 */
    vipSystemName?: string;
  };

  type RecruitingPageConfigParam = {
    /** 主键Id */
    id?: number;
    /** 状态 */
    status?: number;
  };

  type RecruitingPageConfigQuery = {
    /** 招募消息卡片文本 */
    content: string;
    /** 导购招募成功通知 */
    guideMsgCfg?: RecruitingNoticeCfgVO;
    /** id */
    id: number;
    /** 关注公众号页面背景图片 */
    mpFollowBackground: string;
    /** 关注公众号页面二维码大小 */
    mpFollowQrcodeSize: number;
    /** 关注公众号页面二维码X坐标 */
    mpFollowQrcodeX: number;
    /** 关注公众号页面二维码Y坐标 */
    mpFollowQrcodeY: number;
    /** 是否关注公众号 */
    mpFollowState?: number;
    /** 招募消息卡片图片 */
    picture: string;
    /** 标题 */
    recruitingName?: string;
    /** 下载招募码背景海报 */
    recruitingPostersImage: string;
    /** 注册页面背景图 */
    rgBackground?: string;
    /** 注册页面按钮颜色 */
    rgButtonColor?: string;
    /** 注册页面按钮文案 */
    rgButtonText?: string;
    /** 注册页面按钮文案颜色 */
    rgButtonTextColor?: string;
    /** 注册页面会员规则文件名 */
    rgMemberRuleName?: string;
    /** 注册页面会员规则链接 */
    rgMemberRuleUrl?: string;
    /** 注册页面其它入会协议集合（JSON）[{'name:'', 'value':''}] */
    rgOtherProtocol?: string;
    /** 隐私政策链接地址文件名 */
    rgPrivacyPolicyName?: string;
    /** 隐私政策链接地址 */
    rgPrivacyPolicyUrl?: string;
    /** 门店招募成功通知 */
    shopManageMsgCfg?: RecruitingNoticeCfgVO;
    /** 招募消息卡片标题 */
    title: string;
    /** type:1默认系统配置；2vip招募配置 */
    type?: number;
    /** vip体系Id */
    vipSystemId?: number;
    /** vip体系名称 */
    vipSystemName?: string;
  };

  type RecruitingVipDTO = {
    /** vip体系Id */
    vipSystemId?: number;
    /** vip体系名称 */
    vipSystemName?: string;
  };

  type RecruitVersionVo = {
    /** 会员管理方案设置:1企业微信方案;2个人号方案 */
    memberManagePlan?: number;
  };

  type registerMsgUsingGETParams = {
    /** msg_signature */
    msg_signature: string;
    /** timestamp */
    timestamp?: string;
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
  };

  type registerMsgUsingPOSTParams = {
    /** msg_signature */
    msg_signature: string;
    /** timestamp */
    timestamp?: string;
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
  };

  type renqunshuxingshaixuanxiangshiti = {
    /** 子集合 */
    children?: Record<string, any>[];
    /** code */
    key?: string;
    /** 标签 */
    label?: string;
    /** 是否可以选中 */
    selectable?: boolean;
    /** 名称 */
    title?: string;
    /** code */
    value?: string;
  };

  type renwukuozhanduixiangVO = {
    /** 指派的导购总数或门店总数（保存最大值） */
    allNum?: number;
    /** 分组区域ID */
    areaId?: number;
    /** 审核类型(0:其他, 1:发朋友圈) */
    assessmentType?: number;
    /** 任务体系客户下发规则 */
    assignCustomerRule?: renwutixikehuxiafaguizeDTO;
    /** 任务体系客户下发规则类型(0-专属导购, 1-自定义规则) */
    assignCustomerRuleType?: number;
    /** 公司id */
    brandId?: number;
    /** 任务完成度 */
    completion?: string;
    /** 创建时间 */
    createTime?: string;
    /** 任务维度(0品牌，1门店) */
    dimension?: number;
    /** 是否可编辑 */
    editAccess?: number;
    /** 执行截止时间 */
    endTime?: string;
    /** 通知执行人类型(0-店长, 1.导购) */
    executorType?: number;
    id?: number;
    /** 是否发送 0：未发送  1：已发送 */
    isSend?: number;
    /** 素材内容 */
    materialContent?: string;
    /** 素材id */
    materialId?: number;
    /** 素材信息 */
    materialMsg?: string;
    /** 素材标题 */
    materialTitle?: string;
    /** 素材类型 */
    materialType?: number;
    /** 任务名称 */
    name?: string;
    /** 需要过滤无客户分组门店(0不需要,1需要,过滤后会改为0) */
    needFilterNoCustomerShop?: number;
    /** 创建者ID */
    operatorId?: number;
    /** 备注 */
    remark?: string;
    /** 执行类型：0执行一次、1每日执行 */
    runType?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 门店任务门店名称 */
    shopName?: string;
    /** 执行起始时间 */
    startTime?: string;
    /** 状态:0无效、1执行中、2已关闭、3已完成、5未开始、6未完成 */
    state?: number;
    /** 中台分组名称 */
    subGroupName?: string;
    /** 中台分组id */
    subgroupId?: number;
    /** shop_id为0，则此字段为门店id；shop_id非0，则此字段为导购id */
    targetIds?: string;
    /** 任务编号 */
    taskCode?: string;
    /** 任务总数（品牌任务为指派总数，门店任务若是每日任务则为任务天数*指派总数） */
    taskNum?: number;
    /** 定时下发任务时间 */
    taskSendTime?: LocalTime;
    /** 定时下发任务状态 0：关闭  1：开启 */
    taskSendType?: number;
    /** 类型：0营销、1回访、2分享、3日常 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 分组视角id */
    viewId?: number;
  };

  type renwushezhishitu = {
    /** 是否可完成过期的任务:0否、1是(默认:1) */
    allowFinishTask?: number;
    /** id */
    id?: number;
  };

  type renwushujugailanshiti = {
    /** 昨日新增人数 */
    addCnt?: number;
    /** 昨日新增人数环比 */
    addCntPer?: string;
    /** 任务执行天数 */
    dayNum?: number;
    /** 昨日流失人数 */
    lossCnt?: number;
    /** 昨日流失人数环比 */
    lossCntPer?: string;
    /** 昨日标签总人数 */
    totalCnt?: number;
  };

  type renwutixihuiyuanxinxi = {
    /** 会员姓名 */
    customerName?: string;
    /** 加密会员姓名 */
    encCustomerName?: string;
    /** 加密会员手机号 */
    encMobile?: string;
    /** 跟进记录次数 */
    followCount?: number;
    /** 最近一次跟进时间 */
    followTime?: string;
    /** 跟进状态(跟进状态 0：待跟进 1：跟进完成 2:联系中) */
    followType?: number;
    /** 导购id */
    guideId?: number;
    /** 会员手机号 */
    mobile?: string;
    /** 电话联系次数 */
    phoneCount?: number;
    /** 跟进记录内容 */
    remark?: string;
    /** 门店id */
    shopId?: number;
    /** 分组客户详情表id */
    subgroupCustomerId?: number;
    /** 跟进记录图片url */
    urlJson?: string[];
    /** 企业微信联系次数 */
    wechatCount?: number;
  };

  type renwutixikehuxiafaguizeDTO = {
    /** 订单范围-最近天数(最大255) */
    days?: number;
    /** 订单范围-结束时间 */
    endDate?: string;
    /** 集团id */
    groupId?: number;
    /** 客户无订单下发规则 */
    noTradeRules?: string[];
    /** 订单范围-开始时间 */
    startDate?: string;
    /** 任务id */
    taskId?: number;
    /** 订单范围(0-与订单无关, 1-按订单分配) */
    tradeAssign?: number;
    /** 客户有订单下发规则 */
    tradeRules?: string[];
    /** 订单范围(0-起止时间, 1-最近) */
    tradeScope?: number;
  };

  type renwuxiangqingshiti = {
    /** 规则 */
    rules?: zhinengdabiaodangerenwuguizebiaoxiangqing[];
    /** 场景id层级结构 */
    sceneIds?: number[];
    /** 场景名称 */
    sceneName?: string;
    /** 标签组id */
    tagGroupId?: string;
    /** 标签组名称 */
    tagGroupName?: string;
    /** 标签id */
    tagId?: string;
    /** 标签名称 */
    tagName?: string;
    /** 任务id */
    taskId?: number;
    /** 任务名称 */
    taskName?: string;
  };

  type ReportMpComponentAuthRequest = {
    /** appid */
    appid: string;
    /** appKey */
    appkey: string;
    /** 公司id */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 服务器所在域名地址 */
    serverUrl: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type ReportMpComponentAuthResponse = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: Record<string, any>;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
  };

  type ResponseEntity = {
    body?: Record<string, any>;
    statusCode?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    statusCodeValue?: number;
  };

  type ReviewMessageQuery = {
    /** 群发消息id */
    messageId?: number;
    /** 审核意见 */
    reviewRemark?: string;
    /** 审核状态（1: 待审核; 2: 审核通过; 3: 审核失败） */
    reviewStatus?: number;
  };

  type RewardRuleVo = {
    addfriendReward?: number;
    addfriendStatus?: number;
    list?: ShopBatchVo[];
    memberReward?: number;
    memberStatus?: number;
    msg?: string;
    onlineSalesRewardExclusive?: number;
    onlineSalesRewardOrder?: number;
    salesRewardExclusive?: number;
    salesRewardOrder?: number;
    salesStatus?: number;
    shareNum?: number;
    shareReward?: number;
    shareStatus?: number;
  };

  type RpaAbilityReportRequest = {
    /** appKey */
    appkey: string;
    data?: RPAtongyongshangbaoqingqiushiti[];
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type RpaAccountAbnormalRequest = {
    /** appKey */
    appkey: string;
    data?: RPAzhanghaoyichangqingqiushiti[];
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type RpaAccountLoginStatusDTO = {
    /** status为5是好友辅助登录文本字段 status为3 为二维码图片地址 */
    context?: string;
    /** 导购id */
    guideId?: number;
    /** 手机号码 */
    mobile?: string;
    /** 登录过程中状态,
0 未开始登录
1发起登陆，等待验证码
2 完成输入验证码
3 等待扫描二维码
4 等待好友辅助验证
5 登陆成功
6 登陆失败
 */
    status?: number;
  };

  type RpaAddFriendRequest = {
    /** appKey */
    appkey: string;
    /** 结果实体 */
    data: tianjiahaoyoushangbaoqingqiushiti[];
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type RpaCreateSeatUserDTO = {
    /** rpa帐号id */
    rpaAccountId: number;
    /** rpa坐席id */
    seatAccountId: number;
  };

  type RpaErrorReportLogDTO = {
    /** 报错账号 */
    accountNo?: string;
    /** 时间 */
    createTime?: string;
    /** 错误代码 */
    errorCode?: string;
    /** 企业名称 */
    groupName?: string;
    /** 流水号 */
    orderNum?: number;
    /** 日志类型(1:添加好友,3:发送消息,4:发送朋友圈,5:⾃动登录 6 加好友 7:账号状态 */
    type?: number;
  };

  type rpafaxiaoxijieshourenxiangqing = {
    /** 群id */
    chatId?: string;
    /** 群名称或外部联系人名称 */
    chatName?: string;
    /** 群人数 */
    chatPersonNum?: number;
    /** 企微企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 外部联系人id */
    externalUserId?: string;
    /** 集团id */
    groupId?: number;
    /** 导购数据 */
    guideDTO?: daogoujianyaoxinxi;
    /** 主键id 雪花号 */
    id?: number;
    /** 群发消息任务id */
    messageId?: number;
    /** 消息类型1: 好友消息; 2: 群消息 */
    messageType?: number;
    /** 员工企微手机号 */
    mobile?: string;
    /** 流水号 */
    orderNum?: number;
    /** 发送失败原因 */
    sendFailReason?: string;
    /** 发送状态（1: 待创建; 2: 创建成功; 3: 创建失败;4:发送成功; 5:发送失败 ） */
    sendStatus?: number;
    /** 发送时间 */
    sendTime?: string;
    /** 状态 */
    status?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 员工企微userid */
    userid?: string;
  };

  type rpagongsiguanxixiangqing = {
    /** 代运营企业ID */
    agentEnterpriseId?: string;
    /** 渠道id */
    channelId?: number;
    /** 企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creator?: number;
    /** 企微账号主体ID */
    enterpriseId?: string;
    /** 公司id */
    groupId?: number;
    /** 主键id */
    id?: number;
    /** RPA账号数量 */
    num?: number;
    /** 坐席账号数量 */
    seatNum?: number;
    /** 试用坐席账号数量 */
    seatTrialNum?: number;
    /** 试用RPA账号数量 */
    trialNum?: number;
    /** 更新时间 */
    updateTime?: string;
    /** RPA帐号有效时长 */
    validPeriod?: number;
    /** RPA帐号有效时长单位,有效时⻓单位（1-年，2-⽉，3-⽇） */
    validUnit?: number;
  };

  type RPAhuodongchaxunliebiaoDTO = {
    /** 群营销时群名称数据 */
    canJoinChatRoom?: string[];
    /** 人群数量 群为群数量,好友消息为目标数量 */
    count?: number;
    /** 创建员工id */
    employeeId?: number;
    /** 创建员工名称 */
    employeeName?: string;
    id?: number;
    /** 消息id */
    messageId?: number;
    /** 名称 */
    name?: string;
    /** 发送状态（1: 待发送; 2: 发送中; 3: 发送成功; 4: 已终止; 5: 发送失败） */
    sendStatus?: number;
    /** 活动开始时间 */
    startTime?: string;
    /** 目标人群 */
    targetDTOList?: RPAmubiao[];
    /** 目标类型 1: 标签选人; 2: 员工选人 */
    targetType?: number;
    /** 消息类型 1: 好友消息; 2: 群消息 */
    type?: number;
  };

  type rpajiahaoyouhuodongrenwushezhigongsiqiweiweiduxiangqing = {
    /** 允许加粉时间结束 */
    allowTimeEnd?: string;
    /** 允许加粉时间开始 */
    allowTimeStart?: string;
    /** 企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 公司id */
    groupId?: number;
    /** id */
    id?: number;
    /** 任务回收天数 */
    taskRecycleDayCount?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type rpakehuxiangying = {
    /** 创建人 */
    creator?: string;
    /** 企微账号主体ID */
    enterpriseId?: string;
    /** 主键id */
    id?: number;
    /** RPA账号数量 */
    num?: number;
    /** 坐席账号数量 */
    seatNum?: number;
    /** 试用坐席账号数量 */
    seatTrialNum?: number;
    /** 试用RPA账号数量 */
    trialNum?: number;
  };

  type RPAmubiao = {
    /** rpa帐号的userId，存在一个群有多个rpa帐号情况 */
    rapUserId?: string[];
    /** 目标信息 */
    targetDesc?: string;
    /** 营销人群（具体含义根据message type确定）群营销为群id,  */
    targetId?: string;
  };

  type rpapengyouquanyingxiaobiaoxiangqing = {
    /** 发朋友圈的账号数量 */
    accountCount?: number;
    /** 选中的账号信息 */
    accountList?: number[];
    /** 附件信息 */
    attachmentDTOList?: rpapengyouquanyingxiaofujianxiangqing[];
    /** 企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人id */
    creator?: number;
    /** 创建人名称 */
    creatorName?: string;
    /** 公司id */
    groupId?: number;
    /** id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 活动开始时间 */
    sendTime?: string;
    /** 0 立即发送 1 定时发送 */
    sendType?: number;
    /** 1未执行（定时任务特有）、2执行中、3已执行、4执行失败、5已终止 */
    status?: number;
    /** 朋友圈文案 */
    text?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type rpapengyouquanyingxiaofujianxiangqing = {
    /** 群发消息id */
    activityId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 描述 */
    description?: string;
    id?: number;
    /** 图片链接（type=3时有效，链接类型不需要上传到临时文件，可以用外链） */
    picUrl?: string;
    /** 二维码海报配置id（仅type=5时有效） */
    qrcodePlacardConfigId?: number;
    /** 远程文件（根据附件类型不同，可能是图片、视频、小程序封面图的OSS地址） */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型（1: 图片; 2: 视频; 3: 链接; 4: 小程序; 5: 二维码海报） */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 跳转链接 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型（1:自定义链接; 2: 系统预置链接3.C端客户绑定链接） */
    urlType?: number;
  };

  type rpapengyouquanyingxiaoxiaoguofenxishiti = {
    /** 账号名称 */
    accountName?: string;
    /** id */
    id?: number;
    /** 1待发送,2已发送,3发送失败 */
    status?: number;
  };

  type rpapiliangjiahaoyouhuodongbiaoxiangqing = {
    /** 添加账号 */
    addAccount?: string;
    /** 添加好友数量 */
    addFriendCount?: number;
    /** 企微标签 */
    corpTag?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creator?: number;
    /** 创建人名称 */
    creatorName?: string;
    /** 文件名称 */
    fileName?: string;
    /** 上传文件路径 */
    filePath?: string;
    /** id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 活动回收时间 */
    recycleTime?: string;
    /** 活动开始时间 */
    startTime?: string;
    /** 1未执行（定时任务特有）、2执行中、3已执行、4执行失败、5已终止 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type rpapiliangjiahaoyouhuodongbiaozhixingxiaoguo = {
    /** 添加账号 */
    addAccount?: string;
    /** 添加账号数 */
    addAccountCount?: number;
    /** 添加好友数量 */
    addFriendCount?: number;
    /** id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 未添加好友数量 */
    notAddCount?: number;
    /** 1未执行（定时任务特有）、2执行中、3已执行、4执行失败、5已终止 */
    status?: number;
  };

  type rpapiliangjiahaoyouhuodongshijitianjiadehaoyoumingxibiaoxiangqing = {
    /** 添加该手机号的账号id */
    accountId?: number;
    /** 任务id */
    activityId?: number;
    /** 企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 好友id */
    externalUserId?: string;
    /** 公司id */
    groupId?: number;
    /** id */
    id?: number;
    /** 唯一id(用于调用接口时的唯一id) */
    orderNum?: number;
    /** 手机号 */
    phoneNumber?: string;
    /** 原因 */
    reason?: string;
    /** 1添加成功，2待客户通过，3未添加，4已回收 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type RpaQrCodeRequest = {
    /** appKey */
    appkey: string;
    /** 文本内容 */
    context: string;
    /** 帐号 */
    enterpriseWechatCode: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 消息类型 1 二维码 2 辅助验证 */
    msgType: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type RpaSearchAccountRequest = {
    /** 坐席号 */
    accountNo?: string;
    /** 企微id */
    corpId?: string;
    /** 添加结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 添加开始时间 */
    startTime?: string;
  };

  type RpaSeatAccountDTO = {
    /** 坐席帐号 */
    accountNo?: string;
    /** 主键id */
    id?: number;
    /** 帐号昵称 */
    name?: string;
    /** 坐席帐号密码 */
    password?: string;
  };

  type RpaSeatAccountPageDTO = {
    /** 坐席帐号 */
    accountNo?: string;
    /** 主键id */
    id?: number;
    /** 坐席未使用账号数 */
    unusedNum?: number;
    /** 坐席使用账号数 */
    useNum?: number;
  };

  type RPAtongyongshangbaoqingqiushiti = {
    /** 扩展字段 */
    extraData?: string;
    /** 订单号 */
    orderNum: string;
    /** 状态 */
    status: number;
    /** 上报类型(1:添加好友,3:发送消息,4:发送朋友
圈,5:⾃动登录) */
    type: number;
  };

  type RpaVerificationCodeRequest = {
    /** appKey */
    appkey: string;
    /** 帐号 */
    enterpriseWechatCode: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type rpaxiaoxifujianxiangqing = {
    /** 创建时间 */
    createTime?: string;
    /** 描述 */
    description?: string;
    id?: number;
    /** 群发消息id */
    messageId?: number;
    /** 图片链接（type=3时有效，链接类型不需要上传到临时文件，可以用外链） */
    picUrl?: string;
    /** 二维码海报id */
    qrcodePlacardConfigId?: number;
    /** 远程文件（根据附件类型不同，可能是图片、视频、小程序封面图的OSS地址） */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型（1: 图片; 2: 视频; 3: 链接; 4: 小程序; 5: 二维码海报）） */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 跳转链接 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型（1:自定义链接; 2: 系统预置链接3.C端客户绑定链接） */
    urlType?: number;
  };

  type rpaxiaoyanjingqunliao = {
    /** 消息id */
    messageId?: number;
  };

  type RPAxinjianyingxiaohuodongxiangqingDTO = {
    /** 区域id */
    areaId?: number;
    /** 附件 */
    attachmentDTOList?: rpaxiaoxifujianxiangqing[];
    /** 消息文本内容 */
    content?: string;
    /** 企微企业id */
    corpId?: string;
    /** 集团id */
    groupId?: number;
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则立即发送） */
    predictSendTime?: string;
    /** 发送状态（1: 待发送; 2: 发送中; 3: 发送成功; 4: 已终止; 5: 发送失败） */
    sendStatus?: number;
    /** 实际发送时间 */
    sendTime?: string;
    /** 营销社群 */
    targetDTOList?: RPAmubiao[];
    /** 目标类型 1: 标签选人; 2: 员工选人 */
    targetType?: number;
    /** 消息类型 1: 好友消息; 2: 群消息 */
    type?: number;
  };

  type RPAxinjianyingxiaohuodongxiangqingDTO0 = {
    /** 区域id */
    areaId?: number;
    /** 附件 */
    attachmentDTOList?: rpaxiaoxifujianxiangqing[];
    /** 消息文本内容 */
    content?: string;
    /** 企微企业id */
    corpId?: string;
    /** 创建员工id */
    employeeId?: number;
    /** 集团id */
    groupId?: number;
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 预计发送时间（为null则立即发送） */
    predictSendTime?: string;
    /** 发送状态（1: 待发送; 2: 发送中; 3: 发送成功; 4: 已终止; 5: 发送失败） */
    sendStatus?: number;
    /** 实际发送时间 */
    sendTime?: string;
    /** 营销社群 */
    targetDTOList?: RPAmubiao[];
    /** 目标类型 1: 标签选人; 2: 员工选人 */
    targetType?: number;
    /** 1: 好友消息; 2: 群消息 */
    type?: number;
  };

  type rpazhanghaopicichaxun = {
    /** 客户id(对应sg_rpa_group的id) */
    clientId?: number;
  };

  type rpazhanghaoshiti = {
    /** 主键id */
    id?: number;
    /** 帐号昵称 */
    name?: string;
  };

  type rpazhanghaotianjiarizhibiaoxiangqingxiangying = {
    /** 创建时间 */
    createTime?: string;
    /** rpa账号数 */
    rpaNum?: number;
    /** 坐席账号数 */
    seatNum?: number;
    /** RPA帐号有效时长（单位：月） */
    validPeriod?: number;
  };

  type rpazhanghaoxiangqing = {
    /** 群聊数量 */
    chatNum?: number;
    /** 企业id */
    corpId?: string;
    /** 添加时间 */
    createTime?: string;
    /** 好友数量 */
    friendNum?: number;
    /** 公司id */
    groupId?: number;
    /** 员工ID，对应sg_guid中id */
    guideId?: number;
    /** 主键id */
    id?: number;
    /** 帐号状态描述 */
    message?: string;
    /** 企业成员手机号 */
    mobile?: string;
    /** 帐号昵称 */
    name?: string;
    /** 登录状态 0 全部 1未登陆 2已登录 3登录失败,4帐号异常 5 待补充手机号 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 企业成员userId */
    userId?: string;
  };

  type RPAzhanghaoyichangqingqiushiti = {
    /** accountNo String 是 账号名 */
    accountNo: string;
    /** 代运营企业ID */
    agentEnterpriseId: number;
    /** 渠道类型 */
    channelType: number;
    /** 客⼾端类型 */
    clientType: number;
    /** 状态 */
    status: number;
    /** 上报类型(7:账号状态) */
    type: number;
  };

  type rpazuoxiguanlianrpazhanghaobiaoxiangqing = {
    /** 企业id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creator?: number;
    /** 公司id */
    groupId?: number;
    /** 主键id */
    id?: number;
    lastPushTime?: string;
    /** 帐号手机号 */
    mobile?: string;
    /** 帐号名称 */
    name?: string;
    /** rpa_account_id表id */
    rpaAccountId?: number;
    /** sg_rpa_seat_account表id */
    seatAccountId?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type sanfangxiaochengxuxinxi = {
    /** 小程序接口调用凭据 */
    accessToken?: string;
    /** 小程序appid */
    appId?: string;
    /** 公司ID */
    companyId?: number;
    /** 第三方平台方appid */
    componentAppId?: string;
    /** 小程序头像地址 */
    headImgUrl?: string;
    /** 小程序名称 */
    nickName?: string;
    /** 小程序二维码 */
    qrCodeUrl?: string;
  };

  type SaveCorpChatMsgRequest = {
    /** appKey */
    appkey: string;
    /** chatMsgOpen */
    chatMsgOpen: number;
    /** chatMsgPriKey */
    chatMsgPriKey?: string;
    /** chatMsgSecret */
    chatMsgSecret?: string;
    /** 公司ID */
    companyID: number;
    /** corpID */
    corpID: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type SaveTalkPageQuery = {
    /** 好友查询名称 */
    contactName?: string;
    /** 员工查询名称 */
    guideName?: string;
    /** 话题id */
    id?: string;
    /** 查询id类型 1好友userId 2群ID 3成员userId */
    idType?: number;
    /** length */
    length?: number;
    /** 搜索名称 */
    name?: string;
    /** offset偏移量 */
    start?: number;
    /** 查询时间 */
    time?: string;
  };

  type searchCanvasStatusGroupUsingGETParams = {
    /** viewId */
    viewId: number;
  };

  type SearchCoverVO = {
    /** 名称 */
    name?: string;
    /** 根据操作人搜索 */
    operatorName?: string;
    /** 排序字段名称 */
    sortName?: string;
    /** 排序类型 0 降序 1 升序 */
    sortType?: number;
  };

  type SearchGuideVo = {
    /** 附加字段（ext: 扩展信息（企微userid等）; shopIds: 工作门店的id数组; simpleShops: 工作门店详情） */
    fields?: string[];
    /** 导购id集合 */
    guideIds?: number[];
    /** 是否有企微标识 */
    hasUserId?: boolean;
  };

  type SearchMessageReportLogDTO = {
    /** 结束时间 */
    endTime?: string;
    /** rpa公司表id */
    rpaGroupId?: number;
    /** 开始时间 */
    startTime?: string;
  };

  type searchPolicyByCoreElementUsingGETParams = {
    /** policyId */
    policyId: number;
  };

  type SearchReceiverCountGroupByDayResultDTO = {
    /** 数量 */
    count?: number;
    /** 日期 */
    date?: string;
  };

  type SearchRequestVOdianpuhuoyuangongliebiaoVO = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: dianpuhuoyuangongliebiaoVO;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOQueryPolicyListVO = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: QueryPolicyListVO;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOQueryRecordListVO = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: QueryRecordListVO;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOReceiveDetailVO = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: ReceiveDetailVO;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVORecordStatisticsQueryVO = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: RecordStatisticsQueryVO;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOSearchCoverVO = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: SearchCoverVO;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOsousuohongbaolingqujilu = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: sousuohongbaolingqujilu;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOsousuoyuangongribaotixingshezhibiao = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: sousuoyuangongribaotixingshezhibiao;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchRequestVOxinzengfahongbaoshezhi = {
    /** 分页大小 */
    length?: number;
    /** 搜索条件 */
    searchMap?: xinzengfahongbaoshezhi;
    /** 起始偏移量 */
    start?: number;
  };

  type SearchSentMessageCountGroupByDayResultDTO = {
    /** 数量 */
    count?: number;
    /** 日期 */
    date?: string;
  };

  type SearchShopPageDTO = {
    areaIds?: string;
    pageNo?: number;
    pageSize?: number;
    platId?: number;
    shopIdStr?: string;
    shopName?: string;
    userIds?: string[];
  };

  type SearchWeworkTagVo = {
    /** 区域id（用于返回用户数量） */
    areaId?: number;
    /** 导购id集合 */
    guideIds?: number[];
    /** 门店id（用于返回用户数量） */
    shopId?: number;
    /** 标签id集合（企微标签id，字符串） */
    tagIds?: string[];
    /** 标签名模糊搜索 */
    tagName?: string;
    /** 是否返回标签用户数量 */
    userCount?: boolean;
  };

  type seatDetailUsingGETParams = {
    /** id */
    id?: number;
  };

  type SendMessageRequest = {
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 群发消息id */
    messageId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type SendStatisticsDTO = {
    /** 累计发放金额（分） */
    sendTotalMoney?: number;
    /** 累计发放红包个数 */
    sendTotalNum?: number;
    /** 今日发放金额（分） */
    todaySendMoney?: number;
    /** 今日发放红包个数 */
    todaySendNum?: number;
  };

  type SendStatisticsVO = {
    /** 企微Id */
    corpId?: string;
    /** 集团Id */
    groupId?: number;
    /** 支付商户号Id */
    payConfigId?: number;
    /** 用户id */
    userIds?: string;
  };

  type ServiceDTO = {
    apis?: ApiDTO[];
    beanName?: string;
    fullName?: string;
    name?: string;
  };

  type sessionUsingGETParams = {
    /** sessionIdBase64 */
    sessionIdBase64?: string;
  };

  type setDefaultUsingPOSTParams = {
    /** id */
    id: number;
  };

  type SgActivityCoupon = {
    afterGetValidDays?: number;
    appletsConfig?: string;
    apportionChannel?: number;
    authorizedCode?: string;
    brandId?: number;
    couponCode?: string;
    couponId?: number;
    couponStatus?: number;
    couponTitle?: string;
    couponTotal?: number;
    couponType?: number;
    couponValue?: number;
    createTime?: string;
    dataSource?: string;
    dateValidType?: number;
    endTime?: string;
    guideCouponStatus?: number;
    id?: number;
    invalidDate?: string;
    isThirdImport?: number;
    isValid?: number;
    maxIssueCount?: number;
    receiveEndTime?: string;
    remark?: string;
    shopIds?: string;
    shopRangeType?: number;
    startTime?: string;
    state?: number;
    tradeCountValid?: number;
    type?: number;
    updateTime?: string;
    useConditionJson?: string;
    useRange?: string;
    useRemark?: string;
    validDays?: number;
    validTime?: string;
  };

  type SgActivityCouponQuery = {
    /** 优惠卷id */
    activityCouponId?: number;
    /** 优惠券编码 */
    couponCode?: string;
    /** 优惠券名称 */
    couponTitle?: string;
    /** 优惠券类型:（0：未知，1：代金券、2：折扣券、3：兑换券） */
    couponType?: number;
    /** 导购优惠券状态 */
    groupId?: number;
    /** 导购优惠券状态 */
    guideCouponStatus?: number;
    /** 每页条数 */
    length?: number;
    /** 起始页码 */
    start?: number;
  };

  type SgActivityCouponVo = {
    /** 分配渠道为1：活动分发时，必选活动类型（1：裂变大师活动） */
    activityType?: number;
    /** 分配渠道：0:导购分发   1：活动分发 2：直接分发导购 */
    apportionChannel: number;
    /** 优惠券店铺集合 */
    couponGuideList?: CouponGuideVo[];
    /** 优惠券店铺集合 */
    couponShopList?: CouponShopVo[];
    /** 活动优惠券信息 */
    sgActivityCoupon?: SgActivityCoupon;
  };

  type SgCustomerConfigDao = {
    brandId?: number;
    changeNum?: number;
    changeType?: number;
    createTime?: string;
    dataSource?: string;
    id?: number;
    recruitType?: number;
    state?: number;
    updateTime?: string;
  };

  type SgCustomerTransferTaskDetailVO = {
    /** 会员头像 */
    customerHeadImage?: string;
    /** 会员信息的手机号 */
    customerMobile?: string;
    /** 会员名 */
    customerName?: string;
    /** 会员转移状态 : '0未转移 1转移成功 -1 转移失败 2转移中 */
    customerStatus?: number;
    customerStatusName?: string;
    encCustomerMobile?: string;
    encCustomerName?: string;
    /** 好友userId */
    externalUserId?: string;
    /** 备注 */
    friendFailureMsg?: string;
    /** 好友头像 */
    friendHeadImage?: string;
    /** 好友信息手机号 */
    friendMobile?: string;
    /** 好友昵称 */
    friendNick?: string;
    /** 唯一值Id */
    id?: number;
    /** 会员卡号 */
    memberCard?: string;
    /** 新添加人 */
    newAddPeople?: string;
    oldGuideId?: number;
    /** 原专属导购 */
    oldGuideName?: string;
    oldShopId?: number;
    /** 原专属门店 */
    oldShopName?: string;
    /** 操作人 */
    operatorName?: string;
    /** 原添加人 */
    originalAddPeople?: string;
    receiveGuideId?: number;
    /** 新专属导购 */
    receiveGuideName?: string;
    receiveShopId?: number;
    /** 新专属门店 */
    receiveShopName?: string;
    /** 性别 :  -1未知，0：女，1：男' */
    sex?: number;
    sexName?: string;
    /** 离职状态 */
    status?: number;
    /** 接替状态 : 0未处理 1-接替完毕 2-等待接替 3-客户拒绝 4-接替成员客户达到上限 5-无接替记 */
    takeoverStatus?: number;
    takeoverStatusName?: string;
    /** 任务Id */
    taskId?: string;
    /** 转移时间 */
    transferTime?: string;
    /** 转移类型 1转移门店，2转移会员，null 全部 */
    transferType?: number;
    /** 微信unionId */
    unionId?: string;
  };

  type SgCustomerTransferTaskVO = {
    /** 操作人Id */
    operator?: number;
    /** 操作人名称 */
    operatorName?: string;
    /** 转移人数 */
    taskCount?: number;
    /** 任务Id */
    taskId?: string;
    /** 转移时间 */
    transferTime?: string;
    /** 转移类型 */
    transferType?: number;
  };

  type SgGroupConfigDao = {
    appId?: string;
    attrsMap?: Record<string, any>;
    content?: string;
    corpId?: string;
    couponState?: number;
    createTime?: string;
    customerTagLogSwitch?: number;
    dataSource?: string;
    eventTrackSwitch?: number;
    eventTrackSwitchGeneral?: number;
    groupId?: number;
    id?: number;
    lastId?: number;
    lastSynTime?: string;
    linkType?: number;
    mallAppletAppid?: string;
    memberShowSwitch?: number;
    modifyAttrs?: string[];
    recruitLinkType?: number;
    recruitSmsVerifSwitch?: number;
    state?: number;
    synWeworkFriend?: number;
    synWeworkFriendTime?: string;
    transferSuccessMsg?: string;
    updateTime?: string;
    whiteList?: number;
  };

  type SgGroupConfigVo = {
    /** 链接内容(json格式) */
    content?: string;
    /** 优惠券状态：0关闭，1开启 */
    couponState?: number;
    /** 链接类型 1：H5链接 2：小程序链接 */
    linkType?: number;
    /** 非会员展示开关:1启用 0禁用 */
    memberShowSwitch?: number;
    /** 设置招募链接类型 1:系统预置链接 2:自定义链接 */
    recruitLinkType?: number;
  };

  type SgGuideShop = {
    createTime?: string;
    dataSource?: string;
    groupId?: number;
    guideId?: number;
    id?: number;
    job?: number;
    qrcode?: string;
    shopId?: number;
    state?: number;
    updateTime?: string;
  };

  type SgLbsActivityAdduserQuery = {
    /** 活动的结束时间 */
    activityEndTime?: string;
    /** 活动的开始时间 */
    activityStartTime?: string;
    /** 添加朋友的结束时间 */
    addFriendsEndTime?: string;
    /** 添加朋友开始时间 */
    addFriendsStartTime?: string;
    /** 查询结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 活动guid */
    guid: string;
    /** 设置状态 */
    setState?: number;
    /** 店铺Id */
    shopIdList?: number[];
    /** 查询开始时间 */
    startTime?: string;
    timeType?: number;
    /** 查询结束时间 */
    type?: number;
  };

  type SgLbsActivityDTO = {
    /** 活动二维码图片X轴位置 */
    activityPositionX?: number;
    /** 活动二维码图片Y轴位置 */
    activityPositionY?: number;
    /** 活动海报Url */
    activityPoster?: string;
    /** 活动二维码宽度 */
    activityQrcodeWidth?: number;
    /** 区域id */
    areaId?: number;
    /** 区域id */
    areaList?: number[];
    /** 区域id */
    areaListStr?: string;
    /** 渠道 */
    channelCodeList?: string[];
    /** 创建者id */
    createId?: number;
    /** 结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 活动唯一标识 */
    guid?: string;
    /** id */
    id?: number;
    /** 门店区域类型。 1-门店 2-区域 */
    lbsShopType?: number;
    /** 活动名称 */
    name?: string;
    /** 二维码图片x轴位置 */
    positionX?: number;
    /** 二维码图片y轴位置 */
    positionY?: number;
    /** 二维码海报背景Url */
    qrcodePoster?: string;
    /** 聚合码设置 1：门店全部员工 2：仅店长 */
    qrcodeType?: number;
    /** 二维码宽度 */
    qrcodeWidth?: number;
    /** 自动建群序号 */
    roomBaseId?: number;
    /** 自动建群的群名称 */
    roomBaseName?: string;
    /** 群名称规则 */
    roomRule?: string;
    /** 群成员数量限制 */
    roomUserNum?: number;
    /** 活动参与门店 */
    shopIdList?: number[];
    /** 开始时间 */
    startTime?: string;
    /** 活动状态 */
    state?: number;
    /** 有效时间 1：固定时间  2：永久有效 */
    timeType?: number;
    /** 类型  1：群拉新  2：好友拉新 */
    type?: number;
    /** 引导页海报url */
    welcomePoster?: string;
  };

  type SgLbsActivityEditQuery = {
    /** 集团Id */
    groupId?: number;
    /** 活动guid */
    guid: string;
    /** 活动类型（1：群拉新  2：好友拉新） */
    type?: number;
  };

  type SgLbsActivityPictureQuery = {
    activityPositionX: number;
    activityPositionY: number;
    activityPoster: string;
    activityQrcodeWidth: number;
    qrcodeImgUrl: string;
  };

  type SgLbsChatRoomGroupQuery = {
    chatIdList?: string[];
    configId?: string;
    corpId?: string;
    groupId?: number;
    guid?: string;
    scene?: number;
    shopId?: number;
  };

  type SgLbsDeleteChatRoomQuery = {
    /** 群聊id */
    chatId: string;
    /** 群聚合二维码配置id */
    configId: string;
    /** 集团Id */
    groupId?: number;
    /** 活动guid */
    guid: string;
  };

  type SgLbsEndActivityQuery = {
    /** 创建人id */
    createId: number;
    /** 集团id */
    groupId?: number;
    /** 活动guid */
    guid: string;
    /** 活动类型（1：群拉新  2：好友拉新） */
    type?: number;
  };

  type SgLbsRebuildQrCodeQuery = {
    /** 好友拉新活动唯一标识 */
    guid?: string;
  };

  type SgLossGuideAssetRuleDTO = {
    /** 事件类型：1-离职,2-删除,3-更换门店,4-关店,5-暂停店 */
    eventType?: number;
    /** 会员流向类型：1-原导购名下,2-无专属导购名下,3-原店长名下 */
    memberFlow?: number;
  };

  type SgOperateMenuDao = {
    code?: string;
    commonState?: number;
    createTime?: string;
    dataSource?: string;
    deluxeState?: number;
    description?: string;
    icon?: string;
    id?: number;
    menuStatus?: number;
    name?: string;
    parentId?: number;
    platinumState?: number;
    professionalState?: number;
    sort?: number;
    state?: number;
    type?: string;
    updateTime?: string;
    url?: string;
  };

  type SgQuicklyWordResponse = {
    /** 快捷话术内容 */
    content?: string;
    /** Id */
    id?: number;
    /** 关键词 */
    keyWord?: string;
    /** 快捷话术分组Id */
    wordGroupId?: number;
  };

  type SgQuicklyWordResponseVo = {
    /** 错误码 */
    code?: string;
    /** 消息 */
    msg?: string;
    /** 结果 */
    result?: SgQuicklyWordResponse;
    /** 是否成功，true = 成功，false = 失败 */
    success?: boolean;
    /** 请求id */
    traceId?: string;
  };

  type SgRedpackCoverduixiang = {
    attrsMap?: Record<string, any>;
    /** 背景图 */
    background?: string;
    createTime?: string;
    dataSource?: string;
    /** 集团id */
    groupId?: number;
    id?: number;
    /** 是否默认封面 */
    isDefault?: boolean;
    modifyAttrs?: string[];
    /** 封面名称 */
    name?: string;
    /** 操作人id */
    operatorId?: number;
    /** 操作人姓名 */
    operatorName?: string;
    /** 状态:0删除、1有效 */
    state?: number;
    updateTime?: string;
  };

  type SgRedpackPolicyDao = {
    attrsMap?: Record<string, any>;
    benediction?: string;
    coverId?: number;
    createId?: number;
    createName?: string;
    createTime?: string;
    customizeType?: number;
    dataSource?: string;
    endTime?: string;
    everyoneLimit?: number;
    groupId?: number;
    id?: number;
    launchType?: number;
    limitType?: number;
    modifyAttrs?: string[];
    money?: number;
    moneyMax?: number;
    moneyMin?: number;
    name?: string;
    payConfigId?: number;
    redpackType?: number;
    remainder?: number;
    startTime?: string;
    state?: number;
    timeType?: number;
    total?: number;
    updateTime?: string;
  };

  type SgSecruitmentSetDaoReq = {
    createTime?: string;
    dataSource?: string;
    groupId?: number;
    id?: number;
    secruitmentNumberType?: number;
    secruitmentType?: number;
    signUpUrl?: string;
    updateTime?: string;
  };

  type SgSecruitmentSetDaoRes = {
    attrsMap?: Record<string, any>;
    createTime?: string;
    dataSource?: string;
    groupId?: number;
    id?: number;
    modifyAttrs?: string[];
    secruitmentNumberType?: number;
    secruitmentType?: number;
    signUpUrl?: string;
    updateTime?: string;
  };

  type SgSysConfigVo = {
    code: string;
    id: number;
    remark?: string;
    type?: number;
    value: string;
  };

  type SgWeWorkChannel = {
    channelCode?: string;
    channelName?: string;
    corpId?: string;
    createTime?: string;
    creatorId?: string;
    creatorName?: string;
    dataSource?: string;
    groupId?: number;
    id?: number;
    state?: number;
    type?: number;
    updateTime?: string;
    welcomeCodeUuid?: string;
  };

  type SgWeWorkExternalProfileDao = {
    createTime?: string;
    dataSource?: string;
    groupId?: number;
    id?: number;
    name?: string;
    operateId?: number;
    operateName?: string;
    signature?: string;
    state?: number;
    style?: number;
    syncStatus?: number;
    topImgUrl?: string;
    updateTime?: string;
    webTitle?: string;
    webUrl?: string;
  };

  type SgWeworkTagDao = {
    attrsMap?: Record<string, any>;
    corpId?: string;
    createTime?: string;
    created?: string;
    dataSource?: string;
    groupId?: number;
    id?: number;
    isTagGroup?: number;
    modifyAttrs?: string[];
    orderNum?: number;
    parentTagId?: string;
    state?: number;
    tagId?: string;
    tagName?: string;
    type?: number;
    updateTime?: string;
  };

  type SgWeWorkTagDTO = {
    /** 排序 */
    order?: number;
    /** 逻辑状态 0删除 1正常 */
    state?: number;
    /** 标签组ID */
    tagGroupId?: string;
    /** 标签ID */
    tagId?: string;
    /** 标签名称 */
    tagName?: string;
  };

  type SgWxAccount = {
    addressCorpsecret?: string;
    agentId?: number;
    appid?: string;
    corpid?: string;
    corpsecret?: string;
    createTime?: string;
    dataSource?: string;
    downloadDomain?: string;
    fromType?: number;
    groupId?: number;
    headImg?: string;
    id?: number;
    name?: string;
    payCertificateUrl?: string;
    payId?: string;
    paySecret?: string;
    payTimeRange?: string;
    principalName?: string;
    qrcodeUrl?: string;
    requestDomain?: string;
    secret?: string;
    signature?: string;
    state?: number;
    type?: number;
    updateTime?: string;
    uploadDomain?: string;
    userAeskey?: string;
    userCorpsecret?: string;
    userToken?: string;
    verifyType?: number;
    webviewDomain?: string;
    workEnvironment?: number;
    wsRequestDomain?: string;
    wxStatus?: number;
  };

  type SgWxAccountVo = {
    addressCorpsecret?: string;
    appid: string;
    corpid?: string;
    corpsecret?: string;
    fromType?: number;
    groupId?: number;
    id?: number;
    name: string;
    openKey?: string;
    openSecret?: string;
    payId?: string;
    paySecret?: string;
    secret?: string;
    type: number;
    userAeskey?: string;
    userCorpsecret?: string;
    userToken?: string;
  };

  type SgWxQyChatRoomAnalysisQuery = {
    /** 群id */
    chatId?: string;
    /** 查询结束时间 */
    endTime?: string;
    /** 导购id列表 */
    guideIds?: string;
    length?: number;
    /** 群主 */
    owner?: string;
    start?: number;
    /** 查询开始时间 */
    startTime?: string;
  };

  type SgWxQyChatRoomSessionStatisticsQuery = {
    /** 查询结束时间 */
    endTime?: string;
    /** 用户id列表 */
    guideIds?: string;
    length?: number;
    start?: number;
    /** 查询开始时间 */
    startTime?: string;
  };

  type shangchuanhaopingfanxianexcelshangpinjieguo = {
    /** 上传好评返现excel商品结果,返回fileKey */
    excelFileKey?: string;
  };

  type shangpinliebiao = {
    /** 商品分类 */
    cid?: string;
    /** 商品sku信息 */
    itemSkuList?: Sku[];
    /** 商品URL */
    itemUrl?: string;
    /** 外部商品编码 */
    outItemId?: string;
    /** 商家编码 */
    outerId?: string;
    /** 商品主图片 */
    pictureUrl?: string;
    /** 商品副图片 */
    pictureUrls?: string;
    /** 售价 */
    price?: number;
    /** 客道产品ID */
    productId?: number;
    /** 店铺id */
    shopId?: number;
    /** 商品名称 */
    title?: string;
  };

  type shangpinliebiaoqingqiu = {
    /** 商家编码 */
    outerId?: string;
    /** 平台id */
    platformId?: number;
    /** 卖家昵称 */
    sellerNick?: string;
    /** 店铺id */
    shopId?: number;
    /** 商品名称 */
    title?: string;
  };

  type shangpinSkuliebiaoqingqiu = {
    /** 平台id */
    platformId?: number;
    /** 客道产品ID */
    productId?: number;
    /** 卖家昵称 */
    sellerNick?: string;
  };

  type shangpinskuxinxi = {
    /** 商品划线价 */
    markedPrice?: number;
    /** SKU级商家外部编码 */
    outerSkuId?: string;
    /** Sku图片 */
    pictureUrl?: string;
    /** 售价 */
    price?: number;
    /** SKU级商家外部编码 */
    properties?: Skushuxingmingcheng[];
    /** skuId */
    skuId?: string;
    /** 商品零售价 */
    suggestPrice?: number;
    /** 系统级skuId */
    sysSkuId?: number;
  };

  type shenhelishijilubiaoxiangqing = {
    /** 企业id */
    groupId?: number;
    /** 自增主键 */
    id?: number;
    /** 活动消息id */
    messageId?: number;
    /** 审核说明 */
    processExplain?: string;
    /** 审核结果 */
    processResult?: string;
    /** 审核时间 */
    processTime?: string;
    /** 审核人 */
    processUser?: string;
    /** 审核提交时间 */
    submitTime?: string;
  };

  type shezhirpazhanghaoshu = {
    /** 客户id(对应sg_rpa_group的id) */
    clientId?: number;
    /** rpa账号数 */
    rpaNum?: number;
    /** 坐席账号数 */
    seatNum?: number;
    /** RPA帐号有效时长(单位：月) */
    validPeriod?: number;
  };

  type shiyongdeyonghu = {
    /** 类型 1 全部员工；  2 指定店铺；3 指定员工 */
    type?: number;
    /** 使用人id列表 */
    value?: number[];
  };

  type ShopAndGuideDTO = {
    /** 导购Id */
    guideId?: number;
    /** 店铺Id */
    shopId?: number;
  };

  type ShopBatchVo = {
    id?: number;
    shopId?: number;
  };

  type ShopCustomerVO = {
    activatePlatforms?: number[];
    activateTime?: string;
    customerFrom?: number;
    customerHeadImage?: string;
    /** 会员名 */
    customerName?: string;
    encCustomerName?: string;
    encMobile?: string;
    grade?: number;
    gradeName?: string;
    headImageId?: number;
    /**  会员卡号 */
    memberCard?: string;
    mobile?: string;
    nickInfoList?: CustomerInTimeNickInfo[];
    outAlias?: string;
    /** 昵称 */
    outNick?: string;
    platform?: number;
    relationship?: number;
    sex?: number;
    /**  专属导购Id */
    sgExclusiveGuideId?: number;
    /** 专属导购名称 */
    sgExclusiveGuideName?: string;
    sgExclusiveShopId?: number;
    sgExclusiveShopName?: string;
    status?: number;
    sysCustomerId?: number;
  };

  type ShopDTO = {
    /** 店铺ID */
    shopId?: number;
    /** 名称 */
    shopName?: string;
  };

  type ShopFindVo = {
    brandId?: number;
    shopIds?: string;
    shopName?: string;
    shopStatus?: number;
    shopType?: string;
  };

  type ShopListResponse = {
    kdShopDTOList?: KdShopDTO[];
    /** youzan 有赞   taobao 淘宝，jd 京东  tiktok 抖店 */
    platName?: string;
  };

  type ShopPageDTO = {
    id?: number;
    shop_name?: string;
  };

  type ShopPerfVo = {
    brandId?: number;
    city?: string;
    date?: string;
    district?: string;
    province?: string;
    shopIds?: string;
    shopName?: string;
    shopStatus?: number;
    shopType?: string;
    type?: number;
  };

  type ShopPlatInfo = {
    platID?: number;
    platName?: string;
    platType?: number;
  };

  type ShopRewardRuleGetRequest = {
    /** appKey */
    appkey: string;
    /** 公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 线下门店ID */
    offlineShopId: number;
    /** 销售提成状态：0关闭、1开启 不传默认查询全部状态规则 */
    salesStatus?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type ShopUrlDTO = {
    /** 店铺名称 */
    shopName?: string;
    /** 路径 */
    url?: string;
  };

  type shoudansopcelvejingzhunyingxiaoshiti = {
    /** 社群营销)是否修改营销活动优惠券：0：未修改，1：已修改 */
    isModifyCoupon?: number;
    /** 精准营销)是否修改营销活动商品：0：未修改，1：已修改 */
    isModifyGoods?: number;
    /** (精准营销)附件(1: 图片; 2: 视频; 3: 链接; 4: 小程序; 5: 二维码海报) */
    privateChatAttachment?: string;
    /** (精准营销)已扣减数量 */
    privateChatCouponDeduct?: number;
    /** (精准营销)优惠券库存冻结ID */
    privateChatCouponFreezeId?: number;
    /** (精准营销)优惠券id */
    privateChatCouponId?: number;
    /** (精准营销)群消息推送优惠券名称 */
    privateChatCouponName?: string;
    /** (精准营销)剩余数量 */
    privateChatCouponRest?: number;
    /** (精准营销)优惠券库存 */
    privateChatCouponStock?: number;
    /** (精准营销)商品名称 */
    privateChatGoodsName?: string;
    /** (精准营销)商品图片链接 */
    privateChatGoodsUrl?: string;
    /** (精准营销)推送方式(1好友消息) */
    privateChatPushWay?: number;
    /** (精准营销)推荐话术 */
    privateChatWord?: string;
  };

  type shoudansopcelveruhuishiti = {
    /** (入会)再次入会小程序封面图地址 */
    appImageUrl?: string;
    /** (入会)再次入会小程序标题 */
    appTitle?: string;
    /** (入会)再次入会小程序链接 */
    appUrl?: string;
    /** (入会)再次入会小程序AppId */
    appid?: string;
    /** (入会)首次入会小程序封面图地址 */
    firstInitiationAppImageUrl?: string;
    /** (入会)首次入会小程序标题 */
    firstInitiationAppTitle?: string;
    /** (入会)首次入会小程序链接 */
    firstInitiationAppUrl?: string;
    /** (入会)首次入会小程序AppId */
    firstInitiationAppid?: string;
    /** (入会)推送方式(1好友消息) */
    initiationPushWay?: number;
    /** (入会)再次入会开关 */
    initiationSecondSwitch?: boolean;
    /** (入会)再次入会会员链接 */
    initiationSecondUrl?: string;
    /** (入会)预置链接设置ID */
    initiationSecondUrlSettingId?: string;
    /** (入会)再次入会会员链接类型(1系统预制,2自定义) */
    initiationSecondUrlType?: number;
    /** (入会)再次入会推荐话术 */
    initiationSecondWord?: string;
    /** (入会)会员链接 */
    initiationUrl?: string;
    /** (入会)预置链接设置ID */
    initiationUrlSettingId?: string;
    /** (入会)入会会员链接类型(1系统预制,2自定义) */
    initiationUrlType?: number;
    /** (入会)推荐话术 */
    initiationWord?: string;
  };

  type shoudansopcelveruqunshiti = {
    /** (入群)群聚合码配置Id */
    invited2chatroomConfigId?: string;
    /** (入群)群id */
    invited2chatroomId?: string;
    /** (入群)群名称 */
    invited2chatroomName?: string;
    /** (入群)推送方式(1好友消息) */
    invited2chatroomPushWay?: number;
    /** (入群)群聚合码链接地址 */
    invited2chatroomUrl?: string;
    /** (入群)推荐话术 */
    invited2chatroomWord?: string;
  };

  type shoudansopcelveshequnyingxiaoshiti = {
    /** (社群营销)群消息推送附件(1: 图片; 2: 视频; 3: 链接; 4: 小程序; 5: 二维码海报) */
    chatroomAttachment?: string;
    /** (社群营销)已扣减数量 */
    chatroomCouponDeduct?: number;
    /** (社群营销)群消息推送优惠券设置库存冻结ID */
    chatroomCouponFreezeId?: number;
    /** (社群营销)群消息推送优惠券id */
    chatroomCouponId?: number;
    /** (社群营销)群消息推送优惠券名称 */
    chatroomCouponName?: string;
    /** (社群营销)群消息推送剩余数量 */
    chatroomCouponRest?: number;
    /** (社群营销)群消息推送优惠券设置库存 */
    chatroomCouponStock?: number;
    /** (社群营销)群消息推送商品名称 */
    chatroomGoodsName?: string;
    /** (社群营销)群消息推送商品图片链接 */
    chatroomGoodsUrl?: string;
    /** (社群营销)群消息推送方式(1群消息) */
    chatroomPushWay?: number;
    /** (社群营销)群消息推送推荐话术 */
    chatroomWord?: string;
    /** 社群营销)是否修改营销活动优惠券：0：未修改，1：已修改 */
    isModifyCoupon?: number;
    /** 精准营销)是否修改营销活动商品：0：未修改，1：已修改 */
    isModifyGoods?: number;
    /** (社群营销)朋友圈推送附件(1图片) */
    momentsAttachment?: string;
    /** (社群营销)朋友圈推送方式(1朋友圈) */
    momentsPushWay?: number;
    /** (社群营销)朋友圈推送推荐话术 */
    momentsWord?: string;
  };

  type shoudansopcelveshiti = {
    /** 首单sop策略社群营销实体 */
    chatroomPushDTO?: shoudansopcelveshequnyingxiaoshiti;
    /** 首单sop策略入会实体 */
    initiationDTO?: shoudansopcelveruhuishiti;
    /** 首单sop策略入群实体 */
    invited2chatroomDTO?: shoudansopcelveruqunshiti;
    /** 首单sop策略精准营销实体 */
    privateChatDTO?: shoudansopcelvejingzhunyingxiaoshiti;
  };

  type shoudanSOPmeirishujubaobiao = {
    /** 客单价 */
    customerPrice?: number;
    /** 日期 */
    executionDate?: string;
    /** 付款人数 */
    payOrderPersonTotal?: number;
    /** 付款金额 */
    payOrderPriceTotal?: number;
    /** 付款笔数 */
    payOrderQuantityTotal?: number;
    /** 下单笔数 */
    placeOrderNumberTotal?: number;
    /** 下单人数 */
    placeOrderPersonTotal?: number;
    /** 下单金额 */
    placeOrderPriceTotal?: number;
    /** 下单件数 */
    placeOrderQuantityTotal?: number;
    /** 预计触达人数 */
    preReachPersonTotal?: number;
  };

  type shouyegailanchaxuntiaojian = {
    /** 截止日期 */
    endDate?: string;
    /** 门店id */
    shopId?: number;
    /** 起始日期 */
    startDate?: string;
  };

  type shouyegailanmendianfenbu = {
    /** 新加好友(人) */
    addFriendCount?: string;
    /** 经纬度 (第一位经度, 第二位纬度) */
    lngLat?: string[];
    /** 招募会员(人) */
    recruitMemberCnt?: string;
    /** 提成总额(元) */
    reward?: string;
    /** 销售金额(元) */
    salesPayment?: string;
    /** 门店id */
    shopId?: number;
    /** 门店名称 */
    shopName?: string;
  };

  type shouyegailanmendianfenbudetu = {
    /** 中心经纬度 (第一位经度, 第二位纬度) */
    center?: string[];
    /** 首页概览 - 门店分布 */
    shopDistributionList?: shouyegailanmendianfenbu[];
  };

  type shouyegailanqushigailan = {
    /** 趋势集合 */
    trendList?: qushishitu[];
  };

  type shouyegailanqushigailanchaxuntiaojian = {
    /** 截止日期 */
    endDate?: string;
    /** 门店id */
    shopId?: number;
    /** 起始日期 */
    startDate?: string;
    /** 趋势概览类型(0-好友数, 1-群聊数, 2-群聊好友数, 3-已回复单聊占比, 4-平均首次回复时长) */
    trendOverviewType?: number;
  };

  type shouyegailanshujugailanchaxuntiaojian = {
    /** 数据概览类型集合 */
    dataOverviewTypes?: string[];
    /** 截止日期 */
    endDate?: string;
    /** 导购Id */
    guideId?: number;
    /** 门店id */
    shopId?: number;
    /** 起始日期 */
    startDate?: string;
  };

  type shouyegailanshujugailanshujuxinxi = {
    /** 昨日新增数 */
    addCnt?: string;
    /** 昨日流失数 */
    lossCnt?: string;
    /** 昨日总数 */
    total?: string;
  };

  type shouyegailanshujugailanxinxi = {
    /** 平均首次回复时长 */
    avgFirstReplyTime?: shouyegailanshujugailanshujuxinxi;
    /** 已绑定店铺身份客户数 */
    bindDataStatistics?: shouyegailanshujugailanshujuxinxi;
    /** 聊天总数 */
    chatStatistics?: shouyegailanshujugailanshujuxinxi;
    /** 好友首单激活率 */
    friendActivationRate?: shouyegailanshujugailanshujuxinxi;
    /** 好友总数 */
    friendsStatistics?: shouyegailanshujugailanshujuxinxi;
    /** 总群好友数 */
    groupChatFriendsStatistics?: shouyegailanshujugailanshujuxinxi;
    /** 总群数 */
    groupChatStatistics?: shouyegailanshujugailanshujuxinxi;
    /** 已回复聊天占比 */
    percentageOfChatReplies?: shouyegailanshujugailanshujuxinxi;
    /** 招募会员数 */
    recruitMemberStatistics?: shouyegailanshujugailanshujuxinxi;
    /** 门店销售金额 */
    salesStatistics?: shouyegailanshujugailanshujuxinxi;
  };

  type shouyegailanSOP = {
    /** 运行中sop策略总数 */
    executePolicyTotal?: string;
    /** 策略运行中数量趋势 */
    executePolicyTotalTrend?: qushishitu[];
    /** 付费金额 (元) */
    moneyTotal?: string;
    /** 未开始sop策略总数 */
    notStartPolicyTotal?: string;
    /** 策略未开始数量趋势 */
    notStartPolicyTotalTrend?: qushishitu[];
    /** 总下单笔数 (笔) */
    orderNumTotal?: string;
    /** 付费人数 (人) */
    paymentPersonTotal?: string;
    /** 策略总数 (个) */
    policyTotal?: string;
    /** 策略总数趋势 */
    policyTotalTrend?: qushishitu[];
  };

  type shouyegailantuijiangongnengxiangqing = {
    /** 内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
    /** 跳转的链接地址 */
    externalUrl?: string;
    /** 主键id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 功能类型: 0-推荐功能 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type shouyegailanzhinengdabiao = {
    /** 未启用 */
    disabledCount?: number;
    /** 运行中 */
    executeCount?: number;
    /** 打标任务数趋势 */
    markTaskTrend?: qushishitu[];
    /** 打标任务数 (个) */
    total?: number;
  };

  type shouyegailanzuijinxiaoxixiangqing = {
    /** 消息内容 */
    content?: string;
    /** 创建时间 */
    createTime?: string;
    /** 跳转的链接地址 */
    externalUrl?: string;
    /** 主键id */
    id?: number;
    /** 消息标题 */
    title?: string;
    /** 消息类型: 0-功能更新, 1-企微公告 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type showUsingGET1Params = {
    /** id */
    id: number;
  };

  type showUsingGET2Params = {
    /** 任务id */
    messageId: number;
  };

  type showUsingGET3Params = {
    /** messageId */
    messageId: number;
  };

  type showUsingGETParams = {
    /** id */
    id: number;
  };

  type shujufenxicelveqishiti = {
    /** 累计进入人数 */
    allEnterNum?: number;
    /** 累计触达人数 */
    allReachNum?: number;
    /** 策略器id */
    id?: number;
    /** 策略器名称 */
    name?: string;
    /** 节点id */
    nodeId?: string;
    /** 节点优先级(同级的节点,优先级高的优先执行) */
    priority?: number;
    /** 目标完成人数 */
    targetCompleteNum?: number;
    /** 目标转化率 */
    targetCompleteRate?: string;
  };

  type shujufenxihuabujichuxinxi = {
    /** 是否开启目标设置(0:不开启,1:开启) */
    enableTargetSettings?: number;
    /** 活动结束时间 */
    endTime?: string;
    /** 过滤条目关系 */
    filterRelation?: SopFilterRelationDTO[];
    /** 画布id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 节点id */
    nodeId?: string;
    /** 重复天(周一到周日或1号到31号,若类型为每周,41到47表示周一到周日),有多个时用逗号分隔 */
    repeatDay?: string;
    /** 循环执行时间几点几分 */
    repeatTime?: LocalTime;
    /** 循环执行类型(1每天,2每周,3每月) */
    repeatType?: number;
    /** 活动开始时间 */
    startTime?: string;
    /** 状态(1草稿,2运行,3暂停,4结束) */
    status?: number;
    /** 目标人群 */
    targetCrowd?: SopFilterSettingDTO[];
    /** 目标设置 */
    targetSetting?: SopFilterSettingDTO[];
    /** 类型,1单次,2循环 */
    type?: number;
  };

  type shujugailanshujuchaxunvo = {
    /** 结束时间,不传默认近七天 */
    endTime?: string;
    /** 开始时间,不传默认近七天 */
    startTime?: string;
  };

  type Sku = {
    /** Sku图片 */
    pictureUrl?: string;
    /** 属性名称 */
    properties?: SkuPropertyVo[];
    /** skuId */
    skuId?: string;
  };

  type SkuPropertyVo = {
    name?: string;
    value?: string;
  };

  type Skushuxingmingcheng = {
    /** 规格名称 */
    name?: string;
    /** 规格值 */
    value?: string;
  };

  type SkuVo = {
    create_time?: string;
    created?: string;
    id?: number;
    iid?: string;
    modified?: string;
    num_iid?: number;
    outer_id?: string;
    price?: number;
    properties?: string;
    properties_name?: string;
    quantity?: number;
    sku_id?: number;
    update_time?: string;
  };

  type sopcelvefenyechaxunqingqiushiti = {
    /** 体系ID */
    viewId?: number;
  };

  type sopcelvepeizhixiangqing = {
    /** 阶段内容 
 // 入会
{
  "initiationPushWay": 1, // 推送方式(1好友消息)
  "initiationWord": "String", // 推荐话术不能为空
  "initiationUrl": "String", // 入会会员链接不能为空
  "initiationUrlType": 1, // 入会会员链接类型(1系统预制,2自定义)
  "initiationSecondSwitch": false, // 再次入会开关不能为空
  "initiationSecondUrlType": 1, // 再次入会会员链接类型(1系统预制,2自定义)
  "initiationSecondUrl": "String", // 再次入会会员链接不能为空
  "initiationSecondUrlSettingId": "String", // 预置链接配置ID
  "appid": "String", // 再次入会小程序AppId
  "appUrl": "String", // 再次入会小程序链接
  "appTitle": "String", // 再次入会小程序标题
  "appImageUrl": "String" // 再次入会小程序封面图地址
}

// 入群
{
  "invited2chatroomPushWay": 1, // 推送方式(1好友消息)
  "invited2chatroomWord": "String", // 推荐话术
  "invited2chatroomId": "String", // 群id
  "invited2chatroomName": "String", // 群名称
  "invited2chatroomUrl": "String", // 群聚合码链接地址
  "invited2chatroomConfigId": "String" // 群聚合码配置Id
}

// 群营销
{
  "chatroomPushWay": 1,  // 群消息推送方式(1群消息)
  "chatroomWord": "String", // 群消息推送推荐话术
  "chatroomAttachment": "String", // 群消息推送附件(1图片,2视频,3小程序,4链接) {"appid":"",//小程序appid"description":"",//描述"mediaId":"",//素材id，企微素材管理接口返回"page":"",//小程序page路径"picUrl":"",//图片链接（type=3时）"title":"",//标题"type":0,//附件类型（1:图片;2:视频;3:链接;4:小程序;5:二维码海报）"url":"",//跳转链接"urlSettingId":"",//系统预置链接配置id（仅url_type=2时有效）"urlType":0,//跳转链接类型（1:自定义链接;2:系统预置链接）"remoteUrl":""//图片链接（type!=3时）} 
  "chatroomGoodsUrl": "String", // 群消息推送商品图片链接
  "chatroomGoodsName": "String", // 群消息推送商品名称
  "chatroomCouponId": 0, // 群消息推送优惠券id
  "chatroomCouponName": "String", // 优惠券名称
  "chatroomCouponStock": 0, // 群消息推送优惠券设置库存
  "chatroomCouponRest": 0, // 群消息推送剩余数量
  "momentsPushWay": 0, // 朋友圈推送方式不能为空
  "momentsWord": "String", // 朋友圈推送推荐话术不能为空
  "momentsAttachment": "String", // 朋友圈推送附件(1图片)
  "isModifyCoupon": 0, // 是否修改营销活动优惠券
  "isModifyGoods": 0 // 是否修改营销活动商品
}

// 好友营销
{
  "privateChatPushWay": 1, // 推送方式(1好友消息)
  "privateChatWord": "String", // 推荐话术
  "privateChatAttachment": "String", // 附件(1图片,2视频,3小程序,4链接) {"appid":"",//小程序appid"description":"",//描述"mediaId":"",//素材id，企微素材管理接口返回"page":"",//小程序page路径"picUrl":"",//图片链接（type=3时）"title":"",//标题"type":0,//附件类型（1:图片;2:视频;3:链接;4:小程序;5:二维码海报）"url":"",//跳转链接"urlSettingId":"",//系统预置链接配置id（仅url_type=2时有效）"urlType":0,//跳转链接类型（1:自定义链接;2:系统预置链接）"remoteUrl":""//图片链接（type!=3时）}
  "privateChatGoodsUrl": "String", // 商品图片链接
  "privateChatGoodsName": "String", // 商品名称
  "privateChatCouponId": 0, // 优惠券id
  "privateChatCouponName": "String", // 优惠券名称
  "privateChatCouponStock": 0, // 优惠券库存
  "privateChatCouponRest": 0, // 剩余数量
  "isModifyCoupon": 0, // 是否修改营销活动优惠券
  "isModifyGoods": 0 // 是否修改营销活动商品
} */
    configContentObj?: jieduanpeizhineirong;
    /** 企微ID */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 策略id */
    policyId?: number;
    /** 阶段类型 入会1,入群2,社群营销3,精准营销4 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 体系id */
    viewId?: number;
  };

  type sopcelveqifenyechaxunliebiaocanshu = {
    /** 结束时间 */
    endDate?: string;
    /** 开始时间 */
    startDate?: string;
    /** 策略器id */
    strategyId?: number;
  };

  type Sopcelveqishujufenxijieguo = {
    /** 累计进入人数 */
    allEnterNum?: number;
    /** 累计触达人数 */
    allReachNum?: number;
    /** 目标完成人数 */
    targetCompleteNum?: number;
    /** 目标描述 */
    targetDescription?: string;
    /** 目标完成数据单位 */
    targetUnit?: string;
    /** 目标完成实际值 */
    targetValue?: string;
  };

  type Sopcelveqizujian = {
    /** 附件集合 */
    attachmentList?: Sopcelveqizujianfujianxinxi[];
    /** 画布id */
    canvasId?: number;
    /** 群聊ID */
    chatId?: string;
    /** 群聊名称 */
    chatName?: string;
    /** 延时时间:默认0 */
    delayTime?: number;
    /** 发送消息延时类型: 1不发送,2立即发送,3延时发送 */
    delayType?: number;
    /** 触达失败的人群需要打标的id集合 */
    failTagIds?: string;
    /** 过滤条目关系 */
    filterRelation?: Sopguolvtiaojianguanxi[];
    /** 策略器ID */
    id?: number;
    /** 人群过滤条件之间的逻辑关系(1:且，2：或) */
    logicRelation?: number;
    /** 策略器名称 */
    name?: string;
    /** 前端传入的id(不会特别大,不需要bigint),关联工作流节点表的nodeId */
    nodeId?: string;
    /** 节点优先级(同级的节点,从左往右1,2,3,4,数字越小优先级越高) */
    priority?: number;
    /** 人群流量比例(默认为100,上接分流器时会修改该值) */
    proportion?: number;
    /** 发送的富文本 */
    richText?: string;
    /** 触达方式:1朋友圈消息,2群消息,3好友消息 */
    sendType?: number;
    /** 状态 0删除,1正常 */
    state?: number;
    /** 触达成功的人群需要打标的id集合 */
    successTagIds?: string;
    /** 目标人群过滤条件 */
    targetCrowd?: Sopguolvxiangmutongyongpeizhi[];
    /** 时间单位 1:秒,2:分钟,3:小时,4:天,5:周,6:月,7:年 */
    timeUnit?: number;
    /** 策略器类型:1人群属性,2人群行为,3其他策略器 */
    type?: number;
  };

  type Sopcelveqizujianfujianxinxi = {
    /** 小程序app_id */
    appId?: string;
    /** 描述 */
    description?: string;
    /** 附件ID */
    id?: number;
    /** 小程序page路径 */
    page?: string;
    /** 图片链接 */
    picUrl?: string;
    /** 二维码海报配置id（仅type=5时有效） */
    qrcodePlacardConfigId?: number;
    /** OSS地址 */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型 */
    type?: number;
    /** 跳转链接地址 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型 */
    urlType?: number;
  };

  type sopcelveshujugailan = {
    /** 销售对比上周期增加总金额 */
    moneyAddTotal?: number;
    /** 销售总金额 */
    moneyTotal?: number;
    /** 未开始sop策略总数 */
    notStartPolicyTotal?: number;
    /** 首转订单对比上周期增加总数 */
    orderNumAddTotal?: number;
    /** 首转订单总数 */
    orderNumTotal?: number;
    /** 付费转化对比上周期增加总人数 */
    paymentPersonAddTotal?: number;
    /** 付费人数 */
    paymentPersonTotal?: number;
    /** 运行中sop策略总数 */
    policyTotal?: number;
    /** sop策略总数 */
    total?: number;
  };

  type sopcelvezhuanhualoudou = {
    /** 付款人数转化率-周同比 */
    payOrderPersonAddRate?: number;
    /** 付款人数转化率 */
    payOrderPersonRate?: number;
    /** 付款人数 */
    payOrderPersonTotal?: number;
    /** 下单人数转化率-周同比 */
    placeOrderPersonAddRate?: number;
    /** 下单人数转化率 */
    placeOrderPersonRate?: number;
    /** 下单人数 */
    placeOrderPersonTotal?: number;
    /** 预计触达人数-周同比 */
    preReachPersonAddRate?: number;
    /** 预计触达人数 */
    preReachPersonTotal?: number;
  };

  type sopcelvezhuanhuaqushidian = {
    /** 时间点 */
    date?: string;
    /** sop标准转化率下边界 */
    lowerStandardPercentConversion?: number;
    /** sop转化率 */
    percentConversion?: number;
    /** sop标准转化率 */
    standardPercentConversion?: number;
    /** sop标准转化率上边界 */
    upperStandardPercentConversion?: number;
  };

  type SOPfenyeqingqiu = true;

  type SopFilterRelationDTO = {
    /** 区域ID */
    areaId?: number;
    asc?: boolean;
    /** 画布id */
    canvasId?: number;
    /** 企微ID */
    corpId?: string;
    /** 集团ID */
    groupId?: number;
    /** 组类型：1.标签 2.分组 3.属性 4.事件 */
    groupType?: number;
    /** id */
    id?: number;
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 平台类型:1ecrp,2客道 */
    platform?: number;
    /** 1.且,2.或 */
    relation?: number;
    /** 策略器id */
    strategyId?: number;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
    /** 1.组内 2.组间 */
    type?: number;
    /** 产品版本:1天网至尊,2天网旗舰,3地网钻石,4地网铂金,可以包含多个产品版本 */
    version?: number[];
    /** 视角ID */
    viewId?: number;
  };

  type SopFilterSettingDTO = {
    /** 区域ID */
    areaId?: number;
    asc?: boolean;
    /** 画布id */
    canvasId?: number;
    /** 群聊(需要解析json,目前是一个,但是结构为数组) */
    chatRoom?: string;
    /** 配置项编码 */
    code?: string;
    /** 企微ID */
    corpId?: string;
    /** 集团ID */
    groupId?: number;
    /** 配置项id */
    id?: number;
    /** 操作符号，eq等于，between 介于，recent最近，include包含文本，in包含选项，notin 不包含选项,done做过,undo未做过 */
    operate?: string;
    /** 排序字段 */
    orderBy?: string;
    /** 页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 平台类型:1ecrp,2客道 */
    platform?: number;
    /** 最近多久的时间 */
    recentHowLong?: number;
    /** 策略器id */
    strategyId?: number;
    /** 目标id */
    targetId?: number;
    /** 结束时间 */
    timeEnd?: string;
    /** 开始时间 */
    timeStart?: string;
    /** 时间类型:1.起止时间,2.最近 */
    timeType?: number;
    /** 时间单位,1:秒,2:分钟,3:小时,4:天,5:周,6:月,7:年 */
    timeUnit?: number;
    /** 是否需要返回总数，默认返回-1 */
    total?: boolean;
    /** 1.标签 2.分组 3.属性 4.事件 */
    type?: number;
    /** 设定值 */
    value?: string;
    /** 产品版本:1天网至尊,2天网旗舰,3地网钻石,4地网铂金,可以包含多个产品版本 */
    version?: number[];
    /** 视角ID */
    viewId?: number;
  };

  type Sopguolvtiaojianguanxi = {
    /** 组类型：1.属性,2.行为 */
    groupType?: number;
    /** id */
    id?: number;
    /** 1.且,2.或 */
    relation?: number;
    /** 1.组内 2.组间 */
    type?: number;
  };

  type Sopguolvxiangmutongyongpeizhi = {
    /** 配置项编码 */
    code?: string;
    /** 配置项id */
    id?: number;
    /** 操作符号，eq等于，between 介于，recent最近，include包含文本，in包含选项，notin 不包含选项,done做过,undo未做过,yes是，no否 */
    operate?: string;
    /** 平台(1淘宝,2京东,3有赞,4抖店) */
    orderPlatform?: number;
    /** 最近多久的时间 */
    recentHowLong?: number;
    /** 结束时间 */
    timeEnd?: string;
    /** 开始时间 */
    timeStart?: string;
    /** 时间类型:1.起止时间,2.最近 */
    timeType?: number;
    /** 时间单位,1:秒,2:分钟,3:小时,4:天,5:周,6:月,7:年 */
    timeUnit?: number;
    /** 1.标签 2.分组 3.属性 4.事件 */
    type?: number;
    /** 设定值 */
    value?: string;
  };

  type sophuabufenyechaxunliebiaocanshu = {
    /** 根据主键批量查找 */
    ids?: number[];
    /** 画布名称 */
    name?: string;
    /** 画布状态(1草稿,2运行,3暂停,4结束,5模板草稿,6模板上架,7模板下架) */
    status?: number;
    /** 画布类型,1单次,2循环 */
    type?: number;
    /** 视角ID */
    viewId: number;
  };

  type sophuabuguolvxiangzhongdehuiyuandengjishiti = {
    /** 等级 */
    grade?: number;
    /** 等级名称 */
    gradeName?: string;
  };

  type Sophuabujichujiedian = {
    /** 是否开启目标设置(0:不开启,1:开启) */
    enableTargetSettings?: number;
    /** 活动结束时间 */
    endTime?: string;
    /** 过滤条目关系 */
    filterRelation?: Sopguolvtiaojianguanxi[];
    /** 画布id */
    id?: number;
    /** 活动名称 */
    name?: string;
    /** 前端传入节点Id */
    nodeId?: string;
    /** 重复天(周一到周日或1号到31号,若类型为每周,41到47表示周一到周日),有多个时用逗号分隔 */
    repeatDay?: string;
    /** 循环执行时间几点几分 */
    repeatTime?: string;
    /** 循环执行类型(1每天,2每周,3每月) */
    repeatType?: number;
    /** 活动开始时间 */
    startTime?: string;
    /** 状态(1草稿,2运行,3暂停,4结束) */
    status?: number;
    /** 目标人群 */
    targetCrowd?: Sopguolvxiangmutongyongpeizhi[];
    /** 目标设置 */
    targetSetting?: Sopguolvxiangmutongyongpeizhi[];
    /** 画布基于模板创建时，将id传入 */
    templateId?: number;
    /** 类型,1单次,2循环 */
    type?: number;
    /** 体系id */
    viewId?: number;
  };

  type Sophuabujiedianzhixiangguanxi = {
    priority?: number;
    /** 源 */
    sourceId?: string;
    /** 目标 */
    targetId?: string;
  };

  type Sophuabuliebiaoxingxiangmuxiangqing = {
    /** 累计进入人数 */
    allEnterNum?: number;
    /** 累计触达人数 */
    allReachNum?: number;
    /** 活动结束时间 */
    endTime?: string;
    /** 画布ID */
    id?: number;
    /** 画布名称 */
    name?: string;
    /** 重复哪天执行的描述,例:每天12:07:42 */
    repeatDay?: string;
    /** 活动开始时间 */
    startTime?: string;
    /** 画布状态 */
    status?: number;
    /** 目标完成人数 */
    targetCompleteNum?: number;
    /** 目标完成率 */
    targetCompleteRate?: number;
    /** 累计进入/累计触发/累计目标完成 */
    totalEnterTriggerComplete?: string;
    /** 画布的执行类型,例:定时-重复,单次 */
    type?: string;
  };

  type Sophuabuliebiaozhuangtaifenzushuliangxiangqing = {
    /** 完成数量 */
    completeCount?: number;
    /** 草拟数量 */
    draftCount?: number;
    /** 暂停数量 */
    pauseCount?: number;
    /** 运行中 */
    runningCount?: number;
    /** 合计 */
    sumCount?: number;
  };

  type Sophuabuxiangqing = {
    /** 画布基础节点(目标设置,目标人群,画布基础属性) */
    canvasBaseData?: Sophuabujichujiedian;
    /** 节点指向关系 */
    pointDTOList?: Sophuabujiedianzhixiangguanxi[];
    /** 策略器节点集合 */
    strategyList?: Sopcelveqizujian[];
    /** 模板id(更新模板时，将id传入) */
    templateId?: number;
    /** 是否模板 */
    templateOrNot?: boolean;
  };

  type Sopkedaokehufenzuhuoqujiekoucanshu = {
    /** 页码 */
    pageNo?: number;
    /** 每页数量 */
    pageSize?: number;
    /** 店铺id */
    shopId: number;
    /** 客户分组名称,支持模糊查询,不必填 */
    subName?: string;
  };

  type Sopmobanliebiaoxingxiangmuxiangqing = {
    /** 画布id */
    canvasId?: number;
    /** 画布的执行类型,例:定时-重复,单次 */
    canvasType?: number;
    /** 分发商家数量 */
    distributionCount?: number;
    /** 活动结束时间 */
    endTime?: string;
    /** 画布名称 */
    name?: string;
    /** 重复天(周一到周日或1号到31号,若类型为每周,41到47表示周一到周日),多个时用逗号分隔 */
    repeatDay?: string;
    /** 循环执行时间(HH:mm:ss) */
    repeatTime?: LocalTime;
    /** 循环执行类型(1每天,2每周,3每月) */
    repeatType?: number;
    /** 活动开始时间 */
    startTime?: string;
    /** 画布状态 */
    status?: number;
    /** 模板附件（效果预览图） */
    templateAttachment?: string;
    /** 模板描述 */
    templateDescription?: string;
    /** 模板id */
    templateId?: number;
    /** 模板名称 */
    templateName?: string;
    /** 模板类型 */
    templateType?: number;
    /** 缩略图 */
    thumbnail?: string;
    /** 画布的执行类型,例:定时-重复,单次 */
    type?: string;
    /** 使用商家数量 */
    useCount?: number;
  };

  type Sopmobanliebiaozhuangtaifenzushuliangxiangqing = {
    /** 合计 */
    sumCount?: number;
    /** 草稿数量 */
    templateDraft?: number;
    /** 上架数量 */
    templateShelve?: number;
    /** 下架数量 */
    templateUnshelve?: number;
  };

  type sopmobanxiangqing = {
    /** 企微ID */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 是否启用，0为未启用，1为启用 */
    enable?: number;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 当前登录人是否点赞 */
    like?: boolean;
    /** 点赞次数 */
    loveTimes?: number;
    /** 模板内容（json字符串） */
    templateContent?: string;
    /** 模板功能描述 */
    templateDescription?: string;
    /** 模板名称 */
    templateName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 体系id */
    viewId?: number;
  };

  type sopshoudanzhuanhuacelvexiangqing = {
    /** 企微ID */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** sop结束时间 */
    endTime?: string;
    /** 首单转化sop策略配置信息 */
    firstOrderDTO?: shoudansopcelveshiti;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 名称 */
    policyName?: string;
    /** 阶段列表 */
    sopPhaseList?: sopcelvepeizhixiangqing[];
    /** sop开始时间 */
    startTime?: string;
    /** sop状态(1新建,2开启,3终止) */
    status?: number;
    /** 模板id */
    templateId?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 体系id */
    viewId?: number;
  };

  type Sopshujufenxijieguo = {
    /** 累计进入人数 */
    allEnterNum?: number;
    /** 累计触达人数 */
    allReachNum?: number;
    /** 画布分析详情 */
    canvasAnalyse?: shujufenxihuabujichuxinxi;
    /** 子策略器 */
    childStrategyList?: shujufenxicelveqishiti[];
    /** 完成转换率 */
    completeConversionRate?: string;
    /** 画布节点指向关系 */
    pointToList?: Sophuabujiedianzhixiangguanxi[];
    /** 触达转换率 */
    reachConversionRate?: string;
    /** 目标完成人数 */
    targetCompleteNum?: number;
    /** 目标描述 */
    targetDescription?: string;
    /** 目标完成数据单位 */
    targetUnit?: string;
    /** 目标完成实际值 */
    targetValue?: string;
    /** 本周转化率 */
    thisWeekRateData?: meirimubiaozhuanhualv[];
  };

  type sopwenan = {
    /** content */
    content?: string;
    /** policyId */
    policyId?: number;
    /** visible */
    visible?: boolean;
  };

  type sousuocaiwuliushui = {
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 支付appid */
    payAppId?: string;
    /** 支付商户号id */
    payMchId?: string;
    /** 商户付款单号 */
    payNo?: string;
    /** 活动或红包名称 */
    payReason?: string;
    /** 付款时间区间结束 */
    payTimeEnd?: string;
    /** 付款时间区间开始 */
    payTimeStart?: string;
    /** 付款状态:1付款成功、2付款失败 */
    status?: number;
    /** 付款类型:1红包,2好评返现 */
    type?: number;
  };

  type sousuohongbaolingqujilu = {
    /** 客户昵称 */
    customerNick?: string;
    /** 领取结束时间（yyyy-MM-dd HH:mm:ss） */
    endTime?: string;
    /** 发放人 */
    guideIds?: number[];
    /** 投放类型 1：员工发放  2：活动发放 */
    launchType?: number;
    /** 支付商户号Id */
    payConfigId?: string;
    /** 红包发放记录id */
    recordId?: number;
    /** 红包类型 1：普通红包  2：拼手气红包 3：自定义红包 */
    redpackType?: number;
    /** 领取开始时间（yyyy-MM-dd HH:mm:ss） */
    startTime?: string;
  };

  type sousuoleidaqudaobiao = {
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 雷达code */
    radarCode?: string;
  };

  type sousuorpafaxiaoxijieshouren = {
    /** 昵称 */
    chatName?: string;
    /** 企微企业id */
    corpId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 消息id */
    messageId?: number;
    /** 消息类型1: 好友消息; 2: 群消息 */
    messageType?: number;
    /** 流水号 */
    orderNum?: number;
    /** 流水号集合 */
    orderNumSet?: number[];
    /** 发送状态（1: 待创建; 2: 创建成功; 3: 创建失败;4:发送成功; 5:发送失败 ） */
    sendStatus?: number;
    /** 开始时间 */
    startTime?: string;
    /** 状态 */
    status?: number;
  };

  type sousuorpapengyouquanyingxiaobiao = {
    /** 结束时间 */
    endTime?: string;
    /** 活动名称 */
    name?: string;
    /** 开始时间 */
    startTime?: string;
    /** 活动状态,1未执行（定时任务特有）、2执行中、3已执行、4执行失败、5已终止 */
    status?: number;
  };

  type sousuorpapengyouquanzhanghaomingxichaxunshiti = {
    /** 活动id */
    id?: number;
  };

  type sousuorpapiliangjiahaoyouhuodongbiao = {
    /** 结束时间 */
    endTime?: string;
    /** 活动名称 */
    name?: string;
    /** 开始时间 */
    startTime?: string;
    /** 活动状态 */
    status?: number;
  };

  type sousuorpazuoxiguanlianrpazhanghaobiao = {
    /** 企微id */
    corpId?: string;
    /** 集团id */
    groupId?: number;
    /** rpa帐号id */
    rpaAccountId: number;
    /** sg_rpa_seat_account表id */
    seatAccountId?: number;
  };

  type sousuoweixinfukuanzhanghao = {
    /** 商户平台密钥key */
    key?: string;
    /** 商户账号appid */
    mchAppid?: string;
    /** 商户号 */
    mchid?: string;
  };

  type sousuoyuangongribaotixingshezhibiao = {
    /** 创建人 */
    createUser?: string;
    /** 集团id */
    groupId?: number;
    /** 是否删除 0：否 1：是 */
    isDelete?: string;
    /** 是否通知 1-是 0-否 */
    isNotice?: string;
    /** 通知日期 1-7(每周通知的周几)/1-31(每月通知的几号)/ 0-每天通知 */
    noticeDate?: string;
    /** 通知消息类别 11- 销售榜 12-招募榜 13-加好友榜 21-其他的榜单 22-。。23...   存入的数据格式为逗号分割 例如:(11,12,13) */
    noticeMessageType?: string;
    /** 通知对象 11-店长 12-导购 21 -xxx 22... */
    noticeObj?: string;
    /** 通知时间 10:30:00 */
    noticeTime?: string;
    /** 通知时间类别 -每天 每周 每月 1-每天 2-每周 3-每月 */
    noticeTimeType?: string;
    /** 通知类别 如(1-门店导购排行榜 2-其他 等等) */
    noticeType?: string;
    /** 更新人 */
    updateUser?: string;
  };

  type sousuozhinengdabiaodabiaorenwubiao = {
    /** 企微id */
    corpId?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 任务名称 */
    name?: string;
    /** 标签id */
    tagId?: string;
  };

  type sousuozhinengdabiaojuherenwubiao = {
    /** 公司id */
    corpId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 根据主键批量查找 */
    ids?: number[];
    /** 扫描id偏移量 */
    lastId?: number;
    /** 关联任务标题 */
    relationName?: string;
    /** 开始时间 */
    startTime?: string;
    /** 标签id */
    tagId?: string;
    /** 企微智能打标名称 */
    taskName?: string;
    /** 1 启用 ，0 未启用 */
    taskStatus?: number;
  };

  type StaffVisitStatisticsVo = {
    endTime?: string;
    groupId?: number;
    guideId?: string;
    isDesc?: string;
    orderType?: string;
    pageForm?: string;
    startTime?: string;
    systemFrom?: number;
  };

  type startPolicyUsingGETParams = {
    /** policyId */
    policyId: number;
  };

  type startSopCanvasUsingGETParams = {
    /** canvasId */
    canvasId: number;
  };

  type stopPolicyUsingGETParams = {
    /** policyId */
    policyId: number;
  };

  type stopSopCanvasUsingGETParams = {
    /** canvasId */
    canvasId: number;
  };

  type stopUsingGETParams = {
    /** id */
    id: number;
  };

  type StoreCodeRequest = {
    /** appKey */
    appkey: string;
    /** 渠道名称 */
    channelName: string;
    /** 渠道类型：1俱乐部类型 */
    channelType: number;
    /** 企业微信 */
    corpId?: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 二维码类型；1员工、2店长 */
    qrCodeType: number;
    /** 店铺ID */
    shopId: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type strategyDataAnalyseUsingGETParams = {
    /** strategyId */
    strategyId: number;
  };

  type SubdivisionDTO = {
    /** 客户分组id */
    subId?: number;
    /** 客户分组名称 */
    subName?: string;
  };

  type sucaikumeitixinxishiti = {
    /** 附件内容 */
    content: InnerContent;
    /** 主键ID */
    id?: Record<string, any>;
    /** 补充素材ID外键 */
    scriptCompletionId?: Record<string, any>;
    /**  1图片类型 2视频类型 3链接 4小程序 */
    type: Record<string, any>;
  };

  type syncByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type syncUserUsingGETParams = {
    /** chatId */
    chatId?: string;
  };

  type syncWeWorkChatDataToDbUsingGETParams = {
    /** weWorkCorpId */
    weWorkCorpId?: string;
    /** secret */
    secret?: string;
    /** privateKey */
    privateKey?: string;
    /** seq */
    seq?: number;
    /** weWorkLimitSize */
    weWorkLimitSize?: number;
  };

  type SystemMenuLog = {
    /** 搜索落地功能 */
    findMenuName?: string;
    /** 搜索关键词 */
    menuName: string;
  };

  type SystemMenuQuery = {
    /** 菜单Ids */
    menuIds?: string;
    /** 搜索关键词 */
    menuName?: string;
    /** 菜单类型 */
    menuType: string;
  };

  type SystemPresetDto = {
    /** 介绍文本 */
    content?: string;
    /** edit */
    edit?: number;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 图片地址 */
    picture?: string;
    /** 标题 */
    title?: string;
    /** 路径 */
    url?: string;
  };

  type SystemPresetQuery = {
    /** 类型:null默认 1企微欢迎语 2个号智能欢迎语  */
    type?: number;
  };

  type TableRequest = {
    beanMap?: Record<string, any>;
    draw?: number;
    length?: number;
    orderDir?: string;
    orderKey?: string;
    searchMap?: Record<string, any>;
    searchValue?: string;
    start?: number;
  };

  type TableRequestVoGuidePerfVo = {
    length?: number;
    searchMap?: GuidePerfVo;
    start?: number;
  };

  type TableRequestVoMaterialSubdivisionGetDTO = {
    length?: number;
    searchMap?: MaterialSubdivisionGetDTO;
    start?: number;
  };

  type TableRequestVoQuotaFindVo = {
    length?: number;
    searchMap?: QuotaFindVo;
    start?: number;
  };

  type TableRequestVoShopFindVo = {
    length?: number;
    searchMap?: ShopFindVo;
    start?: number;
  };

  type TableRequestVoShopPerfVo = {
    length?: number;
    searchMap?: ShopPerfVo;
    start?: number;
  };

  type TableResponse = {
    data?: Record<string, any>[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseBaseWeChatQrCodePlacardConfigDTO = {
    data?: BaseWeChatQrCodePlacardConfigDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseChannelActivityCouponDTO = {
    data?: ChannelActivityCouponDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseCommodityByConversionQuery = {
    data?: CommodityByConversionQuery[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsedabiaorenwuliebiaofanhuishiti = {
    data?: dabiaorenwuliebiaofanhuishiti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsedangesopcelveshuju = {
    data?: dangesopcelveshuju[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsedaogoujianyaoxinxi = {
    data?: daogoujianyaoxinxi[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsedaogoukehushuliangxinxiVo = {
    data?: daogoukehushuliangxinxiVo[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsedaogourenwuVO = {
    data?: daogourenwuVO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseEmployeePageDTO = {
    data?: EmployeePageDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseFriendTableByAddGuideDTO = {
    data?: FriendTableByAddGuideDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsegongzhonghaodabiaohuodongliebiaoxiangxiangyingti = {
    data?: gongzhonghaodabiaohuodongliebiaoxiangxiangyingti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsegongzhonghaoyingxiaohuodongliebiaoxiangxiangyingti = {
    data?: gongzhonghaoyingxiaohuodongliebiaoxiangxiangyingti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuestCodeActivityDTO = {
    data?: GuestCodeActivityDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuestCodeAwardRecordDTO = {
    data?: GuestCodeAwardRecordDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuestCodeEmployeeDTO = {
    data?: GuestCodeEmployeeDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuestCodeFriendListDTO = {
    data?: GuestCodeFriendListDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuestCodePromotionMasterDTO = {
    data?: GuestCodePromotionMasterDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuestCodePromotionReachStandardDTO = {
    data?: GuestCodePromotionReachStandardDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuideCodePromotionDTO = {
    data?: GuideCodePromotionDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuideInfoDTO = {
    data?: GuideInfoDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseGuideVo = {
    data?: GuideVo[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehaopingfanxiandiaozhengjinejiluxingxiangmu = {
    data?: haopingfanxiandiaozhengjinejiluxingxiangmu[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehaopingfanxianhuodongcanyujilubiaoxiangqing = {
    data?: haopingfanxianhuodongcanyujilubiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehaopingfanxianhuodongwanzhengxiangqing = {
    data?: haopingfanxianhuodongwanzhengxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehaopingfanxianlingquliebiao = {
    data?: haopingfanxianlingquliebiao[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehaopingfanxianshenhejiluxingxiangmu = {
    data?: haopingfanxianshenhejiluxingxiangmu[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehongbaocelveDTO = {
    data?: hongbaocelveDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehongbaofengmianxiangqing = {
    data?: hongbaofengmianxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsehuihuatongjifanhuiduixiang = {
    data?: huihuatongjifanhuiduixiang[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsejuherenwuguanlianderenwushiti = {
    data?: juherenwuguanlianderenwushiti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsekehufenzuduixiangVO = {
    data?: kehufenzuduixiangVO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsekehuqunxiangqingbiaoxiangqing = {
    data?: kehuqunxiangqingbiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseliebiandashiyaoqinghaoyouxiangqing = {
    data?: liebiandashiyaoqinghaoyouxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseLossGuideCapitalRecordDTO = {
    data?: LossGuideCapitalRecordDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseMapstringobject = {
    data?: Record<string, any>[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsemeirimubiaozhuanhualv = {
    data?: meirimubiaozhuanhualv[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsemendianjianyaoxinxi = {
    data?: mendianjianyaoxinxi[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsemendiankehushuliangxinxiVo = {
    data?: mendiankehushuliangxinxiVo[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsemendianrenwukuozhanduixiangVO = {
    data?: mendianrenwukuozhanduixiangVO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseOpenCouponInfo = {
    data?: OpenCouponInfo[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsePersonalQrcodeEffectDto = {
    data?: PersonalQrcodeEffectDto[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsePersonalQrcodeInviterFriendDto = {
    data?: PersonalQrcodeInviterFriendDto[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsePromotionFriendsDTO = {
    data?: PromotionFriendsDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsequnfaxiaoxijieshourenxiangqing = {
    data?: qunfaxiaoxijieshourenxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsequnfaxiaoxixiangqing = {
    data?: qunfaxiaoxixiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsequnfaxiaoxizhixingrenxiangqing = {
    data?: qunfaxiaoxizhixingrenxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsequnxiangqingshuju = {
    data?: qunxiangqingshuju[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseRecord = {
    data?: Record[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserenwukuozhanduixiangVO = {
    data?: renwukuozhanduixiangVO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserenwushujugailanshiti = {
    data?: renwushujugailanshiti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseRpaErrorReportLogDTO = {
    data?: RpaErrorReportLogDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpagongsiguanxixiangqing = {
    data?: rpagongsiguanxixiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpapengyouquanyingxiaobiaoxiangqing = {
    data?: rpapengyouquanyingxiaobiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpapengyouquanyingxiaoxiaoguofenxishiti = {
    data?: rpapengyouquanyingxiaoxiaoguofenxishiti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpapiliangjiahaoyouhuodongbiaoxiangqing = {
    data?: rpapiliangjiahaoyouhuodongbiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpapiliangjiahaoyouhuodongbiaozhixingxiaoguo = {
    data?: rpapiliangjiahaoyouhuodongbiaozhixingxiaoguo[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpapiliangjiahaoyouhuodongshijitianjiadehaoyoumingxibiaoxiangqing = {
    data?: rpapiliangjiahaoyouhuodongshijitianjiadehaoyoumingxibiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseRpaSeatAccountPageDTO = {
    data?: RpaSeatAccountPageDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpazhanghaoxiangqing = {
    data?: rpazhanghaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponserpazuoxiguanlianrpazhanghaobiaoxiangqing = {
    data?: rpazuoxiguanlianrpazhanghaobiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseSgCustomerTransferTaskDetailVO = {
    data?: SgCustomerTransferTaskDetailVO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseshangpinliebiao = {
    data?: shangpinliebiao[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseShopPageDTO = {
    data?: ShopPageDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseshoudanSOPmeirishujubaobiao = {
    data?: shoudanSOPmeirishujubaobiao[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseSophuabuliebiaoxingxiangmuxiangqing = {
    data?: Sophuabuliebiaoxingxiangmuxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseSopmobanliebiaoxingxiangmuxiangqing = {
    data?: Sopmobanliebiaoxingxiangmuxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsesopmobanxiangqing = {
    data?: sopmobanxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsesopshoudanzhuanhuacelvexiangqing = {
    data?: sopshoudanzhuanhuacelvexiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseTransferChatRoomResultDTO = {
    data?: TransferChatRoomResultDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseTransferFriendsResultDTO = {
    data?: TransferFriendsResultDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseTreeNode = {
    data?: TreeNode[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseWeChatNewDTO = {
    data?: WeChatNewDTO[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseWelcomeCodeListVo = {
    data?: WelcomeCodeListVo[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponseyuangongxinxi = {
    data?: yuangongxinxi[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsezhifupeizhifanhuishiti = {
    data?: zhifupeizhifanhuishiti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsezhinengdabiaohaoyouliebiaofanhuishiti = {
    data?: zhinengdabiaohaoyouliebiaofanhuishiti[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TableResponsezhinengdabiaojuherenwubiaoxiangqing = {
    data?: zhinengdabiaojuherenwubiaoxiangqing[];
    draw?: number;
    ext?: Record<string, any>;
    recordsFiltered?: number;
    recordsTotal?: number;
  };

  type TagDTO = {
    level?: number;
    tag?: string;
    tagGroupId?: string;
  };

  type TagSaveVo = {
    /** 区域ID(PC端管理后台场景适用) */
    areaId?: number;
    /** 标签集合 */
    list: TagVo[];
    /** 平台用户唯一标识 */
    nick?: string;
    /** 用户唯一标识类型 */
    nickType?: number;
    /** 门店ID */
    shopId?: number;
    /** 用户customerId */
    sysCustomerId: number;
  };

  type TagVo = {
    /** 标签id */
    id?: number;
    /** 标签属性 */
    value?: string;
  };

  type TargetChatRoomQuery = {
    /** 客户群名称搜索 */
    chatRoomName?: string;
    /** 群发消息id */
    messageId?: number;
  };

  type TargetConditionGuideDTO = {
    /** 导购id */
    id?: number;
    /** 姓名 */
    name?: string;
  };

  type TargetQuery = {
    /** 导购姓名搜索 */
    guideName?: string;
    /** 群发消息id */
    messageId?: number;
    /** 营销人群id集合（具体含义根据message type确定） */
    targetIds?: number[];
    /** 客户分群名称搜索 */
    targetName?: string;
  };

  type TaskProgressDTO = {
    /** 失败数量 */
    failCount?: number;
    /** 导购名称 */
    guideName?: string[];
    /** 主键 */
    id?: number;
    /** 手机号 */
    mobile?: string;
    /** 操作人  */
    operator?: number;
    /** 操作人姓名 */
    operatorName?: string;
    /** 店铺id，分页查询状态有值 */
    shopId?: number;
    /** 任务状态 */
    status?: number;
    /** 成功数量 */
    successCount?: number;
    /** 任务数量,任务数量大于1时候其他字段没有值 */
    taskCount?: number;
    /** 任务id,分页查询状态或任务只有一个的时候有值 */
    taskId?: number;
    /**  操作终端类型 0未知 1后台、2小程序、 3后台资产手动转移、 4后台资产自动转移 */
    terminalType?: number;
    /** 任务数量 */
    total?: number;
    /** 转移范围 1仅会员 2会员+好友 4好友转移  5群转移 */
    transferRange?: number;
    /** 转移时间 */
    transferTime?: string;
    /** 转移任务类型 */
    transferType?: number;
    /** 转移中数量 */
    transferringCount?: number;
  };

  type TaskQueryVo = {
    areaId?: number;
    /** 分页页码 */
    page?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 数据偏移量 */
    pageStart?: number;
    queryDate?: string;
    shopId?: number;
    taskId?: number;
    type?: number;
  };

  type TaskSaveVo = {
    areaId?: number;
    assessmentType?: number;
    /** 任务体系客户下发规则 */
    assignCustomerRule?: renwutixikehuxiafaguizeDTO;
    /** 任务体系客户下发规则类型(0-专属导购, 1-自定义规则) */
    assignCustomerRuleType?: number;
    createUserId?: number;
    endTime: string;
    executorType?: number;
    groupId?: number;
    id?: number;
    materialId?: number;
    materialMsg?: string;
    materialTitle?: string;
    materialType?: number;
    name: string;
    remark?: string;
    runType: number;
    shopId?: number;
    startTime: string;
    subgroupId?: number;
    subgroupName?: string;
    targetIds: string;
    taskCode?: string;
    taskSendTime?: string;
    type: number;
    viewId?: number;
  };

  type templateListUsingGETParams = {
    /** 公众号id */
    offiaccountId: string;
  };

  type TemplateListUsingGETParams = {
    /** id */
    id: number;
  };

  type TemplateMsgContentVo = {
    appletType: number;
    data?: EnterpriseWxTemplateDataVo[];
    description?: string;
    guideIds: string;
    mallId: number;
    page?: string;
    templateId: string;
    title: string;
  };

  type Text = {
    content?: string;
    textContent?: string;
    type?: string;
  };

  type tianjiahaoyoushangbaoqingqiushiti = {
    /** 加友通过时间 */
    addPassedTime: string;
    /** 扩展字段 */
    extraData?: string;
    /** 订单号 */
    orderNum: string;
    /** 状态 */
    status: number;
    /** 上报类型(1:添加好友,3:发送消息,4:发送朋友
圈,5:⾃动登录) */
    type: number;
  };

  type Token = {
    /** 过期时间，单位毫秒 */
    expireIn?: number;
    /** token */
    token?: string;
  };

  type tokenUsingGETParams = {
    /** token */
    token?: string;
  };

  type tongguohexinyaosuchuangjiansopcelvepeizhi = {
    /** 优惠券ID */
    chatroomCouponId?: number;
    /** 优惠券名称 */
    chatroomCouponName?: string;
    /** 优惠券库存 */
    chatroomCouponStock?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 带二维码的商品链接 */
    goodsUrl?: string;
    /** 入群Id */
    invited2chatroomId?: string;
    /** 群名称 */
    invited2chatroomName?: string;
    /** 优惠券信息是否修改,若返回1，优惠券不允许修改 */
    isModifyCoupon?: number;
    /** sop策略名称 */
    policyName?: string;
    /** SOP模板Id */
    templateId?: number;
    /** 体系ID */
    viewId: number;
  };

  type tongjihuiyuanxinxi = {
    /** 跟进成功客户 */
    customerFollowNum?: number;
    /** 联系中客户 */
    customerFollowingNum?: number;
    /** 待跟进客户 */
    customerNoFollowNum?: number;
    /** 分配客户 */
    customerTotal?: number;
    /** 跟进进度 */
    followProgress?: string;
  };

  type toTopUsingGETParams = {
    /** uuid */
    uuid?: string;
    /** topStatus */
    topStatus: number;
  };

  type TransferChatRoomResultDTO = {
    /** 群人数 */
    chatRoomCount?: number;
    /** 群名称 */
    chatRoomName?: string;
    /** 新群主 */
    newOwnerName?: string;
    /** 原群主 */
    oldOwnerName?: string;
    /** 操作人 */
    operator?: number;
    /** 操作人 */
    operatorName?: string;
    /** 备注失败原因 */
    roomFailureMsg?: string;
    /** 转移状态 */
    status?: number;
    /** 转移批次号 */
    taskId?: string;
    /** 终端类型， 1PC 2小程序 */
    terminalType?: number;
    /** 转移时间 */
    transferTime?: string;
  };

  type TransferFriendsResultDTO = {
    /** 好友昵称 */
    externalName?: string;
    /** 备注失败原因 */
    failureMsg?: string;
    /** 好友手机号 */
    mobile?: string;
    /** 新接待导购名 */
    newGuideName?: string;
    /** 原导购名 */
    oldGuideName?: string;
    /** 操作人 */
    operatorName?: string;
    /** 接替状态 : 0未处理 1-接替完毕 2-等待接替 3-客户拒绝 4-接替成员客户达到上限 5-无接替记 */
    takeoverStatus?: number;
    /** 转移批次号 */
    taskId?: string;
    /** 转移时间 */
    transferTime?: string;
  };

  type TreeNode = {
    checked?: boolean;
    children?: Record<string, any>[];
    code?: string;
    disabled?: boolean;
    ext1?: Record<string, any>;
    ext2?: Record<string, any>;
    ext3?: Record<string, any>;
    guideType?: number;
    icon?: string;
    id?: number;
    label?: string;
    parentId?: number;
    passwd?: string;
    passwdState?: number;
    showAdd?: boolean;
    showDelete?: boolean;
    showEdit?: boolean;
    status?: number;
  };

  type Type = {
    typeName?: string;
  };

  type UpdateCorpShopRequest = {
    /** appKey */
    appkey: string;
    /** 公司ID不能为空 */
    companyID: number;
    /** corpID不能为空 */
    corpID: string;
    corpShopRelationVoList: CorpShopRelationVo[];
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type UpdateCorpStatusRequest = {
    /** 企业ID */
    agentID: string;
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** 企业ID */
    corpID: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    status: number;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type UpdateCoverVO = {
    /** 背景图 */
    background?: string;
    /** 是否默认封面 */
    isDefault?: boolean;
    /** 封面名称 */
    name?: string;
  };

  type UpdatePolicyByCoreElementRequest = {
    /** 优惠券ID */
    chatroomCouponId?: number;
    /** 优惠券名称 */
    chatroomCouponName?: string;
    /** 优惠券库存 */
    chatroomCouponStock?: number;
    /** 商品名称 */
    goodsName?: string;
    /** 带二维码的商品链接 */
    goodsUrl?: string;
    /** 对应sopPolicy表的Id */
    id: number;
    /** 群聚合码配置Id */
    invited2chatroomConfigId?: string;
    /** 入群Id */
    invited2chatroomId?: string;
    /** 群名称 */
    invited2chatroomName?: string;
    /** 群聚合码链接地址 */
    invited2chatroomUrl?: string;
    /** 优惠券信息是否修改,若传入1，优惠券不允许修改 */
    isModifyCoupon?: number;
    /** 商品信息是否修改,若传入1，商品不允许修改 */
    isModifyGoods?: number;
    /** sop策略名称 */
    policyName?: string;
  };

  type updateStatusUsingGET1Params = {
    /** id */
    id: number;
    /** status */
    status?: number;
    /** remark */
    remark?: string;
  };

  type updateStatusUsingGETParams = {
    /** id */
    id: number;
    /** state */
    state: number;
  };

  type updateTaskStateUsingDELETEParams = {
    /** taskId */
    taskId?: number;
    /** state */
    state?: number;
  };

  type updateTaskStateUsingGETParams = {
    /** taskId */
    taskId?: number;
    /** state */
    state?: number;
  };

  type updateTaskStateUsingPATCHParams = {
    /** taskId */
    taskId?: number;
    /** state */
    state?: number;
  };

  type updateTaskStateUsingPOSTParams = {
    /** taskId */
    taskId?: number;
    /** state */
    state?: number;
  };

  type updateTaskStateUsingPUTParams = {
    /** taskId */
    taskId?: number;
    /** state */
    state?: number;
  };

  type updateTaskStatusUsingPOSTParams = {
    /** taskId */
    taskId: number;
    /** status */
    status: number;
  };

  type updateTemplateDistributionUsingGETParams = {
    /** 附件,存放效果预览的图片 */
    attachment?: string;
    /** 模板描述 */
    description?: string;
    /** 模板id */
    id?: number;
    /** 模板名称 */
    templateName?: string;
    /** 1:付费转化,2:新增好友,3:新增会员 */
    templateType?: number;
    /** 缩略图 */
    thumbnail?: string;
  };

  type updateUsingPOST1Params = {
    /** id */
    id: number;
  };

  type updateUsingPOST3Params = {
    /** id */
    id: number;
  };

  type uplaodWatermarkImageUsingPOSTParams = {
    /** guid */
    guid: string;
  };

  type uploadFileBase64UsingPOSTParams = {
    /** module */
    module: string;
  };

  type uploadFileUsingDELETE1Params = {
    /** module */
    module: string;
  };

  type uploadFileUsingDELETEParams = {
    /** module */
    module: string;
    /** filterName */
    filterName?: string;
  };

  type uploadFileUsingGET1Params = {
    /** module */
    module: string;
  };

  type uploadFileUsingGETParams = {
    /** module */
    module: string;
    /** filterName */
    filterName?: string;
  };

  type uploadFileUsingPATCH1Params = {
    /** module */
    module: string;
  };

  type uploadFileUsingPATCHParams = {
    /** module */
    module: string;
    /** filterName */
    filterName?: string;
  };

  type uploadFileUsingPOST1Params = {
    /** module */
    module: string;
  };

  type uploadFileUsingPOSTParams = {
    /** module */
    module: string;
    /** filterName */
    filterName?: string;
  };

  type uploadFileUsingPUT1Params = {
    /** module */
    module: string;
  };

  type uploadFileUsingPUTParams = {
    /** module */
    module: string;
    /** filterName */
    filterName?: string;
  };

  type uploadImgUsingDELETEParams = {
    /** imgUrl */
    imgUrl: string;
    /** fileName */
    fileName: string;
    /** width */
    width: number;
    /** height */
    height: number;
  };

  type uploadImgUsingGETParams = {
    /** imgUrl */
    imgUrl: string;
    /** fileName */
    fileName: string;
    /** width */
    width: number;
    /** height */
    height: number;
  };

  type uploadImgUsingPATCHParams = {
    /** imgUrl */
    imgUrl: string;
    /** fileName */
    fileName: string;
    /** width */
    width: number;
    /** height */
    height: number;
  };

  type uploadImgUsingPOSTParams = {
    /** imgUrl */
    imgUrl: string;
    /** fileName */
    fileName: string;
    /** width */
    width: number;
    /** height */
    height: number;
  };

  type uploadImgUsingPUTParams = {
    /** imgUrl */
    imgUrl: string;
    /** fileName */
    fileName: string;
    /** width */
    width: number;
    /** height */
    height: number;
  };

  type UploadRpaAddFriendExcelVo = {
    /** 手机号的数量 */
    phoneNumberCount?: number;
    /** 上传excel至OSS,返回fileKey */
    url?: string;
  };

  type uploadUrlUsingDELETEParams = {
    /** fileName */
    fileName?: string;
    /** url */
    url?: string;
    /** width */
    width?: number;
    /** height */
    height?: number;
  };

  type uploadUrlUsingGETParams = {
    /** fileName */
    fileName?: string;
    /** url */
    url?: string;
    /** width */
    width?: number;
    /** height */
    height?: number;
  };

  type uploadUrlUsingPATCHParams = {
    /** fileName */
    fileName?: string;
    /** url */
    url?: string;
    /** width */
    width?: number;
    /** height */
    height?: number;
  };

  type uploadUrlUsingPOSTParams = {
    /** fileName */
    fileName?: string;
    /** url */
    url?: string;
    /** width */
    width?: number;
    /** height */
    height?: number;
  };

  type uploadUrlUsingPUTParams = {
    /** fileName */
    fileName?: string;
    /** url */
    url?: string;
    /** width */
    width?: number;
    /** height */
    height?: number;
  };

  type UrlsVo = {
    /** 云平台url */
    cloudUrl?: string;
    /** 智库url */
    zhikuUrl?: string;
  };

  type UseRangeAreaInfo = {
    areaId?: number;
    areaName?: string;
  };

  type UseRangeItemCateConfigInfo = {
    cateInfos?: UseRangeItemCateInfo[];
    goodsLibId?: number;
  };

  type UseRangeItemCateInfo = {
    cid?: string;
    title?: string;
  };

  type UseRangeItemInfo = {
    goodsLibId?: number;
    outerId?: string;
    sysItemId?: number;
    title?: string;
  };

  type UseRangeResult = {
    areaInfos?: UseRangeAreaInfo[];
    discountLimit?: number;
    discountPriceType?: number;
    goodsLibIds?: number[];
    itemCateConfigInfos?: UseRangeItemCateConfigInfo[];
    itemConfigType?: number;
    itemContainType?: number;
    itemRangeType?: number;
    maxDiscountAmount?: number;
    shopAdaptType?: number;
    shopInfos?: UseRangeShopInfo[];
    shopRangeType?: number;
    tagInfos?: UseRangeTagInfo[];
    useRangeItemInfos?: UseRangeItemInfo[];
  };

  type UseRangeShopInfo = {
    outShopId?: string;
    shopId?: number;
    shopName?: string;
  };

  type UseRangeTagInfo = {
    tagCode?: string;
    tagName?: string;
    tagValue?: string;
  };

  type validateUsingDELETEParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** name */
    name?: string;
    /** password */
    password?: string;
  };

  type validateUsingGETParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** name */
    name?: string;
    /** password */
    password?: string;
  };

  type validateUsingPATCHParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** name */
    name?: string;
    /** password */
    password?: string;
  };

  type validateUsingPOSTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** name */
    name?: string;
    /** password */
    password?: string;
  };

  type validateUsingPUTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    valueNames?: string[];
    /** name */
    name?: string;
    /** password */
    password?: string;
  };

  type Video = {
    mediaid?: string;
    type?: string;
  };

  type View = {
    contentType?: string;
  };

  type ViewDTO = {
    viewId?: number;
    viewName?: string;
    viewType?: number;
  };

  type WatermarkSetting = {
    gSeX?: number;
    gSeY?: number;
    resizeH?: number;
    resizeW?: number;
    scale?: number;
  };

  type WechatAnalysisReportData = {
    allFriendsCount?: string;
    allMemberCount?: string;
    date?: string;
    friendsPayments?: string;
    friendsPaymentsRadio?: string;
    friendsPaymentsUnit?: string;
    newAddFriendsCount?: string;
    newAddMemberCount?: string;
  };

  type WechatGroupLeaderVo = {
    empId?: number;
    empName?: string;
    empNick?: string;
  };

  type WeChatNewDTO = {
    /** 内容 */
    content?: string;
    /** 封面图片url */
    coverUrl?: string;
    /** 文章创建时间 */
    createTime?: string;
    /** 媒体资源id */
    mediaId?: string;
    /** 标题 */
    title?: string;
    /** 文章更新时间 */
    updateTime?: string;
  };

  type WechatPushRequest = {
    /** appId */
    appId: string;
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 内容 */
    msgContent: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WeChatQrCodePlacardConfigDTO = {
    /** 公众号、小程序appId */
    appId?: string;
    /** 小程序页面根路径地址，前不要填加 /,不能携带参数 */
    appletPage?: string;
    /** 自动打标 0 不开启，1开启， */
    autoTag?: number;
    /** 二维码海报背景图片 */
    background?: string;
    /** 使用范围，欢迎语二维码为必输，类型，0 无 1：渠道  2 门店 3员工 */
    channelType?: number;
    /** 使用范围名称 */
    channelTypeName?: string;
    /** 类型值，给前端在详情对应回显 */
    channelTypeValue?: string;
    /** 创建时间 */
    createTime?: string;
    /** 微信二维码海报配置ID */
    id?: number;
    /** 创建人 */
    loginAccount?: string;
    /** 公众号标签 */
    mpTag?: string[];
    /** 海报 */
    placard?: string;
    /** 二维码大小 */
    qrcodeSize?: number;
    /** 二维码X坐标 */
    qrcodeX?: number;
    /** 二维码Y坐标 */
    qrcodeY?: number;
    /** 码预置参数 */
    sceneStr?: string;
    /** 码预置参数类型 */
    sceneType?: number;
    /** 二维码海报标题 */
    title?: string;
    /** 类型 1公众号码 2小程序码 */
    type?: number;
    /** 企微标签 */
    weworkTag?: string[];
  };

  type WeChatQrCodePlacardQuery = {
    /** 公众号、小程序appId */
    appId: string;
    /** 小程序页面根路径地址，前不要填加 /,不能携带参数 */
    appletPage?: string;
    /** 自动打标 0 不开启，1开启， */
    autoTag?: number;
    /** 二维码海报背景图片 */
    background: string;
    /** 使用范围，欢迎语二维码为必输，类型，0 无 1：渠道  2 门店 3员工 */
    channelType?: number;
    /** 类型值，给前端在详情对应回显 */
    channelTypeValue?: string;
    /** 二维码海报配置ID */
    configId?: number;
    /** 公众号标签 */
    mpTag?: string[];
    /** 二维码大小 */
    qrcodeSize: number;
    /** 二维码X坐标 */
    qrcodeX: number;
    /** 二维码Y坐标 */
    qrcodeY: number;
    /** 二维码海报预置参数 */
    sceneStr?: string;
    /** 参数类型 */
    sceneType?: number;
    /** 二维码海报标题 */
    title: string;
    /** 类型 1公众号码 2小程序码 */
    type: number;
    /** 企微标签 */
    weworkTag?: string[];
  };

  type WeChatWelcomeCodeDto = {
    content?: string;
    employeeIds?: number[];
    failureTime?: number;
    plan?: number;
    status?: number;
    storeIds?: number[];
    title?: string;
    type?: number;
    uuid?: string;
  };

  type weixinfukuanzhanghaoDTO = {
    /** 证书 */
    certBytes?: string;
    createTime?: string;
    /** 证书有效期过期时间 */
    expireTime?: string;
    /** 集团id */
    groupId?: number;
    id?: number;
    /** 商户平台密钥key */
    key?: string;
    /** 商户账号appid */
    mchAppid?: string;
    /** 商户号 */
    mchid?: string;
    /** 证书有效期起始时间 */
    startTime?: string;
    /** 状态:0删除、1有效 */
    state?: number;
    updateTime?: string;
    /** 微信支付版本：2=微信企业转账；3=商家转账 */
    versions?: number;
    /** 商户API证书序列号 */
    wechatPaySerialNo?: string;
  };

  type weixinzhinenghuanyingyuxiangqing = {
    /** 公司所对应的运营公众号appId */
    appId?: string;
    /** 欢迎语内容json格式 */
    content?: string;
    corpId?: string;
    createTime?: string;
    /** 员工选择组件数据，用于前端回显 */
    employeeSelect?: string;
    /** 失效时间（秒）:如添加好友开始距离该时间后才触发欢迎语，则不发送 */
    failureTime?: number;
    /** 公司ID */
    groupId?: number;
    id?: number;
    /** 1:企微，2:个号，3: 公众号,4:好评返现活动 */
    plan?: number;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 发送次数 */
    sendCount?: number;
    /** 欢迎语启用状态 0未开启 1启用 */
    status?: number;
    /** 标题 */
    title?: string;
    /** 模板类型：0基础模板；9默认模板； */
    type?: number;
    updateTime?: string;
    /** 记录唯一标识 uuid 去除-  */
    uuid?: string;
  };

  type WelcomeCodeListVo = {
    account?: string;
    annexCount?: number;
    annexType?: number[];
    /** 公众号id */
    appId?: string;
    /** 公众号名称 */
    appName?: string;
    channelCount?: number;
    content?: string;
    employeeCount?: number;
    sendCount?: number;
    shopCount?: number;
    status?: number;
    title?: string;
    type?: number;
    updateTime?: string;
    welcomeCodeUuid?: string;
  };

  type WelcomeMsgLogDTO = {
    /** v3区域切换参数 */
    areaId?: string;
    /** 客户昵称 */
    customerName?: string;
    /** v3员工筛选组件查询条件 */
    employeeSelect?: string;
    /** 筛选结束时间 */
    endTime?: string;
    /** 集团id */
    groupId?: number;
    /** 导购id */
    guideId?: number;
    /** 选择员工,多个用英文逗号隔开 */
    guideIds?: number[];
    /** 门店状态 */
    shopStatus?: string;
    /** 筛选开始时间 */
    startTime?: string;
    /** 发送状态 1-成功 0-失败 */
    status?: number;
    /** 欢迎语名称 */
    title?: string;
    /** v3欢迎语日志聚合查询条件(欢迎语名称和好友名称) */
    titleOrName?: string;
    /** 员工的userId */
    userIds?: string[];
    /** v3版本标识 */
    version?: string;
  };

  type WelcomeMsgLogVo = {
    /** 头像地址 */
    avatar?: string;
    /** 公司名称 */
    corpName?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 导购id */
    guideId?: number;
    /** 日志记录id */
    id?: number;
    /** 消息内容 */
    msgContent?: string;
    /** 发送时间 */
    msgTime?: string;
    /** 发送详情 */
    resultDetail?: string;
    /** 工作门店id */
    shopIds?: string;
    /** 工作门店名称 */
    shopNames?: string[];
    /** 发送状态 */
    status?: number;
    /** 欢迎语名称 */
    title?: string;
    /** 发送条数 */
    totalNum?: number;
    /** 好友类别：type 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户 */
    type?: number;
    /** 导购的userid */
    userId?: string;
    /** 工号 */
    workerId?: string;
    /** 员工姓名 */
    workerName?: string;
  };

  type wenjiandaochujiluVO = {
    /** 文件名称 */
    fileName?: string;
    /** 文件导出状态: 0-未处理, 1-处理中, 2-处理完成(可下载), 3-处理失败(生成失败) */
    fileState?: number;
    /** 生成时间 */
    generationTime?: string;
    /** id */
    id?: number;
  };

  type WeWorkChatDataQuery = {
    after?: number;
    before?: number;
    chatDateTime?: string;
    roomid?: string;
    sender?: string;
    seq?: string;
    tolist?: string;
    type?: number;
  };

  type WeWorkCorpRequest = {
    /** 授权应用企业Id */
    agentCorpId: string;
    /** 应用Id */
    agentId: string;
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 服务商企业Id */
    serviceCorpId: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WeworkLossFriendsWarnConfVo = {
    corpId?: string;
    createAccount?: string;
    delChatNotify?: string;
    delChatRunType?: number;
    delChatSendTime?: string;
    delFriendNotify?: string;
    delFriendRunType?: number;
    delFriendSendTime?: string;
    delGroupMembersNotify?: number;
    delGroupSendTime?: string;
    delGuideNotify?: string;
    delGuideRunType?: number;
    delGuideSendTime?: string;
    groupId?: number;
    id?: number;
  };

  type WeworkMsg = {
    decryptedChatMsg?: string;
    seq?: string;
  };

  type WeWorkServiceTokenRequest = {
    /** appKey */
    appkey: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WeworkTagVo = {
    /** 主键ID */
    id?: number;
    /** 标签/标签组ID */
    tagId?: string;
    /** 标签/标签组名称 */
    tagName?: string;
    /** 标签包含好友数量（因为员工筛选的缘故，这个值可能低于总人数） */
    userCount?: number;
  };

  type WeWorkUserBehaviorDTO = {
    /** 净增好友数 */
    addContactCnt?: number;
    /** 平均首次回复时长 */
    avgReplyTime?: number;
    /** 首次回复时长有效人数 */
    avgReplyTimeCount?: number;
    /** 聊天总数 */
    chatCnt?: number;
    /** 好友总数 */
    contactCnt?: number;
    /** 导购ID */
    guideId?: number;
    /** 导购名称 */
    guideName?: string;
    /** 发送消息数 */
    messageCnt?: number;
    /** 导购手机号 */
    mobile?: string;
    /** 删除/拉黑成员的好友数 */
    negativeFeedbackCnt?: number;
    /** 发起申请数 */
    newApplyCnt?: number;
    /** 新增好友数 */
    newContactCnt?: number;
    /** 被成员删除/拉黑的好友数 */
    positiveFeedbackCnt?: number;
    /** 已回复聊天占比 */
    replyPercentage?: number;
    /** 回复聊天占比有效人数 */
    replyPercentageCount?: number;
    /** 日期 */
    time?: string;
    /** 导购userId */
    userId?: string;
  };

  type WeWorkWelcomeCodeMsgContentDTO = {
    codePoster?: CodePoster;
    image?: Image;
    link?: Link;
    miniprogram?: Miniprogram;
    text?: Text;
    type?: number;
    video?: Video;
  };

  type WeWorkWelcomeCodeMsgDTO = {
    content?: WeWorkWelcomeCodeMsgContentDTO;
    type?: number;
  };

  type WxActivityAuditQuery = {
    /** 审核意见 */
    auditRemark?: string;
    /** 审核状态1=同意 2=不同意 */
    auditResult: number;
    /** 活动信息 */
    wxActivityVo?: WxActivityQuery;
  };

  type WxActivityEnterpriseCreateQuery = {
    /** 内容 */
    content: Content;
    /** 客户类型 */
    customerType: number;
    /** 执行方式 1 立即发送 2 定时发送 */
    executeMode: number;
    executeTime?: string;
    id?: number;
    isUpdate?: boolean;
    /** 活动名称 */
    name: string;
    userGroupIds?: string;
  };

  type WxActivityQuery = {
    /** 活动名称 */
    activityName?: string;
    /** 活动ID */
    planId: number;
  };

  type WxChannelCodeInfoVO = {
    codeName?: string;
    configID?: string;
    contactType?: number;
    corpId?: string;
    friendVerify?: string;
    qRCodeUrl?: string;
    qRIconUrl?: string;
    scene?: string;
    welcomeMsgID?: number;
  };

  type WxCorpInfoVO = {
    agentID?: string;
    companyID?: number;
    corpID?: string;
    corpName?: string;
    wxChannelCodeInfoList?: WxChannelCodeInfoVO[];
    wxUserList?: WxUserInfoVo[];
  };

  type WxCorpRequest = {
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** corpIDs */
    corpIDs: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WxCustomerCountDTO = {
    corpID?: string;
    defaultPageNo?: number;
    defaultPageSize?: number;
    total?: number;
  };

  type WxFriendAnalysisQuery = {
    /** 结束时间 */
    endTime?: string;
    /** 选择的门店ids */
    shopIds?: string;
    /** 起始时间 */
    startTime?: string;
    /** 用户姓名 */
    userName?: string;
    /** 视角 */
    viewId?: number;
  };

  type WXMarketingAnalysisTotalVo = {
    failTotal?: number;
    repeatTotal?: number;
    successTotal?: number;
    total?: number;
    unSendTotal?: number;
  };

  type WxPlatCustomerCntRequest = {
    /** 成员ID */
    addUserId?: string;
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** 企业ID */
    corpID?: string;
    /** 结束时间（更新时间） */
    endTime: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 分页ID */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** shopGUID */
    shopGUID: string;
    /** 签名 */
    sign: string;
    /** 开始时间（更新时间） */
    startTime: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WxPlatCustomerRequest = {
    /** 对接成员id */
    addUserId?: string;
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** 企业ID */
    corpID?: string;
    /** 结束时间 */
    endTime: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 分页ID */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** shopGUID */
    shopGUID: string;
    /** 签名 */
    sign: string;
    /** 开始时间 */
    startTime: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WxTagListRequest = {
    /** 对接成员id */
    addUserIDs?: string;
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** shopGUID */
    shopGUID: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WxUserInfoVo = {
    avatar?: string;
    corpId?: string;
    name?: string;
    qrCodeUrl?: string;
    status?: number;
    userId?: string;
  };

  type WxUserListRequest = {
    /** 对接成员id */
    addUserIds?: string;
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** shopGUID */
    shopGUID: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
  };

  type WxUserRequest = {
    /** appKey */
    appkey: string;
    /** 公司ID */
    companyID: number;
    corpId: string;
    /** ECRP公司ID */
    groupId: number;
    /** 商城id */
    mallId?: number;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timestamp: string;
    /** token */
    token: string;
    userId: string;
  };

  type WxUserVo = {
    /** 企微成员ID */
    addUserID?: string;
    /** 企微成员姓名 */
    addUserName?: string;
    /** 企微ID */
    corpID?: string;
    /** 成员状态：1=有效 */
    userState?: number;
    /** 激活状态: 1=已激活，2=已禁用，4=未激活, 5=退出企业 */
    userStatus?: number;
  };

  type wxWorkAuthUsingGETParams = {
    /** auth_code */
    auth_code: string;
    /** expires_in */
    expires_in: number;
    /** state */
    state: string;
  };

  type xiaochengxuyemianmokuaipeizhishiti = {
    /** 配置项明细列表 */
    itemList: string;
    /** 模块类型 1：【导购-工作台】 2：【导购-业绩】 3：【导购-我的】 4：【店长-业绩】 5：【店长-管理】 */
    moduleType: number;
    /** 配置项标识 */
    settingCode: string;
    /** 配置项名称 */
    settingName: string;
    /** 配置项类型 1：基本类型 2：菜单 3：banner */
    settingType: number;
    /** 排序 */
    sort: number;
    /** 是否可排序 0否 1是 */
    sortable: number;
    /** 配置启用状态 0隐藏 1显示 */
    status: number;
    /** 产品版本 */
    version?: number;
  };

  type xiaochengxuyemianmokuaishiti = {
    /** 模块类型名称 */
    moduleName?: string;
    /** 模块类型 1：【导购-工作台】 2：【导购-业绩】 3：【导购-我的】 4：【店长-业绩】 5：【店长-管理】 6：【导购-会员】7：【店长-会员】8：【店长-任务】 */
    moduleType?: number;
    /** 项目类型 1导购 2店长 */
    projectType?: number;
    /** 状态 */
    state?: number;
    /** 模板ID */
    templateCode?: string;
  };

  type xiaochengxuyemianpeizhixiugaiqingqiushiti = {
    /** 新增素材按钮数据 */
    materialButtonStatusList?: qiyongshezhimokuaileixingshiti[];
    /** 模块类型 1：【导购-工作台】 2：【导购-业绩】 3：【导购-我的】 4：【店长-业绩】 5：【店长-管理】 */
    moduleType: number;
    /** 配置导购端离职模块(该列表不能为空) */
    pageGuideTurnoverList?: qiyongshezhimokuaileixingshiti[];
    /** 模块配置项列表 */
    pageModuleSettingList: xiaochengxuyemianmokuaipeizhishiti[];
    /** 业绩启用情况列表(业绩模块下,该列表不能为空) */
    pageRewardSettingList?: qiyongyejileixingshiti[];
    /** 配置店长端离职模块(该列表不能为空) */
    pageShopTurnoverList?: qiyongshezhimokuaileixingshiti[];
    /** 项目类型 1导购 2店长 */
    projectType: number;
    /** 模板ID */
    templateCode: string;
  };

  type xiaoguofenxi = {
    /** 发送失败 */
    sendFail?: number;
    /** 发送成功 */
    sendOk?: number;
    /** 待发送 */
    waitSend?: number;
  };

  type xiaoguofenxiqingqiu = {
    /** 活动id */
    activityId?: number;
    /** 平台昵称或微信昵称 */
    platformNickOrWxNick?: string;
    /** 红包状态 */
    receiveResult?: number;
  };

  type xiaoxifujianxiangqing = {
    /** 小程序appid */
    appid?: string;
    /** 创建时间 */
    createTime?: string;
    /** 描述 */
    description?: string;
    id?: number;
    /** 素材id，企微素材管理接口返回 */
    mediaId?: string;
    /** 小程序page路径 */
    page?: string;
    /** 图片链接（type=3时有效，链接类型不需要上传到临时文件，可以用外链） */
    picUrl?: string;
    /** 二维码海报配置id（仅type=5时有效） */
    qrcodePlacardConfigId?: number;
    /** 远程文件（根据附件类型不同，可能是图片、视频、小程序封面图的OSS地址） */
    remoteUrl?: string;
    /** 标题 */
    title?: string;
    /** 附件类型（1: 图片; 2: 视频; 3: 链接; 4: 小程序; 5: 二维码海报） */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 跳转链接 */
    url?: string;
    /** 系统预置链接配置id（仅url_type=2时有效） */
    urlSettingId?: string;
    /** 跳转链接类型（1:自定义链接; 2: 系统预置链接） */
    urlType?: number;
  };

  type xiaoxineirong = {
    /** 具体内容 */
    content?: Record<string, any>;
    /** 内容类型 0文本、1图片 2视频 3链接 4 小程序 5 二维码海报' */
    type?: number;
  };

  type xinzengfahongbaoshezhi = {
    /** 企微id */
    corpId?: string;
    /** 集团Id */
    groupId?: number;
    /** 导购id（list） */
    guideIds?: number[];
    /** 主键 */
    id?: number;
    /** 红包策略Id */
    redpackPolicyId?: number;
    /** 店铺id（list） */
    shopIds?: number[];
    /** 使用人员 1：全部员工 2：按店铺 3：按员工 */
    useType?: number;
  };

  type xinzengqiweixiaoyanwenjianDTO = {
    /** 校验文件内容 */
    content?: string;
    /** 校验文件名 */
    filename?: string;
    /** 集团id */
    groupId?: number;
  };

  type xinzengrpakehu = {
    /** 关联企微 */
    cropId?: string;
    /** 客户名称 */
    enterpriseId?: string;
    /** 公司id */
    groupId?: number;
    /** RPA帐号有效时长(单位：月) */
    validPeriod?: number;
  };

  type xinzengVO = {
    /** 账号 */
    account?: string;
    /** 路由地址 */
    address?: string;
    /** 企业id */
    groupId?: number;
    /** 是否显示(0-不展示 1-展示) */
    isShow?: boolean;
    /** 菜单名称 */
    name?: string;
    /** 环境 (qa/saas/kd/ecrp) */
    type?: string;
  };

  type xinzengweixinfukuanzhanghaoVO = {
    /** 证书路径（从上传接口传到临时目录，这边提交的是临时目录的相对路径） */
    cert?: string;
    /** 证书有效期过期时间 */
    expireTime?: string;
    /** 商户平台密钥key */
    key?: string;
    /** 商户账号appid */
    mchAppid?: string;
    /** 商户号 */
    mchid?: string;
    /** 证书有效期起始时间 */
    startTime?: string;
    /** 商户API证书序列号 */
    wechatPaySerialNo?: string;
  };

  type xinzengyuangongribaotixingshezhibiaoVO = {
    /** 创建人 */
    createUser?: string;
    /** 集团id */
    groupId?: number;
    /** 主键id */
    id?: number;
    /** 是否删除 0：否 1：是 */
    isDelete?: string;
    /** 是否通知 1-是 0-否 */
    isNotice?: string;
    /** 通知日期 1-7(每周通知的周几)/1-31(每月通知的几号)/ 0-每天通知 */
    noticeDate?: string;
    /** 通知消息类别 11- 销售榜 12-招募榜 13-加好友榜 21-其他的榜单 22-。。23...   存入的数据格式为逗号分割 例如:(11,12,13) */
    noticeMessageType?: string;
    /** 通知消息类别集合 11- 销售榜 12-招募榜 13-加好友榜 21-其他的榜单 22-。。23...   存入的数据格式为逗号分割 例如:(11,12,13) */
    noticeMessageTypeList?: string[];
    /** 通知对象 11-店长 12-导购 21 -xxx 22... */
    noticeObj?: string;
    /** 通知对象集合 11-店长 12-导购 21 -xxx 22... */
    noticeObjList?: string[];
    /** 通知时间 10:30:00 */
    noticeTime?: string;
    /** 通知时间类别 -每天 每周 每月 1-每天 2-每周 3-每月 */
    noticeTimeType?: string;
    /** 通知类别 如(1-门店导购排行榜 2-其他 等等) */
    noticeType?: string;
    /** 更新人 */
    updateUser?: string;
  };

  type xitongbutongyewuyushecanshupeizhiDTO = {
    /** 模块名称 ModuleTypeEnum 7为素材库 */
    moduleType?: number;
    /** 预设参数标识 */
    paramCode?: string;
    /** 预设参数-自定义参数名称 */
    paramName?: string;
  };

  type xiugaifahongbaoqiyongzhuangtai = {
    /** 集团Id */
    groupId?: number;
    /** id */
    id?: number;
    /** 状态 1:启用  2：禁用 */
    state?: number;
  };

  type yifenfadegongsiliebiao = {
    /** 集团id */
    groupId?: number;
    /** 集团名称 */
    groupName?: string;
    /** 状态 1正常 0删除 */
    state?: number;
  };

  type yigongsiweidufenyechaxunyifenfademobanliebiaoqingqiu = {
    /** 1:付费转化,2:新增好友,3:新增会员 */
    templateType?: number;
  };

  type yuangongxinxi = {
    id?: number;
    /** 登录名 */
    loginName?: string;
    /** 姓名 */
    name?: string;
    /** 微信userid */
    userId?: string;
  };

  type yushecanshubaocunshiti = {
    /** 模块类型，素材库为7 */
    moduleType: number;
    /** 预设参数集合 */
    presetParams: xitongbutongyewuyushecanshupeizhiDTO[];
  };

  type zhanghaojishouyegailanyemianmoban = {
    /** 模块编码 */
    code?: string;
    /** 子层级内容 */
    content?: Record<string, any>[];
    /** 展示: 0-不展示, 1-展示 */
    display?: number;
    /** 是否全宽: 0-否, 1-是 */
    fullWidth?: number;
    /** 主键id */
    id?: number;
    /** 是否侧边: 0-不在侧边展示, 1-在侧边展示 */
    isSide?: number;
    /** 模块名称 */
    name?: string;
    /** 页面路径 */
    pagePath?: string;
    /** 父级Id */
    parentId?: number;
    /** 顺序: 0第一位, 1第二位, ... */
    sort?: number;
  };

  type zhanghaojishouyegailanzuichangshiyongshitu = {
    /** 使用次数 */
    count?: number;
    /** 菜单id */
    menuId?: number;
    /** 菜单名称 */
    menuName?: string;
    /** 父菜单id */
    menuParentId?: number;
    /** 菜单路径 */
    menuUrl?: string;
  };

  type zhanghaoquanxianxiademendian = {
    /** 门店名称 */
    label?: string;
    /** 门店Id */
    value?: number;
  };

  type zhanghaoshuruyanzhengma = {
    /** 导购id */
    guideId?: number;
    /** 手机号码 */
    mobile?: string;
    /** 验证码 */
    verificationCode?: string;
  };

  type zhengshulujing = {
    /** 证书上传临时路径 */
    path?: string;
  };

  type zhifupeizhifanhuishiti = {
    /** 证书 */
    cert?: string;
    /** 证书 */
    certName?: string;
    createTime?: string;
    /** 证书有效期过期时间 */
    expireTime?: string;
    /** 集团id */
    groupId?: number;
    id?: number;
    /** 商户平台密钥key，默认成************* */
    key?: string;
    /** 商户账号appid */
    mchAppid?: string;
    /** 商户号 */
    mchid?: string;
    /** 公众号信息 */
    officialAccount?: gongzhonghaoxinxi;
    /** 商户平台密钥key(明文) */
    plaintextKey?: string;
    /** 证书有效期起始时间 */
    startTime?: string;
    /** 状态:0删除、1有效 */
    state?: number;
    updateTime?: string;
    /** 微信支付版本：2=微信企业转账；3=商家转账 */
    versions?: number;
    /** 商户API证书序列号 */
    wechatPaySerialNo?: string;
  };

  type zhinengdabiaodangerenwuguizebiaoxiangqing = {
    /** 选择类型 */
    checkStatus?: number;
    /** 企微id */
    corpId?: string;
    /** 创建时间 */
    createTime?: string;
    /** v3员工组件返回 */
    employeeSelect?: string;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 操作符类型（1:<,2:<=,3:=,4>,5:>=,6：!=） */
    operate?: number;
    /** 规则组id */
    ruleGroupId?: number;
    /** 规则名称 ：运算符时此处为时间，群聊为群聊id，会员为会员体系id,点赞和评论朋友圈时为次数 */
    ruleName?: string;
    ruleNameDesc?: string;
    /** 规则类型( 1：运算符，2：加入群聊，3：加入会员 4：点赞朋友圈 5：评论朋友圈) */
    ruleType?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type zhinengdabiaoguizeliebiaoqingqiushiti = {
    /** 结束时间，yyyy-MM-dd格式 */
    endTime?: string;
    /** 场景id */
    sceneId: number;
    /** 开始时间，yyyy-MM-dd格式 */
    startTime?: string;
    /** 标签值 */
    tagId?: string;
    /** 任务名称 */
    taskName?: string;
    /** 任务状态 1执行中，0未执行,不传为查询全部 */
    type?: number;
  };

  type zhinengdabiaohaoyouliebiaofanhuishiti = {
    /** 客户昵称/名称 */
    externalName?: string;
    /** 企微好友id */
    externalUserId?: string;
    /** 标签组 */
    groupTags?: string;
    /** 所属员工 */
    guideName?: string;
    /** id */
    id?: number;
    /** 性别 */
    sex?: number;
    /** 企微用户id */
    userId?: string;
  };

  type zhinengdabiaohaoyouliebiaoqingqiushiti = {
    /** 所属员工筛选条件 */
    employeeSelect?: string;
    /** 客户昵称/名称 */
    externalName?: string;
    /** 性别 */
    sex?: string;
    /** 标签id */
    tagId?: string;
    /** 任务id */
    taskId: number;
    /** 好友类型：不传为全部好友，1新增好友,0是流失好友 */
    type?: number;
  };

  type zhinengdabiaojuherenwubiaoxiangqing = {
    /** 企业微信ID */
    corpId?: string;
    /** 关联任务的数量 */
    count?: number;
    /** 创建时间 */
    createTime?: string;
    /** 集团ID */
    groupId?: number;
    /** 主键 */
    id?: number;
    /** 关联的任务标签名称 */
    tagName?: string;
    /** 聚合任务关联的任务信息 */
    taskList?: juherenwuguanlianderenwushiti[];
    /** 任务名称 */
    taskName?: string;
    /** 1 启用 ，0 未启用 */
    taskStatus?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type zhinengdabiaomeirishujubaobiao = {
    /** 结束时间，yyyy-MM-dd格式 */
    endDate?: string;
    /** 开始时间，yyyy-MM-dd格式 */
    startDate?: string;
    /** 任务id */
    taskId?: number;
  };

  type zhinenghuanyingyushitiduixiang = {
    /** 附件内容 */
    annexList?: Annex[];
    /** 使用渠道codes */
    channelCodes?: string[];
    /** 欢迎语文本消息 */
    content?: string;
    /** 使用员工ids */
    employeeIds?: string[];
    /** 员工选择组件数据 */
    employeeSelect?: string;
    /** 是否是v3,是v3传1，不是不传 */
    isV3?: number;
    /** 前端组件依赖字段，用于存储回显所需内容 */
    richTextEcho?: string;
    /** 使用门店ids */
    shopIds?: string[];
    /** 启用状态 0关闭 1启用 */
    status: number;
    /** 智能欢迎语标题 */
    title?: string;
    /** 欢迎语类型 0非默认 9默认 */
    type?: number;
    /** 欢迎语配置员工列表 */
    userList?: Record<string, any>[];
    /** 智能欢迎语唯一标识,修改时必传 */
    welcomeCodeUuid?: string;
  };

  type zhongfuquntongjiliebiaochaxunqingqiuduixiang = {
    /** 群id,多个以,分割 */
    chatIds?: string;
    /** 至少选择多少个群 */
    leastRepeatedInNum?: number;
  };

  type zhongfuquntongjiliebiaochaxunxiangyingduixiang = {
    /** 头像 */
    avatar?: string;
    /** 首次入群时间 */
    firstJoinTime?: string;
    /** 性别 */
    gender?: number;
    /** 昵称 */
    name?: string;
    /** 所属群 */
    repeatedNum?: number;
    /** 用户id */
    userId?: string;
  };

  type zhongfuquntongjixiangqingliebiaochaxunqingqiuduixiang = {
    /** 用户id */
    userId?: string;
  };

  type zhongfuquntongjixiangqingliebiaochaxunxiangyingduixiang = {
    /** 入群时间 */
    joinTime?: string;
    /** 群名称 */
    name?: string;
    /** 群主 */
    ownerName?: string;
    /** 用户id */
    userId?: string;
    /** 群主工作门店 */
    workShopName?: string;
  };

  type zongjishujufanhuivo = {
    /** 昨日聊天好友数 */
    chatFriendCountOfYesterday?: number;
    /** 昨日群总数 */
    chatRoomCountOfYesterday?: number;
    /** 昨日好友数 */
    friendCountOfYesterday?: number;
    /** 昨日群成员总数 */
    memberCountOfYesterday?: number;
    /** 昨日新增群数 */
    newChatRoomCountOfYesterday?: number;
    /** 昨日新增好友数 */
    newFriendCountOfYesterday?: number;
    /** 昨日新增群成员数 */
    newMemberCountOfYesterday?: number;
    /** 成员总数 */
    totalMember?: number;
  };
}
