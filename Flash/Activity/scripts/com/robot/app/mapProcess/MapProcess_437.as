package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task534;
   import com.robot.app.task.taskscollection.Task573;
   import com.robot.app.task.taskscollection.Task605;
   import com.robot.app.task.taskscollection.Task609;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.MouseController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.DragManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_437 extends BaseMapProcess
   {
       
      
      private var task573Btn1:MovieClip;
      
      private var task573Btn2:MovieClip;
      
      private var task573Btn3:MovieClip;
      
      private var mouseMov:MovieClip;
      
      private var mouseDoor:MovieClip;
      
      private var doorTips:MovieClip;
      
      private var map443Door:MovieClip;
      
      private var dienMentisMov:MovieClip;
      
      private var _book:AppModel;
      
      private var _intro:AppModel;
      
      public function MapProcess_437()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolBarController.showOrHideAllUser(true);
         conLevel["bead"].visible = false;
         conLevel["eye_1"].visible = false;
         conLevel["eye_2"].visible = false;
         conLevel["eye_3"].visible = false;
         conLevel["light"].visible = false;
         conLevel["door_0"].visible = false;
         ToolTipManager.add(conLevel["stoneBook"],"石碑");
         conLevel["stoneBook"].addEventListener(MouseEvent.CLICK,this.onBookClick);
         ToolTipManager.add(conLevel["intro"],"石块");
         conLevel["intro"].addEventListener(MouseEvent.CLICK,this.onIntroClick);
         ToolTipManager.add(conLevel["stoneLion"],"石柱");
         conLevel["stoneLion"].buttonMode = true;
         conLevel["stoneLion"].mouseChildren = false;
         conLevel["stoneLion"].addEventListener(MouseEvent.CLICK,this.onLionClick);
         Task534.initTask_0();
         this.map443Door = conLevel["map443Door"];
         this.map443Door.visible = false;
         this.task573Btn1 = conLevel["task573Btn1"];
         this.task573Btn2 = conLevel["task573Btn2"];
         this.task573Btn3 = conLevel["task573Btn3"];
         this.mouseMov = conLevel["mouseMov"];
         this.doorTips = conLevel["doorTips"];
         this.doorTips.closeBtn.addEventListener(MouseEvent.CLICK,this.onMouseDoor);
         this.mouseDoor = conLevel["mouseDoor"];
         this.mouseDoor.buttonMode = true;
         this.mouseDoor.addEventListener(MouseEvent.CLICK,this.onMouseDoor);
         this.mouseDoor.light.gotoAndStop(1);
         this.mouseDoor.light.visible = false;
         this.dienMentisMov = conLevel["dienMentisMov"];
         Task609.initTask_437(this);
         Task605.initTask_437(this);
         this.task573Done();
         if(!Task573.isComlpete && Task573.isAccept)
         {
            ToolBarController.showOrHideAllUser(false);
         }
         if(!Task573.isComlpete)
         {
            if(Task573.isAccept)
            {
               TasksManager.getProStatusList(573,this.callback);
            }
         }
      }
      
      private function onMouseDoor(param1:MouseEvent) : void
      {
         conLevel.parent.addChild(this.doorTips);
         this.doorTips.visible = !this.doorTips.visible;
      }
      
      private function callback(param1:Array) : void
      {
         if(param1[0] == false)
         {
            this.startTask573();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            this.start573Step2();
         }
      }
      
      private function startTask573() : void
      {
         ToolTipManager.add(this.mouseDoor,"石门");
         this.mouseDoor.light.visible = true;
         this.mouseDoor.light.gotoAndPlay(2);
         this.mouseDoor.visible = true;
         this.map443Door.visible = true;
         this.dienMentisMov.visible = false;
         this.task573Btn1.visible = true;
         this.task573Btn1.buttonMode = true;
         this.task573Btn1.mouseEnabled = true;
         this.task573Btn1.addEventListener(MouseEvent.CLICK,this.onTask573BtnClick);
         this.task573Btn2.visible = true;
         this.task573Btn2.buttonMode = true;
         this.task573Btn2.mouseEnabled = true;
         this.task573Btn2.addEventListener(MouseEvent.CLICK,this.onTask573BtnClick);
         this.task573Btn3.visible = true;
         this.task573Btn3.buttonMode = true;
         this.task573Btn3.mouseEnabled = true;
         this.task573Btn3.addEventListener(MouseEvent.CLICK,this.onTask573BtnClick);
      }
      
      private function task573Done() : void
      {
         this.doorTips.visible = false;
         this.mouseDoor.visible = false;
         this.dienMentisMov.visible = false;
         this.task573Btn1.visible = false;
         this.task573Btn2.visible = false;
         this.task573Btn3.visible = false;
         this.mouseMov.visible = false;
      }
      
      private function onTask573BtnClick(param1:MouseEvent) : void
      {
         switch(param1.currentTarget)
         {
            case this.task573Btn1:
               this.task573Btn1.gotoAndStop(2);
               this.task573Btn1.buttonMode = false;
               this.task573Btn1.mouseEnabled = false;
               this.task573Btn1.removeEventListener(MouseEvent.CLICK,this.onTask573BtnClick);
               break;
            case this.task573Btn2:
               this.task573Btn2.gotoAndStop(2);
               this.task573Btn2.buttonMode = false;
               this.task573Btn2.mouseEnabled = false;
               this.task573Btn2.removeEventListener(MouseEvent.CLICK,this.onTask573BtnClick);
               break;
            case this.task573Btn3:
               this.task573Btn3.gotoAndStop(2);
               this.task573Btn3.buttonMode = false;
               this.task573Btn3.mouseEnabled = false;
               this.task573Btn3.removeEventListener(MouseEvent.CLICK,this.onTask573BtnClick);
         }
         if(this.task573Btn1.buttonMode == false && this.task573Btn2.buttonMode == false && this.task573Btn3.buttonMode == false)
         {
            this.mouseDoor.light.gotoAndStop(1);
            this.mouseDoor.light.visible = false;
            this.mouseDoor.m.addEventListener(Event.ENTER_FRAME,this.mouseDoorMov);
            this.mouseDoor.m.gotoAndPlay(2);
         }
      }
      
      private function mouseDoorMov(param1:Event) : void
      {
         if(this.mouseDoor.m.currentFrame == this.mouseDoor.m.totalFrames - 26)
         {
            this.mouseDoor.m.removeEventListener(Event.ENTER_FRAME,this.mouseDoorMov);
            this.mouseMov.addEventListener(Event.ENTER_FRAME,this.onMouseMov);
            this.mouseMov.gotoAndPlay(2);
            this.mouseMov.visible = true;
         }
      }
      
      private function onMouseMov(param1:Event) : void
      {
         if(this.mouseMov.currentFrame == this.mouseMov.totalFrames - 5)
         {
            this.mouseDoor.removeEventListener(Event.ENTER_FRAME,this.onMouseMov);
            this.mouseMov.gotoAndStop(1);
            this.map443Door.addEventListener(Event.ENTER_FRAME,this.onDoorOpen);
            this.map443Door.gotoAndPlay(2);
            this.task573Btn1.gotoAndStop(1);
            this.task573Btn2.gotoAndStop(1);
            this.task573Btn3.gotoAndStop(1);
         }
      }
      
      private function onDoorOpen(param1:Event) : void
      {
         var e:Event = param1;
         if(this.map443Door.currentFrame == this.map443Door.totalFrames)
         {
            this.map443Door.removeEventListener(Event.ENTER_FRAME,this.onDoorOpen);
            this.map443Door.addEventListener(MouseEvent.CLICK,this.onMap443DoorClick);
            ToolTipManager.add(this.map443Door,"前往极冻边缘");
            this.map443Door.buttonMode = true;
            TasksManager.complete(573,0,function(param1:Boolean):void
            {
               if(param1)
               {
                  DebugTrace.show("提交任务573步骤1成功与否：" + param1);
               }
            });
         }
      }
      
      private function onMap443DoorClick(param1:MouseEvent) : void
      {
         if(Task573.isComlpete)
         {
            NpcDialog.show(NPC.SEER,["糟糕！里面已经充满了黑色瘴气！我们不能随便靠近！"],null);
         }
         else
         {
            MapManager.changeMap(443);
         }
      }
      
      private function start573Step2() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task573_5"),this.movEnd123);
      }
      
      private function movEnd123() : void
      {
         SimpleAlarm.show("瘴气侵蚀必须离开!",true);
         this.dienMentisMov.visible = true;
         MouseController.removeMouseEvent();
         NpcDialog.show(NPC.SEER,["可恶！可恶！我竟然什么都做不了！我到底该怎么办？"],null,null,false,this.dialog1);
      }
      
      private function dialog1() : void
      {
         NpcDialog.show(NPC.DIEN,["雷伊会回来的……它一定会带着神兵利器回归！"],null,null,false,this.dialog2);
      }
      
      private function dialog2() : void
      {
         this.dienMentisMov.addEventListener(Event.ENTER_FRAME,this.playE);
         this.dienMentisMov.gotoAndPlay(2);
      }
      
      private function playE(param1:Event) : void
      {
         if(this.dienMentisMov.currentFrame == this.dienMentisMov.totalFrames)
         {
            this.dienMentisMov.removeEventListener(Event.ENTER_FRAME,this.playE);
            this.dienMentisMov.visible = false;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task573_end"),this.movEnd);
         }
      }
      
      private function movEnd() : void
      {
         MouseController.removeMouseEvent();
         NpcDialog.show(NPC.SEER,["卡酷动漫春晚！对！对！雷伊一定是去参加春晚帮我们拿神兵利器了！先去向爱丽丝汇报情况吧！"],["返回资料室"],[this.goMap9]);
      }
      
      private function goMap9() : void
      {
         MouseController.addMouseEvent();
         Task573.isDone = true;
         TasksManager.complete(573,1,function(param1:Boolean):void
         {
            if(param1)
            {
               DebugTrace.show("提交任务573步骤2成功与否：" + param1);
            }
            MapManager.changeMap(9);
         });
      }
      
      public function removeTask573() : void
      {
         MouseController.addMouseEvent();
         ToolBarController.showOrHideAllUser(true);
         ToolTipManager.remove(this.map443Door);
         ToolTipManager.remove(this.mouseDoor);
         this.doorTips.visible = false;
         this.map443Door.removeEventListener(MouseEvent.CLICK,this.onMap443DoorClick);
      }
      
      public function onDoorClick() : void
      {
         conLevel["light"].visible = true;
         AnimateManager.playMcAnimate(conLevel["light"],0,"",function():void
         {
            conLevel["light"].visible = false;
            NpcDialog.show(NPC.SEER,["啊……好刺眼！这里到底藏着什么？为什么不能进入？"],["再找找其它入口吧！"]);
         });
      }
      
      public function onBookClick(param1:MouseEvent) : void
      {
         if(!this._book)
         {
            this._book = new AppModel(ClientConfig.getAppModule("StoneBook_534"),"正在加载面板");
            this._book.setup();
         }
         this._book.show();
      }
      
      public function onIntroClick(param1:MouseEvent) : void
      {
         if(!this._intro)
         {
            this._intro = new AppModel(ClientConfig.getAppModule("StoneCityIntro_534"),"正在加载面板");
            this._intro.setup();
         }
         this._intro.show();
      }
      
      private function onLionClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         conLevel["stoneLion"].gotoAndStop(conLevel["stoneLion"].currentFrame + 1);
         if(conLevel["stoneLion"].currentFrame == 4)
         {
            ToolTipManager.remove(conLevel["stoneLion"]);
            conLevel["stoneLion"].buttonMode = false;
            conLevel["stoneLion"].removeEventListener(MouseEvent.CLICK,this.onLionClick);
            AnimateManager.playMcAnimate(conLevel["stoneLion"],5,"mc",function():void
            {
               conLevel["stoneLion"].gotoAndStop(4);
               conLevel["bead"].visible = true;
               ToolTipManager.add(conLevel["bead"],"宝珠");
               conLevel["bead"].buttonMode = true;
               conLevel["bead"].addEventListener(MouseEvent.MOUSE_UP,onBeadUp);
               DragManager.add(conLevel["bead"],conLevel["bead"]);
            });
         }
      }
      
      private function onBeadUp(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(conLevel["bead"].x > 360 && conLevel["bead"].x < 500 && conLevel["bead"].y > 320 && conLevel["bead"].y < 406)
         {
            conLevel["bead"].visible = false;
            ToolTipManager.remove(conLevel["bead"]);
            conLevel["bead"].removeEventListener(MouseEvent.MOUSE_UP,this.onBeadUp);
            DragManager.remove(conLevel["bead"]);
            AnimateManager.playMcAnimate(animatorLevel["ground"],2,"mc_1",function():void
            {
               var _loc2_:int = 0;
               var _loc1_:Array = [];
               do
               {
                  _loc2_ = Math.floor(Math.random() * 3 + 1);
                  if(_loc1_.indexOf(_loc2_) == -1)
                  {
                     _loc1_.push(_loc2_);
                  }
               }
               while(_loc1_.length != 3);
               
               conLevel["eye_1"].visible = true;
               conLevel["eye_1"].gotoAndStop(_loc1_[0]);
               ToolTipManager.add(conLevel["eye_1"],"六芒阵");
               conLevel["eye_1"].buttonMode = true;
               conLevel["eye_1"].mouseChildren = false;
               conLevel["eye_1"].addEventListener(MouseEvent.CLICK,onEyeClick);
               conLevel["eye_2"].visible = true;
               conLevel["eye_2"].gotoAndStop(_loc1_[1]);
               ToolTipManager.add(conLevel["eye_2"],"六芒阵");
               conLevel["eye_2"].buttonMode = true;
               conLevel["eye_2"].mouseChildren = false;
               conLevel["eye_2"].addEventListener(MouseEvent.CLICK,onEyeClick);
               conLevel["eye_3"].visible = true;
               conLevel["eye_3"].gotoAndStop(_loc1_[2]);
               ToolTipManager.add(conLevel["eye_3"],"六芒阵");
               conLevel["eye_3"].buttonMode = true;
               conLevel["eye_3"].mouseChildren = false;
               conLevel["eye_3"].addEventListener(MouseEvent.CLICK,onEyeClick);
            });
         }
      }
      
      private function onEyeClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var mc:MovieClip = e.target as MovieClip;
         if(mc.currentFrame == 3)
         {
            mc.gotoAndStop(1);
         }
         else
         {
            mc.gotoAndStop(mc.currentFrame + 1);
         }
         if(conLevel["eye_1"].currentFrame == conLevel["eye_2"].currentFrame && conLevel["eye_2"].currentFrame == conLevel["eye_3"].currentFrame)
         {
            ToolTipManager.remove(conLevel["eye_1"]);
            conLevel["eye_3"].buttonMode = false;
            conLevel["eye_1"].removeEventListener(MouseEvent.CLICK,this.onEyeClick);
            ToolTipManager.remove(conLevel["eye_2"]);
            conLevel["eye_3"].buttonMode = false;
            conLevel["eye_2"].removeEventListener(MouseEvent.CLICK,this.onEyeClick);
            ToolTipManager.remove(conLevel["eye_3"]);
            conLevel["eye_3"].buttonMode = false;
            conLevel["eye_3"].removeEventListener(MouseEvent.CLICK,this.onEyeClick);
            AnimateManager.playMcAnimate(animatorLevel["ground"],3,"mc_2",function():void
            {
               AnimateManager.playMcAnimate(conLevel["tree"],0,"",function():void
               {
                  Task534.complete_0();
                  conLevel["door_0"].visible = true;
               });
            });
         }
      }
      
      override public function destroy() : void
      {
         Task609.destroy();
         Task605.destroy();
         this.removeTask573();
         Task534.destory();
         ToolTipManager.remove(conLevel["stoneBook"]);
         conLevel["stoneBook"].removeEventListener(MouseEvent.CLICK,this.onBookClick);
         ToolTipManager.remove(conLevel["intro"]);
         conLevel["intro"].removeEventListener(MouseEvent.CLICK,this.onIntroClick);
         ToolTipManager.remove(conLevel["stoneLion"]);
         conLevel["stoneLion"].removeEventListener(MouseEvent.CLICK,this.onLionClick);
         ToolTipManager.remove(conLevel["bead"]);
         conLevel["bead"].removeEventListener(MouseEvent.MOUSE_UP,this.onBeadUp);
         DragManager.remove(conLevel["bead"]);
         ToolTipManager.remove(conLevel["eye_1"]);
         conLevel["eye_1"].removeEventListener(MouseEvent.CLICK,this.onEyeClick);
         ToolTipManager.remove(conLevel["eye_2"]);
         conLevel["eye_2"].removeEventListener(MouseEvent.CLICK,this.onEyeClick);
         ToolTipManager.remove(conLevel["eye_3"]);
         conLevel["eye_3"].removeEventListener(MouseEvent.CLICK,this.onEyeClick);
      }
   }
}
