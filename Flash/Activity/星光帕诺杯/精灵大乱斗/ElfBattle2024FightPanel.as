package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ElfBattle2024FightPanel extends ActivityModel
   {
      private var left:int;
      
      private var team:int;
      
      private var selectPets:Array;
      
      private var startTime:Date;
      
      private var canceling:Boolean;
      
      private var buyRefresh:Boolean;
      
      private var lastPetMode:int;
      
      private var items:Array;
      
      public function ElfBattle2024FightPanel()
      {
         super();
         resUrl = "2024/1011/ElfBattle2024FightPanel";
         configUrl = "2024/1011/ElfBattle2024";
      }
      
      override public function init(data:Object = null) : void
      {
         super.init(data);
         this.team = int(data);
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1011星光·帕诺杯精灵大乱斗","打开了大乱斗任务和匹配界面","2024运营活动");
         super.show();
         SystemTimerManager.addTickFun(this.tickHandle);
         this.tickHandle();
         _ui["sub"].visible = false;
         _ui["petmc"].gotoAndStop(this.team);
         for(var j:int = 0; j < 6; j++)
         {
            _ui["petmc"]["pet_" + j].buttonMode = true;
            eventCom.addClickEvent(_ui["petmc"]["pet_" + j],this.petClickHandle);
         }
         this.setPets();
      }
      
      private function petClickHandle(e:MouseEvent) : void
      {
         var btnName:String = e.currentTarget.name;
         var index:int = int(btnName.split("_")[1]);
         this.clickPets(index + 1);
      }
      
      override protected function updatePanel() : void
      {
         var tmpValue:int = 0;
         if(this.buyRefresh)
         {
            this.left = 10 - getValue("left");
            _ui["left"].text = this.left;
            CommonUI.setEnabled(_ui["plus"],this.left < 1);
            this.buyRefresh = false;
            return;
         }
         var selectPet:int = int(getValue("selectPet"));
         this.selectPets = [];
         for(var j:int = 0; j < 6; j++)
         {
            tmpValue = int(KTool.getBit(selectPet,j + 1));
            if(tmpValue != 0)
            {
               this.selectPets.push(j + 1);
            }
         }
         this.setPets();
         this.team = getValue("team");
         this.left = 10 - getValue("left");
         _ui["left"].text = this.left;
         CommonUI.setEnabled(_ui["plus"],this.left < 1);
         var winTime:int = int(getValue("txt"));
         var totalTime:int = int(getValue("txt1"));
         _ui["txt"].text = winTime.toString();
         _ui["txt1"].text = totalTime == 0 ? "0%" : Number(winTime * 100 / totalTime).toFixed(1) + "%";
         this.checkTask();
      }
      
      private function tickHandle() : void
      {
         var nowSec:int = 0;
         var startSec:int = 0;
         if(_ui == null)
         {
            return;
         }
         if(this.isInActivity())
         {
            _ui["btnmc"].gotoAndStop(1);
         }
         else
         {
            _ui["btnmc"].gotoAndStop(2);
         }
         if(this.startTime != null)
         {
            nowSec = SystemTimerManager.sysBJDate.time / 1000;
            startSec = this.startTime.time / 1000;
            if(nowSec - startSec >= 300 && !this.canceling)
            {
               this.cancelMatch();
               doAction("alarm6");
            }
         }
      }
      
      private function cancelMatch() : void
      {
         this.canceling = true;
         SocketConnection.sendByQueue(2402,[],function(e:SocketEvent):void
         {
            PetFightModel.type = lastPetMode;
            startTime = null;
            removeFightEvent();
            canceling = false;
            _ui["sub"].visible = false;
         });
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var btnName:String = e.target.name;
         index = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("ElfBattle2024MainPanel");
               break;
            case "pclose":
               if(!this.canceling)
               {
                  this.cancelMatch();
               }
               break;
            case "go":
               if(this.isInActivity())
               {
                  if(this.team == 0)
                  {
                     doAction("alarm1");
                     return;
                  }
                  if(this.left < 1)
                  {
                     doAction("alarm2");
                     return;
                  }
                  if(Boolean(this.selectPets) && this.selectPets.length < 3)
                  {
                     doAction("alarm3");
                     return;
                  }
                  this.lastPetMode = PetFightModel.type;
                  PetFightModel.type = PetFightModel.PET_PANUOBEI;
                  StatManager.sendStat2014("1011星光·帕诺杯精灵大乱斗","点击了【开始匹配】按钮","2024运营活动");
                  this.addFightEvent();
                  SocketConnection.sendByQueue(41491,this.selectPets,function(e:SocketEvent):void
                  {
                     refresh();
                     startMatch();
                  });
               }
               break;
            case "reward_" + index:
               SocketConnection.sendByQueue(41492,[1,index + 1],function(e:SocketEvent):void
               {
                  if(index < 2)
                  {
                     doAction("alarm7",[getValue("teams")[team],5]);
                  }
                  refresh();
               });
               break;
            case "book":
               StatManager.sendStat2014("1011星光·帕诺杯精灵大乱斗","在游戏界面打开了精灵乱斗手册查看精灵图鉴","2024运营活动");
               this.hide();
               ModuleManager.showAppModule("ElfBattle2024BookPanel","ElfBattle2024FightPanel");
               break;
            case "plus":
               KTool.buyProductWithExchange(261012,14408,function():void
               {
                  buyRefresh = true;
                  refresh();
               });
         }
      }
      
      private function addFightEvent() : void
      {
         SocketConnection.addCmdListener(CommandID.NOTE_READY_TO_FIGHT,this.fightStartHandle);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.fightEndHandle);
      }
      
      private function fightStartHandle(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.NOTE_READY_TO_FIGHT,this.fightStartHandle);
         this.hide();
      }
      
      private function fightEndHandle(e:PetFightEvent) : void
      {
         PetFightModel.type = this.lastPetMode;
         this.removeFightEvent();
         ModuleManager.showAppModule("ElfBattle2024FightPanel",this.team);
      }
      
      private function removeFightEvent() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fightEndHandle);
         SocketConnection.removeCmdListener(CommandID.NOTE_READY_TO_FIGHT,this.fightStartHandle);
      }
      
      private function matchHandle(e:SocketEvent) : void
      {
         var byte:ByteArray = e.data as ByteArray;
         var result:int = int(byte.readUnsignedInt());
         var teamId:int = int(byte.readUnsignedInt());
         _ui["mc1"]["team"].gotoAndStop(teamId);
         _ui["mc"]["team"].gotoAndStop(teamId);
         _ui["sub"]["pclose"].visible = false;
      }
      
      private function clearItems() : void
      {
         var j:int = 0;
         if(Boolean(this.items))
         {
            for(j = 0; j < this.items.length; j++)
            {
               if(Boolean(this.items[j]))
               {
                  if(Boolean(this.items[j].parent))
                  {
                     this.items[j].parent.removeChild(this.items[j]);
                  }
                  this.items[j] = null;
               }
            }
            this.items = null;
         }
      }
      
      private function loadHead(id:uint, container:DisplayObjectContainer, skinId:int = 0, scale:int = 1) : void
      {
         var str:String;
         DisplayUtil.removeAllChild(container as MovieClip);
         str = ClientConfig.getPetHeadPath(id,0,skinId);
         ResourceManager.getResource(str,function(dis:DisplayObject):void
         {
            if(_ui == null || container["cid"] != id)
            {
               return;
            }
            var mc:MovieClip = dis as MovieClip;
            if(items == null)
            {
               items = [];
            }
            items.push(mc);
            mc.x = mc.width / 2;
            mc.y = mc.height / 2;
            container.addChild(mc);
         },"item");
      }
      
      private function startMatch() : void
      {
         this.clearItems();
         this.startTime = new Date(SystemTimerManager.sysBJDate.time);
         _ui["sub"].visible = true;
         _ui["sub"]["pclose"].visible = true;
      }
      
      private function checkTask() : void
      {
         var reward:Boolean = false;
         var canReward:Boolean = false;
         var str:String = null;
         var task0:int = int(getValue("task0"));
         var task1:int = int(getValue("task1"));
         var arr:Array = [task0 & 0xFF,task0 >> 8 & 0xFF,task1 & 0xFF,task1 >> 8 & 0xFF];
         var arr1:Array = [KTool.getBit(task0,21),KTool.getBit(task0,22),KTool.getBit(task1,21),KTool.getBit(task1,22)];
         var tasks:Array = getValue("tasks");
         var taskTime:Array = getValue("tasksTimes");
         for(var j:int = 0; j < 4; j++)
         {
            str = tasks[j];
            _ui["task_" + j].text = arr[j] + "/" + taskTime[j];
            canReward = arr[j] >= taskTime[j];
            reward = Boolean(arr1[j]);
            _ui["btnmc_" + j].gotoAndStop(reward ? 2 : 1);
            if(!reward)
            {
               CommonUI.setEnabled(_ui["btnmc_" + j]["reward_" + j],canReward);
            }
         }
      }
      
      private function clickPets(idx:int) : void
      {
         if(this.selectPets == null)
         {
            this.selectPets = [];
         }
         var index:int = int(this.selectPets.indexOf(idx));
         if(index == -1)
         {
            if(this.selectPets.length < 3)
            {
               this.selectPets.push(idx);
            }
            else
            {
               this.selectPets.splice(0,1);
               this.selectPets.push(idx);
            }
         }
         else
         {
            this.selectPets.splice(index,1);
         }
         this.setPets();
      }
      
      private function setPets() : void
      {
         var i:int = 0;
         for(var j:int = 0; j < 6; j++)
         {
            _ui["petmc"]["pet_" + j]["flag"].visible = false;
         }
         if(this.selectPets == null)
         {
            _ui["num"].text = "0/3";
         }
         else
         {
            for(i = 0; i < this.selectPets.length; i++)
            {
               _ui["petmc"]["pet_" + (this.selectPets[i] - 1)]["flag"].visible = true;
            }
            _ui["num"].text = this.selectPets.length + "/3";
         }
         if(Boolean(_ui["btnmc"]["go"]))
         {
            CommonUI.setEnabled(_ui["btnmc"]["go"],Boolean(this.selectPets) && this.selectPets.length >= 3);
         }
      }
      
      private function isInActivity() : Boolean
      {
         var boo:Boolean = false;
         var date:Date = SystemTimerManager.sysBJDate;
         if(date.hours >= 14 && date.hours < 22)
         {
            boo = true;
         }
         else
         {
            boo = false;
         }
         return boo;
      }
      
      override public function hide() : void
      {
         this.clearItems();
         this.selectPets = null;
         SystemTimerManager.removeTickFun(this.tickHandle);
         this.startTime = null;
         super.hide();
      }
   }
}

