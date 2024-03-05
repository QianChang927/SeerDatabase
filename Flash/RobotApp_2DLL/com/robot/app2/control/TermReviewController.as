package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TermReviewController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function TermReviewController()
      {
         super();
      }
      
      public static function unable(param1:BaseMapProcess) : void
      {
         var _loc2_:DisplayObjectContainer = param1.conLevel;
         var _loc3_:DisplayObject = _loc2_["mcTearmReview"] as DisplayObject;
         _loc3_.visible = false;
      }
      
      public static function initFor770(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!BufferRecordManager.getMyState(932))
         {
            SocketConnection.send(1022,86065583);
            _map.conLevel["mcTearmReview"].visible = false;
            MapObjectControl.hideOrShowAllObjects(false);
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_770_1"),function(param1:MovieClip):void
            {
               _map.conLevel.addChild(param1);
               taskMC = param1;
               _map.btnLevel.addChild(param1);
               MapObjectControl.hideOrShowAllObjects(false);
               playPreStory();
            },"movie",3,false);
         }
         else
         {
            addEvent();
         }
      }
      
      private static function playPreStory() : void
      {
         TaskDiaLogManager.single.playStory(getStorys(),function():void
         {
            SocketConnection.send(1022,86065584);
            KTool.showMapPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMC);
            BufferRecordManager.setMyState(932,true);
            KTool.showMapAllPlayerAndMonster();
            addEvent();
         });
      }
      
      private static function getStorys() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "active_20131122_14";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAOKENUO,["马上精灵学院的学生们就要期末考试了！我得想办法难为难为他们。哼哼~~我可是有名的博士精灵呢！"],["这里的冰雪资源一定很丰富！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["冰雪领地，这次有希望混进赛尔的冬季运动会。据说只要通过速度的考验，就能领取很多奖励的！"],["笨蛋！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAOKENUO,["海盗集团？你们来这里做什么？"],["哇！学士帽！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["那你很有学问啦？大哥，把他掠走，让他回去当军师！"],["有道理有道理！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["嘿，小家伙！你是不是很有学问啊！回去给我当军师，我们打败赛尔怎么样？"],["痴心妄想！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["大哥！好像他在嘲笑你！你答错了！"],["还用你说？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["竟然敢嘲笑我，小的们，给我打！！"],["是！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAOKENUO,["你们要做什么？你们要做什么？我可是大名鼎鼎的的博士精灵！"],["打他！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["我当是谁？这不是成事不足，败事有余的赛尔先锋队嘛！"],["哇！他居然会用成语！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAOKENUO,["赛尔们，快来帮帮我！我被他们打得好惨！"],["哼！竟然敢打我们的博士精灵！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["我就打了，怎么样？我就打了！没用的臭赛尔，就会吓唬我们！小的们，给我打！"],["是！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ZOG,["我们跟你又没关系！你凭什么打我们？"],["是没有关系"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALUONASI,["那你们凭什么打这只博士精灵呢？"],["哼！不跟你扯"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ALLISON,["哼！博士……脑子都是浆糊的博士！小的们，我们把道克诺的书全部都撕掉！让他做不了博士！"],["不要啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DAOKENUO,["你们帮帮我！我可以辅导你们的期末复习！赛尔不是要期末考试了吗？我保证你们都能够通过！"],["太棒啦！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我要提前看试卷哦！哈哈！再也不是倒数第二了！"],["我不是倒数第一！"]));
         return _loc1_;
      }
      
      private static function addEvent() : void
      {
         _map.conLevel["mcTearmReview"].visible = true;
         _map.conLevel["mcTearmReview"]["btnDaokenuo"].addEventListener(MouseEvent.CLICK,onOpenMainPanelHandler);
         _map.conLevel["mcTearmReview"]["btnHaidao"].addEventListener(MouseEvent.CLICK,onClickAllisonHandler);
         MovieClip(_map.conLevel["mcTearmReview"]["btnDaokenuo"]).buttonMode = true;
      }
      
      private static function removeEvent() : void
      {
         if(_map)
         {
            _map.conLevel["mcTearmReview"]["btnDaokenuo"].removeEventListener(MouseEvent.CLICK,onOpenMainPanelHandler);
            _map.conLevel["mcTearmReview"]["btnHaidao"].removeEventListener(MouseEvent.CLICK,onClickAllisonHandler);
         }
      }
      
      private static function onOpenMainPanelHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86065586);
         ModuleManager.showModule(ClientConfig.getAppModule("TermReviewMainPanel"));
      }
      
      private static function onClickAllisonHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.ALLISON,["啦啦啦！撕掉你们的书！你考试就是倒数第一！啦啦啦！0xff0000" + MainManager.actorInfo.nick + "0xffffff考试倒数第一哦！"],["可恶，我不是倒数第一！","我喜欢做倒数第一！"],[function():void
         {
            fightWithTaqiladun();
         }]);
      }
      
      private static function fightWithTaqiladun() : void
      {
         FightManager.fightNoMapBoss("塔奇拉顿",197);
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
