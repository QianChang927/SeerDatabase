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
   
   public class MapProcess_11424 extends BaseMapProcess
   {
       
      
      private var curSetp:int;
      
      private var isInit:Boolean = false;
      
      private var hurtAdds:Array;
      
      private const npcIDs:Array = [NPC.MOWANG_ZHAKESI,NPC.TIAN_XIE_LONG_HUANG,NPC.WING_FEILING,NPC.MINGHUANG_XIULUO,NPC.E_LING_SHOU_CHAO_JIN_HUA,NPC.XIEHUANG_WEISIKE];
      
      public function MapProcess_11424()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.addEvent();
         IceQueenSiaController.initForMap(this);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            MapListenerManager.add(conLevel["boss_" + _loc1_],this.onFight);
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
         return KTool.getMultiValue([4596,4597,4598,4599,4600,4601,4602]).then(function(param1:Array):void
         {
            var _loc2_:* = 0;
            var _loc3_:* = 0;
            while(_loc3_ < 6)
            {
               _loc2_ += BitUtils.getBit(param1[0],_loc3_);
               conLevel["boss_" + _loc3_].visible = BitUtils.getBit(param1[0],_loc3_) == 0;
               _loc3_++;
            }
            curSetp = _loc2_ >= 3 ? 1 : 0;
            _loc2_ = 0;
            hurtAdds = [];
            var _loc4_:* = 0;
            while(_loc4_ < 6)
            {
               conLevel["mc_" + _loc4_].visible = curSetp == 1 && BitUtils.getBit(param1[0],_loc4_) == 0;
               conLevel["mc_" + _loc4_].txt.text = "" + param1[1 + _loc4_] + "/50000";
               conLevel["mc_" + _loc4_].processMc.gotoAndStop(int(param1[1 + _loc4_] / 500));
               if(param1[1 + _loc4_] >= 50000)
               {
                  _loc2_++;
               }
               hurtAdds[_loc3_] = param1[1 + _loc4_];
               _loc4_++;
            }
            if(_loc2_ == 3)
            {
               curSetp = 2;
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
         if(this.curSetp == 0)
         {
            NpcDialog.show(this.npcIDs[index],["阿克希亚，冰雪王国的统治者。不，这场战斗后，就该称呼你“前统治者”了！来吧，让我看看你的斤两。"],["我是不会屈服的！","看我用钻石砸晕你！","我还没准备好。"],[function():void
            {
               FightManager.fightNoMapBoss("",8567 + index);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249481).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[8,index + 1]);
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
            if(this.hurtAdds[index] >= 50000)
            {
               NpcDialog.show(this.npcIDs[index],["还是挺有两下子的嘛，不过，你是逃不出这里的！"],["我是不会放弃的！"],[function():void
               {
                  ToolBarController.panel.hide();
               }]);
               return;
            }
            NpcDialog.show(this.npcIDs[index],["放弃吧！屈服吧！你的坚持不过是一场笑话，你，逃不过这一劫！"],["我是不会屈服的！","看我用钻石砸晕你！","我还没准备好。"],[function():void
            {
               FightManager.fightNoMapBoss("",8573 + index);
            },function():void
            {
               ToolBarController.panel.hide();
               KTool.buyProductWithPromise(249482).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(46295,[9,index + 1]);
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
         if(this.curSetp == 1 && BitBuffSetClass.getState(23359) == 0)
         {
            IceQueenSiaController.playOtherAnmiate(7,function():void
            {
               BitBuffSetClass.setState(23359,1);
            });
         }
         else if(this.curSetp == 2)
         {
            MapManager.changeMap(11422);
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
