package com.robot.app.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.UpdateConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PanelRecallManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.userHoldParty.PartyMapManager;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.events.TextEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class BroadcastController
   {
      
      public static var IS_SEPCIAL:Boolean = false;
      
      private static var _ui:MovieClip;
      
      private static var _timer:Timer;
      
      private static var _cd:Boolean = false;
      
      public static var _array:Array = [];
      
      public static var _currentInfo:BroadcastInfo;
      
      private static const NO_BROADCAST_MAP:Array = [789,691,814,1040,810,45,812,900,901,902,903,904,905,10530,1047,1066];
      
      private static const luckbeltAwards:Array = ["神耀·霸天","探险家的训练刻印","典狱长的破碎刻印","探险家的赤红之刃","流浪者的遗迹之痕","通用刻印激活水晶","海拉瑞德","影魔·卢卡斯","影魔·卢卡斯","神后·赫拉","月神·狄安娜","鬼剑骷髅","圣狐永琰","凯撒奥拉夫","绝杀·罗格尔","希尔妮妮","爆炎莱茵","穆恩斯达","希尔妮妮","爆炎莱茵","穆恩斯达"];
      
      private static const diamondnum:Array = [5,10,20,50];
       
      
      public function BroadcastController()
      {
         super();
      }
      
      public static function addBroadcast(param1:BroadcastInfo, param2:Boolean = false) : void
      {
         if(_timer == null)
         {
            if(IS_SEPCIAL)
            {
               _timer = new Timer(8000,1);
            }
            else
            {
               _timer = new Timer(8000,4);
            }
            _timer.addEventListener(TimerEvent.TIMER,onTimer);
         }
         if(param1 == null)
         {
            return;
         }
         if(param1.isLocal == false && Boolean(UpdateConfig.banBroadcast))
         {
            return;
         }
         if(IS_SEPCIAL)
         {
            if(param2)
            {
               return;
            }
         }
         else if(_cd)
         {
            return;
         }
         _array.push(param1);
         showBroadcast();
      }
      
      public static function showBroadcast() : void
      {
         var _loc1_:String = null;
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         if(MainManager.actorState != UserState.MAP)
         {
            return;
         }
         if(AnimateManager.AnimatePlaying)
         {
            return;
         }
         if(MapManager.currentMap == null || NO_BROADCAST_MAP.indexOf(MapManager.currentMap.id) != -1)
         {
            return;
         }
         if(_cd || _array.length == 0)
         {
            return;
         }
         _cd = true;
         _currentInfo = _array.shift();
         if(_currentInfo.type == 237)
         {
            _ui = UIManager.getMovieClip("ui_Broadcast_leiyi");
         }
         else
         {
            _ui = UIManager.getMovieClip("ui_Broadcast_mc");
         }
         _ui["txt"].addEventListener(TextEvent.LINK,onTxtLink);
         if(_currentInfo.isLocal)
         {
            if(_currentInfo.map == 0 && _currentInfo.module == "")
            {
               _ui["txt"].htmlText = "<b>" + _currentInfo.txt + "</b>";
            }
            else if(_currentInfo.map != 0)
            {
               _ui["txt"].htmlText = "<b>" + _currentInfo.txt + "<font color=\'#ff00ff\'><a href=\'event:typetext\'>[立即前往]</a></font></b>";
            }
            else if(_currentInfo.module != "")
            {
               _ui["txt"].htmlText = "<b>" + _currentInfo.txt + "<font color=\'#ff00ff\'><a href=\'event:typetext\'>[查看详情]</a></font></b>";
            }
            switch(_currentInfo.type)
            {
               case 1:
                  _ui["txt"].htmlText = "<b>" + _currentInfo.txt + "<font color=\'#ff0000\'><a href=\'event:typetext\'>[现在就去]</a>" + "</font></b>";
                  break;
               case 2:
                  _ui["txt"].htmlText = "<b>" + _currentInfo.txt + "<font color=\'#ff0000\'><a href=\'event:typetext\'>[现在就去]</a>" + "</font></b>";
            }
         }
         else
         {
            _loc1_ = "";
            if(_currentInfo.uid != MainManager.actorID)
            {
               if(BroadcastAlertController.show(_currentInfo))
               {
                  return;
               }
               if(_currentInfo.type == 5)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要参加！]</a>";
               }
               else if(_currentInfo.type == 7)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要超进化！]</a>";
               }
               else if(_currentInfo.type == 8)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要激活！]</a>";
               }
               else if(_currentInfo.type == 9 || _currentInfo.type == 10 || _currentInfo.type == 23 || _currentInfo.type == 24 || _currentInfo.type == 25 || _currentInfo.type == 19 || _currentInfo.type == 20 || _currentInfo.type == 73 || _currentInfo.type == 999)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也想要！]</a>";
               }
               else if(_currentInfo.type == 17 || _currentInfo.type == 41 || _currentInfo.type == 48 || _currentInfo.type == 62 || _currentInfo.type == 76 || _currentInfo.type == 82 || _currentInfo.type == 85 || _currentInfo.type == 88 || _currentInfo.type == 89 || _currentInfo.type == 90 || _currentInfo.type == 97 || _currentInfo.type == 98 || _currentInfo.type == 99 || _currentInfo.type == 113 || _currentInfo.type == 114 || _currentInfo.type == 115 || _currentInfo.type >= 125 && _currentInfo.type <= 130)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要领！]</a>";
               }
               else if(_currentInfo.type == 80 || _currentInfo.type == 18 || _currentInfo.type == 19 || _currentInfo.type == 20 || _currentInfo.type == 21 || _currentInfo.type == 22 || _currentInfo.type == 27 || _currentInfo.type == 28 || _currentInfo.type == 31 || _currentInfo.type == 32 || _currentInfo.type == 33 || _currentInfo.type == 34 || _currentInfo.type == 35 || _currentInfo.type == 38 || _currentInfo.type == 44 || _currentInfo.type == 45 || _currentInfo.type == 49 || _currentInfo.type == 50 || _currentInfo.type == 51 || _currentInfo.type == 84 || _currentInfo.type == 83 || _currentInfo.type == 54 || _currentInfo.type == 55 || _currentInfo.type == 56 || _currentInfo.type == 57 || _currentInfo.type == 59 || _currentInfo.type == 60 || _currentInfo.type == 61 || _currentInfo.type == 70 || _currentInfo.type == 71 || _currentInfo.type == 77 || _currentInfo.type == 95 || _currentInfo.type == 96 || _currentInfo.type == 123 || _currentInfo.type == 124)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[现在就去！]</a>";
               }
               else if(_currentInfo.type == 147 || _currentInfo.type == 148 || _currentInfo.type == 149 || _currentInfo.type == 150 || _currentInfo.type == 151 || _currentInfo.type == 152 || _currentInfo.type == 153)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要参加]</a>";
               }
               else if(_currentInfo.type == 40)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要野兽之灵！]</a>";
               }
               else if(_currentInfo.type == 42 || _currentInfo.type == 43)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要升级！]</a>";
               }
               else if(_currentInfo.type == 65 || _currentInfo.type == 66 || _currentInfo.type == 67 || _currentInfo.type == 68 || _currentInfo.type == 69 || _currentInfo.type == 79)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[立即参加！]</a>";
               }
               else if(_currentInfo.type == 131 || _currentInfo.type == 75 || _currentInfo.type == 91 || _currentInfo.type >= 102 && _currentInfo.type <= 105)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也想要！]</a>";
               }
               else if(_currentInfo.type >= 167 && _currentInfo.type <= 170)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也想要！]</a>";
               }
               else if(_currentInfo.type >= 171 && _currentInfo.type <= 172)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要去签到！]</a>";
               }
               else if(_currentInfo.type == 173)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也想要！]</a>";
               }
               else if(_currentInfo.type == 175)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也想要！]</a>";
               }
               else if(_currentInfo.type >= 179 && _currentInfo.type <= 200)
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也去试试手气！]</a>";
               }
               else
               {
                  _loc1_ = "<a href=\'event:typetext\'>[我也要抽！]</a>";
               }
            }
            switch(_currentInfo.type)
            {
               case 0:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在商城中免费抽中了</font><font color=\'#00ff00\'>符拉迪诺</font>，大家一起恭喜他吧！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 1:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在商城中免费抽中了</font><font color=\'#00ff00\'>符尔加登</font>，大家一起恭喜他吧！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 2:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在商城中免费抽中了</font><font color=\'#00ff00\'>符萨塔斯</font>，大家一起恭喜他吧！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 7:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>的</font><font color=\'#00ff00\'>洛吉拉斯</font>成功超进化成炽翼火龙!大家一起恭喜他吧！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 14:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在钻石摇摇乐</font><font color=\'#ffff00\'>中使用</font><font color=\'#00ff00\'>1钻石</font><font color=\'#ffff00\'>抽中了</font><font color=\'#00ff00\'>抽中了闪一闪、跳跳、萨图斯等绝版精灵！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 17:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过超NO签到获得了</font><font color=\'#00ff00\'>小蜜蜂奖!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 18:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功获得了精灵中的团战之王——魔化萨瑞卡，你也赶快去拿吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 19:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过在暗之迷城封印邪恶能量，已经获得了昼魔杰恩斯，你像要得到这只PVE强力精灵吗？</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 20:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过在暗之迷城封印邪恶能量，已经获得了夜魔巴恩那，你像要得到这只PVP强力精灵吗？</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 23:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功获得了精灵中的团战之王——魔化萨瑞卡，你也赶快去拿吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 24:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功获得了精灵中的速度之王——金翅托鲁克，你也赶快去拿吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 25:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功获得了精灵中的机械之王——合金赛伯斯特，你也赶快去拿吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 28:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功帮助星空之子找回了欢乐能量，获得了星空之子利亚斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 31:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在天使与恶魔的神圣之战中，鼎力支持天使，获得了光天使波拉克斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 32:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在天使与恶魔的神圣之战中，十分认可恶魔的能力，获得了暗影恶魔卡斯托尔！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 33:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>竟然获得了稀有的银角大魔王，真是羡煞旁人啊！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 35:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过解开觅食林的神秘封印，解开了贪吃蛇的封印，获得了这只可以吞噬精灵属性的精灵!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 36:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在“玩淘米游戏，淘百万钻石，赢iPad Mini”的活动中抽中了钻石奖励！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 37:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在“玩淘米游戏，淘百万钻石，赢iPad Mini”的活动中抽中了iPad Mini！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 38:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>拥有了防御之王-菲尔蓬格，所有攻击都变得弱爆了，想要一只吗？</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 40:
                  _ui["txt"].htmlText = "狂暴野性已经觉醒，野兽之灵穆恩斯找到了主人，<b>他就是<font color=\'#ff0000\'>" + _currentInfo.nick + "</font>！让我们一起恭喜他吧！<font color=\'#ffff00\'>" + _loc1_ + "</font></b>";
                  break;
               case 41:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功培养出了</font><font color=\'#00ff00\'>五星熊猫战将</font>，获得了熊猫战将套装！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 42:
               case 43:
                  _ui["txt"].htmlText = KTool.formatString("<b><font color=\'#ff0000\'>{0}</font>的超能NoNo成功升到了超能{1}级，大家一起恭喜他吧！<font color=\'#ff0000\'>{2}</font></b>",_currentInfo.nick,_currentInfo.type == 42 ? 4 : 5,_loc1_);
                  break;
               case 48:
                  _ui["txt"].htmlText = KTool.formatString("<b><font color=\'#ff0000\'>{0}</font>成功获得了勇气号火车侠，成为了赛尔号的英雄！<font color=\'#ff0000\'>{1}</font></b>",_currentInfo.nick,_loc1_);
                  break;
               case 45:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>参与“改造精灵赢钻石活动”，获得了1000钻石的奖励，大家一起恭喜他吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 44:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>参与改造精灵赢钻石活动，获得了2块通用刻印激活水晶，你也赶快参与吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 58:
                  _ui["txt"].htmlText = "<b><font color=\'#ffff00\'>恭喜</font><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在“三主宠超进化特训  萌宠米宝送钻石”</font><font color=\'#00ff00\'>的活动中抽中了钻石奖励！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 62:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“米宝大作战”，使用10钻石获得绝版钻石精灵！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 65:
                  _ui["txt"].htmlText = "精灵砸蛋器，蛋蛋有惊喜！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“精灵砸蛋器”，获得了疾风王者！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 66:
                  _ui["txt"].htmlText = "精灵砸蛋器，蛋蛋有惊喜！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“精灵砸蛋器”，获得了炽天使！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 67:
                  _ui["txt"].htmlText = "精灵砸蛋器，蛋蛋有惊喜！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“精灵砸蛋器”，获得了奈法里安！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 68:
                  _ui["txt"].htmlText = "精灵砸蛋器，蛋蛋有惊喜！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“精灵砸蛋器”，获得了达沃斯！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 69:
                  _ui["txt"].htmlText = "精灵砸蛋器，蛋蛋有惊喜！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“精灵砸蛋器”，获得了斯特尔！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 72:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>的阿尔比零成功超进化至超能系之王--</font><font color=\'#00ff00\'>时空之零!</font>，大家一起恭喜他吧！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 73:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功解救了</font><font color=\'#00ff00\'>光明骑士 艾利尤斯</font>，获得其强大的力量<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 75:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过 神域之巅 宙斯降临 </font><font color=\'#ffff00\'>很幸运的获得了众神之王——宙斯的强大力量！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 76:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>，成功获得超能No11月王牌精灵，血狼王威利克斯，血狼一族崛起啦！</font>" + _loc1_ + "</font></b>";
                  break;
               case 78:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过接触神弓封印，</font><font color=\'#ffff00\'>获得了后羿神宠——破空神箭伊泽尔！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 79:
                  _ui["txt"].htmlText = "精灵砸蛋器，蛋蛋有惊喜！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过“精灵砸蛋器”，获得了闪光尼尔！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 82:
                  _ui["txt"].htmlText = "开通超No大优惠，年终最后狂欢！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>抓住机会，已经成为VIP，领取了超值包月奖励！</font>" + _loc1_ + "</font></b>";
                  break;
               case 83:
                  _ui["txt"].htmlText = "开通超No大优惠，年终最后狂欢！" + "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>抓住机会，已经成为VIP，领取了赛尔号第一只骑士精灵！</font>" + _loc1_ + "</font></b>";
                  break;
               case 81:
                  _ui["txt"].htmlText = "骑宠精灵大比拼，绝版骑宠统统五折！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过五折券抢购到了</font><font color=\'#00ff00\'>历年绝版骑宠！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 86:
                  _ui["txt"].htmlText = "“幸运九宫格”再次开启，快来试试你的好运气！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过九宫格获得了</font><font color=\'#00ff00\'>欧西斯！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 87:
                  _ui["txt"].htmlText = "“幸运九宫格”再次开启，快来试试你的好运气！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过九宫格获得了</font><font color=\'#00ff00\'>泰兰德！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 88:
                  _ui["txt"].htmlText = "“2014年一马当先！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功刚开通VIP，领取了</font><font color=\'#00ff00\'>超值白龙马礼包！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 89:
                  _ui["txt"].htmlText = "“2014年一马当先！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功刚开通VIP，领取了</font><font color=\'#00ff00\'>满级白龙马礼包!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 90:
                  _ui["txt"].htmlText = "“新年新气象，送自己一份礼物！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>抓住机会已经成为VIP，领取了</font><font color=\'#00ff00\'>白龙马至尊礼包</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 91:
                  _ui["txt"].htmlText = "龙尊降世，逆天危机！<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过参与“逆天者联盟”挑战，获得了</font><font color=\'#00ff00\'>逆天精灵狂战</font>!<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 94:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>免费抽中了</font><font color=\'#00ff00\'>阿尔莫尼</font>，大家一起恭喜他吧！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 95:
                  _ui["txt"].htmlText = "<b>火星港商城代币商品疯狂兑换！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>使用乐园代币，免费换到了</font><font color=\'#00ff00\'>金翅托鲁克</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 96:
                  _ui["txt"].htmlText = "<b>火星港商城代币商品疯狂兑换！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>使用乐园代币，免费换到了</font><font color=\'#00ff00\'>地狱魔蛛</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 97:
                  _ui["txt"].htmlText = "<b>2014年寒假VIP嘉年华！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，领取了</font><font color=\'#00ff00\'>新世界神宠“白胡子”！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 98:
                  _ui["txt"].htmlText = "<b>2014年寒假VIP嘉年华！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通2个月VIP，领取了</font><font color=\'#00ff00\'>满级神宠“白胡子”！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 99:
                  _ui["txt"].htmlText = "<b>2014年寒假VIP嘉年华！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通3个月VIP，领取了</font><font color=\'#00ff00\'>极品神宠“白胡子”！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 100:
                  _ui["txt"].htmlText = "<b>寒假狂欢，包月VIP就送满级钻石精灵！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功开通VIP，领取了</font><font color=\'#00ff00\'>满级剑豪佐罗</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 101:
                  _ui["txt"].htmlText = "<b>寒假狂欢，包月VIP就送满级钻石精灵！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通3个月VIP，领取了</font><font color=\'#00ff00\'>极品“烈焰剑豪”佐罗</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 102:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功开通年费会员，免费领取了10000钻石礼包和</font>" + "<font color=\'#ff0000\'>神级精灵哈迪斯!" + _loc1_ + "</font></b>";
                  break;
               case 103:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功开通年费会员，免费领取了10000钻石礼包和</font>" + "<font color=\'#ff0000\'>神级精灵龙尊!" + _loc1_ + "</font></b>";
                  break;
               case 104:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功开通年费会员，免费领取了10000钻石礼包和</font>" + "<font color=\'#ff0000\'>神级精灵斯凯尔!" + _loc1_ + "</font></b>";
                  break;
               case 105:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功开通年费会员，免费领取了10000钻石礼包和</font>" + "<font color=\'#ff0000\'>神级精灵斯塔克!" + _loc1_ + "</font></b>";
                  break;
               case 113:
                  _ui["txt"].htmlText = "<b>包月就送明星王子！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，领取了</font><font color=\'#00ff00\'>精灵全能刻印等丰厚奖励</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 114:
                  _ui["txt"].htmlText = "<b>包月就送明星王子！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，领取了</font><font color=\'#00ff00\'>领取了“速度之王之子”金翅托鲁斯！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 115:
                  _ui["txt"].htmlText = "<b>包月就送明星王子！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通3个月VIP，领取了</font><font color=\'#00ff00\'>领取了“蛟龙之子”朵格萨恩！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 255:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在商城中免费抽中了</font><font color=\'#00ff00\'>绿色火焰</font>，所有精灵属性提升1级！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 999:
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过翻牌免费找了“战斗能输出赛尔豆的精灵”——乐琪！</font>" + _loc1_ + "</font></b>";
                  break;
               case 117:
                  _ui["txt"].htmlText = "<b>包月就送明星王子！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通3个月VIP，领取了</font><font color=\'#00ff00\'>领取了“异形”卡维特！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 116:
                  _ui["txt"].htmlText = "<b>包月就送明星王子！<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，领取了</font><font color=\'#00ff00\'>领取了“速度之王之子”金翅托鲁斯！</font>！<font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 118:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在包月送大礼中获得泰坦之灵</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 119:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在包月送大礼中获得特级全能刻印</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 120:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在包月送大礼中获得10级镶嵌宝石</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 121:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在包月送大礼中获得重铸宝石</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 122:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在包月送大礼中获得通用水晶</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 123:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功的获得了麦克朗琪罗，赶快去唤醒他吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 124:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功的获得了邪化麦克朗琪罗，赶快去唤醒他吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 131:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功以抢购了1钻石礼包，还等什么？</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 125:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，免费领取了远古角斗士 克莱恩!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 126:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，免费领取了幽灵猛虎王!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 127:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，免费领取了博迪姆!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 128:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，免费领取了佩罗姆!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 129:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>已经成功开通VIP，免费领取了菲尔蓬格!</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 130:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成功领取了包月返还的钻石！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 132:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了吉安娜！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 133:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了史威克！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 134:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了通用刻印激活水晶！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 135:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了扎尔瑟隆！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 137:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了十万泰坦之灵！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 138:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了哈克萨斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 139:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了克罗诺斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 140:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了无影剑客！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 141:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了通用激活水晶！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 142:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了万神之王碎片！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 143:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了龙王子碎片！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 144:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了60级升级秘药！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 145:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了100W赛尔豆！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 146:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过幸运大转盘抽中了50000泰坦之灵！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 147:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了塔西姆！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 148:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了鲍尔特！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 149:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了洛格斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 150:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了贝鲁丝！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 151:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了拉姆塞！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 152:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了艾尼维亚！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 153:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在瞭望露台的幸运转转转中获得了全能学习力注入剂！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 154:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了影战•萨格罗斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 155:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过梦幻扭蛋机抽中了幻天•萨格罗斯！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 166:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在“无上神龙送钻石”的活动中抽中了钻石奖励！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 167:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过圣光大转盘得到麦索瑞尔！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 168:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过圣光大转盘得到精灵改造大礼包！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 169:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过圣光大转盘得到精灵升级大礼包！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 170:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>通过圣光大转盘得到精灵战斗大礼包</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 171:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>成为获得谱尼的英雄,在英雄榜上留下了他的大名！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 172:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>位列于最早/最近十个获得谱尼的英雄榜中，让我们一起敬仰TA吧！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 173:
                  _ui["txt"].htmlText = "<b>赛尔<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在英雄榜点赞时获得惊喜大礼100万赛尔豆，运气简直爆棚！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 176:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在新春钻石许愿中抽中了，</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 177:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在新春钻石许愿中抽中了，</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 178:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在新春钻石许愿中抽中了，</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 179:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在钻石矿山中挖到了钻石！万人哄抢中，</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 180:
               case 181:
               case 182:
               case 183:
               case 184:
               case 185:
               case 186:
               case 187:
               case 188:
               case 189:
               case 190:
               case 191:
               case 192:
               case 193:
               case 194:
               case 195:
               case 196:
               case 197:
               case 198:
               case 199:
               case 200:
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在开启新春福袋时抽中了" + luckbeltAwards[_currentInfo.type - 180] + "</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 201:
               case 202:
               case 203:
               case 204:
                  _loc1_ = "<a href=\'event:typetext\'>[我也要抽！]</a>";
                  _ui["txt"].htmlText = "<b>恭喜<font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在天天摇钱树中抽中了" + diamondnum[_currentInfo.type - 201] + "钻石奖励</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 237:
                  _loc1_ = "<a href=\'event:typetext\'>[我也要抢]</a>";
                  _ui["txt"].htmlText = "<b><font color=\'#ff0000\'>" + _currentInfo.nick + "</font><font color=\'#ffff00\'>在开启礼盒时运气爆棚，幸运地获得了全新精灵王——王•雷伊！</font><font color=\'#ff0000\'>" + _loc1_ + "</font></b>";
                  break;
               case 9999:
                  _ui["txt"].htmlText = _currentInfo.txt;
                  break;
               default:
                  onTimer(null);
                  return;
            }
         }
         LevelManager.toolsLevel.addChild(resizeMc(_ui));
         _timer.reset();
         _timer.start();
      }
      
      private static function resizeMc(param1:MovieClip) : MovieClip
      {
         param1["txt"].width = param1["txt"].textWidth;
         if(param1["bar"])
         {
            param1["bar"].width = param1["txt"].width + 54;
         }
         DisplayUtil.align(param1,null,AlignType.TOP_CENTER,new Point(0,50));
         return param1;
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         if(_ui)
         {
            _ui["txt"].removeEventListener(TextEvent.LINK,onTxtLink);
            DisplayUtil.removeForParent(_ui);
            _ui = null;
         }
         if(IS_SEPCIAL)
         {
            _cd = false;
            showBroadcast();
            return;
         }
         if(_timer.currentCount == 4)
         {
            _cd = false;
            showBroadcast();
         }
      }
      
      private static function onTxtLink(param1:TextEvent) : void
      {
         var t:uint = 0;
         var event:TextEvent = param1;
         if(_currentInfo.isLocal)
         {
            if(_currentInfo.map != 0)
            {
               if(_currentInfo.map == 741)
               {
                  SocketConnection.send(1022,84806599);
               }
               else if(_currentInfo.map == 745)
               {
                  SocketConnection.send(1022,86053435);
               }
               else if(_currentInfo.map == 709)
               {
                  SocketConnection.send(1022,86054026);
               }
               else if(_currentInfo.map == 103)
               {
                  SocketConnection.send(1022,86051491);
                  MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
                  {
                     var e:MapEvent = param1;
                     MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                     CommonUI.addYellowArrow(MapManager.currentMap.topLevel,755,100,330);
                     MapManager.addEventListener(MapEvent.MAP_DESTROY,function(param1:MapEvent):void
                     {
                        MapManager.removeEventListener(MapEvent.MAP_DESTROY,arguments.callee);
                        CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
                     });
                  });
               }
               else if(_currentInfo.map == 691)
               {
                  SocketConnection.send(1022,86052939);
               }
               else if(_currentInfo.map == 67)
               {
                  SocketConnection.send(1022,86054714);
               }
               MapManager.changeMap(_currentInfo.map);
            }
            else if(_currentInfo.module != "")
            {
               switch(_currentInfo.moduleType)
               {
                  case "festival":
                     ModuleManager.showModule(ClientConfig.getFestivalModule(_currentInfo.module),"正在加载....");
                     break;
                  case "book":
                     ModuleManager.showModule(ClientConfig.getBookModule(_currentInfo.module),"正在加载....");
                     break;
                  case "map":
                     ModuleManager.showModule(ClientConfig.getMapModule(_currentInfo.module),"正在加载....");
                     break;
                  case "help":
                     ModuleManager.showModule(ClientConfig.getHelpModule(_currentInfo.module),"正在加载....");
                     break;
                  case "game":
                     ModuleManager.showModule(ClientConfig.getGameModule(_currentInfo.module),"正在加载....");
                     break;
                  case "task":
                     ModuleManager.showModule(ClientConfig.getTaskModule(_currentInfo.module),"正在加载....");
                     break;
                  case "fight":
                     ModuleManager.showModule(ClientConfig.getFightModule(_currentInfo.module),"正在加载....");
                     break;
                  default:
                     ModuleManager.showModule(ClientConfig.getAppModule(_currentInfo.module),"正在加载....");
               }
            }
            if(_currentInfo.type == 1)
            {
               PartyMapManager.setup();
               t = setTimeout(function():void
               {
                  clearTimeout(t);
                  MapManager.changeMap(28);
               },1000);
            }
         }
         else if(_currentInfo.type == 0 || _currentInfo.type == 1)
         {
            if(ModuleManager.hasModule(ClientConfig.getAppModule("SupermarketPanel")) == false)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SupermarketPanel"),"正在打开面板....");
            }
         }
         else if(_currentInfo.type == 2)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SuperNonoRepaymentPanel"),"正在打开面板....");
         }
         else if(_currentInfo.type == 4)
         {
            PanelRecallManager.TuoLukePanel_Recall = false;
            PanelRecallManager.MountActive_Recall = false;
            ModuleManager.showModule(ClientConfig.getAppModule("SuperEggMechineGame_Siteer"),"正在打开面板....");
         }
         else if(_currentInfo.type == 5)
         {
            MapManager.changeMap(751);
         }
         else if(_currentInfo.type == 7)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("luojilasiEnvolution/LuojilasiEnvolutionWarehouse"),"正在打开面板……");
         }
         else if(_currentInfo.type == 8)
         {
            PanelRecallManager.TuoLukePanel_Recall = false;
            PanelRecallManager.MountActive_Recall = false;
            ModuleManager.showModule(ClientConfig.getAppModule("TuoLuKe_MountActivate"),"正在打开面板....");
         }
         else if(_currentInfo.type == 9)
         {
            MapManager.changeMap(757);
         }
         else if(_currentInfo.type == 10)
         {
            MapManager.changeMap(758);
         }
         else if(_currentInfo.type == 14)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GoldBeanDrawPanel"),"正在打开....");
         }
         else if(_currentInfo.type == 17)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipDailySignPanel"),"正在打开……");
         }
         else if(_currentInfo.type == 18 || _currentInfo.type == 27)
         {
            MapManager.changeMap(24);
         }
         else if(_currentInfo.type == 19 || _currentInfo.type == 20)
         {
            MapManager.changeMap(62);
         }
         else if(_currentInfo.type == 21 || _currentInfo.type == 22)
         {
            MapManager.changeMap(666);
         }
         else if(_currentInfo.type == 33)
         {
            MapManager.changeMap(48);
         }
         else if(_currentInfo.type == 34)
         {
            MapManager.changeMap(108);
         }
         else if(_currentInfo.type == 35)
         {
            MapManager.changeMap(414);
         }
         else if(_currentInfo.type == 38)
         {
            MapManager.changeMap(71);
         }
         else if(_currentInfo.type == 23 || _currentInfo.type == 24 || _currentInfo.type == 25)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("XTeamPanel"));
         }
         else if(_currentInfo.type == 4 || _currentInfo.type == 29 || _currentInfo.type == 30)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SuperEggMechineGame_Siteer"));
         }
         else if(_currentInfo.type == 59 || _currentInfo.type == 60 || _currentInfo.type == 61 || 70 == _currentInfo.type || _currentInfo.type == 71 || _currentInfo.type == 77)
         {
            MapManager.changeMap(103);
         }
         else if(_currentInfo.type == 147 || _currentInfo.type == 148 || _currentInfo.type == 149 || _currentInfo.type == 150 || _currentInfo.type == 151 || _currentInfo.type == 152 || _currentInfo.type == 153)
         {
            MapManager.changeMap(103);
         }
         else if(_currentInfo.type == 40)
         {
            SocketConnection.send(1022,86055687);
            ModuleManager.showModule(ClientConfig.getAppModule("BeastSpiritMainPanel"));
         }
         else if(_currentInfo.type == 41)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WakeUpPandaKunlun_Main"));
         }
         else if(_currentInfo.type == 42 || _currentInfo.type == 43)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipValuePanel"));
         }
         else if(_currentInfo.type == 48)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HuoCheXiaPanel"));
         }
         else if(_currentInfo.type == 44 || _currentInfo.type == 45)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("adown/MotherDayFireAndIceMainPanel"));
         }
         else if(_currentInfo.type == 49 || _currentInfo.type == 50 || _currentInfo.type == 51 || _currentInfo.type == 52 || _currentInfo.type == 54)
         {
            MapManager.changeMap(103);
         }
         else if(_currentInfo.type == 58)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("adown/ChangePetGetMoneyLoginPanel1"));
         }
         else if(_currentInfo.type == 62)
         {
            MapManager.changeMap(5);
         }
         else if(_currentInfo.type == 65 || _currentInfo.type == 66 || _currentInfo.type == 67 || _currentInfo.type == 68 || _currentInfo.type == 69 || _currentInfo.type == 79)
         {
            MapManager.changeMap(103);
         }
         else if(_currentInfo.type == 72)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("erlingEnvolution/ErlingEnvolutionWarehouse"),"正在打开面板……");
         }
         else if(_currentInfo.type == 73)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AiLiYouSiPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type == 75)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ZeusComePanel"),"正在打开面板……");
         }
         else if(_currentInfo.type == 76)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("BloodWolfKingPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type == 80)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ChaoNoSpriteHalfSellPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type == 82 || _currentInfo.type == 83)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("DecMainPanel"));
         }
         else if(_currentInfo.type == 81)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("RidePet2GuidePanel"));
         }
         else if(_currentInfo.type == 86 || _currentInfo.type == 87)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LuckySquaredUpDeluxe"));
         }
         else if(_currentInfo.type == 88 || _currentInfo.type == 89 || _currentInfo.type == 90)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NoNoRecharge2014NewYearMainPanel"));
         }
         else if(_currentInfo.type == 91)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("FateUnionMainPanel"));
         }
         else if(_currentInfo.type == 94)
         {
            if(ModuleManager.hasModule(ClientConfig.getAppModule("SupermarketPanel")) == false)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SupermarketPanel"),"正在打开面板....");
            }
            ModuleManager.showModule(ClientConfig.getAppModule("DrawGamePanel"));
         }
         else if(_currentInfo.type == 95 || _currentInfo.type == 96)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MibishopStorePanel"));
         }
         else if(_currentInfo.type == 97 || _currentInfo.type == 98 || _currentInfo.type == 99)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("JanMainPanel"));
         }
         else if(_currentInfo.type == 999)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TreasureBoxSpiritMainPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type >= 102 && _currentInfo.type <= 105)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LongZunAddPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type >= 113 && _currentInfo.type <= 115)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MarMainPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type >= 116 && _currentInfo.type <= 122)
         {
            getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectProcessFuns").aprilActiveBtnHandler();
         }
         else if(_currentInfo.type >= 123 && _currentInfo.type <= 124)
         {
            getDefinitionByName("com.robot.app2.control.EvilWakeUpController").onClickIcon();
         }
         else if(_currentInfo.type >= 125 && _currentInfo.type <= 130)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("MayMainPanel"),"正在打开面板……");
         }
         else if(_currentInfo.type >= 132 && _currentInfo.type <= 134 || _currentInfo.type >= 154 && _currentInfo.type <= 155 || _currentInfo.type == 135 || _currentInfo.type == 137)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("EggMachinePanel2014"));
         }
         else if(_currentInfo.type >= 138 && _currentInfo.type <= 146)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NewSptDrawGamePanel"));
         }
         else if(_currentInfo.type == 166)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("adown/ChangePetGetMoneyLoginPanel1"));
         }
         else if(_currentInfo.type >= 167 && _currentInfo.type <= 170)
         {
            ModuleManager.showAppModule("KingoflightTurntableMainPanel");
         }
         else if(_currentInfo.type >= 171 && _currentInfo.type <= 173)
         {
            ModuleManager.showAppModule("PoNyImmortalMemoryMainPanel");
         }
         else if(_currentInfo.type >= 176 && _currentInfo.type <= 178)
         {
            StatManager.sendStat2014("0205钻石大轮盘","点击小广播的立即前往","2016运营活动");
            ModuleManager.showAppModule("DiamondRouletteMainPanel");
         }
         else if(_currentInfo.type == 179)
         {
            ModuleManager.showAppModule("DiamondsMeteorShowerMainPanel");
            StatManager.sendStat2014("0212钻石流星雨","点击小广播GO","2016运营活动");
         }
         else if(_currentInfo.type == 201 || _currentInfo.type == 202 || _currentInfo.type == 203 || _currentInfo.type == 204)
         {
            ModuleManager.showAppModule("MoneytreeEveryDayPanel");
         }
         else if(_currentInfo.type >= 205 && _currentInfo.type <= 236)
         {
            ModuleManager.showAppModule("MySchoolWishesMainPanel");
         }
         else if(_currentInfo.type == 237)
         {
            StatManager.sendStat2014("0608精灵王雷伊免费送","点击小广播我也要抢","2016运营活动");
            getDefinitionByName("com.robot.app2.mapProcess.control.ElectricalKingController").showFreeGetPanel();
         }
      }
   }
}
