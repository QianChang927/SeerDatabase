package com.robot.app2.mapProcess
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   
   public class MapProcess_11584 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11584()
      {
         super();
      }
      
      override protected function init() : void
      {
         var playAnimate:PlayAnimationComponent = null;
         var playAnimate1:PlayAnimationComponent = null;
         var playAnimate2:PlayAnimationComponent = null;
         super.init();
         if(StaticObjectControll.containKey("HunDunBuLaiKePreMainKey"))
         {
            this._index = StaticObjectControll.getObjectByKey("HunDunBuLaiKePreMainKey");
         }
         if(this._index == 1)
         {
            playAnimate = new PlayAnimationComponent("HunDunBuLaiKePreMainMapMv",function():void
            {
               StatManager.sendStat2014("1215魔灵家族的恩怨","完成大祭司的预言","2017运营活动");
               SocketConnection.sendByQueue(43750,[1,_index],function():void
               {
                  ModuleManager.showAppModule("HunDunBuLaiKePreMainPanel");
               });
               playAnimate.destroy();
            },1);
         }
         else if(this._index == 2)
         {
            playAnimate1 = new PlayAnimationComponent("HunDunBuLaiKePreMainMapMv",function():void
            {
               playAnimate1.destroy();
               TaskDiaLogManager.single.playStory(dialogArr,function():void
               {
                  StatManager.sendStat2014("1215魔灵家族的恩怨","完成布莱克的决心","2017运营活动");
                  SocketConnection.sendByQueue(43750,[1,_index],function():void
                  {
                     ModuleManager.showAppModule("HunDunBuLaiKePreMainPanel");
                  });
               });
            },2);
         }
         else if(this._index == 3)
         {
            playAnimate2 = new PlayAnimationComponent("HunDunBuLaiKePreMainMapMv",function():void
            {
               playAnimate2.destroy();
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("HunDunBuLaiKePreMainFullMv"),function():void
               {
                  StatManager.sendStat2014("1215魔灵家族的恩怨","完成终将需要面对","2017运营活动");
                  SocketConnection.sendByQueue(43750,[1,_index],function():void
                  {
                     ModuleManager.showAppModule("HunDunBuLaiKePreMainPanel");
                  });
               });
            },3);
         }
      }
      
      private function get dialogArr() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2608,["大祭司，为何突然召唤我。魔灵王再度现身，我正准备去阻止他！"],["……"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1114,["此行万万不可！"],["尊敬的祭司大人，为什么这样说呢？"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2606,["纵使魔灵王再强，我相信我的主人能够战胜他，而且我也一定竭尽全力。"],["这次不一样！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1114,["我通过占卜得知，魔灵王邪法剧增，此战必定凶险万分。而且…还有一个十分糟糕的消息….."],["……"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1114,["嗯….我不确定….啊…可能是我预言错了"],["到底是什么？"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1114,["预言中，黑色的眼睛没有迎接到黎明新生。布莱克….好像被….魔灵王控制了，还有一团黑气…..逝者巨樽的能量……"],["啊？！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2606,["怎么会这样！逝者巨樽…亡者之能！"],["……"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2608,["大祭司的预言向来准确，可能此战真的是凶多吉少！不过我族出现这样的叛徒，我怎么可以置之不理！"],["……"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2608,["我们家族给宇宙带来的祸乱，就让我去了结吧！我是光明守护者，我相信我内心的信仰，更相信我的伙伴们！"],["可是…"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,1114,["若一去不回？"],["……"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,2608,["那便一去不回！"],["……"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_];
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
