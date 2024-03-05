package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.IceQueenSiaController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_11427 extends BaseMapProcess
   {
       
      
      private var curSetp:int;
      
      private var isInit:Boolean = false;
      
      private const petNames:Array = ["","",""];
      
      public function MapProcess_11427()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.addEvent();
         IceQueenSiaController.initForMap(this);
         var _loc1_:int = 0;
         while(_loc1_ < 2)
         {
            MapListenerManager.add(conLevel["boss_" + _loc1_],this.onFight);
            _loc1_++;
         }
      }
      
      private function addEvent() : void
      {
         MapListenerManager.add(topLevel["bagBtn"],this.onClick);
         MapListenerManager.add(topLevel["cureBtn"],this.onClick);
         MapListenerManager.add(topLevel["close"],this.onClick);
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.COLT,["阿克希亚，你难道也想反抗我的意志？"],["你真的错了。","宾塞克的确需要惩罚。","让我再考虑一下。"],[this.coltErroFun,this.binSkErroFun,function():void
         {
            ToolBarController.panel.hide();
         }]);
      }
      
      private function coltErroFun() : void
      {
         IceQueenSiaController.isErro = false;
         NpcDialog.show(NPC.AKXY,["你真的错了，柯尔德大人。宾塞克实为无心之举，你如此咄咄逼人，实在是有些小题大做了。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.COLT,["哼！想不到你也对我如此无礼，看来我太久没有展示力量，你们的胆子都肥了！"],["抱歉了，柯尔德大人。","看我用钻石砸晕你！","我刚才什么都没说。"],[function():void
            {
               FightManager.fightNoMapBoss("",8589);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249487).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[13,1]);
               }).then(checkStatus);
            },function():void
            {
               ToolBarController.panel.hide();
            }]);
         });
      }
      
      private function binSkErroFun() : void
      {
         IceQueenSiaController.isErro = true;
         NpcDialog.show(NPC.AKXY,["宾塞克的确需要惩罚。精灵王大人言出如山，宾塞克，你要为你刚才的行为付出代价。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.BINSAIKE,["我冤枉啊！女王大人，精灵王大人，我真的不是故意的，你们放过我吧！"],["就由我来教训你吧。","看我用钻石砸晕你！","我刚才什么都没说。"],[function():void
            {
               FightManager.fightNoMapBoss("",8590);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249488).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[13,2]);
               }).then(checkStatus);
            },function():void
            {
               ToolBarController.panel.hide();
            }]);
         });
      }
      
      public function checkStatus() : void
      {
         if(IceQueenSiaController.isErro)
         {
            NpcDialog.show(NPC.COLT,["阿克希亚，我对你很失望。在力量和威严面前，你居然放弃了自己的本心。你没有通过这一关，很抱歉。"],["我错了，精灵王大人！"],[function():void
            {
               BitBuffSetClass.setState(23358,0);
               MapManager.changeMap(11422);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.COLT,["很好，阿克希亚。在我的压力面前，你依然坚持帮助正确的一方，我为你的选择感到骄傲。"],["谢谢你，精灵王大人！"],[function():void
            {
               MapManager.changeMap(11422);
            }]);
         }
      }
      
      private function onClick(param1:MouseEvent = null) : void
      {
         switch(param1.target.name)
         {
            case "bagBtn":
               PetBagControllerNew.show();
               break;
            case "cureBtn":
               PetManager.cureAll();
               break;
            case "close":
               MapManager.changeMap(11422);
         }
      }
      
      override public function destroy() : void
      {
         IceQueenSiaController.destroy();
         super.destroy();
      }
   }
}
