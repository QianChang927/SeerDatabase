package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.team.TeamController;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.components.ShowMultiBuyPanelComponent;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HongbaoCollectionController
   {
      
      public static var IN_TIME:Boolean = false;
      
      private static var _in:uint = 0;
      
      private static var _index:int;
      
      private static var _got:Boolean;
      
      private static var _toolBar:MovieClip;
      
      private static var _Timecomp:TimeCountdownComponent;
      
      private static var _itemNum:int;
      
      private static var _buyCmp:ShowMultiBuyPanelComponent;
       
      
      public function HongbaoCollectionController()
      {
         super();
      }
      
      public static function setup() : void
      {
         KTool.getForeverNum(13248,function(param1:uint):void
         {
            var _loc3_:uint = 0;
            var _loc4_:BasePeoleModel = null;
            var _loc5_:BasePeoleModel = null;
            var _loc2_:Array = UserManager.getUserModelList();
            if(param1 > SystemTimerManager.time)
            {
               IN_TIME = true;
               _loc3_ = param1 - SystemTimerManager.time;
               if(_in != 0)
               {
                  clearInterval(_in);
               }
               _in = setInterval(setup,_loc3_ * 1000);
               MainManager.actorModel.changeBody(20161230,_loc3_ * 1000);
               for each(_loc4_ in _loc2_)
               {
                  _loc4_.addHongbaoIcon();
               }
            }
            else
            {
               MainManager.actorModel.reduction();
               IN_TIME = false;
               for each(_loc5_ in _loc2_)
               {
                  _loc5_.destroyHongbaoIcon();
               }
            }
         });
      }
      
      public static function gotoTeamMap() : void
      {
         TeamController.show();
      }
      
      public static function getIntime() : Boolean
      {
         return IN_TIME;
      }
      
      public static function destroy() : void
      {
         var _loc2_:BasePeoleModel = null;
         var _loc1_:Array = UserManager.getUserModelList();
         IN_TIME = false;
         for each(_loc2_ in _loc1_)
         {
            _loc2_.destroyHongbaoIcon();
         }
         MainManager.actorModel.reduction();
         if(_in != 0)
         {
            clearInterval(_in);
         }
      }
      
      public static function showToolBar() : void
      {
         if(_toolBar)
         {
            alignTool();
            _toolBar.y = 497.7;
            _toolBar.x = 455.95;
            LevelManager.toolsLevel.addChild(_toolBar);
            _toolBar.addEventListener(MouseEvent.CLICK,onToolClick);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getActiveUrl("HongbaoCollection_toolBar"),function(param1:MovieClip):void
            {
               _toolBar = param1;
               showToolBar();
            });
         }
      }
      
      private static function onMapChange(param1:MapEvent) : void
      {
         alignTool();
      }
      
      private static function alignTool() : void
      {
         var _loc1_:Date = null;
         var _loc2_:uint = 0;
         if(_toolBar)
         {
            if(MapManager.currentMap.id - 11435 == _index && SystemTimerManager.sysDate.minutes < 30)
            {
               _toolBar.gotoAndStop(2);
               _toolBar.bg.height = 39;
               _toolBar.bg.y = -39;
               _toolBar.itemTxt.text = _itemNum;
               if(_buyCmp)
               {
                  _buyCmp.destroy();
                  _buyCmp = null;
               }
               _buyCmp = new ShowMultiBuyPanelComponent(_toolBar.buyBtn,{
                  "productID":249546,
                  "iconID":1711945,
                  "exchangeID":9756
               },updateItem);
            }
            else
            {
               _toolBar.gotoAndStop(1);
               if(SystemTimerManager.sysDate.minutes < 30)
               {
                  _toolBar.timeMc.visible = false;
                  _toolBar.bg.height = 49;
                  _toolBar.bg.y = -49;
               }
               else
               {
                  _loc1_ = SystemTimerManager.sysDate;
                  _loc1_.time = SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,_loc1_.hours,0) * 1000;
                  _loc1_.time += 86400000;
                  _loc2_ = SystemTimerManager.getTimeByDate(_loc1_.fullYear,_loc1_.month + 1,_loc1_.date,_loc1_.hours,0) - SystemTimerManager.time;
                  if(_Timecomp)
                  {
                     _Timecomp.destroy();
                     _Timecomp = null;
                  }
                  _Timecomp = new TimeCountdownComponent(_toolBar.timeMc.timeTxt,2);
                  _Timecomp.initialSeconds = _loc2_ + 5;
                  _Timecomp.start(alignTool);
                  _toolBar.timeMc.visible = true;
                  _toolBar.bg.height = 77;
                  _toolBar.bg.y = -77;
               }
            }
         }
      }
      
      private static function onToolClick(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "close")
         {
            hideToolBar();
         }
         else if(_loc2_.indexOf("goBtn_") != -1)
         {
            _loc3_ = int(_loc2_.replace("goBtn_",""));
            MapManager.changeMap(11436 + _loc3_);
         }
         else if(_loc2_ == "goBtn")
         {
            ModuleManager.showAppModule("HongbaoNpcPanel");
         }
      }
      
      public static function hideToolBar() : void
      {
         if(_toolBar)
         {
            DisplayUtil.removeForParent(_toolBar);
            _toolBar.removeEventListener(MouseEvent.CLICK,onToolClick);
            _toolBar = null;
            if(_Timecomp)
            {
               _Timecomp.destroy();
               _Timecomp = null;
            }
            if(_buyCmp)
            {
               _buyCmp.destroy();
               _buyCmp = null;
            }
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         }
      }
      
      public static function destroyBoss(param1:BaseMapProcess) : void
      {
         param1.conLevel["bossMc"].removeEventListener(MouseEvent.CLICK,onHbBossClick);
         param1.conLevel["npcMc"].removeEventListener(MouseEvent.CLICK,onHbNpcClick);
      }
      
      public static function initBoss(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         KTool.getGlobalValues(164,[0],function(param1:Array):void
         {
            _index = param1[0];
            updateItem();
            initHbNpc(map.conLevel["npcMc"]);
            initHbBoss(map.conLevel["bossMc"]);
            map.conLevel["bossMc"].addEventListener(MouseEvent.CLICK,onHbBossClick);
            map.conLevel["bossMc"].mouseChildren = false;
            map.conLevel["bossMc"].buttonMode = true;
            map.conLevel["popoMc"].visible = SystemTimerManager.sysDate.minutes < 30 && MapManager.currentMap.id - 11435 == _index;
            alignTool();
         });
      }
      
      private static function initHbBoss(param1:MovieClip) : void
      {
         var boss:MovieClip = param1;
         if(MapManager.currentMap.id - 11435 != _index || SystemTimerManager.sysDate.minutes >= 30)
         {
            boss.stop();
            boss.visible = false;
            return;
         }
         KTool.getMultiValue([13250],function(param1:Array):void
         {
            var percent:int = 0;
            var arr:Array = param1;
            if(arr[0] < 20000)
            {
               boss.gotoAndStop(1);
               boss.hitArea = boss.hitMc;
               boss.hitMc.mouseEnabled = false;
               percent = int((20000 - arr[0]) / 20000 * 100);
               boss.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  boss.mc.gotoAndStop(1);
                  boss.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  boss.txt.text = percent + "%";
                  boss.mcBar.mcBar.gotoAndStop(percent);
               });
            }
            else
            {
               boss.gotoAndStop(2);
               boss.hitArea = boss.hitMc;
               boss.hitMc.mouseEnabled = false;
               KTool.getBitSet([1000309],function(param1:Array):void
               {
                  _got = param1[0] == 1;
               });
            }
         });
      }
      
      private static function updateItem() : void
      {
         ItemManager.updateAndGetItemsNum([1711945],function(param1:Array):void
         {
            _itemNum = param1[0];
            if(Boolean(_toolBar) && _toolBar.currentFrame == 2)
            {
               _toolBar.itemTxt.text = _itemNum;
            }
         });
      }
      
      private static function onHbBossClick(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var e:MouseEvent = param1;
         mc = e.target as MovieClip;
         if(mc.currentFrame == 1)
         {
            if(_itemNum > 0)
            {
               SocketConnection.sendByQueue(45706,[4,0],function():void
               {
                  updateItem();
                  mc.mc.gotoAndStop(2);
                  mc.mouseEnabled = false;
                  mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
                  {
                     var e:Event = param1;
                     mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     AnimateManager.playMcEndHandler(mc.mc.animateMc,function():void
                     {
                        mc.mouseEnabled = true;
                        mc.mc.gotoAndStop(1);
                        initHbBoss(mc);
                     });
                  });
               });
            }
            else
            {
               Alert.show("你的星星火苗已经用完，即将进入真实战斗，是否继续？",function():void
               {
                  FightManager.fightNoMapBoss("红包侠",8627);
               });
            }
         }
         else if(_got)
         {
            Alarm.show("你今天已经领取过宝箱奖励了哦，明天再来吧！");
         }
         else
         {
            SocketConnection.sendByQueue(45706,[5,0],function():void
            {
               initHbBoss(mc);
            });
         }
      }
      
      private static function initHbNpc(param1:Sprite) : void
      {
         if(MapManager.currentMap.id - 11435 != _index || SystemTimerManager.sysDate.minutes >= 30)
         {
            param1.mouseChildren = false;
            param1.buttonMode = true;
            param1.addEventListener(MouseEvent.CLICK,onHbNpcClick);
         }
      }
      
      private static function onHbNpcClick(param1:MouseEvent) : void
      {
         var i:int;
         var story:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         var destroyStory:Function = function():void
         {
            story.destory();
            story = null;
         };
         var npcId:Array = [NPC.SUNXIAOSHENG,NPC.HANYUXINGHUANG,NPC.AKEXIYA,NPC.QINGLONGWANQUANTI_NPCHEAD,NPC.SUOLUOSENG,NPC.ARUISI,NPC.HOPE_NUMBER];
         story = new TaskStoryPlayer();
         story.useNewDialog = true;
         i = MapManager.currentMap.id - 11436;
         if(SystemTimerManager.sysDate.minutes < 30)
         {
            story.addDialog([NPC.SEER,["你好，你看到红包侠了吗？"]]);
            story.addDialog([npcId[i],["它还没有出现，你可以去别处转转。"],["好的!"]]);
         }
         else
         {
            story.addDialog([NPC.SEER,["你好，你看到红包侠了吗？"]]);
            story.addDialog([npcId[i],["急什么，每个小时的前半小时，才是红包侠出现的时候！到时别忘了带着你的星星火苗前来挑战呀！"],["好的!"]]);
         }
         story.start();
      }
      
      public static function destroyNpc(param1:Sprite) : void
      {
         param1.removeEventListener(MouseEvent.CLICK,onNpcClick);
         _index = -1;
         _got = true;
      }
      
      public static function initNpc(param1:Sprite) : void
      {
         var npc:Sprite = param1;
         KTool.getForeverNum(13249,function(param1:uint):void
         {
            npc.mouseChildren = false;
            npc.buttonMode = true;
            npc.addEventListener(MouseEvent.CLICK,onNpcClick);
            _index = MapManager.currentMap.id - 11430;
            if(BitUtils.getBit(param1,_index) == 1)
            {
               _index = 999;
            }
         });
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var i:int;
         var story:TaskStoryPlayer = null;
         var getItem:Function = null;
         var goto:Function = null;
         var goto2:Function = null;
         var e:MouseEvent = param1;
         getItem = function():void
         {
            SocketConnection.sendByQueue(45706,[2,_index + 1],function():void
            {
               _index = 999;
               destroyStory();
            });
         };
         goto = function():void
         {
            ModuleManager.showAppModule("HongbaoNpcPanel");
            getItem();
         };
         goto2 = function():void
         {
            ModuleManager.showAppModule("HongbaoNpcPanel");
         };
         var destroyStory:Function = function():void
         {
            story.destory();
            story = null;
         };
         var npcId:Array = [NPC.SHIPER,NPC.DOCTOR,NPC.NPC_LONG,NPC.HUGH,NPC.JUSTIN,NPC.HANYUXINGHUANG];
         story = new TaskStoryPlayer();
         story.useNewDialog = true;
         i = MapManager.currentMap.id - 11430;
         switch(_index)
         {
            case 0:
               story.addDialog([npcId[_index],["啊，亲爱的" + MainManager.actorInfo.nick + "，新年快乐呀！看你这么匆匆忙忙的，是要做什么呀？"]]);
               story.addDialog([NPC.SEER,["你还不知道吗罗杰船长，听说红包侠已经现身，只要击败他，就能获得大红包呢！"]]);
               story.addDialog([npcId[_index],["你说红包侠呀，哈哈，我当然知道！不仅如此，我还有对付它的秘密武器哟！"]]);
               story.addDialog([NPC.SEER,["秘密武器？是什么呀？"]]);
               story.addDialog([npcId[_index],["使用秘密武器攻击红包侠，可以造成巨额伤害哦！我也送你一些，祝你新年快乐！"],["那我去拜访其他人了！","谢谢船长！"],[goto,getItem]]);
               break;
            case 1:
               story.addDialog([NPC.SEER,["派特博士，新年好！"]]);
               story.addDialog([npcId[_index],["现在把这个药剂倒入容器里，就能……啊？谁在喊我……哦，是" + MainManager.actorInfo.nick + "呀！"]]);
               story.addDialog([NPC.SEER,["派特博士，你那里有没有什么新发明，可以让我对付红包侠？"]]);
               story.addDialog([npcId[_index],["红包侠？嘿，还真有。这两个星星火苗你拿好，可有用了！"],["那我去拜访其他人了！","谢谢博士！"],[goto,getItem]]);
               break;
            case 2:
               story.addDialog([npcId[_index],["勇敢的" + MainManager.actorInfo.nick + "，参加巅峰圣战，请往那儿走！"]]);
               story.addDialog([NPC.SEER,["哎呀，今天没空圣战了，我要去打红包侠啦！"]]);
               story.addDialog([npcId[_index],["这个红包侠魅力这么大，我说今天怎么都每人来参加圣战了。得，我干脆送你一点小武器，给你助助威！"]]);
               story.addDialog([NPC.SEER,["哇！那真是谢谢你了！"]]);
               story.addDialog([npcId[_index],["使用这个星星火苗，可以对红包侠造成大量伤害哦！祝你新年快乐！"],["那我去拜访其他人了！","谢谢你！"],[goto,getItem]]);
               break;
            case 3:
               story.addDialog([npcId[_index],["不好意思，" + MainManager.actorInfo.nick + "，星际训练营已经结束了，请下次开放时再来吧！"]]);
               story.addDialog([NPC.SEER,["不好意思，借过一下，我只是路过这里……"]]);
               story.addDialog([npcId[_index],["嗨呀，好气呀！怎么又是一个路过的，我的训练营，已经这么没有人气了吗？"]]);
               story.addDialog([NPC.SEER,["哪儿的话！不过，你那里还有多余的星星火苗吗？"]]);
               story.addDialog([npcId[_index],["给你给你！对了，新年快乐！"],["那我去拜访其他人了！","谢谢你！"],[goto,getItem]]);
               break;
            case 4:
               story.addDialog([npcId[_index],[MainManager.actorInfo.nick + "，你可慢点跑。看你这么着急，是要去暴打红包侠吧？"]]);
               story.addDialog([NPC.SEER,["对呀！贾斯汀站长，你也知道红包侠呀？"]]);
               story.addDialog([npcId[_index],["那当然，今天我可是看到了好多你这样急匆匆的小赛尔了。不过你别忘记了我的教导，工欲善其事，必先利其器！"]]);
               story.addDialog([NPC.SEER,["这我当然没忘，我可是带上了我最强的精灵！恩？难道站长你有什么特殊武器？"]]);
               story.addDialog([npcId[_index],["嘿嘿，没错，你拿去试试看？新年快乐哟！"],["那我去拜访其他人了！","谢谢站长！"],[goto,getItem]]);
               break;
            case 5:
               story.addDialog([npcId[_index],["别用那种眼神看着我，" + MainManager.actorInfo.nick + "，我知道你在想些什么。"]]);
               story.addDialog([NPC.SEER,["哇，我这还没开口呢，你就已经知道了！你真有他们说的那么厉害吗？"]]);
               story.addDialog([npcId[_index],["这对我来说是小事一桩。但我这个人一直是鼓励别人使用自己真正的实力去战斗的，走捷径只是一时之快，无法让自己得到提高。"]]);
               story.addDialog([NPC.SEER,["这样啊……好吧……看来我只能亲自冲上去跟红包侠打了……"]]);
               story.addDialog([npcId[_index],["不过，现在可是过年呀！嘻嘻，开心就好。拿去吧！"],["那我去拜访其他人了！","谢谢你！"],[goto,getItem]]);
               break;
            default:
               story.addDialog([npcId[i],["别看着我了，今天我这里的星星火苗全给你了。快去吧！"]]);
               story.addDialog([NPC.SEER,["那我去拜访其他人了！"]],null,goto2);
         }
         story.start();
      }
   }
}
