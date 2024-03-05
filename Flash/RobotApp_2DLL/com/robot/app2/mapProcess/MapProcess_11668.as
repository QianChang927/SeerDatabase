package com.robot.app2.mapProcess
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11668 extends BaseMapProcess
   {
       
      
      protected var _bossIndexArr:Array;
      
      protected var _fightNum:int;
      
      protected var _petIdArr:Array;
      
      public function MapProcess_11668()
      {
         this._petIdArr = [1148,1170,620,230,476,833];
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("强者试炼","进入强者试炼场景","精灵捕猎场");
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         switch(str)
         {
            case "petContainer":
               NpcDialog.show(this._petIdArr[this._bossIndexArr[this._fightNum] - 1],["这是你的第" + (this._fightNum + 1) + "场战斗考验。只需获得3场战斗胜利，就能完成今天的试炼了！"],["我已经准备好了！","我还要再准备一下。"],[function():void
               {
                  NpcDialog.hide();
                  KTool.socketSendCallBack(43297,function(param1:SocketEvent):void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                  },[12,_fightNum + 1]);
               }],false,null,true);
               break;
            case "closeBtn":
               MapManager.changeMapWithCallback(1301,function():void
               {
                  MainManager.actorModel.x = 338;
                  MainManager.actorModel.y = 271;
               });
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
      
      private function onFightOver(param1:*) : void
      {
         var e:* = param1;
         KTool.getMultiValue([16814],function(param1:Array):void
         {
            var va:Array = param1;
            var num:int = int(KTool.subByte(va[0],12,4));
            if(num == _fightNum)
            {
               NpcDialog.show(_petIdArr[_bossIndexArr[_fightNum] - 1],["看来你准备的还不够充分。再给你一次机会，你好了就来找我。"],["我会继续努力的！"],[function():void
               {
               }],false,null,true);
            }
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         });
      }
      
      protected function update() : void
      {
         KTool.getMultiValue([16814],function(param1:Array):void
         {
            var i:int;
            var idnex:uint = 0;
            var va:Array = param1;
            _bossIndexArr = new Array();
            i = 0;
            while(i < 3)
            {
               idnex = uint(KTool.subByte(va[0],i * 4,4));
               _bossIndexArr.push(idnex);
               i++;
            }
            _fightNum = KTool.subByte(va[0],12,4);
            if(_fightNum >= 3)
            {
               MapManager.currentMap.controlLevel["bossMc"].gotoAndStop(_bossIndexArr[2]);
               MapManager.changeMapWithCallback(1301,function():void
               {
                  MainManager.actorModel.x = 338;
                  MainManager.actorModel.y = 271;
                  NpcDialog.show(_petIdArr[_bossIndexArr[0] - 1],["恭喜你完成了今天的试炼！接下来就是最令人激动的环节了。不知道这一次，你会选择谁一起冒险呢？"],["我需要考虑一下！"],[function():void
                  {
                  }],false,null,true);
               });
            }
            else
            {
               MapManager.currentMap.controlLevel["bossMc"].gotoAndStop(_bossIndexArr[_fightNum]);
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         KTool.showMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
