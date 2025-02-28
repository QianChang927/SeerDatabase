package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.mapProcess.control.DaishuGiftController20140510;
   import com.robot.app.task.control.TaskController_408;
   import com.robot.app.task.taskscollection.Task1266;
   import com.robot.app.task.taskscollection.Task532;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.ActorModel;
   import com.robot.core.mode.PetModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.pet.PetWalkController;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   
   public class MapProcess_10 extends BaseMapProcess
   {
       
      
      private var arr:Array;
      
      private var cls:Class;
      
      private var controller:*;
      
      public function MapProcess_10()
      {
         super();
      }
      
      override protected function init() : void
      {
         var activeTime:CronTimeVo;
         var result:Array;
         SocketConnection.send(1022,86067873);
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         activeTime = new CronTimeVo("*","13-15","30","3","*");
         this.arr = [new Point(330,310),new Point(600,436),new Point(735,170),new Point(210,475)];
         PetWalkController.showWalkPet(12,this.arr);
         if(TasksManager.getTaskStatus(408) == TasksManager.COMPLETE || Boolean(activeTime.isActive(SystemTimerManager.sysDate)))
         {
            PetWalkController.hideWalkPet();
         }
         else if(!EventManager.hasEventListener(PetWalkController.WALK_PET_CLICK))
         {
            EventManager.addEventListener(PetWalkController.WALK_PET_CLICK,this.talkWithBokeer);
         }
         Task1266.initForMap10(this);
         Task532.initTask_0(this);
         DaishuGiftController20140510.initFor10(this);
         MapListenerManager.add(conLevel["machine"],function():void
         {
            SocketConnection.send(1022,86067878);
            ModuleManager.showModule(ClientConfig.getFestivalModule("DaishuGiftPanel20140510"),"正在打开...",conLevel["machine"]);
         });
         result = [];
         result.push(new CronTimeVo("*","16-18","19-25","9","*","2014"));
         this.cls = getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.ShinePetController") as Class;
         this.controller = new this.cls(result);
         this.controller.setup(this);
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(1);
      }
      
      override public function destroy() : void
      {
         DaishuGiftController20140510.destroy();
         this.controller.destroy();
         this.controller = null;
         EventManager.removeEventListener(PetWalkController.WALK_PET_CLICK,this.talkWithBokeer);
         PetWalkController.hideWalkPet();
         this.arr = null;
      }
      
      public function talkWithBokeer(param1:Event) : void
      {
         var str:String = null;
         var mode:ActorModel = null;
         var petMode:PetModel = null;
         var id_str:uint = 0;
         var evt:Event = param1;
         if(TasksManager.getTaskStatus(408) == TasksManager.UN_ACCEPT)
         {
            str = "你还没有获取每日任务0xff0000皮皮的环球之旅0xffffff呢，快点击右上角的0xff0000每日任务0xffffff按钮中的精灵任务看看吧！";
            NpcDialog.show(NPC.BOKEER,[str],["好吧，我知道了！"],[function():void
            {
               EventManager.dispatchEvent(new Event(PetWalkController.PET_WALK));
            }]);
         }
         else
         {
            mode = MainManager.actorModel;
            petMode = mode.pet;
            if(petMode)
            {
               id_str = uint(petMode.info.petID);
               if(id_str == 10 || id_str == 11 || id_str == 12 || id_str == 164 || id_str == 165 || id_str == 166)
               {
                  TasksManager.getProStatusList(408,this.bokeerTaskList);
               }
               else
               {
                  NpcDialog.show(NPC.BOKEER,["#7皮皮呢？皮皮呢？你没带上0xff0000皮皮0xffffff怎么能来参加0xff0000皮皮的环球之旅0xffffff呢！真是的！快把它带在你身边吧！" + "哎呀！差点忘记说了！只要是皮皮家族的成员都可以来参加哦！"],["我这就带我的皮皮来报名参加！"],[function():void
                  {
                     EventManager.dispatchEvent(new Event(PetWalkController.PET_WALK));
                  }]);
               }
            }
            else
            {
               NpcDialog.show(NPC.BOKEER,["#7皮皮呢？皮皮呢？你没带上0xff0000皮皮0xffffff怎么能来参加0xff0000皮皮的环球之旅0xffffff呢！真是的！快把它带在你身边吧！" + "哎呀！差点忘记说了！只要是皮皮家族的成员都可以来参加哦！"],["我这就带我的皮皮来报名参加！"],[function():void
               {
                  EventManager.dispatchEvent(new Event(PetWalkController.PET_WALK));
               }]);
            }
         }
      }
      
      private function bokeerTaskList(param1:Array) : void
      {
         var arr:Array = param1;
         if(!arr[0])
         {
            if(TaskController_408.TRAVEL_TASK_TYPE < 5)
            {
               this.startTravelTask(TaskController_408.TRAVEL_TASK_TYPE);
            }
            else
            {
               NpcDialog.show(NPC.BOKEER,["今天可是我们皮皮家族的大日子！要知道环球之旅是我们一生的梦想！下面就是你今天需要前往的目的地！注意看咯！"],["我准备好了！"],[function():void
               {
                  var _loc1_:* = Math.floor(Math.random() * 5);
                  startTravelTask(_loc1_);
                  EventManager.dispatchEvent(new Event(PetWalkController.PET_WALK));
               }]);
            }
         }
         if(arr[0])
         {
            EventManager.removeEventListener(PetWalkController.WALK_PET_CLICK,this.talkWithBokeer);
            NpcDialog.show(NPC.BOKEER,["真是太感谢你了~ 我们的皮皮还需要更多实践，才能成长为真正的环球旅行家。谢谢你带它领略其他星球的奇异风光"],["嘻嘻，不用客气，我可喜欢和皮皮一起旅行了~"],[function():void
            {
               TasksManager.complete(408,1);
            }]);
            PetWalkController.hideWalkPet();
         }
      }
      
      private function startTravelTask(param1:uint) : void
      {
         var i:uint = param1;
         var str:String = "";
         var handStr:String = "";
         switch(i)
         {
            case 0:
               str = "那里是0xff0000机械高度文明0xffffff的一颗星球，那里也曾经居住着赫尔卡星人，我记得那儿遍地都是废弃的金属机械……知道是哪里了吗？#7去吧孩子！环球之旅开始了！";
               handStr = "我已经知道啦！我这就带着皮皮去！";
               break;
            case 1:
               str = "0xff0000红色0xffffff当然就是那里不可缺少的色彩元素啦，这里以火系精灵为主，到处都是岩浆和火山灰……知道是哪里了吗？环球之旅启程吧！";
               handStr = "我已经知道啦！我这就带着皮皮去！";
               break;
            case 2:
               str = "帕诺星系第八颗行星，钻石般美丽的星球，天寒地冻的圣洁领域。神兽般的精灵0xff0000阿克希亚0xffffff就生活在那里，它守卫着太多太多的秘密了！你猜到是哪里了吗？去吧孩子！";
               handStr = "皮皮别急啦！我这就带你去~~";
               break;
            case 3:
               str = "哇哇！那是被海盗们曾经占据过的星球！听我的祖先说，那里异常凄凉，寒风凛冽……它应该就在0xff0000阿尔法0xffffff星旁边吧！";
               handStr = "别怕！有我在！我带你去那里看看！";
               break;
            case 4:
               str = "这是一颗矿产资源丰富的星球，这里有五彩缤纷的矿产能源和罕见的金属矿产，因为它总能源源不断的孕育出一个又一个稀有矿石。如果我没记错它应该是0xff0000帕诺星系最后一颗星球0xffffff！";
               handStr = "想不想我带你去看呀？走咯！";
         }
         NpcDialog.show(NPC.BOKEER,[str],[handStr],[function():void
         {
            TaskController_408.TRAVEL_TASK_TYPE = i;
            TaskController_408.start();
            EventManager.dispatchEvent(new Event(PetWalkController.PET_WALK));
         }]);
      }
      
      public function goto_10053() : void
      {
         MapManager.changeLocalMap(10053);
      }
   }
}
