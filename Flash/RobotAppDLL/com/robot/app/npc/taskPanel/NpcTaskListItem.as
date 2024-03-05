package com.robot.app.npc.taskPanel
{
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.effect.ColorFilter;
   
   public class NpcTaskListItem extends Sprite
   {
       
      
      private var _id:uint;
      
      private var _mc:MovieClip;
      
      public function NpcTaskListItem()
      {
         super();
         this._mc = UIManager.getMovieClip("ui_NpcTaskListItem");
         this.clear();
         addChild(this._mc);
         buttonMode = true;
         mouseChildren = false;
         addEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         addEventListener(MouseEvent.MOUSE_OUT,this.onOut);
         this.setSelected(false);
      }
      
      public function set id(param1:uint) : void
      {
         this._id = param1;
         this._mc["txt"].text = TasksXMLInfo.getName(this._id);
         this._mc["txt"].cacheAsBitmap = true;
         if(TasksManager.getTaskStatus(this._id) == TasksManager.UN_ACCEPT)
         {
            filters = [];
         }
         if(TasksManager.getTaskStatus(this._id) == TasksManager.ALR_ACCEPT)
         {
            filters = [ColorFilter.setHue(180),ColorFilter.setContrast(30)];
         }
         this._mc["hot"].visible = TasksXMLInfo.getIsHot(this._id);
      }
      
      public function get id() : uint
      {
         return this._id;
      }
      
      public function clear() : void
      {
         this._id = 0;
         this._mc["txt"].text = "";
         filters = [];
         this._mc["bg"].gotoAndStop(1);
      }
      
      public function setSelected(param1:Boolean) : void
      {
         this._mc["selected"].visible = param1;
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         this._mc["bg"].gotoAndStop(2);
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         this._mc["bg"].gotoAndStop(1);
      }
      
      public function destory() : void
      {
         this._mc = null;
         removeEventListener(MouseEvent.MOUSE_OVER,this.onOver);
         removeEventListener(MouseEvent.MOUSE_OUT,this.onOut);
      }
   }
}
