package com.robot.app2.control
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MovesLangXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.MathUtil;
   
   public class EternalTreeController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _suolunsenEquip:MovieClip;
      
      private static var _silaimuEquip:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static const ITEM_ID:int = 1700628;
      
      protected static var _eventListenerManager:EventListenerManager;
      
      private static var count:int = 0;
      
      private static var _ogres:Array;
      
      private static var _dialogTime:uint;
      
      private static var state:int = 0;
       
      
      public function EternalTreeController()
      {
         super();
      }
      
      public static function initMap969(param1:BaseMapProcess) : void
      {
         _ogres = new Array();
         if(!_eventListenerManager)
         {
            _eventListenerManager = new EventListenerManager();
         }
         ++count;
         _map = param1;
         if(state > 0 || Boolean(BitBuffSetClass.getState(22422)))
         {
            loadKingEquip();
         }
         else
         {
            loadSuolunsenEquip();
         }
      }
      
      private static function loadSuolunsenEquip() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("suolunsen"),function(param1:MovieClip):void
         {
            _suolunsenEquip = param1;
            _map.btnLevel.addChild(_suolunsenEquip);
            _eventListenerManager.addEventListener(param1,MouseEvent.CLICK,onClickSuolunsenHandler);
            CommonUI.addYellowArrow(_suolunsenEquip,375,228,-45);
         });
      }
      
      private static function onClickSuolunsenHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         DisplayUtil.removeForParent(_suolunsenEquip);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_969_0"),function(param1:MovieClip):void
         {
            taskMC = param1;
            _map.btnLevel.addChild(taskMC);
            KTool.hideMapAllPlayerAndMonster();
            _map.depthLevel.visible = false;
            playPreStory();
         });
      }
      
      private static function loadKingEquip() : void
      {
         addBoss();
         ResourceManager.getResource(ClientConfig.getAppRes("silaimuking"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _silaimuEquip = mc;
            _map.btnLevel.addChild(_silaimuEquip);
            _eventListenerManager.addEventListener(mc["mcSilaimuKing"],MouseEvent.CLICK,onClickKingHandler);
            _eventListenerManager.addEventListener(mc["btnStone"],MouseEvent.CLICK,onClickStoneHandler);
            _eventListenerManager.addEventListener(mc["speedShilaimu"],MouseEvent.CLICK,onGo983);
            MovieClip(mc["speedShilaimu"]).buttonMode = true;
            SocketConnection.sendWithCallback(CommandID.COMMAND_46075,function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               var _loc3_:int = _loc2_.readByte();
               if(_loc3_ == 1)
               {
                  mc["mcSilaimuKing"].visible = false;
                  mc["speedShilaimu"].visible = false;
               }
            },12808);
         });
      }
      
      private static function onGo983(param1:MouseEvent) : void
      {
         MapManager.changeMap(983);
      }
      
      private static function onClickStoneHandler(param1:MouseEvent) : void
      {
         showPanel();
      }
      
      private static function onClickSilaimuHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.SHILAIMU,["勇敢的0xff0000" + MainManager.actorInfo.nick + "0xffffff沉睡之心就在我们身上，挑战我们吧！挑战次数越多，获得沉睡之心的机会就越大！"],["放心吧！我一定会拿到的！"]);
      }
      
      private static function onClickKingHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86070291);
         NpcDialog.show(NPC.SHILAIMU_KING,["我会用自己的身体挡住永恒之树的入口，没有谁能进去，这些永恒一族会帮助你的，记得一定要找到0xff0000永恒之王0xffffff，只有他们才能拯救我！"],["史莱姆国王的线索！","我知道该怎么做！"],[function():void
         {
            showPanel();
         }]);
      }
      
      private static function initEvent() : void
      {
         _eventListenerManager.addEventListener(FightDispatcher,PetFightEvent.ALARM_CLICK,onFightOverHandler);
         _eventListenerManager.addEventListener(EventManager,ItemAction.BUY_ONE,onBuyOne);
      }
      
      private static function onFightOverHandler(param1:PetFightEvent) : void
      {
         --count;
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID != MainManager.actorID)
         {
            if(_loc2_.winnerID == 0)
            {
               NpcDialog.show(NPC.SHILAIMU,["0xff0000" + MainManager.actorInfo.nick + "0xffffff别灰心，0xff0000沉睡之心0xffffff不在我身上，你可以去其他史莱姆身上找找，只要你坚持，相信一定可以找到的！！"],["恩恩，我明白了！！"]);
            }
         }
         if(count == 0)
         {
            _eventListenerManager.clear();
            _eventListenerManager = null;
         }
      }
      
      private static function onBuyOne(param1:DynamicEvent) : void
      {
         var event:DynamicEvent = param1;
         EventManager.removeEventListener(ItemAction.BUY_ONE,onBuyOne);
         if(event.paramObject == ITEM_ID)
         {
            NpcDialog.show(NPC.SHILAIMU_KING,["你终于找到了0xff0000沉睡之心0xffffff，快试着开启永恒之树吧！"],["太好了，我这就试试！！"],[function():void
            {
               showPanel();
            }]);
         }
      }
      
      private static function playPreStory() : void
      {
         SocketConnection.send(1022,86070289);
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22422,1);
            state = 1;
            loadKingEquip();
            DisplayUtil.removeForParent(taskMC);
            SocketConnection.send(1022,86070290);
         });
      }
      
      private static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("IvokeEternalKingMainPanel"),"正在努力打开面板...");
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "active_20130913_7";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那个黑影…索伦森！！！他不是已经被彻底击败了吗？怎么会出现在这里！"],["不好，其中一定有什么原因！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["永恒之树，不要再抵抗了，永恒石我一定要拿到！"],["可恶，我的能量已经所剩无几了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIBOSS,["索伦森…你尽然落得如此下场，看来暗黑魔君也不过如此！任务失败，你已经不配存在于0xff0000“天魔”0xffffff组织里了！"],["什么…你怎么会在这里！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENMIBOSS,["什么…永恒石！！！能够得到0xff0000无限永生0xffffff和0xff0000再生能量0xffffff的纯净之石，你真的找到了吗？"],["是的，就在永恒之树里！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["再给我点时间吧！我会将功补过，将永恒石带回来献给您的！"],["索伦森，别想逃跑，我会一直监视你的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["是…是…再给我点时间，我一定可以找到永恒石的，回去告诉0xff0000“天魔”0xffffff里的所有人，我暗黑魔君一定会回来的！"],["再给你最后一次机会，你的时间不多了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc3"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我一定要想办法才行，那颗神奇的永恒石一定就是他的目标，我要保护永恒之树！"],["索伦森，你给我住手！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["又是你0xff0000" + MainManager.actorInfo.nick + "0xffffff，怎么难道你想一个人挑战我？不知死活的小东西，一边呆着去！"],["可恶的家伙，居然敢小看我的实力！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc4"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["哼哼…没用的家伙，谁都无法阻止我进入永恒之树！"],["开启吧！永恒之树！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc5"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["没我的批准，谁都不能进入永恒之树！"],["哪里来的声音！是谁？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc6"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SUOLUOSENG,["你是谁？怎么会在永恒之树中？"],["暗黑魔君，你不认识我，但我认识你！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["我们被称为0xff0000永恒一族0xffffff，世世代代守护着永恒之树，我知道你是为了永恒石来的，除了0xff0000创世神兵0xffffff和0xff0000创世兵魂0xffffff，谁都不准踏入这里半步！"],["是吗？看你都胖成这样了，还能打吗？！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["这个世界有2件事情会让我非常生气，第一是想进入永恒之树，第二的就是说我胖！"],["别以为胖就瞧不起人？！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 7,"mc7"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那不是卡修斯吗？怎么会说这样的话，难道他真的入魔了吗？！"],["小子，你过来，我有话和你说！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 8,"mc8"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["我的能量已经不多了，永恒之树下是一个神奇的国度，相信只有你才能拯救这个国度，记得一定要找到永恒石，他对我们一族很重要！"],["国王…你怎么了？！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["我会用自己的身体挡住永恒之树的入口，没有谁能进去，这些永恒一族会帮助你的，记得一定要找到0xff0000永恒之王0xffffff，只有他们才能拯救我！"],["永恒之王？！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["根据我给你的线索，你就会知道答案了，接下来永恒之树只能靠你了！"],["国王…你要坚持住啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 9,"mc9"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["放心吧！史莱姆国王，我以自己的生命做承诺，守护永恒之树，找到0xff0000永恒之王0xffffff来解救你，你一定要等我啊！"],["永恒国度探险之路就此开始！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 10,"mc10"]));
         return _loc1_;
      }
      
      private static function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         var _loc1_:Array = [1157,1158,16,17];
         var _loc2_:Array = [new Point(120,430),new Point(380,230),new Point(472,310),new Point(60,370)];
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            (_loc4_ = new OgreModel(_loc3_)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
            _loc4_.show(_loc1_[_loc3_],_loc2_[_loc3_]);
            _loc3_++;
         }
      }
      
      protected static function onClickHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         if(_loc2_.id == 1157)
         {
            FightManager.fightWithBoss("小尾蝶",0);
         }
         else if(_loc2_.id == 1158)
         {
            FightManager.fightWithBoss("彩翼蝶",1);
         }
         else if(_loc2_.id == 16)
         {
            FightManager.fightWithBoss("仙人球",2);
         }
         else if(_loc2_.id == 17)
         {
            FightManager.fightWithBoss("仙人掌",3);
         }
      }
      
      private static function onAutoDialog() : void
      {
         var _loc2_:int = 0;
         var _loc3_:OgreModel = null;
         var _loc1_:String = String(MovesLangXMLInfo.getRandomLang(2211));
         if(_loc1_ != "")
         {
            _loc2_ = int(MathUtil.randomRegion(0,2));
            _loc3_ = _ogres[_loc2_];
            _loc3_.showBox(_loc1_);
         }
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         _map = null;
         clearInterval(_dialogTime);
         --count;
         if(count == 0)
         {
            _eventListenerManager.clear();
            _eventListenerManager = null;
         }
         _ogres = null;
      }
   }
}
