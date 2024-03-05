package com.robot.app.task.tc
{
   import com.robot.app.task.control.TasksController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.task.novice.NoviceFinishInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class TaskClass_509
   {
       
      
      private var _task509uiPanel:MCLoader;
      
      private var _task509uiPanelmc:MovieClip;
      
      private var _mc_closeBtn:SimpleButton;
      
      public function TaskClass_509(param1:NoviceFinishInfo)
      {
         var info:NoviceFinishInfo = param1;
         super();
         NpcDialog.show(NPC.SHIPER,["就差你这里的侦查资料了！看来这次海盗是有备而来！"],["船长！我还看到了盖亚……"],[function():void
         {
            _task509uiPanel = new MCLoader(ClientConfig.getResPath("module/task509uiPanel.swf"),null);
            _task509uiPanel.addEventListener(MCLoadEvent.SUCCESS,onSuccessHandler);
            _task509uiPanel.doLoad(ClientConfig.getResPath("module/task509uiPanel.swf"));
         }]);
      }
      
      private function onSuccessHandler(param1:MCLoadEvent) : void
      {
         this._task509uiPanel.removeEventListener(MCLoadEvent.SUCCESS,this.onSuccessHandler);
         this._task509uiPanelmc = this._task509uiPanel.loader.content as MovieClip;
         LevelManager.appLevel.addChild(this._task509uiPanelmc);
         this._mc_closeBtn = this._task509uiPanelmc["mainMC"]["closeBtn"];
         this._mc_closeBtn.addEventListener(MouseEvent.CLICK,this.closeUIHandler);
      }
      
      private function closeUIHandler(param1:Event) : void
      {
         var e:Event = param1;
         this._mc_closeBtn.removeEventListener(MouseEvent.CLICK,this.closeUIHandler);
         DisplayUtil.removeForParent(this._task509uiPanelmc);
         this._task509uiPanel.clear();
         NpcDialog.show(NPC.SEER,["那巨大的飞船到底是谁在掌控？哦对了！船长！我前面看到被困的盖亚！它……它似乎很痛苦的样子……"],["我们究竟该怎么办！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["看来海盗一定在盖亚身上动了手脚！你先退下吧！我研究一下战略部署！等有眉目了我们再召开赛尔号军事会议。"],["遵命长官！"],[function():void
            {
               Alarm.show("<font color=\'#ff0000\'>2000积累经验</font>已经存入你的经验分配器中。",function():void
               {
                  ItemInBagAlert.show(500831,"恭喜你获得了<font color=\'#ff0000\'>军事地图</font>基地家具。",function():void
                  {
                     TasksController.taskCompleteUI();
                  });
               });
            }]);
         }]);
      }
   }
}
