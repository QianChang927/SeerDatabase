package com.robot.app.mapProcess
{
   import com.robot.app.group.GroupFightWaitPanel;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_345 extends BaseMapProcess
   {
       
      
      private var _gpSpriteFtBtn:MovieClip;
      
      public function MapProcess_345()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._gpSpriteFtBtn = conLevel["gpSpriteFtBtn"];
         this._gpSpriteFtBtn.buttonMode = true;
         this._gpSpriteFtBtn.addEventListener(MouseEvent.CLICK,this.onGpSpriteFt);
         ToolTipManager.add(this._gpSpriteFtBtn,"组队精灵王");
      }
      
      override public function destroy() : void
      {
      }
      
      public function changeMapOne() : void
      {
         MapManager.changeMap(346);
      }
      
      public function changeMapTwo() : void
      {
         MapManager.changeMap(347);
      }
      
      private function onGpSpriteFt(param1:MouseEvent) : void
      {
         if(GroupManager.isInGroup && MainManager.actorInfo.groupInfo && MainManager.actorInfo.groupInfo.memberList.length > 1)
         {
            GroupFightWaitPanel.selectMode();
         }
         else
         {
            Alarm.show("你需要跟你的小队队友一起才能参加比赛哦！");
         }
      }
   }
}
