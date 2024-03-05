package com.robot.app.task.taskscollection
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task522
   {
      
      public static const TASK_MONTH:uint = 4;
      
      public static const TASK_START_DATE:uint = 3;
      
      public static const TASK_END_DATE:uint = 23;
      
      public static const TASK_HOURS_START:uint = 10;
      
      public static const TASK_HOURS_END:uint = 13;
      
      public static const TASK_ID:uint = 522;
      
      private static const MAX_NUM:uint = 5;
      
      private static var _map:BaseMapProcess;
      
      private static var _annArr:Array;
      
      private static var _petMC:MovieClip;
      
      private static var _hasClearResource:Boolean = false;
      
      private static var _hasPlayMC:Boolean = false;
      
      private static var _loader:MCLoader;
      
      private static var _type:uint = 0;
      
      private static var _wordArr:Array = [["嗯？羽毛是很美啦，但是我的好朋友一定是小小的，披着0xff0000红色战袍浑身充满能量0xffffff的才行，这样才帅嘛！","哎，失败了一个，那我们在看看吧！"],["等等…..等等，我身上的颜色这么绚丽夺目，很美啊！你不觉得吗？我到很想看看你的好朋友到底是什么样子？","我一定要看看是谁!"]];
      
      private static var _wordArr1:Array = [["嗯？虽然沙顿很好，但是我还是坚信我的好朋友一定是小小的披着0xff0000红色战袍浑身充满能量0xffffff的，这样才能保护我嘛！","额……又失败了一个！"],["哎，究竟谁才是我的真名天子呢？已经看了这么多了，怎么就没有一个有来电的感觉呢？","快带上雄性精灵与凯奴交流一下吧！（记得雄性精灵要身边跟随哦）"]];
       
      
      public function Task522()
      {
         super();
      }
      
      public static function initTask(param1:BaseMapProcess) : void
      {
         _map = param1;
         initResource();
         initTaskHelper();
      }
      
      private static function initTaskHelper() : void
      {
         var _loc2_:uint = 0;
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
         {
            clearResource();
            return;
         }
         if(_loc1_.getMonth() == TASK_MONTH && (_loc1_.getDate() >= TASK_START_DATE && _loc1_.getDate() <= TASK_END_DATE))
         {
            _loc2_ = _loc1_.getHours();
            if(_loc2_ < TASK_HOURS_START)
            {
               _annArr[2].gotoAndStop(2);
               _petMC.mouseEnabled = true;
               EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onReceiveTime);
            }
            else if(_loc2_ >= TASK_HOURS_START && _loc2_ <= TASK_HOURS_END)
            {
               dealTaskHour();
            }
            else if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
            {
               _petMC.mouseEnabled = true;
               _annArr[2].gotoAndStop(2);
            }
         }
         else
         {
            clearResource();
         }
      }
      
      private static function initResource() : void
      {
         var _loc1_:MovieClip = null;
         _annArr = new Array();
         var _loc2_:int = 1;
         while(_loc2_ <= MAX_NUM)
         {
            _loc1_ = _map.animatorLevel["ann_0" + _loc2_];
            _loc1_.gotoAndStop(1);
            _annArr.push(_loc1_);
            _loc2_++;
         }
         _petMC = _map.conLevel["kaiNuPetMC"];
         _petMC.buttonMode = true;
         _petMC.mouseEnabled = false;
         _petMC.addEventListener(MouseEvent.CLICK,onPetMCClick);
         _hasClearResource = false;
      }
      
      private static function clearResource() : void
      {
         var _loc1_:int = 0;
         if(!_hasClearResource)
         {
            _loc1_ = 0;
            while(_loc1_ < MAX_NUM)
            {
               DisplayUtil.removeForParent(_annArr[_loc1_]);
               _loc1_++;
            }
            _petMC.removeEventListener(MouseEvent.CLICK,onPetMCClick);
            DisplayUtil.removeForParent(_petMC);
            _hasClearResource = true;
         }
      }
      
      private static function dealTaskHour() : void
      {
         var _loc1_:uint = uint(TasksManager.getTaskStatus(Task522.TASK_ID));
         switch(_loc1_)
         {
            case TasksManager.UN_ACCEPT:
               acceptTask();
               break;
            case TasksManager.ALR_ACCEPT:
               handleTaskData();
               break;
            case TasksManager.COMPLETE:
               clearResource();
         }
      }
      
      private static function onReceiveTime(param1:SysTimeEvent) : void
      {
         if(param1.timeInfo.date.hours >= TASK_HOURS_START && param1.timeInfo.date.hours <= TASK_HOURS_END)
         {
            EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onReceiveTime);
            dealTaskHour();
         }
      }
      
      private static function onPetMCClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var hours:uint = uint(SystemTimerManager.sysDate.getHours());
         if(hours < TASK_HOURS_START)
         {
            NpcDialog.show(NPC.KAINU,["告诉你一个秘密哦，今天晚上20:00我的真命天子就会出现了，才是向我表白最佳时机，到时候你记得把0xff0000雄性精灵0xffffff带来试试吧！记得咯！"],["好，我知道啦！"]);
         }
         else if(hours >= TASK_HOURS_START && hours <= TASK_HOURS_END)
         {
            if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE)
            {
               _petMC.mouseEnabled = false;
               return;
            }
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               var petInfo:PetInfo = null;
               var petID:uint = 0;
               var gender:uint = 0;
               var ann:MovieClip = null;
               var arr:Array = param1;
               if(Boolean(arr[0]) && Boolean(arr[1]) && !arr[2])
               {
                  petInfo = PetManager.showInfo;
                  if(petInfo)
                  {
                     petID = uint(petInfo.id);
                     gender = uint(PetXMLInfo.getPetGender(petID));
                     if(gender == 2)
                     {
                        NpcDialog.show(NPC.KAINU,["拜托……你是雌性的，我们是不可能在一起的，别来捣乱，哼！"],["真急人，再找找看有没有雄性精灵。"]);
                     }
                     else if(gender == 1)
                     {
                        if(petID == 454 || petID == 455)
                        {
                           if(_type == 0 || _type > 4)
                           {
                              _type = 1;
                           }
                           if(_type <= 3)
                           {
                              _petMC.mouseEnabled = false;
                              ann = _annArr[3];
                              _annArr[2].gotoAndStop(1);
                              ann.gotoAndStop(_type + 1);
                              ann.addEventListener(Event.ENTER_FRAME,function():void
                              {
                                 var mc:MovieClip = null;
                                 mc = ann.getChildAt(0) as MovieClip;
                                 if(mc)
                                 {
                                    ann.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                    mc.addEventListener(Event.ENTER_FRAME,function():void
                                    {
                                       if(mc.totalFrames == mc.currentFrame)
                                       {
                                          mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                          ann.gotoAndStop(1);
                                          _annArr[2].gotoAndStop(2);
                                          ++_type;
                                          _petMC.mouseEnabled = true;
                                          if(_type == 4)
                                          {
                                             TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   _petMC.mouseEnabled = false;
                                                }
                                             });
                                             _type = 0;
                                          }
                                       }
                                    });
                                 }
                              });
                           }
                        }
                        else
                        {
                           if(_type == 0 || _type <= 4)
                           {
                              _type = 5;
                           }
                           if(_type <= 7)
                           {
                              _petMC.mouseEnabled = false;
                              ann = _annArr[4];
                              _annArr[2].gotoAndStop(1);
                              ann.gotoAndStop(_type - 3);
                              ann.addEventListener(Event.ENTER_FRAME,function():void
                              {
                                 var mc:MovieClip = null;
                                 mc = ann.getChildAt(0) as MovieClip;
                                 if(mc)
                                 {
                                    ann.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                    mc.addEventListener(Event.ENTER_FRAME,function():void
                                    {
                                       if(mc.totalFrames == mc.currentFrame)
                                       {
                                          mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                                          ann.gotoAndStop(1);
                                          _annArr[2].gotoAndStop(2);
                                          ++_type;
                                          _petMC.mouseEnabled = true;
                                          if(_type == 8)
                                          {
                                             if(petID != 70)
                                             {
                                                NpcDialog.show(NPC.KAINU,["哎，很可惜，虽然你是雄性的精灵，但是你不是我要找的那一类，我们之间缺少了一种来电的感觉，对不起啦，不是你！"],["你到底喜欢什么样子的啊!"]);
                                             }
                                             else
                                             {
                                                NpcDialog.show(NPC.KAINU,["哇，是你吗，真的是你—我的王子雷伊吗？但是....我不能选择你，因为我一直视你为0xff0000偶像0xffffff......."],["呜....."]);
                                             }
                                             _type = 0;
                                          }
                                       }
                                    });
                                 }
                              });
                           }
                        }
                     }
                     else
                     {
                        NpcDialog.show(NPC.KAINU,["哼！我要找的是0xff0000雄性0xffffff精灵呀！"],["真急人，快看看有没有雄性精灵。"]);
                     }
                  }
                  else
                  {
                     NpcDialog.show(NPC.KAINU,["哎，究竟谁才是我的真名天子呢，我找寻了好久，真的连一个来电的感觉，怎么办？"],["快带上雄性精灵（雄性精灵要身边跟随哦）"]);
                  }
               }
            });
         }
         else if(TasksManager.getTaskStatus(TASK_ID) != TasksManager.COMPLETE)
         {
            if(!_hasPlayMC)
            {
               if(_loader)
               {
                  _loader.clear();
               }
               _loader = new MCLoader("resource/bounsMovie/task_522.swf",LevelManager.appLevel,1,"正在加载动画资源");
               _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSuccess);
               _loader.doLoad();
            }
         }
      }
      
      private static function onLoadSuccess(param1:MCLoadEvent) : void
      {
         var mc:MovieClip = null;
         var e:MCLoadEvent = param1;
         mc = (e.getContent() as MovieClip).getChildAt(0) as MovieClip;
         LevelManager.closeMouseEvent();
         LevelManager.appLevel.addChild(mc);
         mc.addEventListener(Event.ENTER_FRAME,function():void
         {
            if(mc.currentFrame == mc.totalFrames)
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               _hasPlayMC = true;
               _petMC.mouseEnabled = false;
               DisplayUtil.removeForParent(mc);
               LevelManager.openMouseEvent();
            }
         });
         mc.gotoAndPlay(1);
      }
      
      private static function handleTaskData() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  initFirstPro();
               }
               else if(!param1[1])
               {
                  initSecondPro();
               }
               else
               {
                  _annArr[2].gotoAndStop(2);
                  _petMC.mouseEnabled = true;
               }
            });
         }
      }
      
      private static function acceptTask() : void
      {
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  initFirstPro();
               }
            });
         }
      }
      
      private static function initFirstPro() : void
      {
         var ann:MovieClip = null;
         _petMC.mouseEnabled = false;
         ann = _annArr[0];
         _map.topLevel.addChild(ann);
         ann.addEventListener(Event.ENTER_FRAME,function():void
         {
            if(ann.currentFrame == ann.totalFrames)
            {
               ann.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               ann.gotoAndStop(1);
               _annArr[2].gotoAndStop(2);
               TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
               {
                  var b:Boolean = param1;
                  if(b)
                  {
                     NpcDialog.show(NPC.KAINU,["咦，小赛尔你也来啦！能帮我参谋一下吗？看看谁比较适合我！"],["哦，好的，我来帮你参谋一下吧!"],[function():void
                     {
                        initSecondPro();
                     }]);
                  }
               });
            }
         });
         ann.gotoAndPlay(2);
      }
      
      private static function initSecondPro() : void
      {
         var ann:MovieClip = null;
         _petMC.mouseEnabled = false;
         ann = _annArr[1];
         _annArr[2].gotoAndStop(1);
         ann.addEventListener(Event.ENTER_FRAME,function():void
         {
            if(ann.currentFrame == ann.totalFrames)
            {
               ann.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               ann.stop();
               NpcDialog.show(NPC.KAINU,["快看，五颜绿色的羽毛，硕大的翅膀，一定是乌力朴吧，你们觉得它适合我吗？"],["合适","不合适"],[function():void
               {
                  afterChoose1(true);
               },function():void
               {
                  afterChoose1(false);
               }]);
            }
         });
         ann.gotoAndPlay(2);
      }
      
      private static function afterChoose1(param1:Boolean) : void
      {
         if(param1)
         {
            NpcDialog.show(NPC.KAINU,[_wordArr[0][0]],[_wordArr[0][1]],[func1]);
         }
         else
         {
            NpcDialog.show(NPC.WULIPU,[_wordArr[1][0]],[_wordArr[1][1]],[func1]);
         }
      }
      
      private static function func1() : void
      {
         var ann:MovieClip = null;
         ann = _annArr[2];
         _annArr[1].gotoAndStop(1);
         _annArr[2].gotoAndStop(1);
         ann.addEventListener(Event.ENTER_FRAME,function():void
         {
            if(ann.currentFrame == ann.totalFrames)
            {
               ann.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               ann.stop();
               NpcDialog.show(NPC.KAINU,["快看，快看，小巧的身躯，乌黑亮丽的外形，小赛尔它适合我吗？"],["不错啊！","好像还缺了点什么？"],[function():void
               {
                  afterChoose2(true);
               },function():void
               {
                  afterChoose2(false);
               }]);
            }
         });
         ann.gotoAndPlay(2);
      }
      
      private static function afterChoose2(param1:Boolean) : void
      {
         if(param1)
         {
            NpcDialog.show(NPC.KAINU,[_wordArr1[0][0]],[_wordArr1[0][1]],[func2]);
         }
         else
         {
            NpcDialog.show(NPC.KAINU,[_wordArr1[1][0]],[_wordArr1[1][1]],[func2]);
         }
      }
      
      private static function func2() : void
      {
         _annArr[2].gotoAndStop(2);
         TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
         {
            if(param1)
            {
               _petMC.mouseEnabled = true;
            }
         });
      }
      
      public static function destroy() : void
      {
         clearResource();
         if(_loader)
         {
            _loader.clear();
            _loader = null;
         }
         _petMC = null;
         _annArr = null;
         _map = null;
      }
   }
}
