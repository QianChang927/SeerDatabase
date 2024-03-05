package com.robot.core.teamInstallation
{
   import com.robot.core.info.team.ITeamLogoInfo;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class TeamLogo extends Sprite
   {
       
      
      private var sprite:Sprite;
      
      public var teamID:uint;
      
      private var _info:ITeamLogoInfo;
      
      public function TeamLogo()
      {
         super();
         this.sprite = new Sprite();
         this.sprite.mouseChildren = false;
         this.sprite.graphics.beginFill(0,0);
         this.sprite.graphics.drawRect(0,0,72,72);
         addChild(this.sprite);
      }
      
      public function set info(param1:ITeamLogoInfo) : void
      {
         var _loc3_:MovieClip = null;
         this.teamID = param1.teamID;
         this._info = param1;
         DisplayUtil.removeAllChild(this.sprite);
         var _loc2_:String = param1.logoWord;
         if(param1.logoBg != 10000)
         {
            _loc3_ = UIManager.getMovieClip("teamIcon_bg_" + param1.logoBg);
            this.alignIcon(_loc3_);
            this.sprite.addChild(_loc3_);
         }
         var _loc4_:MovieClip;
         var _loc5_:MovieClip = (_loc4_ = UIManager.getMovieClip("teamIcon_" + param1.logoIcon))["colorMC"];
         DisplayUtil.FillColor(_loc5_,param1.logoColor);
         var _loc7_:TextField;
         var _loc6_:MovieClip;
         (_loc7_ = (_loc6_ = new txtMC())["txt"]).textColor = param1.txtColor;
         _loc7_.text = _loc2_;
         _loc7_.selectable = false;
         _loc4_.addChild(_loc6_);
         DisplayUtil.align(_loc6_,_loc5_.getRect(_loc4_),AlignType.MIDDLE_CENTER);
         if(_loc3_)
         {
            _loc3_.addChild(_loc4_);
         }
         else
         {
            this.alignIcon(_loc4_);
            this.sprite.addChild(_loc4_);
         }
      }
      
      private function alignIcon(param1:DisplayObject) : void
      {
         var _loc2_:Rectangle = param1.getRect(param1);
         param1.x = (this.sprite.width - param1.width) / 2 - _loc2_.x;
         param1.y = (this.sprite.height - param1.height) / 2 - _loc2_.y;
      }
      
      public function destroy() : void
      {
         this.sprite = null;
      }
      
      public function clone() : TeamLogo
      {
         var _loc1_:TeamLogo = new TeamLogo();
         _loc1_.info = this._info;
         return _loc1_;
      }
   }
}
