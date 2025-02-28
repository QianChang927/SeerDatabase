package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_1714 extends BaseMapProcess
   {
       
      
      private var curState:int = 0;
      
      public function MapProcess_1714()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
         conLevel["playMc"].visible = false;
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124338,124339],function(param1:Array):void
         {
            if(BitUtils.getBit(param1[0],11) > 0)
            {
               conLevel["boxBtn"].visible = false;
            }
            else
            {
               conLevel["boxBtn"].visible = true;
            }
         });
         SoundManager.stopSoundImmediately();
         if(this.curState == 0)
         {
            animatorLevel["mc"].gotoAndStop(1);
            SoundManager.playSoundById("BGM_841");
         }
         else
         {
            animatorLevel["mc"].gotoAndStop(2);
            SoundManager.playSoundById("BGM_841_1");
         }
      }
      
      private function onConclickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "boxBtn":
               DialogControl.showAllDilogs(172,13).then(function():void
               {
                  KTool.socketSendCallBack(41900,function():void
                  {
                     update();
                  },[103,12]);
               });
               break;
            case "changeBtn":
               StatManager.sendStat2014("1220场景美术","在地图1714中进行了交互切换展示模式","2024运营活动");
               if(this.curState == 0)
               {
                  conLevel["playMc"].visible = true;
                  AnimateManager.playMcAnimate(conLevel["playMc"],1,"mc1",function():void
                  {
                     conLevel["playMc"].visible = false;
                  },false,true);
                  this.curState = 1;
                  this.update();
               }
               else
               {
                  conLevel["playMc"].visible = true;
                  AnimateManager.playMcAnimate(conLevel["playMc"],2,"mc2",function():void
                  {
                     conLevel["playMc"].visible = false;
                  },false,true);
                  this.curState = 0;
                  this.update();
               }
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         super.destroy();
      }
   }
}
