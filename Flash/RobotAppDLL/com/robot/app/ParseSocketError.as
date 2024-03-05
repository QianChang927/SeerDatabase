package com.robot.app
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.control.GiftController;
   import com.robot.app.group.GroupFightWaitPanel;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.nono.VipScoreController;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.superParty.SPChannelController;
   import com.robot.app.systems.ErrorType;
   import com.robot.app.task.petstory.control.TrainDoorController;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.app.team.TeamCmdManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ErrorCodeAnalysisXMInfo;
   import com.robot.core.controller.MapController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.teamPK.TeamPKManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.TextFormatUtil;
   import com.taomee.analytics.Analytics;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.EventManager;
   
   public class ParseSocketError
   {
      
      private static const eventTypePrefix:String = "error_";
      
      public static const TIME_PASSWORD_ERROR:String = "timePasswordError";
      
      private static var _instance:EventDispatcher;
      
      private static var specialAlarm:MovieClip;
       
      
      public function ParseSocketError()
      {
         super();
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(_instance == null)
         {
            _instance = new EventDispatcher();
         }
         return _instance;
      }
      
      public static function addErrorListener(param1:uint, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(eventTypePrefix + param1,param2,param3,param4,param5);
      }
      
      public static function removeErrorListener(param1:uint, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(eventTypePrefix + param1,param2,param3);
      }
      
      public static function hasErrorListener(param1:uint) : Boolean
      {
         return getInstance().hasEventListener(eventTypePrefix + param1);
      }
      
      private static function showSpecialAlarmMc() : void
      {
         removeSpecialAlarmMc();
         specialAlarm = UIManager.getMovieClip("SpecialAlarmMc");
         specialAlarm.x = (LevelManager.stage.width - specialAlarm.width) / 2;
         specialAlarm.y = (LevelManager.stage.height - specialAlarm.height) / 2;
         specialAlarm.addEventListener(MouseEvent.CLICK,specialAlarmClickHandle);
         specialAlarm.addEventListener(Event.ENTER_FRAME,enterFrameHandle);
         LevelManager.stage.addChild(specialAlarm);
      }
      
      private static function specialAlarmClickHandle(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "ok":
               removeSpecialAlarmMc();
         }
      }
      
      private static function enterFrameHandle(param1:Event) : void
      {
         specialAlarm.parent.setChildIndex(specialAlarm,specialAlarm.parent.numChildren - 1);
      }
      
      private static function removeSpecialAlarmMc() : void
      {
         if(specialAlarm)
         {
            specialAlarm.removeEventListener(MouseEvent.CLICK,specialAlarmClickHandle);
            specialAlarm.removeEventListener(Event.ENTER_FRAME,enterFrameHandle);
            if(specialAlarm.parent)
            {
               specialAlarm.parent.removeChild(specialAlarm);
            }
            specialAlarm = null;
         }
      }
      
      public static function parse(param1:int, param2:int) : void
      {
         var obj:Object;
         var s:Sprite = null;
         var str:String = null;
         var sp:Sprite = null;
         var num1:uint = 0;
         var UI_PATH:String = null;
         var _uiLoader:MCLoader = null;
         var num:int = param1;
         var cmdID:int = param2;
         GroupFightWaitPanel.hide();
         DebugTrace.show("cmdID:",cmdID,"错误码——————————————",num);
         getInstance().dispatchEvent(new Event(eventTypePrefix + num));
         str = "";
         obj = ErrorCodeAnalysisXMInfo.getInfoById(num);
         if(obj)
         {
            if(obj.txType == 1)
            {
               SimpleAlarm.show(str + obj.tx);
            }
            else
            {
               Alarm2.show(str + obj.tx);
            }
            return;
         }
         switch(num)
         {
            case 15153:
               str += "组队人数超过2人而不能挑战这个boss！";
               SimpleAlarm.show(str,true);
               break;
            case 11069:
               SimpleAlarm.show(str + "你不在地图上不可以发起对战哦！",true);
               break;
            case 10416:
               EventManager.dispatchEvent(new Event(ErrorType.getErr0rType(10416)));
               break;
            case 10417:
               EventManager.dispatchEvent(new Event(ErrorType.getErr0rType(10417)));
               break;
            case 14223:
               SimpleAlarm.show(str + "飞船不能起航稍后再来！",true);
               break;
            case 14224:
               SimpleAlarm.show(str + "一次航行任务中，最多只能抓捕2只精灵哟！",true);
               break;
            case 14225:
               SimpleAlarm.show(str + "时间已到，飞船还没有起航！",true);
               break;
            case 14226:
               SimpleAlarm.show(str + "不能回收物品！",true);
               break;
            case 14228:
               SimpleAlarm.show(str + "一天只能起航5次！",true);
               break;
            case 14496:
               SimpleAlarm.show(str + "一天只能获得20个魔焰特训石",true);
               break;
            case 20181:
               Alarm.show(str + "没有扣除相应的记忆石珀，用户没有达到与艾迪尔对战的条件 ");
               break;
            case 10414:
               EventManager.dispatchEvent(new Event("error_10414"));
               break;
            case 10415:
               EventManager.dispatchEvent(new Event("error_10414"));
               break;
            case 10424:
               SimpleAlarm.show(str + "活动时间还未到哦，请到时间再来！",true);
               break;
            case 10425:
               SimpleAlarm.show(str + "这个时间段内吸收的次数已超过上限！",true);
               break;
            case 10436:
               SimpleAlarm.show(str + "已经获得过精灵嘉年华启动仪式装扮！",true);
               break;
            case 11061:
               SimpleAlarm.show(str + "你的小队人数不正确！",true);
               break;
            case 11062:
               SimpleAlarm.show(str + "没到50层不能领宝箱或者已经领过宝箱了！",true);
               break;
            case 11063:
               SimpleAlarm.show(str + "你已经通关了！",true);
               break;
            case 11064:
               SimpleAlarm.show(str + "对方正在报名参加勇士试炼！",true);
               break;
            case 11065:
               SimpleAlarm.show(str + "请等待其他队友领取宝箱！",true);
               break;
            case 11066:
               SimpleAlarm.show(str + "巅峰之战第一，二季已经结束，第三季即将开始敬请期待！",true);
               break;
            case 10600:
               SimpleAlarm.show(str + "不能重复兑换",true);
               break;
            case 10438:
               Alarm.show(str + "你的纪念牌不够，不能兑换物品哦！");
               break;
            case 20182:
               Alarm.show(str + "对战艾迪尔已经超过10次");
               break;
            case 10346:
               Alarm.show(str + "每日许愿超过5次");
               break;
            case 13079:
               Alarm.show(str + "没有精灵蛋保护罩，需要去商城购买哦！");
               break;
            case 13077:
               Alarm.show(str + "你的好友米米号无效！");
               break;
            case 13078:
               Alarm.show(str + "不能将蛋赠送给自己！");
               break;
            case 18510:
               SimpleAlarm.show(str + "现在不是精灵聚会时间噢！",true);
               break;
            case 18511:
               SimpleAlarm.show(str + "跟随的精灵与参加聚会精灵类别不符呢！",true);
               break;
            case 18512:
               SimpleAlarm.show(str + "今天你已经获得经验奖励了哟，明天再来吧！",true);
               break;
            case 18513:
               SimpleAlarm.show(str + "没有能获得经验奖励的精灵哦！",true);
               break;
            case 11060:
               Alarm.show(str + "只有50级以下的精灵才可以进入试炼之塔，你的背包中有超过50级的精灵哦！");
               break;
            case 13005:
               Alarm.show(str + "等级不够，无法学习技能！");
               break;
            case 13075:
               Alarm.show(str + "你的赛尔豆不够哦！");
               break;
            case 13072:
               Alarm.show(str + "孵化已结束，重新打开面板，去收新蛋吧！");
               break;
            case 13066:
               Alarm.show(str + "今天已经做过湿度调节和温度调节了！");
               break;
            case 13067:
               SimpleAlarm.show(str + "繁殖舱正在恢复能量中，目前无法使用！");
               break;
            case 13071:
               EventManager.dispatchEvent(new Event(ErrorType.getErr0rType(13071)));
               break;
            case 13065:
               Alarm.show(str + "已有蛋正在孵化！");
            case 13057:
               Alarm.show(str + "先去领精灵培育仓吧！");
               break;
            case 13058:
               Alarm.show(str + "已经有精灵在繁殖了！");
               break;
            case 13059:
               Alarm.show(str + "用户拥有的精灵蛋已经达到上限！");
               break;
            case 13060:
               Alarm.show(str + "不能使用同一个精灵进行繁殖！");
               break;
            case 13061:
               Alarm.show(str + "雄性精灵选择错误！");
               break;
            case 13062:
               Alarm.show(str + "雌性精灵选择错误！");
               break;
            case 13063:
               Alarm.show(str + "只有50级以上的精灵才可以进行繁殖！");
               break;
            case 13080:
               Alarm.show(str + "两次繁殖时间少于1秒！");
               break;
            case 13089:
               Alarm.show(str + "同时孵化的精元个数达到上限！");
               break;
            case 13144:
               Alarm.show(str + "今天挑战埃德蒙失败过！");
               break;
            case 13147:
               Alarm.show(str + "你已经支持过该技能了！");
               break;
            case 13148:
               Alarm.show(str + "每人每天仅能投票一次，记得明天再来哟！");
               break;
            case 103018:
               Alarm.show(str + "非仓库中的精灵不能放入精英收藏！");
               break;
            case 103019:
               Alarm.show(str + "精英收藏中的精灵多于限制个数！");
               break;
            case 103020:
               Alarm.show(str + "没有匹配的精灵！");
               break;
            case 11055:
               Alarm.show(str + "你还没有去报名巅峰之战！");
               break;
            case 103668:
               Alarm.show(str + "该精灵已经刻印过了不可以放生哦！ ");
               break;
            case 11056:
               Alarm.show(str + "巅峰之战开放时间：12:00——15:00、18:00——21:00！");
               break;
            case 11058:
               Alarm.show(str + "背包中有精灵不能出战，可能体力不够了！");
               break;
            case 10411:
               Alarm.show(str + "你的巅峰荣誉低于这个物品需要的数值哦！");
               break;
            case 11053:
               Alarm.show(str + "你的首发精灵低于100级哦！");
               break;
            case 11054:
               Alarm.show(str + "你的背包里的精灵不足6只或者有不到100级的精灵哦！");
               break;
            case 11051:
               Alarm.show(str + "你的精灵已经100级了哦！");
               break;
            case 11052:
               Alarm.show(str + "你的精灵已经获得了足够的月光能量哦！");
               break;
            case 10509:
               Alarm.show(str + "你现在没有VIP，要有VIP的小赛尔才可以领的哦！");
               break;
            case 10508:
               Alarm.show(str + "你已经领过了，可不要贪心哦！");
               break;
            case 200008:
               Alarm.show(str + "兑换活动已结束！");
               break;
            case 11041:
               Alarm.show(str + "战斗阶梯不能换首发精灵！");
               break;
            case 11044:
               Alarm.show(str + "命运之轮是个危险的地方，需要拥有等级高于40级的精灵在可以进入哦！");
               break;
            case 11040:
               EventManager.dispatchEvent(new RobotEvent("11040"));
               break;
            case 11039:
               Alarm.show(str + "战斗阶梯是个危险的地方，需要拥有等级高于50级的精灵才可以进入哦！");
               break;
            case 10034:
               Alarm.show(str + "你的超能NoNo等级不够哦！");
               break;
            case 18501:
               Alarm.show(str + "你还没有参加精灵争霸赛哦！赶紧去报名吧！");
               break;
            case 10033:
               Alarm.show(str + "你对战得太快了，请休息一下！");
               break;
            case 15608:
               Alarm.show(str + "本次对战不能使用道具！");
               break;
            case 10036:
               break;
            case 10037:
               Alarm.show(str + "你已装备了相同的刻印或者同一系列的2个刻印！");
               break;
            case 18502:
               Alarm.show(str + "正在读取数据，请过几秒再来看看哦！");
               break;
            case 13042:
               Alarm.show(str + "要替换的技能不属于该精灵！");
               break;
            case 18241:
               Alarm.show(str + "该项比赛尚未开放，请查看比赛时间！");
               TeamPKManager.closeWait();
               break;
            case 18240:
               Alarm.show(str + "此对抗赛不允许精灵对战！");
               break;
            case 13026:
               Alarm.show(str + "同类道具正在使用中！");
               break;
            case 14101:
               EventManager.dispatchEvent(new Event(ErrorType.getErr0rType(14101)));
               break;
            case 14111:
               Alarm.show(str + "一天只能报十次名哦！");
               break;
            case 14102:
               EventManager.dispatchEvent(new Event(ErrorType.getErr0rType(14102)));
               break;
            case 16503:
               EventManager.dispatchEvent(new RobotEvent("16503"));
               break;
            case 230106:
               EventManager.dispatchEvent(new RobotEvent("230106"));
               break;
            case 13024:
               Alarm.show(str + "还没有加载超能NoNo技能排序芯片！");
               break;
            case 13041:
               Alarm.show(str + "你已经给这个精灵喂过粽子了哦！");
               break;
            case 10401:
               break;
            case 10402:
               Alarm.show(str + "已经完成了领奖！");
               break;
            case 10023:
               Alarm.show(str + "领取新年礼物时间不对，快去看看纽斯身后的公告板吧！");
               break;
            case 11025:
               Alarm.show(str + "要相对应系别的精灵才能应战的哦！");
               break;
            case 11027:
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.ERROR_11027));
               break;
            case 11028:
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.ERROR_11028));
               break;
            case 11034:
               Alarm.show(str + "参赛精灵必须全部处于可出战状态！");
               break;
            case 11032:
               Alarm.show(str + "你还没有设置出战的暗黑精灵哦！");
               break;
            case 10029:
               Alarm.show(str + "你的奖牌数量不够哦!赶快去获取更多奖牌吧！");
               break;
            case 10021:
               Alarm.show(str + "你的精灵不可以出战！");
               break;
            case 14004:
               NpcTipDialog.show(str + "NoNo无重力能量仓还处于试验阶段，为了每个NoNo的健康，明天再来吧！",null,NpcTipDialog.SHAWN);
               break;
            case 14106:
               Alarm.show(str + "这个海盗已经被战胜过了哦！");
               break;
            case 14112:
               Alarm.show(str + "遭遇战已经结束了哦！");
               break;
            case 14105:
               Alarm.show(str + "这个海盗正在被你的战友挑战哦！");
               break;
            case 19001:
               Alarm.show(str + "没有跟随精灵哦！");
               break;
            case 19002:
               Alarm.show(str + "仔细观察圆圈的颜色，然后将对应属性的精灵带在身边才能开启这个机关！");
               break;
            case 10101:
               Alarm.show(str + "这个位置已经有人了！");
               break;
            case 103106:
               Alarm.show(str + "你今天获得的赛尔豆已经到上限了！");
               break;
            case 10009:
               Analytics.enabledSubmit = false;
               Alarm.show(str + "赛尔号进入休眠巡航模式！\r系统即将关闭！",function():void
               {
                  navigateToURL(new URLRequest("http://seer.61.com/"),"_self");
               });
               break;
            case 10102:
               Alarm.show(str + "你已经离开游戏了哦！");
               break;
            case 10001:
               Alarm.show(str + "SESSION错误！");
               break;
            case 101160:
               Alarm.show(str + "对不起，你的密码不正确！");
               break;
            case 10002:
               MainManager.getStage().addChild(Alarm.show(str + "系统出错！"));
               break;
            case 10003:
               Alarm.show(str + "系统繁忙！");
               break;
            case 10007:
               Alarm.show(str + "获取黑名单错误！");
               break;
            case 10017:
               Alarm.show(str + "购买失败！");
               break;
            case 11001:
               Alarm.show(str + "战斗已经取消！");
               break;
            case 11002:
               Alarm.show(str + "战斗已经结束！");
               EventManager.dispatchEvent(new RobotEvent("error_11002"));
               break;
            case 11012:
               Alarm.show(str + "你本回合已经做过操作！");
               break;
            case 11005:
               Alarm.show(str + "当前不能取消对战！");
               break;
            case 11013:
               Alarm.show(str + "你的精灵已经没有体力了，请更换对战精灵！");
               break;
            case 11008:
               Alarm.show(str + "对方跟你不在同一个场景中，不能进行对战！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               break;
            case 11009:
               if(cmdID == 9742)
               {
                  Alarm.show(str + "你已经挑战了这个恶灵兽哦！");
               }
               else
               {
                  Alarm.show(str + "这个精灵似乎不在这个场景了哦！");
               }
               break;
            case 11030:
               Alarm.show(str + "你背包中的精灵不满足出战的要求！");
               EventManager.dispatchEvent(new Event("Error_11030"));
               break;
            case 11010:
               Alarm.show(str + "你已经在线超过六小时，不能进行战斗了！");
               break;
            case 10028:
               if(GiftController.tabIndex == 1)
               {
                  Alarm.show(str + "你已经领取过了，请下个月再来吧！");
               }
               else
               {
                  Alarm.show(str + "你已经领取过了，请下周再来吧！");
               }
               GiftController.removeSocketEvents();
               EventManager.dispatchEvent(new Event("Error_10028"));
               break;
            case 10030:
               Alarm.show(str + "你还不能做这个动作！");
               break;
            case 10035:
               EventManager.dispatchEvent(new Event("Error_10035"));
               break;
            case 10036:
               EventManager.dispatchEvent(new Event("Error_10036"));
               break;
            case 10004:
               sp = Alarm.show(str + "你的帐号已经在别的地方登录！",function():void
               {
                  navigateToURL(new URLRequest("http://seer.61.com"),"_self");
               });
               MainManager.getStage().addChild(sp);
               break;
            case 103301:
               Alarm.show(str + "任务已经存在！");
               break;
            case 13001:
               Alarm.show(str + "你还没有集齐本期收集计划的所有精灵哦！");
               break;
            case 13002:
               Alarm.show(str + "你已经兑换过这个精灵了！");
               break;
            case 13037:
               Alarm.show(str + "你的精灵未达到50级不可以去验证哦！");
               break;
            case 13038:
               Alarm.show(str + "你还没有使用超炫芯片不可以验证哦！");
               break;
            case 13039:
               Alarm.show(str + "验证精灵需要花费500赛尔豆，你的赛尔都不足哦！");
               break;
            case 14501:
               Alarm.show(str + "该项任务您已经出色的完成咯！您可以点击赛尔任务档案查看到其他发布任务！");
               break;
            case 14502:
               Alarm.show(str + "不符合条件！");
               break;
            case 103103:
               Alarm.show(str + "好友已经存在！");
               break;
            case 103105:
               Alarm.show(str + "到达好友个数上限！");
               break;
            case 103102:
               Alarm.show(str + "对方在你的黑名单中！");
               break;
            case 103104:
               Alarm.show(str + "好友不存在！");
               break;
            case 103117:
               Alarm.show(str + "用户已经存在于黑名单！");
               break;
            case 103118:
               Alarm.show(str + "黑名单个数超过限制！");
               break;
            case 103116:
               Alarm.show(str + "被删除的用户不在黑名单中！");
               break;
            case 103670:
               Alarm.show(str + "刻印达到上限！");
               break;
            case 103203:
               if(cmdID == CommandID.BREAK_EGG)
               {
                  EventManager.dispatchEvent(new Event("Error_Full_Bag_BREAK_EGG"));
                  return;
               }
               if(!MainManager.isFighting)
               {
                  Alarm.show(str + "你不能拥有过多此物品！");
               }
               break;
            case 103204:
               Alarm.show(str + "物品ID不存在！");
               break;
            case 103208:
               if(cmdID == CommandID.CHALLENGE_MYSTERY_SPACE)
               {
                  Alarm.show(str + "需要集齐5个闪光之匙才可以进入闪光神秘空间哦！");
               }
               else
               {
                  Alarm.show(str + "对不起，你的物品数量不够！");
               }
               break;
            case 103209:
               Alarm.show(str + "未使用的技能刻印个数不足！");
               break;
            case 103210:
               Alarm.show(str + "未使用的能力刻印个数不足");
               break;
            case 103013:
               MainManager.getStage().addChild(Alarm.show(str + "精灵个数已经超过上限！"));
               break;
            case 103207:
               Alarm.show(str + "某些衣服过期了！");
               break;
            case 103202:
               if(cmdID == CommandID.GET_LAS_EGG)
               {
                  Alarm.show(str + "这是专为已战胜里奥斯但没有获得胡里亚的赛尔而开设的精元补领设施！");
               }
               else if(cmdID == CommandID.CHALLENGE_MYSTERY_SPACE)
               {
                  Alarm.show(str + "需要集齐5个闪光之匙才可以进入闪光神秘空间哦！");
               }
               else if(cmdID == 1109)
               {
                  NpcTipDialog.show(str + "很抱歉，您没有<font color=\'#ff0000\'>精灵邀请函</font>，所以不能查看稀有精灵大拜年时刻表，HELP建议您可以去问问其他小赛尔，希望您可以谅解！",null,NpcTipDialog.HELPMACH);
               }
               else if(cmdID == CommandID.OPEN_DARKPORTAL)
               {
                  Alarm.show(str + "你的暗黑之匙不够，不能够进入暗黑之门哦！");
               }
               else if(cmdID == CommandID.HAPPY_DRAW_START)
               {
                  Alarm.show(str + "你的抽奖次数已经用完了！");
               }
               else if(cmdID == CommandID.OLYMPIC_FOOTBALL)
               {
                  Alarm.show(str + "你用来购买足球的金质徽章数量不够，多去参加奥运项目吧！");
               }
               else if(cmdID == CommandID.SEEK_JEWELRY_ITEM_DRAW)
               {
                  Alarm.show(str + "明天就能继续免费抽奖啦！通过充值超能NoNo也可获赠更多免费抽奖机会哟！",function():void
                  {
                     ModuleManager.destroy(ClientConfig.getAppModule("SuperNoSeekJewelryPanel"));
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
               }
               else if(cmdID == CommandID.GOLDBEANDRAW_PAY)
               {
                  Alarm.show(str + "对不起，您操作的过快了！");
               }
               else
               {
                  Alarm.show(str + "对不起，你的物品数量不够！");
               }
               EventManager.dispatchEvent(new RobotEvent(ErrorType.getErr0rType(103202)));
               break;
            case 103303:
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.ERROR_103303));
               if(GiftController.isGet)
               {
                  GiftController.isGet = false;
                  Alarm.show(str + "你已经领取过了，请下个月再来吧！");
                  return;
               }
               if(GiftController.isGetS)
               {
                  GiftController.isGetS = false;
                  GiftController.remove();
                  Alarm.show(str + "你已经领取过了，请下个月再来吧！");
                  return;
               }
               if(GiftController.weekGift)
               {
                  GiftController.weekGift = false;
                  Alarm.show(str + "你已经领取过了，请下周再来吧！");
                  return;
               }
               Alarm.show(str + "每周每天任务的次数达到了最大值！");
               break;
            case 103107:
               Alarm.show(str + "你的赛尔豆余额不足！");
               break;
            case 13006:
               Alarm.show(str + "这只精灵还不满足进化的条件！");
               break;
            case 13007:
               EventManager.dispatchEvent(new Event("Error_13007"));
               break;
            case 13017:
               Alarm.show(str + "不能展示背包里的精灵！");
               break;
            case 17018:
               Alarm.show(str + "你今天已经被吃掉过一回了，明天再来吧！");
               break;
            case 13023:
               Alarm.show(str + "该类道具已经在使用中，无法重复使用！");
               break;
            case 103011:
               Alarm.show(str + "赛尔精灵不存在！");
               break;
            case 13009:
               Alarm.show(str + "你的精灵不能被进化！");
               break;
            case 103012:
               Alarm.show(str + "超过可带出来的精灵个数限制！");
               break;
            case 13003:
               Alarm.show(str + "需要治疗的精灵不在身边！");
               break;
            case 11006:
               Alarm.show(str + "你没有可出战的精灵哦！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.NO_PET_CAN_FIGHT));
               break;
            case 11007:
               Alarm.show(str + "单挑模式中不允许替换精灵！");
               break;
            case 14109:
               Alarm.show(str + "你失败次数已经超过5次了哦！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               break;
            case 11003:
               Alarm.show(str + "对方没有可以出战的精灵！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               break;
            case 103232:
               Alarm.show(str + "系统繁忙，请稍后再试！");
               break;
            case 10005:
               Alarm.show(str + "你使用了非法语言！");
               break;
            case 10006:
               Alarm.show(str + "对方不在线！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               break;
            case 11004:
               Alarm.show(str + "这只精灵似乎已经不在这个地方了！");
               break;
            case 11011:
               if(cmdID == 41129 && MapManager.currentMap.id == 975)
               {
                  Alarm.show(str + "背包里必须要有6只满级精灵！");
                  return;
               }
               Alarm.show(str + "这个精灵目前不在这里了哦！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.NO_PET_CAN_FIGHT));
               break;
            case 101105:
               if(cmdID != CommandID.SEEROL_GET_MON_CLASS_CNT)
               {
                  Alarm.show(str + "米米号不存在！");
               }
               break;
            case 103240:
               Alarm.show(str + "你不能拥有过多该物品！");
               break;
            case 103241:
               Alarm.show(str + "基地道具的类型数量超过限制（400个）！");
               break;
            case 103242:
               if(cmdID == CommandID.SUPRISE_WARSHIP_UPDATE_TREE)
               {
                  Alarm.show(str + "只有把基地中正在展示的圣诞树放回仓库，才能成功升级它哦！");
               }
               else
               {
                  Alarm.show(str + "仓库中可贩卖的道具数量少于欲贩卖的道具数量！");
               }
               break;
            case 103108:
               Alarm.show(str + "小屋电量不足！");
               break;
            case 10008:
               Alarm.show(str + "该能源目前不能被采集！");
               break;
            case 10063:
               Alarm.show(str + "该能源目前不能被采集！");
               break;
            case 10009:
               Alarm.show(str + "在线时间超时（6小时）！");
               break;
            case 103010:
               FightDispatcher.dispatchEvent(new PetFightEvent(PetFightEvent.PET_HAS_EXIST));
               break;
            case 10010:
               Alarm.show(str + "报告！你的电池能量已经耗尽，现在只能维持最基本的运行模式！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.NO_PET_CAN_FIGHT));
               break;
            case 10011:
               Alarm.show(str + "对方的在线时长已经超过最大时长！");
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CLOSE_FIGHT_WAIT));
               break;
            case 13008:
               Alarm.show(str + "不能学习重复的技能！");
               break;
            case 13025:
               Alarm.show(str + "你并没有使用过<font color=\'#ff0000\'>自动战斗器S型</font>！");
               break;
            case 13027:
            case 13028:
               break;
            case 13029:
               Alarm.show(str + "你的精灵还未达到参与融合的要求，换别的精灵试试吧！");
               break;
            case 13030:
               Alarm.show(str + " 融合转生仓已进入自动能源补充模式，一天后能源将补充完毕！");
               break;
            case 13031:
               Alarm.show(str + "你已经拥有足够多的元神珠啦，请将它们孵化后再来继续融合噢！");
               break;
            case 13032:
               Alarm.show(str + "你没有元神珠！");
               break;
            case 13034:
            case 103548:
               Alarm.show(str + "你已经有一个元神珠正在赋形噢！");
               break;
            case 103547:
               Alarm.show(str + "你的元神珠不存在！");
               break;
            case 10012:
               Alarm.show(str + "他是你的教官！请先与他解除教官与学员的关系！");
               break;
            case 10013:
               Alarm.show(str + "他是你的学员！请先与他解除教官与学员的关系！");
               break;
            case 10014:
               Alarm.show(str + "他是你的教官！请先与他解除教官与学员的关系！");
               break;
            case 10015:
               Alarm.show(str + "他是你的学员！请先与他解除教官与学员的关系！");
               break;
            case 103113:
               Alarm.show(str + "请先与他解除教官与学员的关系！");
               break;
            case 101001:
               Alarm.show(str + "数据库繁忙！");
               break;
            case 101002:
               Alarm.show(str + "数据库出错！");
               break;
            case 101003:
               Alarm.show(str + "数据库网络出错！");
               break;
            case 10009:
               Alarm.show(str + "现在还不能采燃气！");
               break;
            case 103530:
               Alarm.show(str + "战队徽章不够！");
               break;
            case 200002:
               Alarm.show(str + "密码兑换失败\n\n" + "1.请检查密码输入是否有误\n" + "2.请检查包装是否拆封                \n" + "3.请认准淘米授权标志                ");
               break;
            case 200003:
               Alarm.show(str + "密码未激活！");
               break;
            case 200004:
               Alarm.show(str + "密码不在有效期内！");
               break;
            case 200005:
               Alarm.show(str + "密码被冻结！");
               break;
            case 200006:
               Alarm.show(str + "密码已经使用\n\n" + "1.请检查密码输入是否有误\n" + "2.请检查包装是否拆封        \n" + "3.请认准淘米授权标志        ");
               break;
            case 200007:
               Alarm.show(str + "系统错误！");
               break;
            case 10050:
               Alarm.show(str + "快邀请更多的勇士加入我们其中吧，让我们一起携手捍卫家园！");
               break;
            case 10052:
               Alarm.show(str + "你已经领过奖品了！");
               break;
            case 12007:
               Alarm.show(str + "经验池已经没有经验！");
               break;
            case 12008:
               Alarm.show(str + "你不是学员身份！");
            case 13003:
               Alarm.show(str + "你现在还没有精灵，没有办法分享教官经验！");
               break;
            case 13010:
               Alarm.show(str + "已经有一个精元在孵化了（不能同时孵化两个蛋）！");
               break;
            case 13040:
               Alarm.show(str + "你没有将雷伊设为首选或雷伊的体力不足！");
               break;
            case 16001:
               Alarm.show(str + "你今天已经打过工了！");
               break;
            case 16002:
               Alarm.show(str + "你没有捐赠任何东西！");
               break;
            case 12009:
               Alarm.show(str + "你不是教官身份！");
               break;
            case 13002:
               Alarm.show(str + "你已经兑换过这个精灵了！");
               break;
            case 13004:
               Alarm.show(str + "要求奖励的精灵不在可奖励的范围！");
               break;
            case 13011:
               Alarm.show(str + "精灵王获胜场数不足10场！");
               break;
            case 13083:
               Alarm.show(str + "盖亚没有带在身边！");
               break;
            case 14001:
               Alarm.show(str + "每天只可以做5项每日任务噢，明天再来吧！");
               break;
            case 14002:
               Alarm.show(str + "你今天不能再接日常任务了！");
               break;
            case 14003:
               Alarm.show(str + "你没有做够足够的任务，不能领奖励！");
               break;
            case 14005:
               Alarm.show(str + "你还没有完成露希欧星勘探任务，不能进行采矿！");
            case 10301:
               Alarm.show(str + "你的扭蛋牌不足，无法兑换奖励！");
               break;
            case 10784:
               Alarm.show(str + "你发的精灵id不合理");
               break;
            case 20187:
               Alarm.show(str + "未到CD时间");
               break;
            case 14261:
               Alarm.show(str + "保存录相失败！");
               break;
            case 14262:
               Alarm.show(str + "录像数据太大，暂时无法保存！");
               break;
            case 100101:
               Alarm.show(str + "由于使用不文明昵称，你的号码被永久封停！");
               break;
            case 100102:
               Alarm.show(str + "由于使用不文明昵称，你的号码被24小时封停！");
               break;
            case 100103:
               Alarm.show(str + "由于使用不文明昵称，你的号码被7天封停！");
               break;
            case 100104:
               Alarm.show(str + "由于使用不文明昵称，你的号码被14天封停！");
               break;
            case 100201:
               Alarm.show(str + "由于使用不文明用语，你的号码被永久封停！");
               break;
            case 100202:
               Alarm.show(str + "由于使用不文明用语，你的号码被24小时封停！");
               break;
            case 100203:
               Alarm.show(str + "由于使用不文明用语，你的号码被7天封停！");
               break;
            case 100204:
               Alarm.show(str + "由于使用不文明用语，你的号码被14天封停！");
               break;
            case 100301:
               Alarm.show(str + "由于索要个人信息，你的号码被永久封停！");
               break;
            case 100302:
               Alarm.show(str + "由于索要个人信息，你的号码被24小时封停！");
               break;
            case 100303:
               Alarm.show(str + "由于索要个人信息，你的号码被7天封停！");
               break;
            case 100304:
               Alarm.show(str + "由于索要个人信息，你的号码被14天封停！");
               break;
            case 100401:
               Alarm.show(str + "由于使用外挂，你的号码被永久封停！");
               break;
            case 100402:
               Alarm.show(str + "由于使用外挂，你的号码被24小时封停！");
               break;
            case 100403:
               Alarm.show(str + "由于使用外挂，你的号码被7天封停！");
               break;
            case 100404:
               Alarm.show(str + "由于使用外挂，你的号码被14天封停！");
               break;
            case 100501:
               Alarm.show(str + "由于强制改名，你的号码被踢下线！");
               break;
            case 103245:
               Alarm.show(str + "分配器中经验值不够！");
               break;
            case 103542:
               break;
            case 11018:
               Alarm.show(str + "已经与这个时间稀有野怪对战过！");
               break;
            case 11015:
               Alarm.show(str + "擂主已经存在！");
               break;
            case 11017:
               Alarm.show(str + "擂台赛战斗已经开始，等会再挑战吧！");
               break;
            case 11014:
               LevelManager.root.addChild(Alarm.show(str + "这次对战不能随便逃跑哦！"));
               break;
            case 13012:
               Alarm.show(str + "擂主不能更换精灵！");
               break;
            case 13013:
               Alarm.show(str + "擂主不能给精灵加血！");
               break;
            case 14577:
               Alarm.show(str + "擂主不能更换精灵！");
               break;
            case 11023:
               Alarm.show(str + "擂主还没有准备好，不能挑战！");
               break;
            case 11021:
               Alarm.show(str + "擂主不能加入其它战斗！");
               break;
            case 11020:
               Alarm.show(str + "不能邀请擂主对战！");
               break;
            case 11022:
               Alarm.show(str + "擂主不能取消战斗！");
               break;
            case 13014:
               Alarm.show(str + "已经拥有的精灵太多，大于2000，不能回收！");
               break;
            case 13015:
               Alarm.show(str + "你的精灵与你的感情已经非常亲密了\n舍不得离开你！");
               break;
            case 13016:
               Alarm.show(str + "非仓库中的精灵不能放生！");
               break;
            case 103013:
               Alarm.show(str + "已经拥有的精灵太多，大于2000，不能回收！");
               break;
            case 103014:
               Alarm.show(str + "放生仓库中的精灵多于2000个！");
               break;
            case 103015:
               Alarm.show(str + "非仓库中的精灵不能放生！");
               break;
            case 103016:
               Alarm.show(str + "精灵id和捕捉时间不匹配！");
               break;
            case 103017:
               Alarm.show(str + "精灵处在放生状态，不能再次放生！");
               break;
            case 10016:
               Alarm.show(str + "你的赛尔豆余额不足！");
               if(SPChannelController.isSuerChannel)
               {
                  SPChannelController.isSuerChannel = false;
               }
               break;
            case 10041:
               Alarm.show(str + "你还没有开通超能NoNo，无法使用相关服务！");
               break;
            case 10043:
               Alarm.show(str + "没有完成任务不能领奖品！");
               break;
            case 10044:
               Alarm.show(str + "你的子弹已用光！");
               break;
            case 10501:
               Alarm.show(str + "该装扮未达到所需的升级！");
               break;
            case 10502:
               Alarm.show(str + "该装扮不可以升级！");
               break;
            case 10503:
               if(cmdID == CommandID.PEOPLE_TRANSFROM)
               {
                  Alarm.show(str + "你没有足够的能量块！\r<font color=\'#ff0000\'>（你可以在赛尔工厂里购买到哦！）</font>");
               }
               else if(cmdID == CommandID.SHENLINGSHOU_EXCHANGE || cmdID == CommandID.EFFECT_STRENGTHEN_COMPOUND)
               {
                  Alarm.show(str + "物品数量不够！");
               }
               else
               {
                  Alarm.show(str + "你没有该装扮！");
               }
               break;
            case 11009:
               Alarm.show(str + "Boss不存在！");
               break;
            case 11026:
               Alarm.show(str + "今天已经挑战过该精灵了，明天再来吧！");
               break;
            case 13018:
               Alarm.show(str + "你的精灵这项能力已经达到顶峰了！");
               break;
            case 13033:
               Alarm.show(str + "该精灵不能执行元神还原哦！");
               break;
            case 13020:
               Alarm.show(str + "战斗中不能改变属性上限！");
               break;
            case 17001:
               Alarm.show(str + "你已经有NoNo了！");
               break;
            case 17002:
               Alarm.show(str + "你还没有开通NoNo！");
               break;
            case 17003:
               Alarm.show(str + "你的NoNo处在关机状态中！");
               break;
            case 17004:
               Alarm.show(str + "你的NoNo能量不足！");
               break;
            case 17005:
               Alarm.show(str + "你的NoNo没有开通这个功能哦！");
               if(SPChannelController.isSuerChannel)
               {
                  SPChannelController.isSuerChannel = false;
               }
               break;
            case 17006:
               Alarm.show(str + "这个物品目前没有办法使用！");
               break;
            case 17007:
               Alarm.show(str + "你NoNo的AI等级不够！");
               break;
            case 17012:
               if(cmdID == 2963)
               {
                  Alert.show(str + "必须拥有" + TextFormatUtil.getRedTxt("超能NONO") + "才能捐献物资！想立刻开通吗？",function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
               }
               else
               {
                  Alert.show(str + "必须拥有" + TextFormatUtil.getRedTxt("超能NONO") + "才能领取！想立刻开通吗？",function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
                  GiftController.removeSocketEvents();
               }
               break;
            case 17013:
               Alarm.show(str + "你的NoNo不在身边哦！");
               break;
            case 17014:
               Alarm.show(str + "呼，你已经领取过这周的奖励了呢下周再来领取吧！");
               break;
            case 17015:
               Alarm.show(str + "你的NoNo没有开通这个功能哦！");
               if(SPChannelController.isSuerChannel)
               {
                  SPChannelController.isSuerChannel = false;
               }
               break;
            case 17016:
               Alarm.show(str + "已经开通过超能NoNo了，不必重复开通！");
               break;
            case 17019:
               Alarm.show(str + "身边没有跟随要求的精灵！");
               break;
            case 13021:
               Alarm.show(str + "你的精灵是100级的精灵哟，没法再获得能量长大了！");
               break;
            case 14004:
               Alarm.show(str + "你今天已经玩过一次了！");
               break;
            case 1:
               break;
            case 10018:
               Alarm.show(str + "你只要战胜了火山星山洞深处的里奥斯就能获得它的精元哦！");
               break;
            case 13022:
               Alarm.show(str + "你已经获得了里奥斯，不能太贪心哦！");
               break;
            case 17017:
               Alarm.show(str + "你已经领过该芯片！");
               break;
            case 17015:
               Alarm.show(str + "你没有超能NoNo，不能领取超能芯片！");
               break;
            case 17026:
               Alarm.show(str + "黑水晶精灵未跟随在身边！");
               break;
            case 17027:
               Alarm.show(str + "不在指定的地图中！");
               break;
            case 17028:
               EventManager.dispatchEvent(new Event(ErrorType.getErr0rType(17028)));
               break;
            case 17029:
               Alarm.show(str + "没有解封黑水晶所需的【晶体速溶粉】。<font color=\'#ff0000\'>听说罗开那里有噢</font>！");
               break;
            case 17030:
               Alarm.show(str + "已经解封过黑水晶！");
               break;
            case 17031:
               Alarm.show(str + "精灵不在战斗背包中！");
               break;
            case 17032:
               Alarm.show(str + "精灵交换出错！");
               break;
            case 103512:
               Alarm.show(str + "该赛尔已经是战队成员！");
               break;
            case 103513:
               break;
            case 103514:
               Alarm.show(str + "战队成员已经存在！");
               break;
            case 103515:
               Alarm.show(str + "战队中没有这个成员！");
               break;
            case 103516:
               Alarm.show(str + "战队成员超过上限！");
               break;
            case 103517:
               Alarm.show(str + "战队ID不存在！");
               break;
            case 103518:
               Alarm.show(str + "要塞设施已存在！");
               break;
            case 103519:
               Alarm.show(str + "战队指挥官不存在！");
               break;
            case 103520:
               Alarm.show(str + "设施不存在！");
               break;
            case 103523:
               Alarm.show(str + "设施数量达到上限！");
               break;
            case 103528:
               Alarm.show(str + "你今天已经领取过战队能量了！");
               break;
            case 103529:
               Alarm.show(str + "能量不足！");
               break;
            case 18001:
               Alarm.show(str + "你已经加入了一个战队了！");
               break;
            case 18002:
               Alarm.show(str + "你没有加入战队，不能进行此操作！");
               break;
            case 18003:
               Alarm.show(str + "你没有审核验证的权限！");
               break;
            case 18004:
               if(cmdID == 4001)
               {
                  TeamPKManager.closeWait();
                  Alarm.show(str + "只有指挥官能报名参加要塞保卫战。快让你的指挥官带领你们一起争取荣耀吧！");
               }
               else
               {
                  Alarm.show(str + "你不是指挥官！");
               }
               break;
            case 18005:
               Alarm.show(str + "不能设置指挥官！");
               break;
            case 18006:
               if(cmdID == CommandID.TEAM_PK_SIGN)
               {
                  Alarm.show(str + "只有战队指挥官和主将才能报名参加要塞保卫战！");
               }
               else
               {
                  Alarm.show(str + "你的权限不够！");
               }
               break;
            case 18007:
               Alarm.show(str + "不在要塞中！");
               break;
            case 18008:
               Alarm.show(str + "不能建造该设施！");
               break;
            case 18009:
               Alarm.show(str + "你每天只能建造5次，请明天再来吧！");
               break;
            case 103526:
               break;
            case 18010:
               Alarm.show(str + "设施建造次数达到每日上限！");
               break;
            case 18011:
               Alarm.show(str + "该设施已经建造完毕，快让你的指挥官来升级设施吧！");
               break;
            case 18012:
               Alarm.show(str + "不能对该设施捐赠！");
               break;
            case 18013:
               Alarm.show(str + "设施不需要捐赠此类物资！");
               break;
            case 18014:
               Alarm.show(str + "战队成员每天最多可以捐献" + TextFormatUtil.getRedTxt("100") + "个物资，请明天再来吧！");
               break;
            case 18015:
               Alarm.show(str + "设施被捐赠物资超过当日上限！");
               break;
            case 18016:
               Alarm.show(str + "设施不再需要这类资源了！");
               break;
            case 18017:
               Alarm.show(str + "该设施还不能升级！");
               break;
            case 18018:
               Alarm.show(str + "摆放出来的可升级设施超过上限！");
               break;
            case 18019:
               Alarm.show(str + "不能设置总部！");
               break;
            case 18020:
               Alarm.show(str + "不能购买这个养成型设施！");
               break;
            case 18021:
               Alarm.show(str + "不能升级到那种形态！");
               break;
            case 18022:
               Alarm.show(str + "所需战队等级不够，还不能升级！");
               break;
            case 18023:
               Alarm.show(str + "所需资源不够，还不能升级！");
               break;
            case 18024:
               Alarm.show(str + "没有摆放出前置设施！");
               break;
            case 18025:
               Alarm.show(str + "该设施仅VIP用户可以购买买/使用！");
               break;
            case 18027:
               Alarm.show(str + "你已经为战队提供过超级能量了！");
               break;
            case 18030:
               Alarm.show(str + "你的电池能量已经无法支持保卫战所需的模拟呈现功能，请明天蓄满电池后再来参加保卫战！");
               MapManager.changeMap(1);
               break;
            case 11024:
               Alarm.show(str + "正在精灵对战中！");
               break;
            case 18221:
               Alarm.show(str + "你们战队还没有报名参加对抗赛！");
               TeamPKManager.closeWait();
               break;
            case 18222:
               Alarm.show(str + "你的战队的其他成员已经报名参加保卫战，请耐心等待比赛集合令提示！");
               TeamPKManager.closeWait();
               break;
            case 18223:
               Alarm.show(str + "不在对抗赛地图中！");
               break;
            case 18224:
               Alarm.show(str + "报名签名无效！");
               TeamPKManager.closeWait();
               break;
            case 18225:
               Alarm.show(str + "对抗赛还没开始！");
               break;
            case 18226:
               Alarm.show(str + "屏障还没打开！");
               break;
            case 18227:
               Alarm.show(str + "对抗赛已经开始！");
               TeamPKManager.closeWait();
               break;
            case 18228:
               Alarm.show(str + "你已经加入了对抗赛，不能再次加入！");
               TeamPKManager.closeWait();
               break;
            case 18229:
               Alarm.show(str + "你还没有加入对抗赛！");
               break;
            case 18230:
               Alarm.show(str + "本周参加对抗赛的次数已达上限！");
               TeamPKManager.closeWait();
               break;
            case 18231:
               Alarm.show(str + "你不是对抗赛的任何一方的成员！");
               TeamPKManager.closeWait();
               break;
            case 18232:
               Alarm.show(str + "对抗赛加入成员已达上限！");
               TeamPKManager.closeWait();
               break;
            case 18233:
               Alarm.show(str + "你们的队伍还不满足胜利条件！");
               break;
            case 18234:
               Alarm.show(str + "你已经没有护盾了！");
               break;
            case 18235:
               Alarm.show(str + "当前系统繁忙，请稍后再试！");
               TeamPKManager.closeWait();
               break;
            case 18236:
               Alarm.show(str + "战队要塞保卫战只在周五，周六，周日的<font color=\'#ff0000\'>13-15点</font>举行，请各位小赛尔们做好准备，为自己的战队争取荣耀噢！");
               TeamPKManager.closeWait();
               break;
            case 18237:
               Alarm.show(str + "因为逃跑的惩罚规则，你在5分钟内无法再次报名。");
               TeamPKManager.closeWait();
               break;
            case 18238:
               Alarm.show(str + "对战还没有开始！");
               TeamPKManager.closeWait();
               MapManager.changeMap(1);
               break;
            case 14573:
               Alarm.show(str + "今天已经签到了明天再来吧！");
               break;
            case 18239:
               Alarm.show(str + "你今天不能再获得<font color=\'#ff0000\'>露西欧坚钢</font>了！");
               break;
            case 20003:
               Alarm.show(str + "您已经找全了所有的白色天晶！斯科尔星一定会复原的！");
               break;
            case 13082:
               Alarm.show(str + "你已经开启了坐骑功能！");
               break;
            case 220001:
               Alarm.show(str + "时空密码参数错误！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220002:
               Alarm.show(str + "时空密码不存在！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220003:
               Alarm.show(str + "时空密码未激活！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220004:
               Alarm.show(str + "时空密码不在有效期内！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220005:
               Alarm.show(str + "时空密码被冻结！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220006:
               Alarm.show(str + "您输入的时空密码已经使用过！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220007:
               Alarm.show(str + "该种礼物已经被抽取完了！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220008:
               Alarm.show(str + "你当天领取礼物已经达到上限，不能再领取更多！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220009:
               Alarm.show(str + "你已经拥有所有物品，不能再拥有了！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220010:
               Alarm.show(str + "没有礼品！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 220011:
               Alarm.show(str + "内部数据库出错！");
               EventManager.dispatchEvent(new Event(TIME_PASSWORD_ERROR));
               break;
            case 241001:
               Alarm.show(str + "这个密码已经被使用过了！");
               break;
            case 241002:
               Alarm.show(str + "您所输入的时空密码有误哦！仔细看看吧！");
               break;
            case 241003:
               Alarm.show(str + "咦！这个神奇密码还没有激活呢！");
               break;
            case 241004:
               Alarm.show(str + "糟糕！这个神奇密码已经过期啦！");
               break;
            case 241005:
               Alarm.show(str + "这个神奇密码已经被冻结啦！不能用咯！");
               break;
            case 241006:
               Alarm.show(str + "这个神奇密码已经用过咯！用其它的再试试看吧！");
               break;
            case 241007:
               Alarm.show(str + "内部错误！");
               break;
            case 241008:
               Alarm.show(str + "你已经投过票啦！明天再为你的精灵选手们加油吧！");
               break;
            case 210004:
               Alarm.show(str + "系统处理过程中出错！");
               break;
            case 210010:
               Alarm.show(str + "商品不存在！");
               break;
            case 210011:
               Alarm.show(str + "米米号不存在！");
               break;
            case 210012:
               EventManager.dispatchEvent(new RobotEvent(RobotEvent.CANCEL_MONEY_BUY));
               Alert.show(str + "购买支付密码不正确！密码忘记了吗？点击确认前往找回密码！",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_18);
               });
               break;
            case 210013:
               Alarm.show(str + "请求购的买商品数量超出当前商品库存！");
               break;
            case 210014:
               Alarm.show(str + "你不是VIP用户，无法购买此商品！");
               break;
            case 210015:
            case 210016:
            case 210017:
            case 210019:
               Alarm.show(str + "你不能拥有过多该商品！");
               break;
            case 210018:
               Alarm.show(str + "该商品不存在！");
               break;
            case 210102:
               Alarm.show(str + "你的米币帐户不存在！");
               break;
            case 210104:
               Alarm.show(str + "你的米币帐户未激活！");
               break;
            case 210105:
               Alarm.show(str + "你的米币帐户余额不足！");
               break;
            case 210106:
               Alarm.show(str + "购买数量出错！");
               break;
            case 210107:
               Alarm.show(str + "你的米币帐户超过当月的消费限制了！");
               break;
            case 210108:
               Alarm.show(str + "你的米币帐户单笔消费超过限制了！");
               break;
            case 210202:
               Alarm.show(str + "你的钻石帐户不存在！");
               break;
            case 210204:
               Alarm.show(str + "你的钻石帐户未激活！");
               break;
            case 210205:
               Alarm.show(str + "你的钻石帐户余额不足！");
               break;
            case 210206:
               Alarm.show(str + "购买数量出错！");
               break;
            case 210207:
               Alarm.show(str + "你的钻石帐户超过当月的消费限制了！");
               break;
            case 210208:
               Alarm.show(str + "你的钻石帐户单笔消费超过限制了！");
               break;
            case 10024:
               Alarm.show(str + "你没有穿上可变形的套装！");
               break;
            case 10504:
               Alarm.show(str + "不能重复注入药丸！");
               break;
            case 10505:
               Alarm.show(str + "不能注入过多相同物品！");
               break;
            case 16502:
               Alarm.show(str + "你真厉害，已经完成过此成就了！");
               break;
            case 20001:
               Alarm.show(str + "你没有足够的天晶来兑换！");
               break;
            case 20002:
               Alarm.show(str + "兑换的晶体过多！");
               break;
            case 15001:
               s = Alarm.show(str + "只有在同一个场景里才能邀请别人组队！");
               break;
            case 15002:
               s = Alarm.show(str + "对方已经在小队中了！");
               break;
            case 15003:
               s = Alarm.show(str + "你所在的小队已经解散了！");
               break;
            case 15004:
               s = Alarm.show(str + "你的小队人数已满5人，不能再邀请其他队员了！");
               break;
            case 15005:
               s = Alarm.show(str + "请稍后再进行小队的操作！");
               break;
            case 15006:
               s = Alarm.show(str + "对方正在忙碌，请稍后再邀请组队！");
               break;
            case 15007:
               s = Alarm.show(str + "请稍后再进行小队的操作！");
               break;
            case 15008:
               s = Alarm.show(str + "已经在小队中了哦！");
               break;
            case 15009:
               s = Alarm.show(str + "只有队长才能进行小队操作！");
               break;
            case 15011:
               s = Alarm.show(str + "不能邀请自己进入小队！");
               break;
            case 15012:
               s = Alarm.show(str + "你现在还没有小队！");
               break;
            case 15013:
               s = Alarm.show(str + "小队中已超过一个成员！");
               break;
            case 15014:
               s = Alarm.show(str + "你不在当前的小队中！");
               break;
            case 15015:
               s = Alarm.show(str + "你现在还没有小队！");
               break;
            case 15016:
               s = Alarm.show(str + "对方已经在小队中了！");
               break;
            case 15017:
               s = Alarm.show(str + "不能同时邀请更多的人！");
               break;
            case 15018:
               s = Alarm.show(str + "对方已经在小队中了！");
               break;
            case 15019:
               s = Alarm.show(str + "对方不是正在邀请的人！");
               break;
            case 15020:
               s = Alarm.show(str + "对方不在同一个场景里！");
               break;
            case 15021:
               s = Alarm.show(str + "对方不在线！");
               break;
            case 15022:
               s = Alarm.show(str + "对方不在任何小队中了！");
               break;
            case 15023:
               s = Alarm.show(str + "对方正在组队战中！");
               break;
            case 15024:
               s = Alarm.show(str + "对方不在你的小队中！");
               break;
            case 15025:
               s = Alarm.show(str + "不能开除自己！");
               break;
            case 15026:
               s = Alarm.show(str + "现在不能开除这个成员，请稍后再试！");
               break;
            case 15027:
               s = Alarm.show(str + "不能把队长移交给自己！");
               break;
            case 15028:
               s = Alarm.show(str + "现在不能移交队长，请稍后再试！");
               break;
            case 15029:
               s = Alarm.show(str + "在小队中不能玩游戏！");
               break;
            case 15030:
               s = Alarm.show(str + "你的小队人数已满！");
               break;
            case 15031:
               s = Alarm.show(str + "不能再同时邀请更多的玩家，请等待对方加入或取消邀请！");
               break;
            case 15032:
               s = Alarm.show(str + "对方不是小队队长！");
               break;
            case 15033:
               s = Alarm.show(str + "你已经加入了一个小队！");
               break;
            case 15034:
               s = Alarm.show(str + "你的小队不符合合体变形条件！");
               break;
            case 15035:
               s = Alarm.show(str + "你的小队已在变形状态了哟！");
               break;
            case 15101:
               s = Alarm.show(str + "你所在的小队还不能开始组队战！");
               break;
            case 15102:
               s = Alarm.show(str + "你在游戏中！");
               break;
            case 15103:
               s = Alarm.show(str + "你不是小队队长！");
               break;
            case 15104:
               s = Alarm.show(str + "你正在组队战中！");
               break;
            case 15105:
               s = Alarm.show(str + "你正在玩对抗赛！");
               break;
            case 15106:
               s = Alarm.show(str + "组队战已结束！");
               break;
            case 15107:
               s = Alarm.show(str + "你还不能离开勇者之塔！");
               break;
            case 15108:
               s = Alarm.show(str + "你不能作为擂台赛的擂主！");
               break;
            case 15109:
               s = Alarm.show(str + "你还不能走下擂台！");
               break;
            case 15110:
               s = Alarm.show(str + "你还不能进入暗黑武斗场！");
               break;
            case 15111:
               s = Alarm.show(str + "你还不能离开暗黑武斗场！");
               break;
            case 15112:
               s = Alarm.show(str + "当前不能取消组队战！");
               break;
            case 15113:
               s = Alarm.show(str + "本回合已经做出动作了，不能再做动作了！");
               break;
            case 15114:
               s = Alarm.show(str + "单人对战模式，不能换宠！");
               break;
            case 15115:
               s = Alarm.show(str + "你的精灵已经死了！");
               break;
            case 15116:
               s = Alarm.show(str + "不是精灵背包中的精灵！");
               break;
            case 15117:
               s = Alarm.show(str + "成员不能参加组队战，可能有不能出战的精灵！");
               break;
            case 15118:
               s = Alarm.show(str + "本对战模式不允许逃跑！");
               break;
            case 15119:
               s = Alarm.show(str + "目前不能退出小队（正在组队战中），请稍后再试！");
               break;
            case 15120:
               s = Alarm.show(str + "无效的小队位置！");
               break;
            case 15121:
               s = Alarm.show(str + "无效的物品！");
               break;
            case 15122:
               s = Alarm.show(str + "非法用语！");
               break;
            case 15123:
               s = Alarm.show(str + "组队时不能进入基地、要塞！");
               break;
            case 15124:
               s = Alarm.show(str + "已经不在组队战中了！");
               break;
            case 15127:
               s = Alarm.show(str + "玩家还没有加入对战时就报告资源加载完成！");
               break;
            case 15125:
               s = Alarm.show(str + "小队中还有玩家还在对战中或没有关闭战斗结束画面！");
               break;
            case 15126:
               s = Alarm.show(str + "玩家还没有注册对战就来参加对战！");
               break;
            case 15128:
               s = Alarm.show(str + "对战组还没有进入对战状态！");
               break;
            case 15129:
               s = Alarm.show(str + "此功能还没开放！");
               break;
            case 15130:
               s = Alarm.show(str + "玩家还没有加入对战！");
               break;
            case 15131:
               s = Alarm.show(str + "玩家还没有加载好资源！");
               break;
            case 15136:
               s = Alarm.show(str + "这里没有组队BOSS哦！");
               break;
            case 15150:
               s = Alarm.show(str + "对战已结束！");
               break;
            case 15501:
               s = Alarm.show(str + "不支持单人对战模式！");
               break;
            case 15502:
               s = Alarm.show(str + "不支持组队对战模式！");
               break;
            case 15132:
               s = Alarm.show(str + "还没有到达组队地图，请稍后再开始组队战！");
               break;
            case 15133:
               s = Alarm.show(str + "你的队友还没准备好，请等待队友！");
               break;
            case 15134:
               s = Alarm.show(str + "组队战中不能离开地图！");
               break;
            case 15135:
               s = Alarm.show(str + "队友还没有到达，你还不能换地图哟！");
               MapController._isSwitching = false;
               break;
            case 15137:
               s = Alarm.show(str + "不支持这种战斗模式！");
               break;
            case 15138:
               s = Alarm.show(str + "找不到被邀请者！");
               break;
            case 15139:
               s = Alarm.show(str + "这个位置已经有人了哟！");
               break;
            case 15140:
               s = Alarm.show(str + "该区域已满！");
               break;
            case 15141:
               s = Alarm.show(str + "无效的区域！");
               break;
            case 15142:
               s = Alarm.show(str + "这个位置已经有人了哟！");
               break;
            case 15143:
               s = Alarm.show(str + "没有站在任何区域（不能发起区域组队）！");
               break;
            case 15144:
               s = Alarm.show(str + "该区域的成员太少，还不能组成战队！");
               break;
            case 15145:
               s = Alarm.show(str + "不在区域队长位置上，不能发起组队！");
               break;
            case 15146:
               s = Alarm.show(str + "无效的组队精灵王模式！");
               break;
            case 15147:
               s = Alarm.show(str + "该对战还不能被取消！");
               break;
            case 15148:
               s = Alarm.show(str + "已经加入一个区域，不能再进入另一个区域了！");
               break;
            case 15149:
               s = Alarm.show(str + "你所在的地图没有这个区域！");
               break;
            case 15503:
               Alarm.show(str + "不能在组队战中访问精灵仓库！");
               break;
            case 14502:
               DebugTrace.show(str + "已拿过经验券错误！");
               break;
            case 18506:
               Alarm.show(str + "你已经领取过今天的奖励了！");
               break;
            case 18506:
               Alarm.show(str + "每天最多只能获得10张经验券哦！");
               break;
            case 18506:
               Alarm.show(str + "个人奖牌数未达到每日上限200块！");
               break;
            case 13043:
               Alarm.show(str + "该道具只能对融合精灵使用！");
               break;
            case 13044:
               Alarm.show(str + "精灵目前拥有的特性已满！");
               break;
            case 13045:
               Alarm.show(str + "该道具只能对非融合精灵使用！");
               break;
            case 13046:
               Alarm.show(str + "该精灵已经有特性！");
               break;
            case 13047:
               Alarm.show(str + "该精灵没有特性可以重置！");
               break;
            case 13048:
               Alarm.show(str + " 必须是8月15日前注册的用户才能领取！");
               break;
            case 13049:
               Alarm.show(str + "已经拥有的精灵太多啦，不能大于2000只哟！");
               break;
            case 18503:
               Alarm.show(str + "你还没有参加卡兰杯咯！");
               break;
            case 18509:
               EventManager.dispatchEvent(new RobotEvent("error18509"));
               break;
            case 11043:
               Alarm.show(str + "你的总奖牌数未达到1500喔！");
               break;
            case 10053:
               Alarm.show(str + "你需要达到等级才能领取奖励哦！");
               break;
            case 10054:
               Alarm.show(str + "你已经领过咯！");
               break;
            case 10055:
               Alarm.show(str + "你可不能提名自己哦！");
               break;
            case 10056:
               Alarm.show(str + "已经提名过别的用户了！");
               break;
            case 10057:
               Alarm.show(str + "不是2010年9月3日后注册的新用户！");
               break;
            case 101105:
               Alarm.show(str + "被提名的米米号不存在！");
               break;
            case 103666:
               Alarm.show(str + "被提名的用户不是新兵招募官！");
               break;
            case 10058:
               Alarm.show(str + "最高精灵等级不足30级！");
               break;
            case 10059:
               Alarm.show(str + "已经是招募官了！");
               break;
            case 10060:
               Alarm.show(str + "用户不是招募官！");
               break;
            case 10061:
               Alarm.show(str + "已经领取过奖励！");
               break;
            case 10062:
               Alarm.show(str + "招募新兵人数不足10名！");
               break;
            case 10507:
               Alarm.show(str + "只有月光兽才喜欢吃月饼哦！");
               break;
            case 13088:
               EventManager.dispatchEvent(new RobotEvent("Error13088"));
               break;
            case 10407:
               Alarm.show(str + "米鲁的寓言难倒有误？不对！一定是和时空之间有所误差！快去其他场景看看吧！");
               break;
            case 10408:
               EventManager.dispatchEvent(new RobotEvent("Error10408"));
               break;
            case 10403:
               Alarm.show(str + "\t你的神秘彩蛋还没有孵化出来哦！赶快去与野生精灵对战，让你的彩蛋吸收一些元气吧！");
               break;
            case 10404:
               Alarm.show(str + "\t博士这边的彩蛋可没有那么多哦，每个人每天只能领取5个哦！");
               break;
            case 10405:
               Alarm.show(str + "\t你没有彩蛋可以孵化哦！");
               break;
            case 10406:
               Alarm.show(str + "\t你的彩蛋能量需要达到30才能孵化咯！");
               break;
            case 10409:
               Alarm.show(str + "\t你已经领过VIP礼包啦！");
               EventManager.dispatchEvent(new Event("error10409"));
               break;
            case 10410:
               Alarm.show(str + "\t超能Nono的等级不够！");
               break;
            case 11031:
               Alarm.show(str + "合理的进行精灵训练才能发挥它的极致！今天训练的差不多了，明天再来吧！");
               EventManager.dispatchEvent(new Event("Error_11031"));
               break;
            case 13051:
               SimpleAlarm.show(str + "这个刻印无法加持在你的精灵上！",true);
               break;
            case 13052:
               SimpleAlarm.show(str + "这个刻印无法与你的精灵引起共鸣！",true);
               break;
            case 13053:
               SimpleAlarm.show(str + "这个刻印需要加持在更高等级的精灵上！",true);
               break;
            case 13054:
               SimpleAlarm.show(str + "刻印只能给背包中的精灵加持哦！",true);
               break;
            case 13055:
               SimpleAlarm.show(str + "有刻印加持的精灵是不能融合的！",true);
               break;
            case 103667:
               SimpleAlarm.show(str + "要加持的刻印不存在！",true);
               break;
            case 103668:
               SimpleAlarm.show(str + "有刻印加持的精灵是不能放生的哟！",true);
               break;
            case 13084:
               SimpleAlarm.show(str + "该特效还不可以学习！",true);
               break;
            case 103542:
            case 17024:
               break;
            case 17025:
               Alarm.show(str + "今天你已经不能获得更多道具啦！");
               break;
            case 13064:
               Alarm.show(str + "使用培养舱需要精灵的等级达到50级哦！");
               break;
            case 13071:
               Alarm.show(str + "只能领取一个精灵培育舱！");
               break;
            case 14201:
               Alarm.show(str + "你已经加入竞技战，不需要再次加入！");
               break;
            case 14202:
               Alarm.show(str + "你已经匹配成功了，不能取消哦！");
               break;
            case 14203:
            case 14204:
            case 14205:
               break;
            case 14206:
               SimpleAlarm.show(str + "你使用道具太频繁啦！",true);
               break;
            case 14207:
               break;
            case 14208:
               Alarm.show(str + "目前比赛还未开放，请查看比赛时间！");
               EventManager.dispatchEvent(new Event("error14208"));
               break;
            case 10020:
               if(cmdID == CommandID.ACTIVE_COUNTERMARK)
               {
                  Alarm.show(str + "你的<font color=\'#ff0000\'>通用刻印激活水晶</font>数量不够哦！");
               }
               else
               {
                  Alarm.show(str + "你的物品数量不够哦！");
               }
               break;
            case 10045:
               Alarm.show(str + "性格错误！");
               break;
            case 11067:
               Alarm.show(str + "首发精灵小于30级！");
               EventManager.dispatchEvent(new Event("ElementFightSignFail"));
               break;
            case 15601:
               Alarm.show(str + "不在战斗时间范围内！");
               EventManager.dispatchEvent(new Event("ElementFightSignFail"));
               break;
            case 15602:
               Alarm.show(str + "已经参加了，不需要重复参加！");
               EventManager.dispatchEvent(new Event("ElementFightSignFail"));
               break;
            case 2905:
               Alarm.show(str + "你已经领过巅峰之战第一季度的奖励了哦！");
               break;
            case 10039:
               Alarm.show(str + "该精灵已经开启了通用刻印孔，不可以重复使用哦！");
               break;
            case 10040:
               Alarm.show(str + "达到100级的精灵才能激活通用孔！");
               break;
            case 10071:
               Alarm.show(str + "现在不能建造雪人！");
               break;
            case 10072:
               Alarm.show(str + "要使用超能力必须装备雪球喷投器！");
               break;
            case 10073:
               Alarm.show(str + "已经使用过一次超能力了，不能再使用！");
               break;
            case 10074:
               Alarm.show(str + "该位置的神谕之雪已经被拿走了！");
               break;
            case 10075:
               Alarm.show(str + "雪人尚未建造完成，不能查看贡献度！");
               break;
            case 10076:
               Alarm.show(str + "你没有参加本回合建造！");
               break;
            case 10077:
               Alarm.show(str + "捐献的数量不足！");
               break;
            case 10078:
               Alarm.show(str + "对应的奖励已经领过！");
               break;
            case 10046:
               Alarm.show(str + "你还没有纪念券！");
               break;
            case 10048:
               Alarm.show(str + "每天整点都能来这里领取圣诞纪念券哦！");
               break;
            case 10049:
               Alarm.show(str + "别贪心哦，等下个整点再来这里领取吧！");
               break;
            case 10421:
               Alarm.show(str + "还未与二当家讨价还价！");
               break;
            case 10422:
               Alarm.show(str + "你已经领取了礼品！");
               break;
            case 10423:
               Alarm.show(str + "不在活动时间范围！");
               break;
            case 10419:
               Alarm.show(str + "仅限VIP用户挑战！");
               break;
            case 10420:
               Alarm.show(str + "场景中不存在这个BOSS！");
               break;
            case 20101:
               Alarm.show(str + "你不是在2010年9月之前注册的用户！");
               break;
            case 20102:
               Alarm.show(str + "你已经领过该精灵了！");
               break;
            case 20121:
               Alarm.show(str + "你今天已经领过了！");
               break;
            case 20122:
               Alarm.show(str + "已经领过15个了！");
               break;
            case 20123:
               Alarm.show(str + "你还没有激活！");
               break;
            case 20124:
               Alarm.show(str + "你今天已经领过了！");
               break;
            case 20125:
               Alarm.show(str + "你已经领过15个了！");
               break;
            case 20126:
               Alarm.show(str + "你获得的荣耀已经用完了！");
               break;
            case 20131:
               Alarm.show(str + "你不是资深船员，不能分享荣耀！");
               break;
            case 20132:
               Alarm.show(str + "不能授权！");
               break;
            case 20133:
               Alarm.show(str + "对方已经资深船员了，不需要分享荣耀给他了！");
               break;
            case 20134:
               Alarm.show(str + "他已经不能接受更多的分享了！");
               break;
            case 20135:
               Alarm.show(str + "这个赛尔是不存在的哦！");
               break;
            case 20136:
               Alarm.show(str + "一天只能分享一次哦！");
               break;
            case 20137:
               Alarm.show(str + "荣耀只能分享给其它赛尔哦！");
               break;
            case 20151:
               Alarm.show(str + "该精灵不存在！");
               break;
            case 10427:
               EventManager.dispatchEvent(new Event("Error_TIMEOUT_BREAK_EGG"));
               break;
            case 11068:
               Alarm.show(str + "记得把祖拉带在身边，还要让它出战哦！");
               break;
            case 11035:
               Alarm.show(str + "你的首发精灵没有体力！");
               break;
            case 14210:
            case 14211:
            case 14212:
            case 14213:
            case 14214:
            case 14215:
            case 14216:
            case 14217:
            case 14218:
               break;
            case 14219:
               Alarm.show(str + "首发精灵等级100才能报名！");
               break;
            case 14220:
               Alarm.show(str + "你的牌子不够哦！");
               break;
            case 14221:
               Alarm.show(str + "紫色水晶一天只能开启一次！");
               break;
            case 251002:
               Alarm.show(str + "今天没参加过抽奖哦！");
               break;
            case 10428:
               Alarm.show(str + "今天已经领过奖品哦！");
               break;
            case 14222:
               break;
            case 13050:
               Alarm.show(str + "没有要孵化的精元！");
               break;
            case 13081:
               Alarm.show(str + "当前精灵个体值已到上限，无法再继续优化！");
               break;
            case 10510:
               Alarm.show(str + "没有基因优化道具！");
               break;
            case 10511:
               Alarm.show(str + "没有快速孵化道具！");
               break;
            case 103011:
               Alarm.show(str + "精灵不存在！");
               break;
            case 20152:
               Alarm.show(str + "你是在2010年9月1号之后注册的不能领取该精灵！");
               break;
            case 20153:
               Alarm.show(str + "你已经领过改精灵了！");
               break;
            case 20154:
               Alarm.show(str + "你领取的该精灵不存在！");
               break;
            case 20155:
               Alarm.show(str + "该礼物不存在！");
               break;
            case 20156:
               Alarm.show(str + "你是在2010年9月1号之后注册的不能领取该奖品！");
               break;
            case 20157:
               Alarm.show(str + "该礼物不存在！");
               break;
            case 20158:
               Alarm.show(str + "你今天已经领取过了！");
               break;
            case 20159:
               Alarm.show(str + "领取礼物的时间还未到！");
               break;
            case 20160:
               Alarm.show(str + "领取礼物的已经到达3次了，不能再领了！");
               break;
            case 20161:
               Alarm.show(str + "未按照顺序领取奖励！");
               break;
            case 20175:
               Alarm.show(str + "此精元只能兑换一次！");
               break;
            case 14232:
               Alarm.show(str + "你已经拥有的精灵能量球！");
               break;
            case 14233:
               Alarm.show(str + "你现在还没有精灵能量球！");
               break;
            case 14234:
               Alarm.show(str + "你的能量还不够，不能领取精元哦！");
               break;
            case 14230:
               EventManager.dispatchEvent(new Event("KingTowerError"));
               Alarm.show(str + "你没有可出战的100级精灵！");
               break;
            case 11070:
               Alarm.show(str + "极限模式不能从仓库取精灵！");
               break;
            case 15151:
               Alarm.show(str + "通过勇士试炼第50层才能挑战第51层！");
               break;
            case 15152:
               Alarm.show(str + "你的队友没有通过勇士试炼第50层！");
               break;
            case 14005:
               Alarm.show(str + "已达到今天的最大次数！");
               break;
            case 14006:
               Alarm.show(str + "今天不是活动的日子哦！");
               break;
            case 14007:
               Alarm.show(str + "还没有完成全部任务哦！");
               break;
            case 14115:
               Alarm.show(str + " 需要携带" + TextFormatUtil.getRedTxt("至尊NONO") + "才能完成此项任务，赶紧成为年费会员，获得至尊NONO吧！");
               break;
            case 14116:
               Alarm.show(str + " 需要携带" + TextFormatUtil.getRedTxt("至尊NONO") + "才能进入秘境阶梯，赶紧成为年费会员，获得至尊NONO吧！");
               break;
            case 16504:
               break;
            case 10429:
               Alarm.show(str + "已经选择过精灵！");
               break;
            case 10435:
               Alarm.show(str + "没有精灵召唤卷轴！");
               break;
            case 10430:
               Alarm.show(str + "还没选择培养的精灵!");
               break;
            case 10431:
               Alarm.show(str + "已经完成了培养！");
               break;
            case 10432:
               break;
            case 10433:
               Alarm.show(str + "已经领取过精灵！");
               break;
            case 10434:
               Alarm.show(str + "培养还未完成！");
               break;
            case 10079:
               Alarm.show(str + "该礼包已经领过了！");
               break;
            case 17035:
               EventManager.dispatchEvent(new RobotEvent("Error17035"));
               break;
            case 17036:
               EventManager.dispatchEvent(new RobotEvent("Error17036"));
               break;
            case 17037:
               Alarm.show(str + "带上超能nono才能得到精灵！");
               break;
            case 17038:
               Alarm.show(str + "还没收集到所有的真言水晶哦！");
               break;
            case 17039:
               Alarm.show(str + "你已经得到忍珠和套装！");
               break;
            case 17040:
               Alarm.show(str + "带上超能nono才能获得忍魂套装！");
               break;
            case 17041:
               Alarm.show(str + "非忍者精灵！");
               break;
            case 17042:
               Alarm.show(str + "该精灵已经学习了忍者特技！");
               break;
            case 17043:
               Alarm.show(str + "不能学习忍者特技！");
               break;
            case 17044:
               Alarm.show(str + "精灵的等级未达到60级！");
               break;
            case 17045:
               Alarm.show(str + "被替换的技能非有效的技能！");
               break;
            case 10081:
               Alarm.show(str + "本周已经兑换过了！");
               break;
            case 14248:
               Alarm.show(str + "战斗中不能进行此操作！");
               break;
            case 14246:
               Alarm.show(str + "精灵学院中没有此精灵！");
               break;
            case 103038:
               Alarm.show(str + "精灵学院中没有此精灵！");
               break;
            case 14241:
               Alarm.show(str + "参加课程的精灵必须要在精灵背包中！");
               break;
            case 14242:
               Alarm.show(str + "同时参加课程的精灵已经达到上限！");
               break;
            case 14243:
               Alarm.show(str + "目前只有普通班！");
               break;
            case 14244:
               Alarm.show(str + "参加课程的天数最多为7天！");
               break;
            case 14245:
               Alarm.show(str + "课程id非法！");
               break;
            case 103037:
               Alarm.show(str + "精灵已经在学院中！");
               break;
            case 14249:
               Alarm.show(str + "50级才能参加高级班！");
               break;
            case 11075:
               EventManager.dispatchEvent(new RobotEvent("Error11075"));
               break;
            case 14052:
               Alarm.show(str + "拥有超能力量才能进行超能加速哦！");
               break;
            case 14053:
               Alarm.show(str + "一天内最多进行2次超能加速！");
               break;
            case 14252:
               Alarm.show(str + "已经加入了擂台！");
               break;
            case 14253:
               Alarm.show(str + "选择的精灵不符合条件！");
               break;
            case 14254:
               Alarm.show(str + "已经准备好了！");
               break;
            case 14255:
               Alarm.show(str + "签名错误！");
               break;
            case 14256:
               Alarm.show(str + "无法开始擂台赛！");
               break;
            case 14257:
               Alarm.show(str + "不能打星空擂台的boss！");
               break;
            case 14258:
               Alarm.show(str + "正处在擂台赛中！");
               break;
            case 14259:
               Alarm.show(str + "未加入星空擂台！");
               break;
            case 14260:
               break;
            case 10438:
               Alarm.show(str + "没有足够的积分！");
               break;
            case 10439:
               Alarm.show(str + "已经达到本日兑换的上限！");
               break;
            case 11081:
               Alarm.show(str + "还没有锄头！");
               break;
            case 10082:
               Alarm.show(str + "不在活动期间！");
               break;
            case 10440:
               Alarm.show(str + "今天已经领过礼包了！");
               break;
            case 10083:
               Alarm.show(str + "不在活动期间！");
               break;
            case 14263:
               Alarm.show(str + "精灵最多展示48个小时！");
               break;
            case 103041:
               Alarm.show(str + "展示的精灵达到了上限！");
               break;
            case 103636:
               Alarm.show(str + "已经在展示了！");
               break;
            case 103042:
               Alarm.show(str + "该精灵没有在展示，无法收回！");
               break;
            case 14264:
               Alarm.show(str + "不能挑战自己的精灵！");
               break;
            case 14265:
               Alarm.show(str + "一天只能挑战15次！");
               break;
            case 14266:
               Alarm.show(str + "每天相同好友最多只能挑战3次！");
               break;
            case 10085:
               Alarm.show(str + "此礼物不在这张地图上！");
               break;
            case 10086:
               Alarm.show(str + "还没到领取礼物的时间！");
               break;
            case 13090:
               Alarm.show(str + "精灵id错误！");
               break;
            case 13091:
               Alarm.show(str + "精灵胶囊已经用完！");
               break;
            case 13093:
               Alarm.show(str + "没有这个鱼竿！");
               break;
            case 13094:
               Alarm.show(str + "已经放置过陷阱！");
               break;
            case 13095:
               Alarm.show(str + "没有放置陷阱！");
               break;
            case 11084:
               Alarm.show(str + "你的肥料转化池已满！");
               break;
            case 11085:
               Alarm.show(str + "你没达到相应的种植等级！");
               break;
            case 11086:
               Alarm.show(str + "这块地已经种植了作物！");
               break;
            case 11087:
               Alarm.show(str + "肥料不足！");
               break;
            case 11088:
               Alarm.show(str + "水分不足！");
               break;
            case 11089:
               Alarm.show(str + "这块地还没有种植作物！");
               break;
            case 11090:
               Alarm.show(str + "作物尚未成熟！");
               break;
            case 13099:
               Alarm.show(str + "今天不能打这个弱化boss！");
               break;
            case 13097:
               Alarm.show(str + "已经打败过正常的spt boss，不能再打弱化的！");
               break;
            case 13098:
               Alarm.show(str + "这个星期中已经打败过一次弱化的spt boss！");
               break;
            case 13100:
               Alarm.show(str + "碎片不足3个！");
               break;
            case 13101:
               Alarm.show(str + "已经得到过精元，不能再次兑换！");
               break;
            case 14271:
               Alarm.show(str + "错误的房间依赖关系！");
               break;
            case 14272:
               Alarm.show(str + "还没进入远古迷宫！");
               break;
            case 14273:
               Alarm.show(str + "已经打过对应的boss！");
               break;
            case 14292:
               Alarm.show(str + "每天最多只能获得10个火之果！");
               break;
            case 14055:
               Alarm.show(str + "今日采集已经达到上限！");
               break;
            case 14056:
               Alarm.show(str + "你的氮气不够哦，赶紧去收集吧！");
               break;
            case 10091:
               Alarm.show(str + "今天已领过该礼包！");
               break;
            case 10092:
               Alarm.show(str + "活跃度不够！");
               break;
            case 10093:
               Alarm.show(str + "本周已领过该礼包！");
               break;
            case 10442:
               Alarm.show(str + "还没有到开赛时间哦！");
               break;
            case 10443:
               Alarm.show(str + "已经通关！");
               break;
            case 10444:
               Alarm.show(str + "没有这个boss！");
               break;
            case 10445:
               Alarm.show(str + "本关boss还没打完！");
               break;
            case 18504:
               Alarm.show(str + "您今天已经为心仪的精灵梦之队组合投过票了！");
               break;
            case 10446:
               Alarm.show(str + "封印已经解开过！");
               break;
            case 10447:
               Alarm.show(str + "封印还没有解封！");
               break;
            case 10448:
               Alarm.show(str + "BOSS还没有打败！");
               break;
            case 10449:
               Alarm.show(str + "还没有处理完突发事件！");
               break;
            case 10450:
               Alarm.show(str + "正在冷却中！");
               break;
            case 10451:
               Alarm.show(str + "领取宝箱不存在！");
               break;
            case 201001:
               Alarm.show(str + "参数错误！");
               break;
            case 201002:
               Alarm.show(str + "非常抱歉，你的分子密码有误，请仔细核对后再输入哦!");
               break;
            case 201003:
               Alarm.show(str + "非常抱歉，你输入的兑换码未被激活，请确认后再次输入！");
               break;
            case 201004:
               Alarm.show(str + "非常抱歉，你输入的兑换码已经过期了，请确认后再次输入！");
               break;
            case 201005:
               Alarm.show(str + "非常抱歉，你的兑换码已经被冻结，请确认后再次输入！");
               break;
            case 201006:
               Alarm.show(str + "非常抱歉，你输入的兑换码已经被使用过了，请确认后再次输入！");
               break;
            case 201007:
               Alarm.show(str + "内部错误！");
               break;
            case 201008:
               Alarm.show(str + "神兽兑换码未绑定！");
               break;
            case 201011:
               Alarm.show(str + "非常抱歉，这个奖励您已经领取过了！不能重复领取！");
               break;
            case 10452:
               Alarm.show(str + "未参加过巅峰之战第三季！");
               break;
            case 10453:
               Alarm.show(str + "已经得到过巅峰之战第三季的礼物！");
               break;
            case 10454:
               Alarm.show(str + "巅峰等级不够！");
               break;
            case 10455:
               Alarm.show(str + "您没有参加过罗格杯！");
            case 13102:
               Alarm.show(str + "只有低于60级才可以进行急速成长哦！");
               break;
            case 13103:
               Alarm.show(str + "这个精灵不能进行急速成长！");
               break;
            case 14057:
               Alarm.show(str + "你没有采集冰块，无法进行对战！");
               break;
            case 14058:
               Alarm.show(str + "你没有资格进入此地图！");
            case 14059:
               if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 1011)
               {
                  Alarm.show(str + "不在开赛时间范围内！巅峰之战-全国联赛开赛时间早上9:00-晚上21:00！");
               }
               else
               {
                  Alarm.show(str + "不在活动时间范围内！");
               }
               break;
            case 10593:
               Alarm.show(str + "今日兑换已经达到最大限度了喔！");
               break;
            case 10596:
               Alarm.show(str + "该物品不在可兑换列表中！");
               break;
            case 18505:
               Alarm.show(str + "精灵没集齐！");
               break;
            case 18506:
               Alarm.show(str + "已经领过奖励了！");
               break;
            case 14060:
               Alarm.show(str + "5分钟之后才能再领取异能晶石噢！");
               break;
            case 14274:
               Alarm.show(str + "免费次数到了哦！");
               break;
            case 14275:
               Alarm.show(str + "没有对应的卡牌！");
               break;
            case 11097:
               Alarm.show(str + "今日兑换已经达最大限度！");
               break;
            case 10089:
               Alarm.show(str + "必须先领取3个成长礼包才能领取至尊礼包哦！");
               break;
            case 10090:
               Alarm.show(str + "已经领取过了！");
               break;
            case 14061:
               Alarm.show(str + "精灵不在这哦！");
               break;
            case 14062:
               Alarm.show(str + "已经打败过此精灵！");
               break;
            case 14063:
               Alarm.show(str + "地图错误！");
               break;
            case 14064:
               Alarm.show(str + "今天的采集次数已到达上限！");
               break;
            case 14066:
               Alarm.show(str + "天晶宝石不够！");
               break;
            case 14067:
               Alarm.show(str + "冷却时间中！");
               break;
            case 14117:
               Alarm.show(str + "只有靓号用户才能进入靓号神秘空间！");
               break;
            case 11099:
               Alarm.show(str + "只能使用神秘精灵胶囊！");
               break;
            case 11101:
               Alarm.show(str + "每天兑换已达上限！");
               break;
            case 13104:
               Alarm.show(str + "这个精灵不可以异能化！");
               break;
            case 13105:
               Alarm.show(str + "不低于50的精灵才能进行异能化！");
               break;
            case 13106:
               Alarm.show(str + "赛尔豆不够！");
               break;
            case 13107:
               Alarm.show(str + "每天只能进行2次异能化！");
               break;
            case 13112:
               Alarm.show(str + "有刻印的精灵不能进行异能化！");
               break;
            case 14068:
               Alarm.show(str + "你的背包中有精灵无法出战！");
               break;
            case 14069:
               Alarm.show(str + "已经通关！");
               break;
            case 14070:
               Alarm.show(str + "空中列车中不允许换精灵！");
               break;
            case 18507:
               Alarm.show(str + "该NPC当天已经获得过糖果了！");
               break;
            case 11102:
               Alarm.show(str + "已经兑换过该物品！");
               break;
            case 11103:
               Alarm.show(str + "已达每日采集上限，明天再来吧！");
               break;
            case 11104:
               Alarm.show(str + "六重试炼阵的能量出现波动，继续挑战会有危险，还是明天再来吧！");
               break;
            case 14281:
               Alarm.show(str + "您的物品数量不够！");
               break;
            case 10094:
               break;
            case 14283:
               Alarm.show(str + "你的糖果数量不够哦！");
               break;
            case 11110:
               Alarm.show(str + "今天领取魔法礼盒的次数达到上限了哦！明天再来吧！");
               break;
            case 14074:
               Alarm.show(str + "需要携带等级至少一个100级的精灵才可以进入勇者模式！");
               break;
            case 14075:
               num1 = (TrainDoorController.getInstance()._enterID - 1) * 5 + 30;
               Alarm.show(str + "需要携带等级高于" + num1 + "级的精灵才可以进入！");
               break;
            case 14072:
               Alarm.show(str + "普通模式未通关，无法进入勇者模式！");
               break;
            case 14071:
               Alarm.show(str + "已完成通关！");
               break;
            case 14073:
               Alarm.show(str + "未达到完成条件！");
               break;
            case 14284:
               Alarm.show(str + "你的物品数量不够！");
               break;
            case 11100:
               Alarm.show(str + "对不起，分身之魂已经到达每日上限！明天再来吧！");
               break;
            case 14285:
               Alarm.show(str + "精灵不在战斗背包中！");
               break;
            case 14286:
               Alarm.show(str + "无法对终极形态的精灵使用形态固定胶囊哦！");
               break;
            case 14287:
               Alarm.show(str + "非法的形态ID！");
               break;
            case 14077:
               Alarm.show(str + "已经处于等待状态！");
               break;
            case 14078:
               Alarm.show(str + "签名错误！");
               break;
            case 14079:
               Alarm.show(str + "斗者擂台状态错误！");
               break;
            case 14080:
               Alarm.show(str + "选择的精灵id非法！");
               break;
            case 14081:
               Alarm.show(str + "不能中途离开！");
               break;
            case 14082:
               Alarm.show(str + "非法的排行跨度！");
               break;
            case 14290:
               Alarm.show(str + "不能进入睡梦空间！");
               break;
            case 14293:
               Alarm.show(str + "每天最多只能提炼3次治愈晶体哦！");
               break;
            case 103047:
               Alarm.show(str + "对方已经是你的战斗好友了！");
               break;
            case 103049:
               Alarm.show(str + "战斗好友数量已经达到上限！");
               break;
            case 14082:
               Alarm.show(str + "非法的招募信息区间！");
               break;
            case 14083:
               Alarm.show(str + "你已经发布过了招募信息！");
               break;
            case 14295:
               Alarm.show(str + "今天你已经参加过抽奖咯！");
               break;
            case 14296:
               Alarm.show(str + "当前没有奖励可领取！");
               break;
            case 13113:
               Alarm.show(str + "你已经收集了这个火焰精华哦！");
               break;
            case 14297:
               Alarm.show(str + "此时间段该商品已全部售完，赶紧去看看其他的吧！");
               break;
            case 14298:
               Alarm.show(str + "当前不在限购时间范围内，请稍后再试！");
               break;
            case 14299:
               Alarm.show(str + "已经到达每日购买上限咯！");
               break;
            case 14088:
               Alarm.show(str + "已经有火焰了！");
               break;
            case 14089:
               Alarm.show(str + "对方不在线！");
               break;
            case 14090:
               Alarm.show(str + "对方没有火焰！");
               break;
            case 14091:
               Alarm.show(str + "挖雪堆太快了！");
               break;
            case 11120:
               Alarm.show(str + "已经领过了小雪球精灵！");
               break;
            case 11121:
               Alarm.show(str + "只能染色小雪球精灵！");
               break;
            case 11122:
               Alarm.show(str + "赛尔豆不足！");
               break;
            case 11123:
               Alarm.show(str + "相应物品数量不够！");
               break;
            case 14301:
               Alarm.show(str + "精灵正在修炼！");
               break;
            case 11126:
               Alarm.show(str + "赛尔豆不足！");
               break;
            case 11134:
               Alarm.show(str + "你的“动画达人勋章”数量不够哦！");
               break;
            case 11136:
               Alarm.show(str + "你已经兑换过大礼包了！");
               break;
            case 10201:
               Alarm.show(str + "打折系统错误！");
               break;
            case 10202:
               Alarm.show(str + "vip系统错误！");
               break;
            case 10203:
               Alarm.show(str + "神奇密码系统错误！");
               break;
            case 10204:
               Alarm.show(str + "时空密码系统错误！");
               break;
            case 10205:
               Alarm.show(str + "米币系统错误！");
               break;
            case 10206:
               Alarm.show(str + "投票系统错误！");
               break;
            case 10207:
               Alarm.show(str + "对战系统错误！");
               break;
            case 10208:
               Alarm.show(str + "钻石系统出错！");
               break;
            case 14094:
               Alarm.show(str + "已经达到每日10次上限！");
               break;
            case 14096:
               Alarm.show(str + "很遗憾，你圣诞树上所挂的圣诞袜数量不够！");
               break;
            case 14095:
               Alarm.show(str + "请求超过10个好友了！");
               break;
            case 12010:
               Alarm.show(str + "每天只能领取一次经验值！记得明天再来哦！");
               break;
            case 14302:
               Alert.show(str + "必须将VIP跟随在身边才能为好友的战甲充能！确定现在开通吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               });
               break;
            case 14303:
               Alarm.show(str + "你今天为好友送花次数已达3次了哦！");
               break;
            case 14304:
               Alarm.show(str + "每天对单个好友只能赠送一次鲜花哦，你今天已经向他送过花了！");
               break;
            case 14305:
               Alarm.show(str + "你今天已达每日抽奖上限了哦！");
            case 14308:
               Alarm.show(str + "你今天的赠送次数已经达到上限了哦！");
               break;
            case 14315:
               Alarm.show(str + "你今天的请求次数已经到达上限！");
               break;
            case 103052:
               Alarm.show(str + "充能器被充能已达到每日6次上限了哦！");
               break;
            case 11145:
               Alarm.show(str + "正在许愿过程中，不能再次许愿！");
               break;
            case 11146:
               Alarm.show(str + "没有许愿，不能查看结果！");
               break;
            case 11147:
               Alarm.show(str + "正在许愿过程中，不能查看结果！");
               break;
            case 11148:
               Alarm.show(str + "需要在线80分钟才能领取！");
               break;
            case 11149:
               Alarm.show(str + "一天只能许愿两次哦！");
               break;
            case 262101:
               Alarm.show(str + "许愿次数超限！");
               break;
            case 262102:
               Alarm.show(str + "重复许愿！");
               break;
            case 262103:
               Alarm.show(str + "已经许愿，请等待倒计时结束，点击查看结果！");
               break;
            case 262104:
               Alarm.show(str + "已经许愿成功，等待开通VIP！");
               break;
            case 262105:
               Alarm.show(str + "查看结果之前没有先许愿！");
               break;
            case 262106:
               Alarm.show(str + "许愿倒计时未结束！");
               break;
            case 262107:
               Alarm.show(str + "许愿失败，再尝试一次吧！");
               break;
            case 262108:
               Alarm.show(str + "不在活动时间范围内！");
               break;
            case 262109:
               Alarm.show(str + "每日许愿次数超过2次！");
               break;
            case 14306:
               Alarm.show(str + "不能送给vip！");
               break;
            case 14307:
               Alarm.show(str + "非vip不能向他人赠送炼金石！");
               break;
            case 14305:
               Alarm.show(str + "你今天已达每日抽奖上限了哦！");
            case 14308:
               Alarm.show(str + "你今天的赠送次数已经达到上限了哦！");
               break;
            case 14309:
               Alarm.show(str + " 非vip才能锻造钻石！");
               break;
            case 14309:
               Alarm.show(str + "你今天的请求次数已经到达上限！");
               break;
            case 14310:
               Alarm.show(str + "锻造次数已达2次！");
               break;
            case 14311:
               Alarm.show(str + "正在锻造中 或者 已锻造完但钻石没领走！");
               break;
            case 14312:
               Alarm.show(str + "（领取钻石的时候）没有钻石正在锻造！");
               break;
            case 14313:
               Alarm.show(str + "（领取钻石的时候）没有锻造完！");
               break;
            case 14314:
               Alarm.show(str + "非vip才能发请求！");
               break;
            case 14315:
               Alarm.show(str + "你今天的请求次数已经到达上限！");
               break;
            case 14316:
               Alarm.show(str + "您拥有的炼金石数已达上限！");
               break;
            case 14317:
               Alarm.show(str + "您的贡献值不够！");
               break;
            case 103053:
               Alarm.show(str + "您的炼金石不够！");
               break;
            case 270166:
               Alarm.show(str + "当日锻造的总钻石数已达上限！");
               break;
            case 14322:
               Alarm.show(str + "你还不是至尊nono用户，不能把冰龙从第二形态进化到第三形态！");
               break;
            case 14320:
               Alarm.show(str + "九宫格已经全部抽完！");
               break;
            case 14321:
               Alarm.show(str + "开启此格只能使用钻石！");
               break;
            case 14323:
               Alarm.show(str + "您的积分不够哦！");
               break;
            case 11152:
               Alarm.show(str + "你当前的精灵不满足出战条件哦！");
               break;
            case 11153:
               Alarm.show(str + "出战背包中只能放入3只满级精灵才可参战！");
               break;
            case 11154:
               Alarm.show(str + "你背包中的精灵血量或技能不足！");
               break;
            case 14326:
               Alarm.show(str + "你今天已经兑换太多次此物品，明天再来吧！");
               break;
            case 14366:
               Alarm.show(str + "你的兑换次数已经用完了哦！");
               break;
            case 13134:
               Alarm.show(str + "这个物品已经翻开过哦！");
               break;
            case 13138:
               Alarm.show(str + "现在不能制作蛋糕！");
               break;
            case 13139:
               Alarm.show(str + "你的贡献值不够哦！");
               break;
            case 14342:
               Alarm.show(str + "你背包中的精灵体力为0，无法出战哦！");
               break;
            case 11155:
               Alarm.show(str + "已经参加了精灵探索计划雏鹰模式！");
               break;
            case 11166:
               Alarm.show(str + "学习力总和达到510而不能再增加了噢！");
               break;
            case 11167:
               Alarm.show(str + "当前单项学习力达到极限255不能再增加了噢！");
               break;
            case 11168:
               Alarm.show(str + "当前单项学习已经是0不能再扣除了噢！");
               break;
            case 14328:
               Alarm.show(str + "你已经拥有超能NoNo，无需抽奖就可以享受所有特权！");
               break;
            case 14329:
               Alarm.show(str + "今天已经抽过了，明天再来吧！");
               break;
            case 14330:
               if(cmdID == CommandID.OPEN_DARKPORTAL)
               {
                  Alarm.show(str + "你没有" + TextFormatUtil.getRedTxt("暗黑之钥") + "不能进入暗黑空间！");
               }
               else if(cmdID == CommandID.GET_FIRE_BUFF)
               {
                  Alert.show(str + "开通超No才能领取战斗火焰，现在开通超No吗？",function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
               }
               else
               {
                  Alert.show(str + "你没有开通超能NoNo，无法孵化绝版精灵蛋哦！确认要现在开通超能NoNo吗？",function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
               }
               break;
            case 14331:
               Alarm.show(str + "你今天已经领取过了！");
               break;
            case 14336:
               Alarm.show(str + "今天精灵派对已结束！可以明天再来哦！");
               break;
            case 14337:
               Alarm.show(str + "精灵已吃饱了哦！");
               break;
            case 14338:
               Alarm.show(str + "食物不匹配！");
               break;
            case 14339:
               Alarm.show(str + "你的食物不够！赶快去制作饼干吧！");
               break;
            case 14340:
               Alarm.show(str + "饼干盒已满!");
               break;
            case 14341:
               Alarm.show(str + "没有食物正在做！");
               break;
            case 14345:
               Alarm.show(str + "达到每日上限了哦！");
               break;
            case 14343:
               Alarm.show(str + "不能给该精灵使用烈刃繁殖剂！");
               break;
            case 14344:
               Alarm.show(str + "该精灵已经使用过烈刃繁殖剂！");
               break;
            case 14346:
               Alarm.show(str + "不能对此精灵进行繁殖加成大改造！");
               break;
            case 14347:
               Alarm.show(str + "只有炽焰之刃才能选择开通通用孔！");
               break;
            case 14348:
               Alarm.show(str + "该炽焰之心已经镶嵌了！");
               break;
            case 14349:
               Alarm.show(str + "该精灵已经开通了通用孔！");
               break;
            case 14350:
               Alarm.show(str + "炽焰之刃不能超进化！");
               break;
            case 11174:
               Alarm.show(str + "今天合成抽奖券的次数已经达到上限！记得明天再来哦！");
               break;
            case 11179:
               Alarm.show(str + "今天已经领取过了至尊胶囊！");
               break;
            case 11180:
               Alarm.show(str + "最多只能携带5个至尊胶囊！");
               break;
            case 11175:
               Alarm.show(str + "错误的起始点！");
               break;
            case 11176:
               Alarm.show(str + "挑战失败，得从头开始！");
               break;
            case 11177:
               Alarm.show(str + "已通关，得从头开始！");
               break;
            case 11178:
               Alarm.show(str + "当前boss没打完，不能进入下一层！");
               break;
            case 11181:
               Alarm.show(str + "背包里没有符合条件的精灵！");
               break;
            case 14357:
               Alarm.show(str + "精灵错误！");
               break;
            case 14356:
               Alarm.show(str + "喝彩人数未到，拉朋友一起来喝彩吧！");
               break;
            case 11184:
               Alarm.show(str + "你的积分不够！");
               break;
            case 14358:
               Alarm.show(str + "你不能获得太空种子！");
               break;
            case 14362:
               VipScoreController.destroy();
               Alarm.show(str + "您的积分已满，请使用后领取！");
               break;
            case 14363:
               VipScoreController.destroy();
               Alarm.show(str + "您今天已经领过积分！");
               break;
            case 14361:
               Alarm.show(str + "你已经获得了种子哦！期待下次的机会吧！");
               break;
            case 14360:
               Alarm.show(str + "龟壳数量不够！");
               break;
            case 17009:
               Alarm.show(str + "该精灵正处于模拟训练之中！");
               break;
            case 14368:
               Alarm.show(str + "需要排队！");
               break;
            case 14369:
               Alarm.show(str + "擂主没准备好！");
               break;
            case 14370:
               if(cmdID == 4034)
               {
                  Alarm.show(str + "需要加入队伍才能领取！");
               }
               else
               {
                  Alarm.show(str + "需要加入队伍才能进麒麟擂台！");
               }
               break;
            case 14371:
               Alarm.show(str + "不在麒麟擂台玩法！");
               break;
            case 14372:
               Alarm.show(str + "麒麟擂主战斗已经开始！");
               break;
            case 14379:
               Alarm.show(str + "你已经不再是擂主了！");
               break;
            case 11185:
               Alarm.show(str + "麒麟守护令数量不足，快去参加麒麟守卫争夺战收集吧！",function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("QiLinGuardAdPanel"));
               });
               break;
            case 11188:
               Alarm.show(str + "你已经拥有了麒麟buff，该buff可以维持一次战斗！");
               break;
            case 14373:
               Alarm.show(str + "该龙珠已经激活过！");
               break;
            case 14374:
               Alarm.show(str + "不在龙珠激活时间内！");
               break;
            case 14375:
               Alarm.show(str + "该龙珠未激活！");
               break;
            case 14376:
               Alarm.show(str + "物品数量与当前龙珠的星的个数不一致！");
               break;
            case 14377:
               Alarm.show(str + "青龙挑战令已达每日上限！");
               break;
            case 14378:
               Alarm.show(str + "该龙珠激活后已经领过礼物了！");
               break;
            case 10558:
               Alarm.show(str + "该图腾已经激活过！");
               break;
            case 10559:
               Alarm.show(str + "不在图腾激活时间内！");
               break;
            case 10560:
               Alarm.show(str + "该图腾未激活！");
               break;
            case 10561:
               Alarm.show(str + "物品数量与当前图腾的星的个数不一致！");
               break;
            case 10562:
               Alarm.show(str + "青龙挑战令已达每日上限！");
               break;
            case 10563:
               Alarm.show(str + "该图腾激活后已经领过礼物了！");
               break;
            case 14380:
               Alarm.show(str + "你没有这种氪金宝箱了！");
               break;
            case 14381:
               Alarm.show(str + "没有这种类型的氪金宝箱！");
               break;
            case 14382:
               Alarm.show(str + "你已经免费领取过了哦！");
               break;
            case 14383:
               Alarm.show(str + "愚乐券已经到达今日上限了哦！明天再来吧！");
               break;
            case 14386:
               Alarm.show(str + "抱歉，您的积分不够，不能领取这个奖励！");
               break;
            case 14387:
               Alarm.show(str + "您已经领取过这个奖励了！");
               break;
            case 11189:
               Alarm.show(str + "您的麒麟守卫争夺赛个人积分已经达到上限！");
               break;
            case 14385:
               Alarm.show(str + "未激活四个石柱，小赛尔继续接受特训吧！");
               break;
            case 14388:
               Alarm.show(str + "你的军阶不对！");
               break;
            case 14389:
               Alarm.show(str + "军阶点数不足！");
               break;
            case 14390:
               Alarm.show(str + "没有佩戴对应的军阶腰带！");
               break;
            case 14406:
               Alarm.show(str + "羽毛能量已满，快去给其他三色羽毛添加能量吧！");
               break;
            case 14407:
               Alarm.show(str + "你身上没有昙花花粉哦！快去伊尔和鹰嘴蝶身上找找吧！！");
               break;
            case 14403:
               Alarm.show(str + "礼盒数目不够哦，快去克洛斯星看看吧！");
               break;
            case 14404:
               Alarm.show(str + "已经领取过了！");
               break;
            case 14400:
               Alarm.show(str + "今天已经签到过了！");
               break;
            case 14408:
               Alarm.show(str + "收到的事件阶段不在合法范围！");
               break;
            case 14409:
               Alarm.show(str + "重复设置当前阶段的变小事件！");
               break;
            case 14410:
               Alarm.show(str + "冷却时间还没到！");
               break;
            case 14412:
               Alarm.show(str + "你已经拥有了该精元！");
               break;
            case 14413:
               Alarm.show(str + "派对中没有玩家，无法派发！");
               break;
            case 14414:
               Alarm.show(str + "5分钟内已经领过，请稍后领取！");
               break;
            case 14395:
               Alarm.show(str + "非法的预订时间");
               break;
            case 14396:
               Alarm.show(str + "该时间段已被预订");
               break;
            case 14397:
               Alarm.show(str + "已经免费预订过一次了");
               break;
            case 14398:
               Alarm.show(str + "当前没有自主派对");
               break;
            case 14399:
               Alarm.show(str + "你广播地太频繁了哦！5分钟内只能广播一次！");
               break;
            case 14418:
               Alarm.show(str + "兑换次数达到今日上限！记得明天再来吧！");
               break;
            case 14424:
               Alarm.show(str + "今天已经解封过了，明天再来！");
               break;
            case 14327:
               Alarm.show(str + "不在活动时间！",function():void
               {
                  MapManager.changeMap(702);
               });
               break;
            case 14423:
               Alarm.show(str + "时间未到，不能破解哦！");
               break;
            case 14425:
               Alarm.show(str + "活动时间未到哦");
               break;
            case 14427:
               Alarm.show(str + "每天只能解封2次！");
               break;
            case 14428:
               Alarm.show(str + "还没有到解除封印的时间！");
               break;
            case 14438:
               Alarm.show(str + "满个体的精灵不能进行修炼噢！");
               break;
            case 11125:
               Alarm.show(str + "每天只能进行两次修炼噢！");
               break;
            case 14433:
               Alarm.show(str + "已达到每日领取的宝箱上限");
               break;
            case 14434:
               Alarm.show(str + "已达到每日抽奖上限");
               break;
            case 14439:
               Alarm.show(str + "这个孔已经治愈过了！");
               break;
            case 10517:
               Alarm.show(str + "你没有参加过巅峰之战第五赛季噢！");
               break;
            case 10518:
               Alarm.show(str + "你已经领取过奖励了！");
               break;
            case 10519:
               Alarm.show(str + "你没有达到巅峰之战奖励领取的要求喔！");
               break;
            case 10520:
               Alarm.show(str + "你已经领取过奖励了！");
            case 14440:
               Alarm.show(str + "已经领过奖励！");
               break;
            case 14441:
               Alarm.show(str + "正在采集中！");
               break;
            case 14442:
               Alarm.show(str + "每天只能采集5次噢！");
               break;
            case 14443:
               Alarm.show(str + "好友已经助威过咯！");
               break;
            case 14446:
               Alarm.show(str + "科特只能兑换一次哦！");
               break;
            case 14449:
               Alarm.show(str + "你与小佐的亲密度还不够噢！");
               break;
            case 14450:
               Alarm.show(str + "这个装扮只能兑换一件！");
               break;
            case 14452:
               Alarm.show(str + "还没有达到称号的领取条件！");
               break;
            case 14453:
               Alarm.show(str + "称号已经领取过了！");
               break;
            case 14458:
               Alarm.show(str + "已经兑换过该奖励!");
               break;
            case 14461:
               Alarm.show(str + "已经领取过该礼包！");
               break;
            case 14462:
               Alarm.show(str + "已经领取过了");
               break;
            case 14463:
               Alarm.show(str + "不符合领取条件（登录的天数不够）");
               break;
            case 14464:
               Alarm.show(str + "每个赛尔最多只能拥有1只可爱的米咔！你可以将这张精灵召唤卡送给没有米咔的同学、朋友哦！！");
               break;
            case 11195:
               Alarm.show(str + "非星际座驾！");
               break;
            case 11196:
               Alarm.show(str + "你还没有获得这个星际座驾！");
               break;
            case 11197:
               Alarm.show(str + "拥有超能NoNo才能使用星际座驾哦！");
               break;
            case 14430:
               Alarm.show(str + "暑假也要劳逸结合，今天这个精灵已经很疲劳啦，把玩耍的机会给其它的精灵吧！");
               break;
            case 10462:
               Alarm.show(str + "每只精灵每天只能玩10次捉迷藏哦！");
               break;
            case 14503:
               Alarm.show(str + "不满足邀请者条件！");
               break;
            case 14504:
               Alarm.show(str + "不满足被邀请者条件！");
               break;
            case 14505:
               Alarm.show(str + "不是被邀请者！");
               break;
            case 14506:
               Alarm.show(str + "没有消费满300钻石的被邀请者，所以不能领猛虎王！");
               break;
            case 14507:
               Alarm.show(str + "消费的钻石不满300！");
               break;
            case 14508:
               Alarm.show(str + "没有绑定邀请者！");
               break;
            case 14509:
               Alarm.show(str + "已经确认过花了300钻石！");
               break;
            case 14510:
               Alarm.show(str + "已经领过buff！");
               break;
            case 14511:
               Alarm.show(str + "已经领过礼包了！");
               break;
            case 14431:
               Alarm.show(str + "你已经领取过礼包哦！");
               break;
            case 14432:
               Alarm.show(str + "你的钻石消费没有达到10钻石哦！");
               break;
            case 14512:
               Alarm.show(str + "你的战队总积分不够！");
               break;
            case 14513:
               Alarm.show(str + "您搜索的战队不存在哦！");
               break;
            case 14516:
               Alarm.show(str + "徽章正在制作中！");
               break;
            case 14517:
               Alarm.show(str + "今天已经不能制作更多徽章了！");
               break;
            case 14518:
               Alarm.show(str + "徽章还在制作中，不能领取！");
               break;
            case 10463:
               Alarm.show(str + "这个精灵今天很累了，请明天再来吧");
               break;
            case 14059:
               Alarm.show(str + "你已经领取过礼盒了！");
               break;
            case 14465:
               Alarm.show(str + "裂空杯精灵王争霸赛未报名！");
               break;
            case 14466:
               Alarm.show(str + "加油次数超出限制！");
               break;
            case 14522:
               Alarm.show(str + "没有达到领取条件！");
               break;
            case 14527:
               Alarm.show(str + "你已经领取过了，不能重复领取哦！");
               break;
            case 10465:
               Alarm.show(str + "该颜色水滴数量已达上限！");
               break;
            case 10471:
               Alarm.show(str + "罗盘刚被发动过，正在冷却中！");
               break;
            case 13073:
               Alarm.show(str + "第二代精灵无法繁殖！");
               break;
            case 14531:
               Alarm.show(str + "你已经领取过了哦，不要贪心，嘿嘿！");
               break;
            case 14393:
            case 214331:
            case 10472:
               break;
            case 10350:
               Alarm.show(str + "今天已经免费抽过奖了！");
               break;
            case 10474:
               Alarm.show(str + "心愿卡数量不足！");
               break;
            case 10475:
               Alarm.show(str + "先领取奖品!");
               break;
            case 10476:
               Alarm.show(str + "领取时间未到！");
               break;
            case 14533:
               Alarm.show(str + "你的今日积分不足哦，需要达到指定积分才可以领取呢！");
               break;
            case 10470:
               NpcDialog.show(NPC.AI_LUO_SHOU,["今天你已经挑战我5次了，明天再来吧"],["好，我明天再来挑战你"]);
               break;
            case 14467:
               Alarm.show(str + "非常抱歉，您的积分没到700分，不能领奖，你可以兑换其他礼物！",function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("CrackBonus"),"正在打开...");
               });
               break;
            case 10478:
               Alarm.show(str + "你本周已经投过票了哦！");
               break;
            case 10480:
               Alarm.show(str + "你没有达到抽奖条件哦！");
               break;
            case 10482:
               Alarm.show(str + "你今天已经送个库克5个足球了，他够用了，明天继续送足球，就能继续获得礼物啦！");
               break;
            case 10483:
               Alarm.show(str + "暗杀芯片已经移除！谢谢赛尔！");
               break;
            case 14473:
               Alarm.show(str + "你已经拥有这个精灵了，请选择其他精灵！");
               break;
            case 10484:
               Alarm.show(str + "你已经激活成功！请勿重复激活！");
               break;
            case 11029:
               Alarm.show(str + "挑战已经结束，您可以离开了！");
               break;
            case 10490:
               Alarm.show(str + "不能重复领取礼包！");
               break;
            case 14476:
               Alarm.show(str + "你今天已经兑换过雷神之羽了，明天再来吧！");
               break;
            case 14479:
               Alarm.show(str + "你已经签过到了，明天再来吧！");
               break;
            case 14478:
               Alarm.show(str + "你已经拥有这只精灵了，不要贪心哦！");
               break;
            case 14480:
               Alarm.show(str + "不要太贪心哦！你已经拥有过宾塞克的精元了！");
               break;
            case 14472:
               Alarm.show(str + "你已经领取过了，不要贪心哦");
               break;
            case 14481:
               Alarm.show(str + "不能重复领取，请不要贪心哦！");
               break;
            case 14538:
               Alarm.show(str + "打造次数已达上限！");
               break;
            case 14539:
               Alarm.show(str + "洗练次数已达上限！");
               break;
            case 14482:
               Alarm.show(str + "这只精灵已经升到5阶咯！！");
               break;
            case 14483:
               Alarm.show(str + "这只精灵今天已经历练20次咯！");
               break;
            case 14486:
               Alarm.show(str + "该物品每天只能兑换一次哦！");
               break;
            case 14484:
               Alarm.show(str + "你不能过多拥有此物品！");
               break;
            case 10492:
               Alarm.show(str + "你今天熔化玄冰次数已超过3次！明天再来看看吧！");
               break;
            case 10493:
               Alarm.show(str + "你还没有激活所有羽毛！");
               break;
            case 14550:
               Alarm.show(str + "你已经有教官了！");
               break;
            case 14551:
               Alarm.show(str + "学员个数已满10个！");
               break;
            case 14552:
               Alarm.show(str + "他/她已经和你有教官/学员关系了！");
               break;
            case 14553:
               Alarm.show(str + "你的教官现在不在同一个服务器！");
               break;
            case 14554:
               Alarm.show(str + "不存在这个学员！");
               break;
            case 14555:
               Alarm.show(str + "你的教官正在帮助别的学员挑战SPT！");
               break;
            case 14556:
               Alarm.show(str + "你的学员没有请求帮助挑战这个SPT！");
               break;
            case 14557:
               Alarm.show(str + "你的学员现在不在同一个服务器！");
               break;
            case 14558:
               Alarm.show(str + "你的精灵需要达到100级！");
               break;
            case 14560:
               Alarm.show(str + "该装备只能兑换一件！");
               break;
            case 14540:
               Alarm.show(str + "该用户不符合邀请条件哦！");
               break;
            case 14580:
               Alarm.show(str + "已经领取过詹姆斯武装芯片！");
               break;
            case 14581:
               Alarm.show(str + "未达到领取条件！");
               break;
            case 14491:
               Alarm.show(str + "需要收集齐4套人气套装才能够领取尤尼卡套装哦！");
               break;
            case 10497:
               Alarm.show(str + "每天最多只能兑换两次哦！");
               break;
            case 14490:
               Alarm.show(str + "每天只可以挑战一次，明天记得再来一比高下哦！");
               break;
            case 14493:
               Alarm.show(str + "不要太贪心哦，你已经拥有这个物品！");
               break;
            case 10495:
            case 10498:
               Alarm.show(str + "你已经拥有此物品，不能重复获得！");
               break;
            case 14549:
               Alarm.show(str + "不能重复领取物品哦");
               break;
            case 10527:
               Alarm.show(str + "不在活动时间！");
               break;
            case 10523:
               Alarm.show(str + "这个位置已经被占领了！");
               break;
            case 10528:
               Alarm.show(str + "休息一下，马上可以再次抢占位置咯！");
               break;
            case 10499:
               Alarm.show(str + "你已经领过奖了哦！");
               break;
            case 10524:
               if(cmdID == CommandID.SANTA_SLEIGH_CAR_DRAW)
               {
                  Alarm.show(str + "你今天已经抽过1次了哦！");
               }
               else
               {
                  Alarm.show(str + "每天最多只能充能10次哦！");
               }
               break;
            case 10529:
               Alarm.show(str + "建造次数不足，无法兑换！");
               break;
            case 10525:
               Alarm.show(str + "每天只能用5次赛尔豆唤醒哟，赶快尝试其它方法吧！");
               break;
            case 10526:
               Alarm.show(str + "这个阶段不能用赛尔豆唤醒，快使用其它方法唤醒萨瑞卡吧！");
               break;
            case 10531:
               Alarm.show(str + "你已经领过礼包了哦！");
               break;
            case 10533:
               Alarm.show(str + "能量不足！");
               break;
            case 10534:
               Alarm.show(str + "你已经领取过治疗能量了！");
               break;
            case 10535:
               Alarm.show(str + "彩翼蝠王在背包内才能领取治疗能量哦，你也可以直接点击获得能量进行收集！");
               break;
            case 10532:
               Alarm.show(str + "冷却时间未到");
               break;
            case 10536:
               Alarm.show(str + "本精元不能重复兑换");
               break;
            case 10537:
               Alarm.show(str + "你没有100级的精灵哦！");
               break;
            case 10538:
               Alarm.show(str + "不能使用药剂");
               break;
            case 10539:
               Alarm.show(str + "你的梦幻点数不够！");
               break;
            case 14548:
               Alarm.show(str + "你今天已经领过了哦！明天再来吧！");
               break;
            case 10540:
               Alarm.show(str + "挑战时间未到！请与英卡洛斯对话查询挑战时间吧！");
               break;
            case 10546:
               Alarm.show(str + "你的兑换次数已达上限，赛尔豆每天只能兑换3次，经验券每天只能兑换10次！");
               break;
            case 10544:
               Alarm.show(str + "你要兑换的物品即将达到上限，请调整兑换数额或尝试兑换其它物品！");
               break;
            case 10557:
               Alarm.show(str + "不能拥有过多此物品！");
               break;
            case 10548:
               Alarm.show(str + "不能重复兑换精元！");
               break;
            case 10552:
               Alarm.show(str + "该属性精灵已经激活过了哦！");
               break;
            case 10553:
               Alarm.show(str + "你已经拥有瑞普，不能重复兑换！");
               break;
            case 10556:
               Alarm.show(str + "用以激活的属性不是火、水、草或飞行系之一！");
               break;
            case 10460:
               if(cmdID == 4096)
               {
                  Alarm.show(str + "先把之前的奖励领取了哟！");
                  return;
               }
               Alarm.show(str + "请耐心等待，稍后再次尝试！");
               break;
            case 10564:
               Alarm.show(str + "只可以使用高于当前特性等级的强化药剂哦！");
               break;
            case 10565:
               Alarm.show(str + "没有可以升级的特性");
               break;
            case 10567:
               Alarm.show(str + "今天已经孵化过了，明天就能继续孵化了！");
               break;
            case 10568:
               Alarm.show(str + "你已经激活灵蛇一族！");
               break;
            case 10569:
               Alarm.show(str + "你还没有激活灵蛇一族！");
               break;
            case 10575:
               Alarm.show(str + "满级精灵数量不足6只！");
               break;
            case 10576:
               SimpleAlarm.show(str + "你的精灵没有这个技能！",true);
               break;
            case 10577:
               Alarm.show(str + "每天最多只能参加50次哦！");
               break;
            case 10554:
               Alarm.show(str + "去收集更多的马虎螺丝钉升级你的船票吧");
               break;
            case 10055:
               Alarm.show(str + "你已经拥有足够多的雪啦啦了");
               break;
            case 10572:
               Alarm.show(str + "每天最多只能摇三次树哦！");
               break;
            case 10573:
               Alarm.show(str + "你已经拥有船票不需要领了！");
               break;
            case 10578:
               Alarm.show(str + "你已经领取欢乐值");
               break;
            case 10580:
               Alarm.show(str + "今天星空之子已经给过你礼包");
               break;
            case 10581:
               Alarm.show(str + "如果你已经拥有星空之子，需要将星空之子利亚斯放入背包才能每日领取奖励哦！");
               break;
            case 10583:
               Alarm.show(str + "你今天已经抽了三次了！");
               break;
            case 10584:
               Alarm.show(str + "今天已经获得过多圣诞袜子了！");
               break;
            case 10591:
               Alarm.show(str + "精灵已经成功被激活过了，请尽快点击领取吧！");
               break;
            case 10592:
               Alarm.show(str + "精灵还未激活，不能领取！");
               break;
            case 10599:
               Alarm.show(str + "挑战次数已经到达10次，请明天再继续吧！");
               break;
            case 10601:
               Alarm.show(str + "不能重复领取！");
               break;
            case 10602:
               Alarm.show(str + "你已经领取过这只至尊年兽，一定要好好培养哟！");
               break;
            case 10603:
               Alarm.show(str + "在冷却时间中");
               break;
            case 10604:
               Alarm.show(str + "完成克莱莫之前必须先完成星吉拉");
               break;
            case 10605:
               Alarm.show(str + "超过每日上限");
               break;
            case 10606:
               Alarm.show(str + "必须先完成本轮其他任务");
               break;
            case 10610:
               Alarm.show(str + "不能重复兑换！");
               break;
            case 10613:
               Alarm.show(str + "你已经拥有该物品 不能重复兑换！");
               break;
            case 10614:
               Alarm.show(str + "必须先下沙才能获得生命之沙");
               break;
            case 10615:
               Alarm.show(str + "生命之沙的数目到达上限！");
               break;
            case 1900001:
               Alarm.show(str + "你今天已经抽取过五行精灵了，明天再来吧！");
               break;
            case 1900002:
               Alarm.show(str + "只有充值超能NoNo才能参加五行精灵圆梦抽奖，快去成为超能NoNo用户吧！");
               break;
            case 1900003:
               Alarm.show(str + "你已经抽到过这只精灵啦，再试一次吧！");
               break;
            case 1900004:
               Alarm.show(str + "要完成所有解除封印的任务才能最终帮助小石头解除封印，快去查看一下解封任务吧！");
               break;
            case 10618:
               Alarm.show(str + "你现在可以领取这三只灵兽了哦！不需要再点亮任何纹章了！");
               break;
            case 10620:
               Alarm.show(str + "重复点亮！");
               break;
            case 10621:
               Alarm.show(str + "获取精灵时，相应纹章数目不足5个");
               break;
            case 300003:
               Alarm.show(str + "排名服务当前不可用！");
               break;
            case 300004:
               Alarm.show(str + "你当前尚未有排名！");
               break;
            case 1960000:
               Alarm.show(str + "你要提升的此项属性已达到最高了哟！");
               break;
            case 10628:
               Alarm.show(str + "不在相应的时间内");
               break;
            case 10629:
               Alarm.show(str + "重复签到");
               break;
            case 10630:
               Alarm.show(str + "你该领精灵了！领完了再来签到吧！");
               break;
            case 10631:
               Alarm.show(str + "签到次数不到4次，不能领精灵！");
               break;
            case 10646:
               Alarm.show(str + "战队人数到达上限！");
               break;
            case 10648:
               Alert.show(str + "退出战队未满24小时，暂时无法加入战队，是否使用使用20钻石消除等待时间？",function():void
               {
                  TeamCmdManager.instance.buyJoinCD();
               });
               break;
            case 1003686:
            case 10625:
               Alarm.show(str + "你的权限不足！");
               break;
            case 1003685:
               Alarm.show(str + "该建设图纸已兑换过！");
               break;
            case 10650:
               Alarm.show(str + "战队等级不够！");
               break;
            case 10651:
               Alarm.show(str + "捐献的赛尔豆超过每日上限！");
               break;
            case 10652:
               Alarm.show(str + "科技中心等级不够！");
               break;
            case 10632:
               Alarm.show(str + "拼图不完整，不能领精灵！");
               break;
            case 10637:
               Alarm.show(str + "你的背包里没有圣灵之印！1月26日参加活动《圣灵之怒！迈尔斯VS恶灵三巨头》可以获得圣灵之印！");
               break;
            case 10638:
               Alarm.show(str + "你的精灵背包里没有迈尔斯！");
               break;
            case 10641:
               Alarm.show(str + "你之前兑换过该精元，不可重复兑换。");
               break;
            case 10642:
               Alarm.show(str + "卡修斯不是首发精灵");
               break;
            case 10643:
               Alarm.show(str + "已经完成此项卡修斯特训");
               break;
            case 10644:
               Alarm.show(str + "布莱克不是首发精灵");
               break;
            case 10645:
               Alarm.show(str + "已经完成此项布莱克特训");
               break;
            case 1900006:
               Alarm.show(str + "您已经领取过这个奖励了，不要贪心哦！");
               break;
            case 200011:
               Alarm.show(str + "领取失败，您已经领取过该礼包！");
               break;
            case 10635:
               Alarm.show(str + "未在活动时间内");
               break;
            case 10636:
               Alarm.show(str + "您已经领取过奖励");
               break;
            case 10653:
               Alarm.show(str + "未学习过该技能");
               break;
            case 13083:
               Alarm.show(str + "盖亚不是首发精灵");
               break;
            case 13084:
               Alarm.show(str + "尚未学习到该技能");
               break;
            case 13085:
               Alarm.show(str + "已经完成该特训！");
               break;
            case 13086:
               Alarm.show(str + "必须按顺序进行特训！");
               break;
            case 10654:
               Alarm.show(str + "派尔高躲到云层深处去了，每天的12:00-14:00或18:00-20:00，再来搭建救生梯吧~");
               break;
            case 10655:
               Alarm.show(str + "这块空气砖你已经领取过了哦");
               break;
            case 14565:
               Alarm.show(str + "没有足够的积分领取下一个礼包哦！消费钻石即可获得消费积分！");
               break;
            case 10661:
               Alarm.show(str + "还没有许愿，不能领礼物！");
               break;
            case 10662:
               Alarm.show(str + "没到领取礼物的时间！");
               break;
            case 10663:
               Alarm.show(str + "未击败战神联盟所有成员！");
               break;
            case 10664:
               Alarm.show(str + "已经领取过技能！");
               break;
            case 10701:
               Alarm.show(str + "只有超能NoNo才可以使用圣光精灵哦！");
               break;
            case 10665:
               Alarm.show(str + "没有携带战神联盟精灵！");
               break;
            case 10670:
               Alarm.show(str + "星灵王不在背包中！请将星灵王放入精灵背包再注入能量！");
               break;
            case 10674:
               Alarm.show(str + "此封印还没有解封，只有解封以后才能注入能量！");
               break;
            case 10679:
               Alarm.show(str + "此封印已经注入了能量！不能再注入能量！");
               break;
            case 10673:
               Alarm.show(str + "只有在2013年2月1日到2013年2月28日才能领取哦！");
               break;
            case 10675:
               Alert.show(str + "活动期间累积开通相应月数的超能NoNo即可获得相应精灵的精元，需要立即开通超能NoNo吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4_0);
               });
               break;
            case 10689:
               Alarm.show(str + "不在急速孵化时间内！");
               break;
            case 10680:
               Alarm.show(str + "你的恶灵兽精元已经在急速孵化中！");
               break;
            case 10681:
               Alarm.show(str + "你还没有孵化，不能领奖！");
               break;
            case 10682:
               Alarm.show(str + "你的恶灵兽精元正在急速孵化中，耐心等待！");
               break;
            case 10683:
               Alarm.show(str + "你已经得到你的恶灵兽了！");
               break;
            case 10684:
               Alarm.show(str + "你已经是VIP了！");
               break;
            case 10685:
               Alarm.show(str + "不在孵化时间内！");
               break;
            case 10686:
               Alarm.show(str + "你的恶灵兽精元已经孵化8次了！");
               break;
            case 10687:
               Alarm.show(str + "你的恶灵兽精元正在孵化中，不要重复孵化");
               break;
            case 10688:
               Alarm.show(str + "达到次数上限！");
               break;
            case 10690:
               Alarm.show(str + "孵化次数不够，不能领恶灵兽！");
               break;
            case 10691:
               Alarm.show(str + "倒计时还没有结束，不能领恶灵兽！");
               break;
            case 10693:
               Alarm.show(str + "你还没有恶灵兽，不能进行恶灵兽养成！");
               break;
            case 10694:
               Alarm.show(str + "你的恶灵兽不能吃能量了，去进行进化挑战吧！");
               break;
            case 10695:
               Alarm.show(str + "这时候你应该给你的恶灵兽喂能量了哦！");
               break;
            case 10696:
               Alarm.show(str + "你已经兑换过了！");
               break;
            case 10697:
               Alarm.show(str + "不能享受临时VIP待遇！");
               break;
            case 10698:
               Alarm.show(str + "你的恶灵兽还没有到100级，不能领称号哦！");
               break;
            case 1900019:
               Alarm.show(str + "尖叫礼花超出购买上限");
               break;
            case 1900021:
               Alarm.show(str + "恶灵礼花超出使用上限");
               break;
            case 1900022:
               Alarm.show(str + "没有对应礼花，不能放烟花");
               break;
            case 1900020:
               Alarm.show(str + "你还没完成顺利通过10个关卡，你可要快点哦！加油！");
               break;
            case 1900013:
               Alarm.show(str + "新年祈福轮每天只能5次机会！别贪心哦！明天再来试试吧！");
               break;
            case 1900014:
               Alarm.show(str + "等待一会儿吧！新年祈福轮也需要休息一下哦！");
               break;
            case 1900015:
               Alarm.show(str + "非常抱歉，你已经错过了本次拯救精灵伙伴的时间，快去接受下次营救任务吧！记得时间很重要哦！");
               break;
            case 1900016:
               Alarm.show(str + "你已经顺利通过三个关卡，不用再次尝试了哦！快去拯救精灵伙伴吧！");
               break;
            case 1900023:
               Alarm.show(str + "星球碎片数目已经到达每日上限！");
               break;
            case 1900024:
               Alarm.show(str + "赛尔豆合成方式每日最多只能使用20次！");
               break;
            case 10658:
               Alarm.show(str + "你已经拥有此精灵了哦！");
               break;
            case 1900025:
               if(cmdID == 41026)
               {
                  Alarm.show(str + "你已经领取过这个地图的狂欢小飞船了！");
               }
               else
               {
                  Alarm.show(str + "领取跳跳精元条件不足！");
               }
               break;
            case 1910004:
               Alarm.show(str + "您还没有达到领取奖励的条件！");
               break;
            case 10666:
               Alarm.show(str + "间隔3分钟才能开始对战！");
               break;
            case 10681:
               Alarm.show(str + "挑战冷却时间未到");
               break;
            case 10682:
               Alarm.show(str + "已经达到每日挑战次数上限");
               break;
            case 10719:
               Alarm.show(str + "你已经兑换成功，不要太贪心哦！");
               break;
            case 10728:
               Alarm.show(str + "十连扭需要消耗9枚扭蛋牌，你的扭蛋牌数量不足！");
               break;
            case 103675:
               Alarm.show(str + "战队资源不足！");
            case 103685:
               Alarm.show(str + "战队图纸已兑换！");
            case 103686:
               Alarm.show(str + "你不是管理员！");
               break;
            case 101103:
               Alarm.show(str + "密码错误！");
               break;
            case 10647:
               Alarm.show(str + "密码错误次数过多，请稍候再试！");
               break;
            case 1910001:
               Alarm.show(str + "这个烟花你已经点燃了，小约克不在这里，快去继续找找看吧！");
               break;
            case 1940000:
               Alarm.show(str + "你今日已经帮助野兽之灵穆恩斯完成了向神兽讨教的任务，明天记得再来哟！");
               break;
            case 1940001:
               Alarm.show(str + "你要帮助野兽之灵穆恩斯向四只神兽讨教之后才能获得野性印记哟，快去挑战吧！");
               break;
            case 1940002:
               ItemManager.upDateCollection(1200608,function():void
               {
                  if(ItemManager.getCollectionInfo(1200608) == null)
                  {
                     Alarm.show(str + "进入麒麟空间需要天界之钥，完成主线“我们回来救你了”可以获得！");
                  }
                  else if(SystemTimerManager.sysDate.minutes >= 15)
                  {
                     Alarm.show(str + "你的天界之钥每日次数已经耗尽，明天再试试吧！记得每日只有3次机会哦！");
                  }
               });
               break;
            case 1800006:
               Alarm.show(str + "精灵不在战斗背包中");
               break;
            case 1910005:
               Alarm.show(str + "高阶战斗试炼 没有战胜boss 不能加精灵个体");
               break;
            case 10716:
               Alarm.show(str + "只有超能NoNo才能进行修改哦！");
               break;
            case 10722:
               Alarm.show(str + "未挑选养成精灵!");
               break;
            case 10724:
               Alarm.show(str + "进度未完成!");
               break;
            case 10726:
               Alarm.show(str + "不能挑战更高级别的boss！");
               break;
            case 10727:
               Alarm.show(str + "已超过每日挑战次数上限！");
               break;
            case 10729:
               Alarm.show(str + "你已经免费开启过，明天再来试试运气吧！");
               break;
            case 10730:
               Alarm.show(str + "你已经领取过奖励了哦！");
               break;
            case 10731:
               Alarm.show(str + "你的寻找次数不足，还不能领取奖励，加油哦！");
               break;
            case 10733:
               Alarm.show(str + "你无需再贡献更多的这种矿石！");
               break;
            case 13135:
               Alarm.show(str + "每天只能领取两次哦！");
               break;
            case 1800007:
               Alarm.show(str + "达到每日操作上限！");
               break;
            case 1800008:
               if(cmdID == 46004)
               {
                  Alarm.show(str + "冷却时间是三分钟哦！请耐心等待！");
               }
               else
               {
                  Alarm.show(str + "冷却时间未到！");
               }
               break;
            case 1800001:
               Alarm.show(str + "输入参数超出预定范围！");
               break;
            case 1800009:
               Alarm.show(str + "禁止重复操作！");
               break;
            case 1800010:
               Alarm.show(str + "不满足进入场景条件！");
               break;
            case 1920000:
               Alarm.show(str + "您输入的密码有误，请重新输入！");
               break;
            case 1940003:
               Alarm.show(str + "你已经拥有凯克特斯的精元，不能重复兑换！");
               break;
            case 1940004:
               Alarm.show(str + "你已经拥有林间密果，不能重复兑换！");
               break;
            case 10732:
               Alarm.show(str + "当前战队维护积分不足，所有战队功能不可用！");
               break;
            case 1:
               Alarm.show(str + "");
               break;
            case 1940005:
               Alarm.show(str + "你已经兑换过电击兔超进化道具万伏电流棒，不能重复兑换！");
               break;
            case 1940006:
               Alarm.show(str + "你已经兑换过布鲁卡卡超进化道具海蓝之心,不能重复兑换！");
               break;
            case 1940007:
               Alarm.show(str + "你已经兑换过格鲁斯特超进化道具海妖之力,不能重复兑换！");
               break;
            case 1940008:
               Alarm.show(str + "你已经兑换过艾蒂森超进化道具艾蒂森超进化能量,不能重复兑换！");
               break;
            case 10739:
               Alarm.show(str + "该项能力值已经达到最大值");
               break;
            case 10740:
               Alarm.show(str + "未达到领取条件");
               break;
            case 14457:
               Alarm.show(str + "已经领取过，不能重复领取！");
               break;
            case 1800007:
               Alarm.show(str + "已经达到每日上限明天再来吧！");
               break;
            case 1800010:
               Alarm.show(str + "还没有通过前面十二宫的挑战哦！");
               break;
            case 1960003:
               Alarm.show(str + "你已经拥有了这只精灵！");
               break;
            case 1800005:
               if(cmdID == 41056)
               {
                  Alarm.show(str + "还没达到领取条件快去收集更多卡牌吧！");
               }
               else if(cmdID == 42035)
               {
                  Alarm.show(str + "答对10题后才能领取哦！");
               }
               else if(cmdID == 48018)
               {
                  Alarm.show(str + "等级未达到要求,请提升你的等级");
               }
               else
               {
                  Alarm.show(str + "领取条件未达到！");
               }
               break;
            case 1800004:
               if(cmdID == CommandID.ITEM_TRY_OUT)
               {
                  Alarm.show(str + "你已经试用过此功能了！送你的奖励记得使用哟，赛尔一定要把自己的精灵培养成为极品精灵哟!");
               }
               else if(cmdID == CommandID.GOD_KING_ACTIVATE)
               {
                  Alarm.show(str + "特性已经被成功激活了！!");
               }
               else
               {
                  Alarm.show(str + "不能重复领取奖励！");
               }
               break;
            case 14494:
               Alarm.show(str + "已经领取过！");
               break;
            case 14495:
               Alarm.show(str + "精灵还没有达到领取奖励的条件！");
               break;
            case 10744:
               Alarm.show(str + "期号不存在");
               break;
            case 10745:
               Alarm.show(str + "奖励号不存在");
               break;
            case 10746:
               Alarm.show(str + "胜利场次不足");
               break;
            case 10747:
               Alarm.show(str + "已经领取过该奖励了！");
               break;
            case 10749:
               Alarm.show(str + "精元不在背包中");
               break;
            case 10750:
               Alarm.show(str + "已经领取过恶灵兽");
               break;
            case 10751:
               Alarm.show(str + "未开始孵化");
               break;
            case 10752:
               Alarm.show(str + "已经完成领取孵化");
               break;
            case 10753:
               Alarm.show(str + "未到冷却时间");
               break;
            case 10754:
               Alarm.show(str + "你今天已经签到过了，记得明天再来吧（通过方法1和方法3，能够快速获得恶灵兽的精元哦）");
               break;
            case 10755:
               Alarm.show(str + "该位置已经镶嵌");
               break;
            case 10756:
               Alarm.show(str + "属性值已经达到最大上限");
               break;
            case 10757:
               Alarm.show(str + "未达到领取条件");
               break;
            case 10758:
               Alarm.show(str + "已经开始孵化");
               break;
            case 10759:
               Alarm.show(str + "未完成孵化");
               break;
            case 10760:
               Alarm.show(str + "已经领取过该精灵");
               break;
            case 10765:
               Alarm.show(str + "特价商品每人只能购买一个，不要贪心哟！");
               break;
            case 1940010:
               Alarm.show(str + "随机次数过多");
               break;
            case 1940011:
               Alarm.show(str + "你的水果精灵都培养到极品了哦,赶快领取你的极品精灵吧！");
               break;
            case 1940012:
               Alarm.show(str + "一键获取果然多精灵的道具不够哦！");
               break;
            case 1940012:
               Alarm.show(str + "一键获取果然多精灵的道具不够哦！");
               break;
            case 1940013:
               Alarm.show(str + "今天已经获得好多六芒冰花了，迪布恩已经被你打得晕头转向了。明天再来吧~");
               break;
            case 10767:
               Alarm.show(str + "今天你的抽奖次数已经用完啦！");
               break;
            case 10775:
               Alarm.show(str + "您每天有5次普通历练的机会，您的5次机会已经用完了！尝试下有效历练和高效历练吧！");
               break;
            case 10778:
               Alarm.show(str + "次数已达上限！（普通用户每日5次，VIP用户每日10次）");
               break;
            case 10782:
               Alarm.show(str + "每天只能获得一次派吉精元！");
               break;
            case 10783:
               Alarm.show(str + "每天只能获得一次木木精元！");
               break;
            case 1900032:
            case 1900030:
               Alarm.show(str + "没有匹配到可对战用户，再试一次吧！");
               break;
            case 1900033:
               Alarm.show(str + "您要战斗的用户正在战斗中，现在不能争夺！过会儿再试吧！");
               break;
            case 10773:
               Alarm.show(str + "您的精灵个体值已经达到31了，不需要改变个体！");
               break;
            case 10786:
               Alarm.show(str + "需要帮助奥利昂完成10次出航任务，才能领取奥利昂的精元！您的出航次数不够！");
               break;
            case 10787:
               Alarm.show(str + "每日小游戏次数超出限制");
               break;
            case 10788:
               Alarm.show(str + "每日获得棕宝超出限制");
               break;
            case 10789:
               Alarm.show(str + "每日改变性格超出限制");
               break;
            case 10790:
               Alarm.show(str + "未达到领取奖励条件");
               break;
            case 10792:
               Alarm.show(str + "每天最多获得5枚父子印记！");
               break;
            case 14545:
               Alarm.show(str + "签到天数超出限制");
               break;
            case 322001:
               Alarm.show(str + "非常抱歉，你输入的兑换码已经被使用过了,请确认后再次输入！");
               break;
            case 322002:
               Alarm.show(str + "非常抱歉，你输入的兑换码不正确，请确认后再次输入！");
               break;
            case 322003:
               Alarm.show(str + "请输入正确的密码！");
               break;
            case 19006:
               Alarm.show(str + "用户已经领取过迪恩套装");
               break;
            case 19007:
               Alarm.show(str + "用户没有达到领取套装条件，四个任务没有全部完成");
               break;
            case 19008:
               Alarm.show(str + "您已经投过票!");
               break;
            case 19009:
               Alarm.show(str + "今天历练的机会已经用光了，明天再来吧！");
               break;
            case 19010:
               Alert.show(str + "最多免费领取三只巨尾灵狐！您当前已经免费领取了三只!\n请购买妖狐之力进行超进化！",function():void
               {
                  ProductAction.buyMoneyProduct(200975);
               });
               break;
            case 13141:
               Alarm.show(str + "你填写了自己的米米号");
               break;
            case 13142:
               Alarm.show(str + "这是一个不存在的米米号");
               break;
            case 13143:
               Alarm.show(str + "已经记录成功，不可重复记录");
               break;
            case 13149:
               Alarm.show(str + "您今天已经捕捉过，明天再来吧！");
               break;
            case 13151:
            case 20165:
               break;
            case 20163:
               Alarm.show(str + "今天不需要补签哦！");
               break;
            case 20164:
               Alarm.show(str + "放不下10个之外的嘟嘟奶");
               break;
            case 20167:
               Alarm.show(str + "你今天获得的比力碎片达到上限！");
               break;
            case 20168:
               Alarm.show(str + "你今天获得的精灵王争霸赛积分到达上限了！");
               break;
            case 10797:
               Alarm.show(str + "已经有该物品和所要进化的精灵了");
               break;
            case 1900035:
               Alarm.show(str + "你输入的米米号不符合要求！");
               break;
            case 1910006:
               Alarm.show(str + "天蛇能量珠不够！");
               break;
            case 1910007:
               Alarm.show(str + "天蛇能量珠达到上限！");
               break;
            case 1910008:
               Alarm.show(str + "每日挑战希普勒达到上限！");
               break;
            case 1910009:
               Alarm.show(str + "今日挑战卡贝基已达10次，请明日再来！");
               break;
            case 1910010:
               Alarm.show(str + "比巴卜套装只能兑换一次 ");
               break;
            case 10798:
               Alarm.show(str + "本道具只能兑换一次！");
               break;
            case 14586:
               break;
            case 10800:
               Alarm.show(str + "今天你已经领取过了，明天再来吧！");
               break;
            case 1910011:
               Alarm.show(str + "还没有收集到足够的能量！");
               break;
            case 1800013:
               Alarm.show(str + "今天你已经领取过了，明天再来吧！");
               break;
            case 1910013:
               Alarm.show(str + "斯卡伊果实采集还没过12秒！");
               break;
            case 1910014:
               Alarm.show(str + "斯卡伊果实的数量不够！");
               break;
            case 1910015:
               Alarm.show(str + "已经领过卡修斯的精元了！");
               break;
            case 1910016:
               Alarm.show(str + "已经领过格莱奥的精元了！");
               break;
            case 20173:
               Alarm.show(str + "每天最多与卡贝基战斗10次！");
               break;
            case 20174:
               Alarm.show(str + "每天最多与尤克斯战斗10次！");
               break;
            case 20177:
               Alarm.show(str + "已经拥有神宠之力！");
               break;
            case 20178:
               Alarm.show(str + "你还没有集齐天蛇六将！");
               break;
            case 20179:
               Alarm.show(str + "你已经拥有战神之力了哦！");
               break;
            case 1800013:
               Alarm.show(str + "你今天已经领取过了，记得明天再来哟！");
               break;
            case 1910017:
               Alarm.show(str + "还未打胜过波尔萨！");
               break;
            case 1910018:
               Alarm.show(str + "勇者之心数量不够！");
               break;
            case 1910019:
               Alarm.show(str + "获得波尔多的精元或者拥有精灵波尔多才能挑战波尔萨！");
               break;
            case 1910020:
               Alarm.show(str + "木木的能量数量不够！");
               break;
            case 103680:
               Alarm.show(str + "刻印正在使用中，不能进行升级哦!");
               break;
            case 20169:
               break;
            case 20176:
               Alarm.show(str + "今日对战次数已达上限，明天再来吧");
               break;
            case 14059:
               Alarm.show(str + "不在时间范围内");
               break;
            case 14250:
               Alarm.show(str + "目前精灵正在地底古迹修炼，需取出后方可进行操作！");
               break;
            case 14436:
               Alarm.show(str + "条件不足 不能领奖");
               break;
            case 1910021:
               Alarm.show(str + "冰川之能的数量不够");
               break;
            case 1910022:
               Alarm.show(str + "没有把5个封印全部解封");
               break;
            case 14590:
               Alarm.show(str + "你是vip但是还在抽优惠码 ");
               break;
            case 14596:
               Alarm.show(str + "领取次数已达上限");
               break;
            case 1910025:
               Alarm.show(str + "已经超过次数了");
               break;
            case 1910026:
               Alarm.show(str + "今天你已经获得很多只罗伊了哦，记得明天再来领取吧");
               break;
            case 1910027:
               Alarm.show(str + "今天你已经获得很多只伊沙了哦，记得明天再来领取吧");
               break;
            case 1800016:
               Alarm.show(str + "还没达到要求的进度");
               break;
            case 20183:
               Alarm.show(str + "用户已经拥有圣魔之魂");
               break;
            case 14595:
               Alarm.show(str + "您已经半价领取过该精灵了！");
               break;
            case 20186:
               Alarm.show(str + "你今天已经与洛提斯对战十次了，明天再来吧！");
               break;
            case 20190:
               Alarm.show(str + "用户已经拥有龙族之印");
               break;
            case 20191:
               Alarm.show(str + "5个大地之鼎没有全部点亮！");
               break;
            case 20192:
               Alarm.show(str + "每日挑战博里尼超过10次！");
               break;
            case 20193:
               Alarm.show(str + "已经点亮过该大地之鼎");
               break;
            case 14498:
               EventManager.dispatchEvent(new RobotEvent(ErrorType.getErr0rType(num)));
               break;
            case 20188:
               Alarm.show(str + "未达到领取精灵条件");
               break;
            case 20189:
               Alarm.show(str + "用户已经有该超进化精灵或则超进化道具");
               break;
            case 1910034:
               Alarm.show(str + "不可重复签到，明天继续努力吧！");
               break;
            case 1940019:
               Alarm.show(str + "你今天已经答过题了 ，明天再来吧！");
               break;
            case 1940020:
               Alarm.show(str + "你还没有完成任务，不能领奖！");
               break;
            case 14588:
               Alarm.show(str + "由于你在赛尔对战中进行了非法操作，将被强制退出游戏，请刷新后重新登录！同时你的操作已被记录，请勿再次进行相关非法操作，否则将作为违规账号处理！");
               break;
            case 11186:
               Alarm.show(str + "你还没有加入队伍哦，先去加入一个队伍吧！");
               break;
            case 1940021:
               Alert.show(str + "你已购买过这个特价礼包！每续费1个月VIP可额外获得1次所有特价礼包购买机会，是否立即续费？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               });
               break;
            case 1940022:
               Alarm.show(str + "你已经购买过该礼包！");
               break;
            case 1910039:
               Alert.show(str + "你已经拥有此精灵了，是否打开精灵背包进行查看？",function():void
               {
                  PetBagControllerNew.showByBuffer();
               });
               break;
            case 1910040:
               Alarm.show(str + "重复激活通用刻印孔");
               break;
            case 1910041:
               Alarm.show(str + "你拾取这个蛋糕的碎片已经达到5个，等下一个整点参加新一轮打蛋糕活动吧！");
               break;
            case 1910041:
            case 1910042:
            case 1910043:
               EventManager.dispatchEvent(new RobotEvent(ErrorType.getErr0rType(num)));
               break;
            case 1940028:
               Alarm.show(str + "用户的极光耀石数量超过10");
               break;
            case 1940029:
               Alarm.show(str + "已经拥有伊兰迪的精元");
               break;
            case 20195:
               Alarm.show(str + "没有足够的中秋狂欢礼券进行抽奖");
               break;
            case 20196:
               Alarm.show(str + "每日抽奖次数超过15次");
               break;
            case 1910044:
               Alarm.show(str + "你获得的VIP四周岁生日会小蛋糕达到每日上限。");
               break;
            case 1910046:
               Alarm.show(str + "你已经获得了神兽潘达，快去特训吧！");
               break;
            case 1940023:
               if(MainManager.actorInfo.isVip)
               {
                  Alarm.show(str + "每天只能领取套装中的一件哦");
               }
               else
               {
                  Alert.show(str + "只有开通VIP的用户才能一次领取“狮子座白银套装”的所有部件哟，是否立即成为VIP？",function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  });
               }
               break;
            case 1940032:
               Alarm.show(str + "未达到领奖条件！");
               break;
            case 1940030:
               Alarm.show(str + "斯科瑞还没有恢复能量，快去收集火焰元素！");
               break;
            case 1940031:
               Alarm.show(str + "今日挑战已达到上限，请明天继续!");
               break;
            case 1910052:
               Alarm.show(str + "已经拿过玛法里奥的精元了");
               break;
            case 1910055:
               Alarm.show(str + "已经拿过宿命之光.守了");
               break;
            case 1910056:
               Alarm.show(str + "不能为其他队伍投票");
               break;
            case 1940038:
               Alarm.show(str + "刻印兑换数量已达到全服每日上限！");
               break;
            case 1910059:
               Alarm.show(str + "只能打造一次哦");
               break;
            case 1910058:
               Alarm.show(str + "使用赛尔豆打造，每天最多只能打造5次哦！");
               break;
            case 1940040:
               Alarm.show(str + "已经领过套装！");
               break;
            case 1940041:
               Alarm.show(str + "已经领过刻印！");
               break;
            case 1940043:
               Alarm.show(str + "你已经拥有这件套装，选择另外一套吧！");
               break;
            case 1910062:
               Alarm.show(str + "黑夜甬道不能重复挑战同一层BOSS！");
               break;
            case 1940033:
               if(cmdID == 45151)
               {
                  Alarm.show(str + "该特性暂未开启转化，敬请期待!");
               }
               else
               {
                  Alarm.show(str + "数据非法！");
               }
               break;
            case 1940044:
               Alarm.show(str + "您所绑定的用户还没有一键征服机械暴龙");
               break;
            case 1940045:
               Alarm.show(str + "您输入的对方米米号有误！");
               break;
            case 1940046:
               Alarm.show(str + "您请求的米米号不是新用户或者回流用户!");
               break;
            case 14599:
               Alert.show(str + "拥有血狼王的赛尔才能免费领取血狼王变形套装！你还没有哟，是否立即获取？",function():void
               {
                  ModuleManager.hideAllModule();
                  ModuleManager.destroyAll();
                  ModuleManager.showModule(ClientConfig.getAppModule("BloodWolfKingPanel"),"正在努力打开血狼王面板");
               });
               break;
            case 1910066:
               Alarm.show(str + "背包中没有这两个精灵!");
               break;
            case 1910067:
               Alarm.show(str + "你已经领悟过了!");
               break;
            case 1800002:
               Alert.show(str + "你还不是VIP用户，是否立即开通VIP?",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               });
               break;
            case 1800007:
               Alarm.show(str + "每天只能抽取一次哦！");
               break;
            case 1800022:
               Alarm.show(str + "你已经激活过该特性了！");
               break;
            case 1910069:
               Alarm.show(str + "还没有全部激活黄金铠甲！");
               break;
            case 1900037:
               Alarm.show(str + "很遗憾这次没有获得，继续努力哦！");
               break;
            case 1800014:
               Alarm.show(str + "你已经领过了，不要灰心哦！");
               break;
            case 1910070:
               Alarm.show(str + "该项挑战赛累积分不够，继续努力吧！");
               break;
            case 1920001:
               Alarm.show(str + "冷却时间未到!");
               break;
            case 1800024:
               Alarm.show(str + "无法激活!");
               break;
            case 1800025:
               Alarm.show(str + "已经是最高等级了!");
               break;
            case 1800020:
               Alarm.show(str + "精灵不合法!");
               break;
            case 1930000:
               Alarm.show(str + "你成功绑定的米米号不能超过三个哦!");
               break;
            case 1920003:
               Alarm.show(str + "需要先战胜希林顿!");
               break;
            case 1800025:
               Alarm.show(str + "已经是最高等级了!");
               break;
            case 1800026:
               Alarm.show(str + "物品数量不够!");
               break;
            case 1910072:
               Alarm.show(str + "已经获得过战神之力了!");
               break;
            case 1910073:
               Alarm.show(str + "已经获得过吉亚尼的精元!");
               break;
            case 1910074:
               Alarm.show(str + "已经获得过亚梅丝的精元!");
               break;
            case 1960004:
               Alarm.show(str + "已经获得过米咔超能量了！");
               break;
            case 1800019:
               if(cmdID == CommandID.Q_LEIYI_GET)
               {
                  Alarm.show(str + "今天已经签到了，明天再来吧!");
               }
               else if(cmdID == 48018)
               {
                  Alarm.show(str + "该道具只能领取一次哦");
               }
               else if(cmdID == 43267)
               {
                  Alarm.show(str + "你要兑换的奖励已经达到拥有上限了！");
               }
               else
               {
                  Alarm.show(str + "达到了上限了!");
               }
               break;
            case 1800028:
               Alarm.show(str + "之前已经获得过了!");
               break;
            case 1800027:
               Alarm.show(str + "你已经拥有该精灵或它的精元了");
               break;
            case 1800029:
               Alarm.show(str + "此物品仅限兑换1次，快去看看其它奖励吧！");
               break;
            case 1800030:
               Alarm.show(str + "你已经拥有了这只精灵，不能兑换哦！");
               break;
            case 1800034:
               Alarm.show(str + "学习力已满");
               break;
            case 1800035:
               Alarm.show(str + "个体已满");
               break;
            case 1800036:
               Alarm.show(str + "等级已满");
               break;
            case 1900041:
               Alarm.show(str + "该刻印只能用于100级精灵！");
               break;
            case 1900042:
               Alarm.show(str + "刻印重复绑定精灵！请先将刻印取下！");
               break;
            case 1900043:
               Alarm.show(str + "刻印重复绑定技能！");
               break;
            case 1960005:
               Alarm.show(str + "已拥有塞维利亚！");
               break;
            case 11194:
               Alarm.show(str + "礼盒已经开启不能重复领取哦！");
               break;
            case 1900051:
               Alarm.show(str + "带有初始精灵限制的刻印不能重铸！");
               break;
            case 1900052:
               Alarm.show(str + "已经领取过附件了哦！");
               break;
            case 1900053:
               Alarm.show(str + "该附件已无效！");
               break;
            case 1800032:
               Alarm.show(str + "你兑换过这个刻印了哦！");
               break;
            case 1920012:
               if(cmdID == 47233)
               {
                  Alarm.show("该账号绑定的米米号已达到最大值！");
               }
               else if(cmdID == 45151)
               {
                  Alarm.show("请先为精灵添加特性之后再使用芯片！");
               }
               break;
            case 1930004:
               Alarm.show(str + "你已经获得了这只精灵，最多只能获得1只哦！");
               break;
            case 1930004:
               Alarm.show(str + "你已经获得了这只精灵，最多只能获得1只哦！");
               break;
            case 1920010:
               Alarm.show(str + "电池不足");
               break;
            case 1960006:
               Alarm.show(str + "刻印总数不能超过您的精灵数量，您不能继续领取该刻印了哦！");
               break;
            case 1960007:
               Alarm.show(str + "今天已经达到挑战上限了 明天再来吧！");
               break;
            case 1920013:
               Alarm.show(str + "很遗憾，正义使者勋章合成失败。请继续努力！");
               break;
            case 1960008:
               Alarm.show(str + "不能提交同样的结果哦！");
               break;
            case 270111:
               Alarm.show(str + "请您稍后再试！");
               break;
            case 1960009:
               Alarm.show(str + "集齐宝箱和钥匙，才能打开宝箱！你的道具数量不足！");
               break;
            case 1920018:
               Alarm.show(str + "钻石库存达到上限3000时不能免费得到钻石！");
               break;
            case 1960010:
               Alarm.show(str + "卡修斯预热投票活动已经结束");
               break;
            case 1930005:
               Alarm.show(str + "今日挑战次数已达上线");
               break;
            case 1800033:
               Alarm.show(str + "这个精灵你已经超进化过了！");
               break;
            case 1920020:
               Alarm.show(str + "已经是最高等级了！");
               break;
            case 1920021:
               Alarm.show(str + "已经达到最大伤害了！");
               break;
            case 1800039:
               Alarm.show(str + "没有按顺序操作！");
               break;
            case 1905002:
               Alarm.show(str + "你的精灵已经兑换过这个技能！");
               break;
            case 1900048:
               Alarm.show(str + "刻印使用中，需要取下刻印才能继续操作！");
               break;
            case 1960023:
               Alarm.show(str + "请确保两个都是极品精灵！");
               break;
            case 1905000:
               Alarm.show(str + "活动期间消费的钻石数达不到领取礼品最低要求！");
               break;
            case 1905001:
               Alarm.show(str + "伤害值不足！");
               break;
            case 1905003:
               Alarm.show(str + "要求的前置物品数量不足！");
               break;
            case 1905004:
               if(cmdID == 46279)
               {
                  Alarm.show(str + "物品数量不足!");
               }
               else
               {
                  Alarm.show(str + "前置条件不满足！");
               }
               break;
            case 1905005:
               Alarm.show(str + "任务已经完成，不能重复进行！");
               break;
            case 1905006:
               Alarm.show(str + "成就还没有激活！");
               break;
            case 1920015:
               Alarm.show(str + "达到每周上限！");
               break;
            case 1905007:
               Alarm.show(str + "达到每天操作上限！");
               break;
            case 1905008:
               Alarm.show(str + "达到每月操作上限！");
               break;
            case 1960024:
               Alarm.show(str + "获得过第五技能");
               break;
            case 1960026:
               Alarm.show(str + "您的精灵在待命背包，请先放入仓库再进行此操作！");
               break;
            case 1960025:
               Alarm.show(str + "获得过专属特性");
               break;
            case 1800011:
               Alarm.show(str + "不合法的米米号！");
               break;
            case 1800043:
               Alarm.show(str + "你没有被邀请哦！");
               break;
            case 1800044:
               Alarm.show(str + "对方已经达到上限了！");
               break;
            case 1800015:
               Alarm.show(str + "这个称号已经领取过了！");
               break;
            case 1905010:
               Alarm.show(str + "错误的操作顺序");
               break;
            case 300010:
            case 1960027:
               break;
            case 1960028:
               Alarm.show(str + "很遗憾，你来迟了，目前这个矿洞里的矿点全部被占领了");
               break;
            case 1965000:
               Alarm.show(str + "超进化的精灵身上不能带刻印");
               break;
            case 1960035:
               Alarm.show(str + "你已达到每日免费资源上限，明天再来兑换吧!");
               break;
            case 14724:
               Alarm.show(str + "您的精灵在精灵学院中哦");
               break;
            case 20184:
               Alarm.show(str + "您的赛尔豆不足哦");
               break;
            case 1925000:
               Alarm.show(str + "只能对已有特性的非融合精灵使用哦，请先为这只精灵附加特性。");
               break;
            case 1800045:
               Alarm.show(str + "你指定加入的房间不存在或者已经过期！");
               break;
            case 1800017:
               Alarm.show(str + "未定义处理的请求");
               break;
            case 1800046:
               Alarm.show(str + "巅峰圣战禁用精灵出错！");
               break;
            case 1800047:
               Alarm.show(str + "巅峰圣战选择首发精灵出错！");
               break;
            case 1800048:
               Alarm.show(str + "巅峰圣战选择出战精灵出错！");
               break;
            case 1800049:
               Alarm.show(str + "请按照正常规则进入巅峰圣战对战，以免你的帐号出现异常！");
               break;
            case 1905011:
               Alarm.show(str + "今天不能重置了，请明天来重置！");
               break;
            case 1965013:
               Alarm.show("你的输入含有非法字符");
               break;
            case 1965015:
               Alarm.show("不是自己的战队成员");
               break;
            case 1965014:
               Alarm.show("不是自己的好友");
               break;
            case 1800031:
               Alarm.show("对方在战斗中或者输入的米米号不正确，请重新输入米米号！");
               break;
            case 1965016:
               Alarm.show("神秘系精灵王不能通过道具兑换座驾");
               break;
            case 1965017:
               ExternalInterface.call("alert","没有权限进入此服务器");
               break;
            case 1965018:
               Alarm.show("由于近期您在游戏中的违规行为，您6月17日-7月17日期间将无法获得特性重组剂Ω、特性开启晶片Ω、高级体力上限提升药剂Ω奖励。建议您前往商城购买此类道具使用。");
               break;
            case 1965019:
               Alarm.show(str + "战队资源不足,无法升级！");
               break;
            case 1965020:
               Alarm.show(str + "该刻印已经提升至全满，请更换未强化至全满的刻印再进行强化！");
               break;
            case 1965024:
               Alarm.show(str + "该功能已下架！");
               break;
            case 1800050:
               Alarm.show("玩家正在参加巅峰圣战!");
               break;
            case 1800051:
               Alarm.show("巅峰圣战清除惩罚相关操作非法!");
               break;
            case 1965021:
               break;
            case 1965026:
               Alarm.show("该刻印在仓库中！");
               break;
            case 1965032:
               Alarm.show("你已经获得了能力加成了，无法重复领取！");
               break;
            case 1965031:
               Alarm.show("该精灵目前装备有专属全能刻印，请将刻印卸下后再进化哦！");
               break;
            case 11199:
               Alarm.show("分子密码兑换功能维护中，将于8月15日开启");
               break;
            case 1920011:
               Alarm.show("活动已结束!");
               break;
            case 1965033:
               Alarm.show("兑换码输入有误!");
               break;
            case 1965034:
               Alarm.show("此兑换码已被使用！");
               break;
            case 1965035:
               Alarm.show("该兑换码已达到使用上限！");
               break;
            case 1965036:
               Alarm.show("你已经完成了本轮对战，每10分钟一轮，请稍后再来哦！");
               break;
            case 1965037:
               break;
            case 1965038:
               Alarm.show("很抱歉，你邀请的好友已经拥有时空船票了！");
               break;
            case 1965040:
               Alarm.show("你已经激活过了！");
               break;
            case 1965042:
               Alarm.show("你来晚了一步，蛋糕已经全部被拿走了，耐心的等待下一批蛋糕吧！");
               break;
            case 103688:
               Alarm.show("兑换码输入有误");
               break;
            case 103689:
               Alarm.show(" 兑换码奖励已领取");
               break;
            case 103690:
               Alarm.show("兑换码已达到使用上限");
               break;
            case 103693:
               Alarm.show("兑换码不在兑换时间内，详情请前往kf.61.com咨询");
               break;
            case 1965043:
               Alarm.show("该活动已经不开放");
               break;
            case 1965044:
               Alarm.show("奖励快要到上限了，请消耗些再来兑换");
               break;
            case 1965045:
               Alarm.show("输出物品已经达到上限");
               break;
            case 1965046:
               Alarm.show("该活动暂时已关闭！");
               break;
            case 20200:
               Alarm.show("兑换到达上限！");
               break;
            case 1965048:
               Alarm.show("该道具已达到了最大个人获得上限！");
               break;
            case 1965049:
               Alarm.show("该道具已达到了最大个人每日获得上限！");
               break;
            case 1965050:
               Alarm.show("该道具库存紧缺！");
               break;
            case 1965051:
               Alarm.show("需要支付的晶源币不足！");
               break;
            case 1965052:
               Alarm.show("需要支付的赛尔豆不足！");
               break;
            case 1965047:
               Alarm.show("您的晶源币数量不足，无法兑换该奖励！");
               break;
            case 1965077:
               Alarm.show("很抱歉，请将邪邃圣念技能替换下场再来进行强化！");
               break;
            case 1965078:
               Alarm.show("很抱歉，请将空灵虚影技能替换下场再来进行强化！");
               break;
            case 1965053:
               Alarm.show("提交的物品数量已达今日上限，明日再来吧~");
               break;
            case 1965054:
               Alarm.show("该商品已下架，无法购买！");
               break;
            case 1965061:
               Alarm.show("测试服无法使用钻石购买任何商品！");
               break;
            case 1965074:
               Alarm.show("仅限2020年11月20日-2020年12月6日创建的新角色，且完成新手任务后可使用！");
               break;
            case 70008:
               Alarm.show("游戏已经结束了！");
               break;
            case 1965033:
               Alarm.show("兑换码输入有误！");
               break;
            case 1965075:
               Alarm.show("此兑换码仅能在页游上进行兑换！");
               break;
            case 1965076:
               Alarm.show("此兑换码仅能在H5上进行兑换！");
               break;
            case 1965083:
               Alarm.show("兑换失败，首发精灵已拥有该专属特性！");
               break;
            case 1965084:
               Alarm.show("兑换失败，首发精灵已拥有该第五技能！");
               break;
            case 1965085:
               Alarm.show("当前无法使用这个技能哦！");
               break;
            case 30000:
               showSpecialAlarmMc();
               break;
            case 1965094:
               UI_PATH = String(ClientConfig.getDLLPath("UI.swf"));
               _uiLoader = new MCLoader(UI_PATH,MainManager.getStage(),1,"正在加载星球");
               _uiLoader.setIsShowClose(false);
               _uiLoader.addEventListener(MCLoadEvent.SUCCESS,function(param1:MCLoadEvent):void
               {
                  UIManager.setup(param1.getLoader());
                  Alarm.show("账号数据修复中，请耐心等待!",null,false,false,false,LevelManager.stage);
               });
               _uiLoader.doLoad();
               break;
            case 1965099:
               Alert.show("当前账号价值较高，为保证账号安全请先将账号绑定手机号后再来购买，是否前往账户中心？",function():void
               {
                  navigateToURL(new URLRequest("https://account.61.com/main"),"_blank");
               });
               break;
            default:
               if(MainManager.isDebug)
               {
                  if(num == 211004)
                  {
                     return;
                  }
                  if(cmdID == 41844 && num == 1800003)
                  {
                     return;
                  }
                  Alarm.show(str + "错误码：" + num);
               }
               else
               {
                  if(cmdID == 41844 && num == 1800003)
                  {
                     return;
                  }
                  Alarm.show("出错了哦（" + str + "错误码：" + num + "），请重试。如果遇到问题，推荐前往客服中心：kf.61.com联系客服。");
               }
         }
         if(s)
         {
            MainManager.getStage().addChild(s);
         }
      }
   }
}
