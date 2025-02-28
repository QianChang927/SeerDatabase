package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.task.control.TaskController_764;
   import com.robot.app.task.control.TaskController_768;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.app.task.taskscollection.Task1098;
   import com.robot.app.task.taskscollection.Task605;
   import com.robot.app.task.taskscollection.Task764;
   import com.robot.app.task.taskscollection.Task768;
   import com.robot.app.task.taskscollection.Task912;
   import com.robot.app.task.taskscollection.Task973;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.PetModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_15 extends BaseMapProcess
   {
       
      
      private var _musicMc:MovieClip;
      
      private var _musicBtn:MovieClip;
      
      private var monkeyApp:AppModel;
      
      private var huohouPets:Array;
      
      public function MapProcess_15()
      {
         this.huohouPets = [7,8,9,307,308,309];
         super();
      }
      
      private static function onHeartClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("luojilasiEnvolution/LuojilasiEnvolutionWarehouse"),"正在打开面板……");
      }
      
      override protected function init() : void
      {
         Task605.initTask_15(this);
         this._musicMc = conLevel.getChildByName("musicMc") as MovieClip;
         this._musicMc.gotoAndStop(1);
         this._musicMc.mouseEnabled = false;
         this._musicMc.buttonMode = true;
         this._musicMc.visible = false;
         this._musicBtn = conLevel.getChildByName("musicBtn") as MovieClip;
         this._musicBtn.addEventListener(MouseEvent.CLICK,this.onPaoClick);
         this._musicBtn.mouseEnabled = false;
         this._musicBtn.buttonMode = true;
         this._musicBtn.visible = false;
         ToolTipManager.add(conLevel["luojilasiCharge"] as MovieClip,"洛吉拉斯");
         (conLevel["luojilasiCharge"] as MovieClip).buttonMode = true;
         (conLevel["luojilasiCharge"] as MovieClip).addEventListener(MouseEvent.CLICK,onHeartClick);
         Task912.initTaskForMap15(this);
         this.check();
         Task1098.initTaskForMap15(this);
         Task973.initTaskFor15(this);
      }
      
      override public function destroy() : void
      {
         Task768.destroy();
         Task764.destroy();
         Task605.destroy();
         Task1098.destory();
         Task973.destroy();
         if(this._musicBtn)
         {
            this._musicBtn.removeEventListener(MouseEvent.CLICK,this.onPaoClick);
         }
         if(this._musicMc)
         {
            this._musicMc.removeEventListener(MouseEvent.CLICK,this.onMusicClick);
         }
         this._musicMc = null;
         this._musicBtn = null;
         if(conLevel["beibeiNPC"])
         {
            conLevel["beibeiNPC"].removeEventListener(MouseEvent.CLICK,this.beibeiNPCHandler);
         }
         if(this.monkeyApp)
         {
            this.monkeyApp.destroy();
         }
         this.monkeyApp = null;
      }
      
      private function check() : void
      {
         conLevel["beibeiNPC"].visible = MainManager.actorInfo.petMaxLev >= 15;
         if(TasksManager.getTaskStatus(TaskController_764.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            Task764.applyTask();
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_764.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task764.initTaskForMap15(this);
            return;
         }
         if(TasksManager.getTaskStatus(TaskController_768.TASK_ID) == TasksManager.UN_ACCEPT)
         {
            Task768.initTaskForMap15(this);
            return;
         }
         conLevel["beibeiNPC"].buttonMode = true;
         conLevel["beibeiNPC"].addEventListener(MouseEvent.CLICK,this.beibeiNPCHandler);
         if(TasksManager.getTaskStatus(401) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatus(401,0,function(param1:Boolean):void
            {
               if(!param1)
               {
                  _musicMc.mouseEnabled = true;
                  _musicMc.visible = true;
                  _musicMc.addEventListener(MouseEvent.CLICK,onMusicClick);
                  _musicBtn.visible = true;
                  _musicBtn.mouseEnabled = true;
               }
            });
         }
      }
      
      private function beibeiNPCHandler(param1:MouseEvent) : void
      {
         NpcDialog.show(NPC.BEIBEI,["好热呀！好热呀！好热呀！"],["嗯，免费的桑拿享受久了也不行啊！"]);
      }
      
      private function onPaoClick(param1:MouseEvent) : void
      {
         this._musicMc.gotoAndStop(2);
      }
      
      private function onMusicClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!MainManager.actorModel.getIsPetFollw(22) && !MainManager.actorModel.getIsPetFollw(23) && !MainManager.actorModel.getIsPetFollw(24))
         {
            Alarm.show("只有带上你的<font color=\'#ff0000\'>毛毛</font>，这些音符才会起到作用呢。");
            return;
         }
         TasksManager.complete(401,0,function(param1:Boolean):void
         {
            if(param1)
            {
               DisplayUtil.removeForParent(_musicMc);
               Alarm.show("你帮助毛毛找到了一个音符！");
            }
         });
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(3);
      }
      
      public function monkeyFun() : void
      {
         var _loc1_:Array = [7,8,9,307,308,309];
         if(TasksManager.getTaskStatus(402) == TasksManager.COMPLETE)
         {
            NpcTipDialog.show("你的小火猴已经训练过一次咯，该休息一下了。合理控制训练强度，才能进步更快。",null,NpcTipDialog.GUARD);
            return;
         }
         if(this.isHuohouFllow() && TasksManager.getTaskStatus(402) == TasksManager.ALR_ACCEPT)
         {
            this.onAccepetMonkey();
         }
         else if(this.hasXiaohuohouPet())
         {
            if(TasksManager.getTaskStatus(402) == TasksManager.UN_ACCEPT)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("XiaohuohoumengxiangTipPanel"));
            }
            else if(!this.isHuohouFllow())
            {
               NpcTipDialog.show("要带上你的<font color=\'#ff0000\'>小火猴</font>在身边才能帮助他进行训练哦。",null,NpcTipDialog.GUARD);
            }
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ZhuChongCollectXiaohuohouPanel"));
         }
      }
      
      private function isHuohouFllow() : Boolean
      {
         var _loc1_:PetModel = MainManager.actorModel.pet;
         if(_loc1_ == null)
         {
            return false;
         }
         var _loc2_:int = 0;
         while(_loc2_ < this.huohouPets.length)
         {
            if(_loc1_.info.petID == this.huohouPets[_loc2_])
            {
               return true;
            }
            _loc2_++;
         }
         return false;
      }
      
      private function onAccepetMonkey() : void
      {
         if(!this.monkeyApp)
         {
            this.monkeyApp = new AppModel(ClientConfig.getTaskModule("MonkeyKongfu"),"正在加载游戏");
            this.monkeyApp.setup();
         }
         this.monkeyApp.show();
      }
      
      private function hasXiaohuohouPet() : Boolean
      {
         var _loc1_:int = 0;
         while(_loc1_ < this.huohouPets.length)
         {
            if(Boolean(PetManager.containsStorageForID(this.huohouPets[_loc1_])) || Boolean(PetManager.containsStorageForID(this.huohouPets[_loc1_])))
            {
               return true;
            }
            _loc1_++;
         }
         return false;
      }
   }
}
