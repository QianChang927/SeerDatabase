package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11622 extends BaseMapProcess
   {
       
      
      private var _indexArr:Array;
      
      private var ac1:ActivityControl;
      
      private var cron1:Array;
      
      public function MapProcess_11622()
      {
         this.cron1 = [new CronTimeVo("*","13","*","*","*","*"),new CronTimeVo("*","19","*","*","*","*")];
         super();
      }
      
      override protected function init() : void
      {
         var tx:TextField = null;
         super.init();
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         tx = this.conLevel["itemNumTx"] as TextField;
         ItemManager.updateItems([1716111],function():void
         {
            var _loc1_:Array = new Array();
            _loc1_[0] = ItemManager.getNumByID(1716111);
            tx.text = String(_loc1_[0]);
         });
      }
      
      public function isInAcTime() : Boolean
      {
         if(this.ac1 == null)
         {
            this.ac1 = new ActivityControl(this.cron1);
         }
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         if(this.ac1.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "closeBtn":
               MapManager.changeMapWithCallback(1,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("SpaceStationGuardianMianPanel"),"正在打开....");
               });
               break;
            case "fightBtn":
               if(this.isInAcTime())
               {
                  StatManager.sendStat2014("0223几米空间站守护者","挑战王之哈莫","2018运营活动");
                  NpcDialog.show(NPC.WANGZHIHAMO,["老顽童爷爷陷入了深深的沉睡，收集足够的几米能量才能唤醒他。准备好接受挑战了吗？！"],["来吧！ ","我要准备一下！"],[function():void
                  {
                     FightManager.fightNoMapBoss("王之哈莫",12192,false,true,function():void
                     {
                     });
                  }]);
               }
               else
               {
                  Alarm2.show("活动还没开始！");
               }
               break;
            case "npcBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("SpaceStationGuardianGuidePanel"),"正在打开....");
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
      
      override public function destroy() : void
      {
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
