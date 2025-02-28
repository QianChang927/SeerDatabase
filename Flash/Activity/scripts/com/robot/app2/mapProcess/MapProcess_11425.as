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
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_11425 extends BaseMapProcess
   {
       
      
      private var hurtNum:int;
      
      private var bossMagic:int;
      
      private var bossKill:int;
      
      private var isInit:Boolean = false;
      
      public function MapProcess_11425()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.addEvent();
         this.updateData();
         IceQueenSiaController.initForMap(this);
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            MapListenerManager.add(conLevel["bossMc_" + _loc1_],this.onFight);
            _loc1_++;
         }
      }
      
      private function addEvent() : void
      {
         MapListenerManager.add(topLevel["bagBtn"],this.onClick);
         MapListenerManager.add(topLevel["cureBtn"],this.onClick);
         MapListenerManager.add(topLevel["close"],this.onClick);
      }
      
      private function updateData() : Promise
      {
         this.isInit = false;
         return KTool.getMultiValue([4603,4604,4607,4608]).then(function(param1:Array):void
         {
            bossKill = param1[3];
            var _loc2_:* = 0;
            while(_loc2_ < 3)
            {
               conLevel["bossMc_" + _loc2_]["kaka"].visible = BitUtils.getBit(bossKill,_loc2_) == 0;
               conLevel["bossMc_" + _loc2_]["haidao"].visible = BitUtils.getBit(param1[2],_loc2_) == 0;
               _loc2_++;
            }
            bossMagic = param1[1];
            hurtNum = param1[0];
            conLevel["mc"].txt.text = "" + hurtNum + "/100000";
            conLevel["mc"].processMc.gotoAndStop(hurtNum / 1000);
            conLevel["bossProcessTxt"].text = "施法进度:" + bossMagic + "%";
            isInit = true;
         });
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         IceQueenSiaController.killNum = this.bossKill;
         index = int(KTool.getIndex(e.currentTarget));
         if(!this.isInit)
         {
            return;
         }
         if(index == 3)
         {
            NpcDialog.show(NPC.MOGER,["我是不可阻止的，这个世界，都将臣服于我！"],["我是不会让你得逞的！","看我用钻石砸晕你！","我还没准备好。"],[function():void
            {
               FightManager.fightNoMapBoss("",8579);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249483).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[10,0]);
               }).then(function():Promise
               {
                  return updateData();
               }).then(checkStatus);
            },function():void
            {
               ToolBarController.panel.hide();
            }]);
         }
         else
         {
            if(conLevel["bossMc_" + index]["kaka"].visible == false || conLevel["bossMc_" + index]["haidao"].visible == false)
            {
               return;
            }
            NpcDialog.show(NPC.KAKA,["不要管我，女皇大人，快去击败魔王！"],["我一定会保护好你！","看我用钻石救你出来！","我还没准备好。"],[function():void
            {
               FightManager.fightNoMapBoss("",8580 + index);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249484).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[11,1 + index]);
               }).then(function():Promise
               {
                  return updateData();
               }).then(checkStatus);
            },function():void
            {
               ToolBarController.panel.hide();
            }]);
         }
      }
      
      public function checkStatus() : void
      {
         if(this.bossMagic >= 100)
         {
            BitBuffSetClass.setState(23356,0);
            SocketConnection.sendWithPromise(46295,[15,0]).then(function():void
            {
               IceQueenSiaController.playOtherAnmiate(9,function():void
               {
                  MapManager.changeMap(11422);
               });
            });
         }
         else if(this.hurtNum >= 100000)
         {
            IceQueenSiaController.playOtherAnmiate(10,function():void
            {
               MapManager.changeMap(11422);
            });
         }
         else if(this.bossKill > IceQueenSiaController.killNum)
         {
            IceQueenSiaController.playOtherAnmiate(8);
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
