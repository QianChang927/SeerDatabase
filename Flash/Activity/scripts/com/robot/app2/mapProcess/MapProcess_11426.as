package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.mapProcess.control.IceQueenSiaController;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_11426 extends BaseMapProcess
   {
       
      
      private var curSetp:int;
      
      private const npcIDs:Array = [NPC.NOSHANDOW_NONAME,NPC.GUIJIANKULOU,NPC.HE_JINLING,NPC.QIAO_HATE];
      
      private var isInit:Boolean = false;
      
      public function MapProcess_11426()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.addEvent();
         IceQueenSiaController.initForMap(this);
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            MapListenerManager.add(conLevel["bossMc_" + _loc1_],this.onFight);
            _loc1_++;
         }
         this.updateData();
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
         return KTool.getMultiValue([4605,14381]).then(function(param1:Array):void
         {
            var _loc3_:* = undefined;
            var _loc4_:* = undefined;
            curSetp = 0;
            var _loc2_:* = 0;
            while(_loc2_ < 5)
            {
               _loc3_ = BitUtils.getBit(param1[0],_loc2_) > 0;
               if(_loc3_)
               {
                  ++curSetp;
               }
               conLevel["bossMc_" + _loc2_].visible = !_loc3_;
               if(_loc2_ < 4)
               {
                  _loc4_ = KTool.getByte(param1[1],_loc2_);
                  conLevel["mc_" + _loc2_].visible = _loc4_ > 0;
                  conLevel["mc_" + _loc2_].gotoAndStop(_loc4_ > 0 ? _loc4_ : 1);
               }
               _loc2_++;
            }
            isInit = true;
         });
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(KTool.getIndex(e.currentTarget));
         if(!this.isInit)
         {
            return;
         }
         if(index == 4)
         {
            if(this.curSetp < 4)
            {
               NpcDialog.show(NPC.CHIHE_JIANMO,["先去击败我的四名守护者，再来挑战我吧！"],["好吧。"],[function():void
               {
                  ToolBarController.panel.hide();
               }]);
               return;
            }
            NpcDialog.show(NPC.CHIHE_JIANMO,["你们这些阴魂不散的家伙，好好记住你们都对我做了些什么。等我逃离这里，我一定会让你们生不如死！"],["怕是没有这个机会了！","看我用钻石砸晕你！","我还没准备好。"],[function():void
            {
               SocketConnection.send(46295,[14,0]);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249486).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[12,5]);
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
            NpcDialog.show(this.npcIDs[index],["如果没有大人，就没有今天的我。我这条命就是大人的，你要想伤害他，先过我这关！"],["助纣为虐，连你一起拿下！","看我用钻石砸晕你！","我还没准备好。"],[function():void
            {
               FightManager.fightNoMapBoss("",8583 + index);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249485).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[12,1 + index]);
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
         if(this.curSetp == 5)
         {
            NpcDialog.show(NPC.CHIHE_JIANMO,["我苦苦支撑了这么久，这一刻，终于还是来了。这，就是代价吗？"],["想想你过去的所作所为吧！"],[function():void
            {
               MapManager.changeMap(11422);
            }]);
         }
      }
      
      public function failToFight() : void
      {
         if(this.curSetp == 4)
         {
            Alarm2.show("很遗憾，你不是这个魔头的对手！",function():void
            {
               MapManager.changeMap(11422);
            });
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
