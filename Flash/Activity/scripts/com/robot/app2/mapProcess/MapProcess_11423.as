package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.IceQueenSiaController;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class MapProcess_11423 extends BaseMapProcess
   {
       
      
      private var count:int;
      
      private var isInit:Boolean = false;
      
      public function MapProcess_11423()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.updateData();
         MapListenerManager.add(conLevel["bossMc"],this.onFight);
         MapListenerManager.add(topLevel["close"],this.onClose);
         IceQueenSiaController.initForMap(this);
      }
      
      private function updateData() : Promise
      {
         this.isInit = false;
         return KTool.getMultiValue([4595]).then(function(param1:Array):void
         {
            count = param1[0];
            isInit = true;
         });
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!this.isInit)
         {
            return;
         }
         if(this.count == 5)
         {
            return;
         }
         NpcDialog.show(NPC.AKXY,["怎么样，你准备好面对自己了吗？"],["来战斗吧！","看我用钻石砸晕你！","我要再准备一下。"],[function():void
         {
            FightManager.tryFight(491 + count,[0,0,0,0]);
         },function():void
         {
            ToolBarController.panel.hide();
            KTool.buyProductWithPromise(249476 + count).then(function():Promise
            {
               return SocketConnection.sendWithPromise(46295,[7,count + 1]);
            }).then(function():Promise
            {
               return updateData();
            }).then(checkStatus);
         },function():void
         {
            ToolBarController.panel.hide();
         }]);
      }
      
      public function checkStatus() : void
      {
         if(this.count < 5)
         {
            NpcDialog.show(NPC.AKXY,["看来你在这段时间有所进步，不过挑战自我显然不会这么简单。来吧，看看你能否再击败我一次！"],null,null,false,function():void
            {
               ToolBarController.panel.hide();
            });
         }
         else
         {
            NpcDialog.show(NPC.AKXY,["我承认，你是个非常可怕的人。能够不断地超越自我，这是获得成功必备的能力。你通过了考验，祝你接下来一切顺利！"],["什么，这就结束了？"],[this.onClose]);
         }
      }
      
      private function onClose(param1:MouseEvent = null) : void
      {
         MapManager.changeMap(11422);
      }
      
      override public function destroy() : void
      {
         IceQueenSiaController.destroy();
         super.destroy();
      }
   }
}
