package com.robot.app.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.PetModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class KainuController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _time:uint;
      
      private static var _petId:uint;
      
      private static const TASK_ID:uint = 1149;
      
      private static var _isInActivity:Boolean;
      
      private static var _canReceive:Boolean;
       
      
      public function KainuController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_map.conLevel["task_952_0"]);
            DisplayUtil.removeForParent(_map.conLevel["task_952_1"]);
            DisplayUtil.removeForParent(_map.conLevel["task_952_2"]);
            DisplayUtil.removeForParent(_map.conLevel["task_952_3"]);
            DisplayUtil.removeForParent(_map.conLevel["task_952_4"]);
            destroy();
         }
         else
         {
            showMc("task_952_0");
            ToolTipManager.add(_map.conLevel["kainu"],"凯奴");
            _map.conLevel["kainu"].buttonMode = true;
            _map.conLevel["kainu"].addEventListener(MouseEvent.CLICK,onKainu);
            _canReceive = true;
            EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,startStory);
            startStory(null);
         }
      }
      
      private static function startStory(param1:SysTimeEvent) : void
      {
         var date:Date = null;
         var time:uint = 0;
         var e:SysTimeEvent = param1;
         if(_canReceive)
         {
            date = SystemTimerManager.sysDate;
            time = uint(SystemTimerManager.time);
            if(time >= SystemTimerManager.getTimeByDate(2012,7,24,19) && time <= SystemTimerManager.getTimeByDate(2012,8,6,20))
            {
               if(date.getUTCHours() + 8 == 19)
               {
                  _isInActivity = true;
                  if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
                  {
                     _canReceive = false;
                     AnimateManager.playMcAnimate(_map.conLevel["task_952_0"],0,"",function():void
                     {
                        NpcDialog.show(NPC.KAINU,["咦，小赛尔你也来啦！能帮我参谋一下吗？看看谁比较适合我！"],["哦，好的，我来帮你参谋一下吧！"],[function():void
                        {
                           showPet_1();
                        }]);
                     });
                  }
               }
               else
               {
                  _isInActivity = false;
               }
            }
            else
            {
               _isInActivity = false;
            }
         }
      }
      
      private static function showPet_1() : void
      {
         showMc("task_952_1");
         AnimateManager.playMcAnimate(_map.conLevel["task_952_1"],0,"",function():void
         {
            NpcDialog.show(NPC.KAINU,["快看，五颜绿色的羽毛，硕大的翅膀，一定是乌力朴吧，你们觉得它适合我吗？"],["合适！","不合适！"],[function():void
            {
               NpcDialog.show(NPC.KAINU,["嗯？羽毛是很美啦，但是我的好朋友一定是小小的，0xff0000披着红色战袍0xffffff，0xff0000浑身充满能量0xffffff的才行，这样很才帅嘛！"],["哎，失败了一个，那我们再看看吧！"],[function():void
               {
                  showPet_2();
               }]);
            },function():void
            {
               NpcDialog.show(NPC.WULIPU,["等等…等等，我身上的颜色这么绚丽夺目，很美啊！你不觉得吗？我倒很想看看你的好朋友到底是什么样子？"],["我一定要看看是谁！"],[function():void
               {
                  showPet_2();
               }]);
            }]);
         });
      }
      
      private static function showPet_2() : void
      {
         showMc("task_952_2");
         AnimateManager.playMcAnimate(_map.conLevel["task_952_2"],0,"",function():void
         {
            NpcDialog.show(NPC.KAINU,["快看，快看，小巧的身躯，乌黑亮丽的外形，小赛尔它适合我吗？"],["不错啊！","好像还缺了点什么！"],[function():void
            {
               acceptTask();
            },function():void
            {
               acceptTask();
            }]);
         });
      }
      
      private static function acceptTask() : void
      {
         NpcDialog.show(NPC.KAINU,["嗯？虽然沙顿很好，但是我还是坚信我的好朋友一定是0xff0000披着红色战袍0xffffff，0xff0000浑身充满能量0xffffff的，这样才能保护我嘛！"],["额……又失败了一个！"],[function():void
         {
            NpcDialog.show(NPC.KAINU,["哎，究竟谁才是我的真命天子呢？已经看了这么多了，怎么就没有一个有来电的感觉呢？"],["快带上雄性精灵与凯奴交流一下吧！（记得雄性精灵要身边跟随哦）"],[function():void
            {
               TasksManager.accept(TASK_ID,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     _canReceive = true;
                     showMc("task_952_0");
                  }
               });
            }]);
         }]);
      }
      
      private static function onKainu(param1:MouseEvent) : void
      {
         var pet:PetModel;
         var e:MouseEvent = param1;
         if(!_isInActivity)
         {
            NpcDialog.show(NPC.KAINU,["告诉你一个秘密，0xff0000晚上19:000xffffff我的真命天子就会出现了，是向我表白最佳时机哦，到时候你记得把0xff0000雄性精灵0xffffff带来试试吧！记得咯！"],["好的，我知道啦！"]);
            return;
         }
         pet = MainManager.actorModel.pet;
         if(pet == null)
         {
            NpcDialog.show(NPC.KAINU,["咦，怎么不是精灵呢？我的好朋友什么时候可以出现啊！呜呜…"],["快带上雄性精灵！（雄性精灵要身边跟随哦）"]);
            return;
         }
         if(PetXMLInfo.getPetGender(pet.info.petID) == 1)
         {
            if(_petId != pet.info.petID)
            {
               _time = 0;
               _petId = pet.info.petID;
            }
            ++_time;
            if(_petId == 454 || _petId == 455)
            {
               if(_time > 3)
               {
                  return;
               }
               showMc("task_952_4");
               _map.conLevel["task_952_4"].gotoAndStop(_time + 1);
               if(_time == 3)
               {
                  AnimateManager.playMcAnimate(_map.conLevel["task_952_4"],4,"mc",function():void
                  {
                     TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           DisplayUtil.removeForParent(_map.conLevel["task_952_0"]);
                           DisplayUtil.removeForParent(_map.conLevel["task_952_1"]);
                           DisplayUtil.removeForParent(_map.conLevel["task_952_2"]);
                           DisplayUtil.removeForParent(_map.conLevel["task_952_3"]);
                           DisplayUtil.removeForParent(_map.conLevel["task_952_4"]);
                           destroy();
                        }
                     });
                  });
               }
            }
            else
            {
               if(_time > 3)
               {
                  return;
               }
               showMc("task_952_3");
               _map.conLevel["task_952_3"].gotoAndStop(_time + 1);
               if(_time == 3)
               {
                  AnimateManager.playMcAnimate(_map.conLevel["task_952_3"],4,"mc",function():void
                  {
                     if(_petId == 70)
                     {
                        NpcDialog.show(NPC.KAINU,["哇，是你吗，真的是你—我心中的王者，但是....我不能选择你，因为你一直视你为偶像......."],["呜......"]);
                     }
                     else
                     {
                        NpcDialog.show(NPC.KAINU,["哎，很可惜，虽然你很优秀，但你不是那个0xff0000披着红色战袍0xffffff，0xff0000浑身充满能量0xffffff的它，我们之间也缺少了一种来电的感觉，不过还是要感谢你对我的好意！"],["哎呀！你到底喜欢什么样子的呢？"]);
                     }
                  });
               }
            }
         }
         else if(PetXMLInfo.getPetGender(pet.info.petID) == 2)
         {
            NpcDialog.show(NPC.KAINU,["啊……你是雌性的嘛，我要找的是0xff0000雄性0xffffff的好朋友哦！"],["真急人，快看看有没有雄性精灵！"]);
         }
         else
         {
            NpcDialog.show(NPC.KAINU,["哼！我要找的是0xff0000雄性0xffffff精灵呀！"],["真急人，快看看有没有雄性精灵！"]);
         }
      }
      
      private static function showMc(param1:String) : void
      {
         _map.conLevel["task_952_0"].visible = false;
         _map.conLevel["task_952_1"].visible = false;
         _map.conLevel["task_952_2"].visible = false;
         _map.conLevel["task_952_3"].visible = false;
         _map.conLevel["task_952_4"].visible = false;
         _map.conLevel[param1].visible = true;
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(_map.conLevel["kainu"])
            {
               _map.conLevel["kainu"].removeEventListener(MouseEvent.CLICK,onKainu);
               DisplayUtil.removeForParent(_map.conLevel["kainu"]);
            }
            _map = null;
         }
         EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,startStory);
      }
   }
}
